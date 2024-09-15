import { getFavorites } from "@/lib/actions/favorites.action";
import { FavoriteLink } from "@/components/FavoriteLink";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DeleteFavoriteButton } from "@/components/DeleteFavoriteButton";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Favorites() {
  // Sprawdzenie, czy użytkownik jest zalogowany
  const { userId } = auth();

  if (!userId) {
    // Przekierowanie na stronę logowania, jeśli użytkownik nie jest zalogowany
    redirect("/sign-in");
  }
  const favoriteLinks = await getFavorites();

  if (favoriteLinks.length === 0) {
    return <div>Brak ulubionych linków.</div>;
  }

  return (
    <main className="mx-auto max-w-[800px] min-h-screen flex justify-center mt-[100px]">
      <Table>
        <TableCaption className="text-left">Twoje ulubione linki.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xl">Twoje zapisane linki</TableHead>
            <TableHead className="text-right">Usuń</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favoriteLinks.map((link) => (
            <TableRow key={link.id}>
              <TableCell className="font-medium text-left">
                <FavoriteLink url={link.url} />
              </TableCell>
              <TableCell className="text-right">
                <DeleteFavoriteButton id={link.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
