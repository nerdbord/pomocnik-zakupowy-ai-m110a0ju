"use client";

import { FavoriteButton } from "./FavoriteButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ResultsListProps {
  results: string[];
}

export const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  if (results.length === 0) return null;
  return (
    <div className="mx-auto mt-8 max-w-[1100px] px-12 flex-col items-center justify-center">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Znalezione linki:</TableHead>
            <TableHead className="text-right">Zapisz</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((link, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  {link}
                </a>
              </TableCell>
              <TableCell className="text-right">
                <FavoriteButton url={link} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
