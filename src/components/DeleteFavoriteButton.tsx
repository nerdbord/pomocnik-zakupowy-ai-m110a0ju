"use client";

import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteFavorites } from "@/lib/actions/favorites.action";
import { useToast } from "@/hooks/use-toast";

interface DeleteFavoriteButtonProps {
  id: string;
}

export const DeleteFavoriteButton: React.FC<DeleteFavoriteButtonProps> = ({
  id,
}) => {
  const { toast } = useToast();
  const handleDeleteProduct = async () => {
    try {
      await deleteFavorites(id);
      toast({
        description: "Link został usunięty z listy ulubionych.",
      });
    } catch (error) {
      console.error("Nie udalo się usunąć produktu.", error);
    }
  };
  return (
    <Button onClick={handleDeleteProduct} className="ml-2" variant="secondary">
      <Trash2 strokeWidth={1} />
    </Button>
  );
};
