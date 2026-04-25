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
    await initUser(userId)
  }

  return <ClientPage />
}
