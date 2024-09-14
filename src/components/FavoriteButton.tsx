"use client"

import { useTransition } from "react";
import { Button } from "./ui/button";
import { addFavorite } from "@/lib/actions/favorites.action";

interface FavoriteButtonProps {
    url: string;
}

export const FavoriteButton:React.FC<FavoriteButtonProps> = ({url}) => {
    
    const [isPending, startTransition] = useTransition();

    const handleAddToFavorite = () => {
        startTransition(()=>{
            addFavorite(url)
        })
    }
    return (
        <Button onClick={handleAddToFavorite} disabled={isPending}>{isPending ? "Dodawanie" : "Dodaj do ulubionych"}</Button>
    )
}