import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error('DATABASE_URL is not set')

const adapter = new PrismaNeon({ connectionString })
const prisma  = new PrismaClient({ adapter })

async function main() {
  await prisma.driftTemplate.upsert({
    where:  { name: 'how_to_drift' },
    update: {},
    create: {
      name:  'how_to_drift',
      title: 'How to Drift',
      body:  'Welcome to Driftarama.\n\nUse this space to capture what you need to handle.\n\n• Add drifts\n• Break them into sub-drifts\n• Highlight what\'s in progress\n\nNothing slips.',
    },
  })
  console.log('Seeded: how_to_drift template')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
