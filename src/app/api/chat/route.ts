import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { productType, priceRange } = await req.json();

  const { text } = await generateText({
    model: openai("gpt-4-turbo"),
    system: `
            Jesteś asystentem do wyszukiwania produktów online. Twoim zadaniem jest znalezienie najlepszych produktów dostępnych na rynku na podstawie określonych przez użytkownika kryteriów, takich jak rodzaj produktu i zakres cenowy.
            Skupiasz się na aktualnych ofertach, jakości produktu, opiniach klientów i dostępności.
            Generuj zapytanie w formacie JSON, które można wykorzystać do scrapera.
        `,
    prompt: `
            Użytkownik szuka produktu o następujących kryteriach:
            - Rodzaj produktu: ${productType}
            Wygeneruj zapytanie w formacie JSON i zwroc jako obiekt, które zawiera powyzsze informacje i urle do stron ktore mozna przeszukac.
        `,
  });

  return new Response(text);
}
