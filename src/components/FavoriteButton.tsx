"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { addFavorite, isFavorite } from "@/lib/actions/favorites.action";

interface FavoriteButtonProps {
  url: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ url }) => {
  const [isPending, startTransition] = useTransition();
  const [isAdded, setIsAdded] = useState(false); // Ustawienie stanu dla ulubionych
  const [feedback, setFeedback] = useState<string | null>(null); // Komunikat dla użytkownika

  // Sprawdź, czy link jest już w ulubionych po załadowaniu komponentu
  useEffect(() => {
    const checkIfFavorite = async () => {
      const favorite = await isFavorite(url);
      setIsAdded(favorite);
    };

    checkIfFavorite();
  }, [url]);

  const handleAddToFavorite = () => {
    startTransition(async () => {
      if (!isAdded) {
        await addFavorite(url);
        setIsAdded(true); // Ustaw jako dodany
        setFeedback("Link został dodany do ulubionych."); // Ustaw komunikat
      }
    });
  };
  return (
    <div>
      <Button onClick={handleAddToFavorite} disabled={isPending || isAdded}>
        {isPending ? "Dodawanie" : isAdded ? "Dodano" : "Dodaj do ulubionych"}
      </Button>
      {feedback && <p className="text-green-600 mt-2">{feedback}</p>}
    </div>
  );
};
