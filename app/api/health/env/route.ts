import { NextResponse } from 'next/server'

export async function GET() {
  const dbUrl = process.env.DATABASE_URL ?? ''
  return NextResponse.json({
    hasDatabaseUrl:       dbUrl.length > 0,
    databaseUrlHasPooler: dbUrl.includes('pooler'),
    hasClerkSecret:       (process.env.CLERK_SECRET_KEY ?? '').length > 0,
    hasClerkPublishable:  (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '').length > 0,
  })
}
