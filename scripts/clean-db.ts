import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const playgrounds = await prisma.playground.findMany()
  const users = await prisma.user.findMany()
  
  const userIds = new Set(users.map(u => u.id))
  
  let deletedCount = 0;
  for (const pg of playgrounds) {
    if (!userIds.has(pg.userId)) {
      console.log(`Deleting orphaned playground: ${pg.id} (userId: ${pg.userId})`)
      await prisma.playground.delete({ where: { id: pg.id } })
      deletedCount++
    }
  }
  console.log(`Deleted ${deletedCount} orphaned playgrounds.`)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
