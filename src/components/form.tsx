// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ResultsList } from "./ResultsList";
// import { Separator } from "./ui/separator";

// export const FormComponent: React.FC = () => {
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState<string[]>([]);

//   // Odczytaj wyniki z localStorage przy wczytaniu komponentu
//   useEffect(() => {
//     const savedResults = localStorage.getItem("searchResults");
//     if (savedResults) {
//       setResults(JSON.parse(savedResults));
//     }
//   }, []);

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     console.log({ searchTerm, minPrice, maxPrice });

//     const response = await fetch("http://localhost:3000/api/chat", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         productType: searchTerm,
//         priceRange: { min: minPrice, max: maxPrice },
//       }),
//     });

//     const data = await response.json();

//     setResults(data.websites);

//     // Zapisz wyniki w localStorage
//     localStorage.setItem("searchResults", JSON.stringify(data.websites));

//     console.log(data);
//   };

//   const handleReset = () => {
//     setSearchTerm("");
//     setMinPrice("");
//     setMaxPrice("");
//     setResults([]);
//     localStorage.removeItem("searchResults"); // Usuń wyniki z localStorage
//   };

//   return (
//     <div className="flex flex-col m-auto mt-12 text-center">
//       <span className="text-2xl font-thin">Czego szukasz?</span>
//       <Input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="m-auto w-3/6 mt-3 border border-gray-300 p-2"
//         placeholder="Wpisz frazę"
//       />
//       <span className="text-2xl font-thin mt-12">
//         Podaj zakres cenowy jaki Cię obowiązuje
//       </span>
//       <div className="flex flex-row items-center m-auto w-3/6 space-x-3">
//         <span className="text-2xl font-thin mt-1">od</span>
//         <Input
//           type="number"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//           className="w-2/6 border border-gray-300 p-2"
//         />
//         <span className="text-2xl font-thin mt-1">do</span>
//         <Input
//           type="number"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//           className="w-2/6 border border-gray-300 p-2"
//         />
//       </div>
//       <div className="mt-6 mb-6 space-x-3">
//         <Button
//           onClick={handleReset}
//           className="bg-slate-200 hover:bg-slate-300 text-xl font-thin text-black p-2"
//         >
//           Wyczyść
//         </Button>
//         <Button
//           onClick={handleSubmit}
//           className="bg-slate-600 hover:bg-slate-500 text-xl font-thin text-white p-2"
//         >
//           Szukaj
//         </Button>
//       </div>
//       <Separator className="w-3/6 my-4 mx-auto" />
//       <ResultsList results={results} setResults={setResults} />
//     </div>
//   );
// };
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResultsList } from "./ResultsList";
import { Separator } from "./ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Definiowanie schematu walidacji z Zod
const formSchema = z.object({
  searchTerm: z.string().min(1, "Fraza nie może być pusta."),
  minPrice: z.string().optional(),
  maxPrice: z.string().optional(),
});

export const FormComponent: React.FC = () => {
  const [results, setResults] = useState<string[]>([]);

  // Odczytaj wyniki z localStorage przy wczytaniu komponentu
  useEffect(() => {
    const savedResults = localStorage.getItem("searchResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  // Inicjalizacja formularza z walidacją
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchTerm: "",
      minPrice: "",
      maxPrice: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // const response = await fetch("http://localhost:3000/api/chat",
    // https://pomocnik-zakupowy-ai-m110a0ju.vercel.app/
    const response = await fetch("https://pomocnik-zakupowy-ai-m110a0ju.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productType: values.searchTerm,
        priceRange: { min: values.minPrice, max: values.maxPrice },
      }),
    });

    const data = await response.json();

    setResults(data.websites);

    // Zapisz wyniki w localStorage
    localStorage.setItem("searchResults", JSON.stringify(data.websites));

    console.log(data);
  };

  const handleReset = () => {
    form.reset();
    setResults([]);
    localStorage.removeItem("searchResults"); // Usuń wyniki z localStorage
  };

  return (
    <div className="max-w-[700px] flex flex-col m-auto mt-12 text-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="searchTerm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Czego szukasz?</FormLabel>
                <FormControl>
                  <Input placeholder="Wpisz frazę" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="">Podaj zakres cenowy</span>
          <div className="flex flex-row items-center m-auto w-3/6 space-x-3">
            <FormField
              control={form.control}
              name="minPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Od</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Minimalna cena"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Maksymalna cena"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-6 mb-6 space-x-3">
            <Button
              type="button"
              onClick={handleReset}
              variant="secondary"
              // className="bg-slate-200 hover:bg-slate-300 text-xl font-thin text-black p-2"
            >
              Wyczyść
            </Button>
            <Button
              type="submit"
              variant="default"
              // className="bg-slate-600 hover:bg-slate-500 text-xl font-thin text-white p-2"
            >
              Szukaj
            </Button>
          </div>
        </form>
      </Form>
      <Separator className="w-3/6 my-4 mx-auto" />
      <ResultsList results={results} setResults={setResults} />
    </div>
  );
};
