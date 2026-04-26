import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { Highlight } from '@prisma/client'
import { prisma } from '@/lib/prisma'

const VALID_HIGHLIGHTS = Object.values(Highlight)

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkUserId } = await auth()
  if (!clerkUserId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const user = await prisma.user.findUnique({ where: { clerkUserId } })
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  // Verify drift belongs to this user
  const existing = await prisma.drift.findFirst({
    where: { id, userId: user.id, deletedAt: null },
  })
  if (!existing) {
    return NextResponse.json({ error: 'Drift not found' }, { status: 404 })
  }

  const payload = await request.json()
  const updates: { title?: string; body?: string | null; highlight?: Highlight; parentId?: string } = {}

  if (typeof payload.title === 'string' && payload.title.trim()) {
    updates.title = payload.title.trim()
  }
  if (typeof payload.body === 'string') {
    updates.body = payload.body || null
  }
  if (typeof payload.highlight === 'string' && VALID_HIGHLIGHTS.includes(payload.highlight as Highlight)) {
    updates.highlight = payload.highlight as Highlight
  }
  if (payload.moveTo === 'done' || payload.moveTo === 'open') {
    if (existing.driftRole === 'system') {
      return NextResponse.json({ error: 'Cannot move system drifts' }, { status: 400 })
    }
    const targetTitle = payload.moveTo === 'done' ? 'Done' : 'Open'
    const target = await prisma.drift.findFirst({
      where: { userId: user.id, driftRole: 'system', title: targetTitle, deletedAt: null },
    })
    if (!target) {
      return NextResponse.json({ error: `${targetTitle} system drift not found` }, { status: 404 })
    }
    updates.parentId = target.id
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ drift: existing })
  }

  const updated = await prisma.drift.update({
    where: { id },
    data: updates,
  })

  return NextResponse.json({ drift: updated })
}
