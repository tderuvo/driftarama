import { Prisma } from '@prisma/client'
import { prisma } from '@/lib/prisma'

/**
 * Ensures a User row exists for the given Clerk user.
 * On first call: creates the user, 3 system drifts, and a starter drift.
 * On subsequent calls: returns the existing user immediately.
 */
export async function initUser(clerkUserId: string, email?: string | null) {
  // Fast-path: user already exists
  let existing
  try {
    existing = await prisma.user.findUnique({ where: { clerkUserId } })
  } catch (error) {
    console.error('DRIFTARAMA_PRISMA_LOOKUP_ERROR', error)
    throw error
  }

  if (existing) {
    // Admin-only: backfill the Universe system drift if the user was promoted
    // to admin after their account was already created.
    if (existing.role === 'admin') {
      const hasUniverse = await prisma.drift.findFirst({
        where: { userId: existing.id, driftRole: 'system', title: 'The Universe', deletedAt: null },
      })
      if (!hasUniverse) {
        await prisma.drift.create({
          data: { userId: existing.id, title: 'The Universe', driftRole: 'system' },
        })
      }
    }
    return existing
  }

  // Fetch the How to Drift template; fall back to safe defaults if missing
  const template = await prisma.driftTemplate.findUnique({ where: { name: 'how_to_drift' } })
  const starterTitle = template?.title ?? 'How to Drift'
  const starterBody  = template?.body  ?? 'Welcome to Driftarama.'

  // First login — create everything in a transaction so it's all-or-nothing
  try {
    return await prisma.$transaction(async (tx) => {
      // 1. Create the user
      const user = await tx.user.create({
        data: {
          clerkUserId,
          email: email ?? null,
        },
      })

      // 2. Create system drifts (Open, Done, Drifting In)
      const openDrift = await tx.drift.create({
        data: {
          userId:    user.id,
          title:     'Open',
          driftRole: 'system',
        },
      })

      const systemDrifts: Prisma.DriftCreateManyInput[] = [
        { userId: user.id, title: 'Done',        driftRole: 'system' },
        { userId: user.id, title: 'Drifting In', driftRole: 'system' },
      ]
      // Admin-only system drift — only created for admin users
      if (user.role === 'admin') {
        systemDrifts.push({ userId: user.id, title: 'The Universe', driftRole: 'system' })
      }
      await tx.drift.createMany({ data: systemDrifts })

      // 3. Starter drift under Open — content driven by DriftTemplate
      await tx.drift.create({
        data: {
          userId:    user.id,
          parentId:  openDrift.id,
          title:     starterTitle,
          body:      starterBody,
          driftRole: 'normal',
          highlight: 'none',
          sortOrder: 0,
        },
      })

      return user
    })
  } catch (error) {
    console.error('DRIFTARAMA_PRISMA_CREATE_ERROR', error)
    throw error
  }
}
