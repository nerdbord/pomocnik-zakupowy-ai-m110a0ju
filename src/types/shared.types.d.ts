export interface CreateUserParams {
  clerkUserId: string;
  username?: string | null;
}

export interface UpdateUserParams {
  clerkUserId: string;
  username?: string | null;
}

export interface DeleteUserParams {
  clerkUserId?: string;
}
