"use server";
import prisma from "../prismaClient";
import {
  CreateUserParams,
  UpdateUserParams,
  DeleteUserParams,
} from "../../types/shared.types";

export async function createUser(params: CreateUserParams) {
  const { clerkUserId, username } = params;
  try {
    const newUser = await prisma.user.create({
      data: {
        clerkUserId,
        username: username || null, // Jeśli username jest undefined, ustawiamy na null
      },
    });
    console.log("Creating user with data:", { clerkUserId, username });
    console.log("NEW USER CREATED", newUser);

    return newUser;
  } catch (error) {
    console.error("Error while creating new user: ", error);
    throw new Error("Error while creating new user.");
  }
}

export async function updateUser(params: UpdateUserParams) {
  const { clerkUserId, username } = params;

  try {
    const updatedUser = await prisma.user.update({
      where: { clerkUserId },
      data: {
        username: username || null, // Obsługa przypadku, gdy username jest undefined
      },
    });
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user");
  }
}

export async function deleteUser(params: DeleteUserParams) {
  const { clerkUserId } = params;

  try {
    const deletedUser = await prisma.user.delete({
      where: { clerkUserId },
    });
    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user");
  }
}
