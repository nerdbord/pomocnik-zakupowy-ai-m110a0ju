"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const FormComponent:React.FC = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ searchTerm, minPrice, maxPrice });
    };

    const handleReset = () => {
        setSearchTerm('');
        setMinPrice('');
        setMaxPrice('');
    };

    return (
        <div className="flex flex-col m-auto mt-12 text-center">
        <span className="text-2xl font-thin">Czego szukasz?</span>
        <Input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="m-auto w-3/6 mt-3 border border-gray-300 p-2"
            placeholder="Wpisz frazę"
        />
        <span className="text-2xl font-thin mt-12">Podaj zakres cenowy jaki Cię obowiązuje</span>
        <div className="flex flex-row items-center m-auto w-3/6 space-x-3">
            <span className="text-2xl font-thin mt-1">od</span>
            <Input 
                type="number" 
                value={minPrice} 
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-2/6 border border-gray-300 p-2"
            />
            <span className="text-2xl font-thin mt-1">do</span>
            <Input 
                type="number" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-2/6 border border-gray-300 p-2"
            />
        </div>
        <div className="mt-6 space-x-3">
            <Button 
                onClick={handleReset}
                className="bg-slate-200 hover:bg-slate-300 text-xl font-thin text-black p-2"
            >
                Wyczyść
            </Button>
            <Button 
                onClick={handleSubmit}
                className="bg-slate-600 hover:bg-slate-500 text-xl font-thin text-white p-2"
            >
                Szukaj
            </Button>
        </div>
    </div>
);
}