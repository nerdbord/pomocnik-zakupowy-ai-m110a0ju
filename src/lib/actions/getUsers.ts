"use server";

import prisma from "../prismaClient";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users.");
  }
}
