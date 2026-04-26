import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const { userId: clerkUserId } = await auth()

  if (!clerkUserId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const view = new URL(request.url).searchParams.get('view')
  const systemTitle = view === 'done' ? 'Done' : 'Open'

  const user = await prisma.user.findUnique({ where: { clerkUserId } })
  if (!user) {
    return NextResponse.json({ drifts: [] })
  }

  const openDrift = await prisma.drift.findFirst({
    where: {
      userId:    user.id,
      driftRole: 'system',
      title:     systemTitle,
      deletedAt: null,
    },
  })

  if (!openDrift) {
    return NextResponse.json({ drifts: [] })
  }

  const drifts = await prisma.drift.findMany({
    where: {
      userId:    user.id,
      parentId:  openDrift.id,
      deletedAt: null,
    },
    orderBy: [
      { sortOrder: 'asc' },
      { createdAt: 'asc' },
    ],
    include: {
      children: {
        where:   { deletedAt: null },
        orderBy: [
          { sortOrder: 'asc' },
          { createdAt: 'asc' },
        ],
      },
    },
  })

  return NextResponse.json({ drifts })
}

export async function POST(request: Request) {
  const { userId: clerkUserId } = await auth()
  if (!clerkUserId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const title    = typeof body.title    === 'string' ? body.title.trim()    : ''
  const parentId = typeof body.parentId === 'string' ? body.parentId.trim() : null

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { clerkUserId } })
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  // Determine the parent: explicit parentId (sub-drift) or the Open system drift (top-level)
  let resolvedParentId: string

  if (parentId) {
    const parent = await prisma.drift.findFirst({
      where: { id: parentId, userId: user.id, deletedAt: null },
    })
    if (!parent) {
      return NextResponse.json({ error: 'Parent drift not found' }, { status: 404 })
    }
    resolvedParentId = parentId
  } else {
    const openDrift = await prisma.drift.findFirst({
      where: { userId: user.id, driftRole: 'system', title: 'Open', deletedAt: null },
    })
    if (!openDrift) {
      return NextResponse.json({ error: 'Open drift not found' }, { status: 404 })
    }
    resolvedParentId = openDrift.id
  }

  const maxOrder = await prisma.drift.aggregate({
    where: { userId: user.id, parentId: resolvedParentId, deletedAt: null },
    _max: { sortOrder: true },
  })
  const sortOrder = (maxOrder._max.sortOrder ?? -1) + 1

  const drift = await prisma.drift.create({
    data: {
      userId:    user.id,
      parentId:  resolvedParentId,
      title,
      driftRole: 'normal',
      highlight: 'none',
      sortOrder,
    },
  })

  return NextResponse.json({ drift }, { status: 201 })
}
