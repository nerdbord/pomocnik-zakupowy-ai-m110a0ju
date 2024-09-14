// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Tworzenie użytkownika o nazwie "Gosia" z clerkUserId
  const user = await prisma.user.create({
    data: {
      username: "Gosia",
      clerkUserId: "",
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
