import 'dotenv/config'
import prisma from '../src/lib/prisma'

async function main() {
  const company = await prisma.company.create({ data: { name: 'Mega Builders LLC' } })
  console.log('Created company:', company)
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect())
