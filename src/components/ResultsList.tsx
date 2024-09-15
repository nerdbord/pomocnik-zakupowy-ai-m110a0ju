"use client"

import { FavoriteButton } from "./FavoriteButton";

interface ResultsListProps {
    results: string[];
}

export const ResultsList:React.FC<ResultsListProps> = ({results}) => {
    if(results.length === 0) return null
    return (
        <div className="mx-auto mt-8 max-w-[1100px] px-12 flex-col items-center justify-center">
            <h3>Znalezione linki:</h3>
            <ul className="max-w-[800px] flex-col items-start justify-center gap-2 hover:flex-row">
                {results.map((link, index)=>(
                    <li key={index} className=" my-2 flex items-start justify-between gap-2">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                            {link}
                        </a>
                        <FavoriteButton url={link}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}