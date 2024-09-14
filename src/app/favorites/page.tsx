import { getFavorites } from "@/lib/actions/favorites.action";
import { FavoriteLink } from "@/components/FavoriteLink";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Favorites() {
    // Sprawdzenie, czy użytkownik jest zalogowany
  const { userId } = auth();

  if (!userId) {
    // Przekierowanie na stronę logowania, jeśli użytkownik nie jest zalogowany
    redirect("/sign-in");
  }
    const favoriteLinks = await getFavorites();

    if(favoriteLinks.length === 0) {
        return <div>Brak ulubionych linków.</div>
    };

    return (
        <div className="mt-8">
            <h3>Twoje ulubione linki:</h3>
            <ul>
                {favoriteLinks.map((link)=> (
                    <FavoriteLink key={link.id} url={link.url} />
                ))}
            </ul>
        </div>
    )
}