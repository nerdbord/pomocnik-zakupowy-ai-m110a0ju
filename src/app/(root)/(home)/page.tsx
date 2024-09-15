import { FormComponent } from "../../../components/form";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-semibold m-auto text-center mt-12 text-slate-800">
        Pomocnik zakupowy AI
      </h1>
      <h2 className="max-w-[800px] text-xl font-semibold m-auto text-center mt-12 text-slate-600">
        Hej! Oto Twój pomocnik zakupowy, wprowadź nazwę pożądanego produktu i
        ciesz się najtańszą i najlepiej ocenianą ofertą na rynku!
      </h2>
      <FormComponent />
    </div>
  );
}
