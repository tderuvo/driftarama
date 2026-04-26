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

  if (existing) return existing

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

      await tx.drift.createMany({
        data: [
          { userId: user.id, title: 'Done',        driftRole: 'system' },
          { userId: user.id, title: 'Drifting In', driftRole: 'system' },
        ],
      })

      // 3. Starter drift under Open
      await tx.drift.create({
        data: {
          userId:    user.id,
          parentId:  openDrift.id,
          title:     'How to Drift',
          body:      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Use this space to understand how Driftarama works, or delete this drift and start fresh.',
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
