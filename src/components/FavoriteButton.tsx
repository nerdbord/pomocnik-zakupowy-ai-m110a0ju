"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { addFavorite, isFavorite } from "@/lib/actions/favorites.action";
import { useToast } from "@/hooks/use-toast";
import { Star, Check, Loader2 } from "lucide-react";

interface FavoriteButtonProps {
  url: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ url }) => {
  const [isPending, startTransition] = useTransition();
  const [isAdded, setIsAdded] = useState(false); // Ustawienie stanu dla ulubionych
  const { toast } = useToast();

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

        toast({
          description: "Link został dodany do listy ulubionych.",
        });
      }
    });
  };
  return (
    <div>
      <Button onClick={handleAddToFavorite} disabled={isPending || isAdded}>
        {/* {isPending ? "Zapisywanie" : isAdded ? "Zapisano" : "Zapisz w ulubionych"} */}
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Zapisywanie
          </>
        ) : isAdded ? (
          <>
            <Check className="mr-2 h-4 w-4" /> Zapisano
          </>
        ) : (
          <>
            <Star className="mr-2 h-4 w-4" /> Zapisz
          </>
        )}
      </Button>
    </div>
  );
};
