import { auth } from '@clerk/nextjs/server'
import { initUser } from '@/lib/initUser'
import ClientPage from './_client'

/**
 * Server component entry point.
 * Runs initUser() before the client renders — ensures a DB User row and
 * system drifts exist for every signed-in visitor, exactly once.
 */
export default async function Page() {
  const { userId } = await auth()

  if (userId) {
    try {
      await initUser(userId)
    } catch (error) {
      console.error('DRIFTARAMA_INIT_USER_ERROR', error)
      throw error
    }
  }

  return <ClientPage />
}
