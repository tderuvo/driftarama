import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

export default async function AdminPage() {
  const { userId: clerkUserId } = await auth()

  if (!clerkUserId) {
    return <AccessDenied />
  }

  const user = await prisma.user.findUnique({ where: { clerkUserId } })

  if (!user || user.role !== 'admin') {
    return <AccessDenied />
  }

  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#1C1C19]">
      <div className="max-w-3xl mx-auto px-8 pt-20 pb-32">

        <p className="text-xs font-semibold uppercase tracking-widest text-[#A8A49C] mb-6">
          Admin
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-[#1C1C19] mb-3">
          Driftarama Admin
        </h1>
        <p className="text-lg text-[#6B6860] mb-16">
          Internal tools for managing Driftarama.
        </p>

        <div className="border border-[#E8E5DC] rounded-2xl p-8 bg-white">
          <p className="text-sm font-semibold text-[#A8A49C] uppercase tracking-widest mb-2">
            Coming next
          </p>
          <p className="text-base text-[#3A3830]">
            How to Drift template editor.
          </p>
        </div>

      </div>
    </main>
  )
}

function AccessDenied() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] flex items-center justify-center">
      <p className="text-[#8A8880] text-sm">Admin access required.</p>
    </main>
  )
}
