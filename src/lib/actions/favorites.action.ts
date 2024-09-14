"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prismaClient";
import { auth, currentUser } from "@clerk/nextjs/server";

export const addFavorite = async (url: string) => {
    const {userId} = auth();
    const user = await currentUser();

  if (!userId || !user)  {
    throw new Error("Użytkownik nie jest zalogowany");
  }

  await prisma.product.create({
    data: {
      url,
      userId,
    },
  });
  revalidatePath("/favorites");
};

export const getFavorites = async () => {
    const {userId} = auth();
    const user = await currentUser();

  if (!userId || !user)  {
    throw new Error("Użytkownik nie jest zalogowany");
  }

  return await prisma.product.findMany({
    where: { userId },
  });
};
