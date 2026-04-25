import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const { userId: clerkUserId } = await auth()

  if (!clerkUserId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({ where: { clerkUserId } })
  if (!user) {
    return NextResponse.json({ drifts: [] })
  }

  const openDrift = await prisma.drift.findFirst({
    where: {
      userId:    user.id,
      driftRole: 'system',
      title:     'Open',
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
