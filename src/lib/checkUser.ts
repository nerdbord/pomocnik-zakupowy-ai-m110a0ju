import { auth, currentUser } from "@clerk/nextjs/server";

export const checkUser = async () => {
    const {userId} = auth();
    const user = await currentUser();

  if (!userId || !user)  {
    throw new Error("Użytkownik nie jest zalogowany");
  }
  return {userId}
}