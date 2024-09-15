"use client"

import { Button } from "./ui/button";
import { deleteFavorites } from "@/lib/actions/favorites.action";

interface DeleteFavoriteButtonProps {
    id: string
}

export const DeleteFavoriteButton:React.FC<DeleteFavoriteButtonProps> = ({id}) => {
    const handleDeleteProduct = async () => {
        try {
            await deleteFavorites(id)
        }
        catch(error){
            console.error("Nie udalo się usunąć produktu.", error)
        }
    }
    return ( 
        <Button onClick={handleDeleteProduct} className="ml-2">Usuń</Button>
    )
}