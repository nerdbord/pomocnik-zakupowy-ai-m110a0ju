"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prismaClient";
import { auth, currentUser } from "@clerk/nextjs/server";
import { checkUser } from "../checkUser";

export const isFavorite = async (url: string) => {
  const { userId} = await checkUser();
  const favorite = await prisma.product.findFirst({
    where: { url, userId}
  })
  return favorite !== null;
}

export const addFavorite = async (url: string) => {
  const { userId } = await checkUser();

  const existingFavorite = await isFavorite(url);
  if(existingFavorite){
    throw new Error("Link już jest w ulubionch.")
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
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Użytkownik nie jest zalogowany");
  }

  return await prisma.product.findMany({
    where: { userId },
  });
};

export const deleteFavorites = async (productId: string) => {
  const { userId } = await checkUser();
  try {
    const isUserExist = await prisma.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });
    if (!isUserExist) {
      throw new Error("Użytkownik nie istnieje. Zaloguj się.");
    }
    // sprawdzenie czy rekord użytkownika istnieje:
    const checkFavorite = await prisma.product.findFirst({
      where: {
        id: productId,
        userId
      },
    });
    if (!checkFavorite) {
      console.log(
        `Rekord z userId: ${userId} i specialistId: ${productId} nie istnieje.`
      );
      throw new Error("Nie można znaleźć rekordu do usunięcia.");
    }
    await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    console.log(`USUNIĘTO!!!!! Rekord z userId: ${userId} i produkt: ${productId}`);
    revalidatePath(`/favorites`);
    return
  } catch (error) {
    console.error(
      "Błąd podczas usuwania produktu z listy ulubionych produktów.",
      error
    );
    throw new Error(
      "Nie udało się usunąć produktu z listy ulubionych produktów. Spróbuj ponownie później."
    );
  }
};
