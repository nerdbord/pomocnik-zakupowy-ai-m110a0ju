"use client"

import { FavoriteButton } from "./FavoriteButton";

interface ResultsListProps {
    results: string[];
}

export const ResultsList:React.FC<ResultsListProps> = ({results}) => {
    if(results.length === 0) return null
    return (
        <div className="mt-8">
            <h3>Znalezione linki:</h3>
            <ul>
                {results.map((link, index)=>(
                    <li key={index} className="my-2">
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