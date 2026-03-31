import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { id: "guest_user_id" }
  })
  
  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: "guest_user_id",
        name: "Guest User",
        email: "guest@example.com",
        role: "USER"
      }
    })
    console.log("Created guest_user_id successfully")
  } else {
    console.log("guest_user_id already exists")
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
