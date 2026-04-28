import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(request: Request) {
  const { userId: clerkUserId } = await auth()
  if (!clerkUserId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({ where: { clerkUserId } })
  if (!user || user.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const payload = await request.json()
  const title = typeof payload.title === 'string' ? payload.title.trim() : ''
  const body  = typeof payload.body  === 'string' ? payload.body         : null

  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }
  if (body === null) {
    return NextResponse.json({ error: 'Body is required' }, { status: 400 })
  }

  const template = await prisma.driftTemplate.update({
    where: { name: 'how_to_drift' },
    data:  { title, body },
  })

  return NextResponse.json({ template })
}
