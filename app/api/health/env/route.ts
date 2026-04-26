import { NextResponse } from 'next/server'

export async function GET() {
  const raw = process.env.DATABASE_URL ?? ''

  let parsedUrl: URL | null = null
  let parseError: string | null = null
  try {
    if (raw) parsedUrl = new URL(raw)
  } catch (e) {
    parseError = (e as Error).message
  }

  return NextResponse.json({
    // Presence checks
    hasDatabaseUrl:       raw.length > 0,
    hasClerkSecret:       (process.env.CLERK_SECRET_KEY ?? '').length > 0,
    hasClerkPublishable:  (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '').length > 0,

    // URL structure — no password exposed
    databaseUrl: parsedUrl ? {
      valid:            true,
      protocol:         parsedUrl.protocol,
      host:             parsedUrl.host,
      pathname:         parsedUrl.pathname,
      username:         parsedUrl.username,          // safe — not the password
      hasPassword:      parsedUrl.password.length > 0,
      hasPooler:        parsedUrl.host.includes('pooler'),
      hasSSL:           parsedUrl.searchParams.get('sslmode') === 'require',
      hasChannelBinding: parsedUrl.searchParams.has('channel_binding'),
      rawLength:        raw.length,
    } : {
      valid:      false,
      parseError: parseError ?? 'empty',
      rawLength:  raw.length,
    },
  })
}
