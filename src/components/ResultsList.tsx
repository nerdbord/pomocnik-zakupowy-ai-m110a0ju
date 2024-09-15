"use client";

import { FavoriteButton } from "./FavoriteButton";
import { Trash2 } from "lucide-react";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast"


interface ResultsListProps {
  results: string[];
  setResults: React.Dispatch<React.SetStateAction<string[]>>; // prop do aktualizacji stanu
}

export const ResultsList: React.FC<ResultsListProps> = ({ results, setResults }) => {
    const { toast } = useToast();
const handleRemove = (link: string) => {
    const newResults = results.filter((item) => item !== link);
    setResults(newResults);

    // Zaktualizuj localStorage po usunięciu linku
    localStorage.setItem("searchResults", JSON.stringify(newResults));
    toast({
        description: "Link został usunięty.",
      });
  };

  if (results.length === 0) return null;
  
  
  return (
    <div className="mx-auto mt-8 max-w-[1100px] px-12">
      <Table>
        <TableCaption className="text-left">
          Lista znalezionych linków.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Znalezione linki:</TableHead>
            <TableHead className="text-right">Zapisz</TableHead>
            <TableHead className="text-right">Usuń</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((link, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-left">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-blue-600"
                >
                  {link}
                </a>
              </TableCell>
              <TableCell className="text-right">
                <FavoriteButton url={link} />
              </TableCell>
              <TableCell className="text-right">
                <Button variant="secondary" onClick={()=>handleRemove(link)}>
                  <Trash2 strokeWidth={1} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
