import { getUsers } from "@/lib/actions/getUsers";


export const UsersList = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>Lista użytkowników:</h1>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            {user.username ? user.username : "Anonimowy użytkownik"} (Clerk ID: {user.clerkUserId})
          </li>
        ))}
      </ul>
    </div>
  );
}