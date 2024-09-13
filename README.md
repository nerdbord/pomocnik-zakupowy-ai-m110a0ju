# Pomocnik zakupowy AI

Witaj w wyzwaniu hackathonu "Pomocnik zakupowy AI"!

Twoim zadaniem będzie stworzenie inteligentnego asystenta zakupowego, który na podstawie wywiadu z użytkownikiem dobiera właściwe produkty i przekierowuje do koszyka w znalezionym sklepie internetowym. Wykorzystasz do tego model GPT, który pomoże w analizie potrzeb użytkownika i rekomendacji produktów.

Projekt ten pozwoli Ci na rozwinięcie umiejętności w zakresie integracji API, przetwarzania języka naturalnego oraz tworzenia aplikacji webowych. Będziesz pracować z technologiami, które są obecnie na topie, a także nauczysz się, jak efektywnie wykorzystać sztuczną inteligencję do rozwiązywania realnych problemów.

## Polecane bezpłatne platformy serverless do budowy

1. [Supabase](https://supabase.com/) - upload plików, baza PostgreSQL, autoryzacja, realtime subscriptions
2. [Firebase](https://firebase.google.com/) - autoryzacja, storage, baza danych, hosting, cloud functions
3. [Vercel](https://vercel.com/) - upload plików, bazy SQL, storage, AI, hosting, cloud functions

## Tipy i wskazówki

- **Pamiętaj, aby nie wymyślać koło na nowo.** Korzystaj z gotowych rozwiązań oraz wspomagaczy znalezionych w internecie. Nie trać czasu na budowanie komponentów interfejsów od zera.
- **Less is more.** Nie potrzebujesz dużej ilości funkcjonalności, aby Twój produkt działał. Skup się na minimalnej wartości jaka jest w stanie rozwiązać problem.
- **Pamiętaj o regularnym korzystaniu z GPT.** Używaj tego narzędzia w takim samym stopniu jak Google. Analizuj treści zadań, rozbijaj je na mniejsze części i wspomagaj swoją organizację pracy oraz swojego zespołu. Nieważne czy pracujesz nad prezentacją, czy programujesz - AI to Twój przyjaciel.

## Zadania

### 🧠 Przeprowadźcie brainstorming

**Cel 🎯**

Rozpocznijcie od zorganizowania sesji brainstormingowej, aby zidentyfikować i zaplanować kluczowe komponenty **asystenta zakupowego, który na podstawie wywiadu z użytkownikiem dobiera właściwe produkty i przekierowuje do koszyka w znalezionym sklepie internetowym.**

Wykorzystajcie narzędzie **Figjam** do wspólnej pracy nad założeniami i dokumentujcie wszystkie pomysły oraz wnioski.

Link do Figjama wraz z instrukcją korzystania: [Figjam Brainstorming Session](https://www.figma.com/file/Y6MgeanTTv64crrmNF0A3E/Brainstorming-Session?type=whiteboard&node-id=0%3A1&t=giMGw8iTAEu57WAt-1)

**Notka ⚠️**

Postarajcie się być jak najbardziej innowacyjni i kreatywni, ale także realistyczni w ocenie tego, co jest możliwe do osiągnięcia w ramach czasu hackathonu.

### 🤖 Zaimplementujcie OpenAI API

**Cel 🎯**

Zaimplementujcie OpenAI w procesie budowy inteligentnego asystenta, który na podstawie wywiadu z użytkownikiem pomoże dobrać właściwe produkty oraz ułatwi proces zakupu.

#### Klucz OpenAI

Użyjcie poniższego klucza, aby skorzystać z zasobów OpenAI.

```bash
OPENAI_API_KEY=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
```

[Kliknij tutaj, aby przejść do dokumentacji OpenAI](https://platform.openai.com/docs/api-reference/chat/create)

**Na co warto zwrócić uwagę? 📚**

1. Asystent powinien być podłączony do internetu.

### 📽️ Przygotujcie prezentacje projektu

**Cel 🎯**

Stwórzcie prezentację, która zaprezentuje Wasze rozwiązanie i przekona jury, że to Wasze rozwiązanie powinno wygrać! 🏆

Prezentacja może być stworzona w dowolnym formacie oraz na dowolnej platformie.

**Wymagania 📚**

1. Link do prezentacji załączcie w sekcji komentarzy poniżej w oknie tego zadania
2. Długość prezentacji / ilość slajdów powinna mieć taką objętość, aby zaprezentowanie projektu nie przekraczało 3 minut.

### 🚀 Zróbcie deploy projektu

**Cel 🎯**

Waszym zdaniem będzie wdrożenie zaprogramowanego rozwiązania na wybrane środowisko, aby było możliwe przetestowanie.

> Pamiętaj, że **po oficjalnym ukończeniu projektu każdorazowy commit z poprawkami będzie kosztował Wasz zespół -5 punktów** jeżeli zrobicie to w terminie **lub -10 punktów jeżeli zrobicie to po terminie** zakończenia fazy programowania.

Przed oddaniem projektu upewnijcie się, że wszystko działa zgodnie z Waszymi oczekiwaniami.

**Wymagania 📚**

1. Działająca aplikacja powinna zostać wdrożona na wybrane środowisko
2. Link do wdrożonej aplikacji powinien zostać umieszczony w dedykowanym polu po prawej stronie tego okna.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
