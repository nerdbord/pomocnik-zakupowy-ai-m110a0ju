import { DeleteButton } from "@/components/ui/DeleteButton";
import {UsersList} from "@/components/UsersList";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl m-auto text-center mt-8">Pomocnik zakupowy AI</h1>
      <DeleteButton />
      <UsersList />
    </div>
  );
}
