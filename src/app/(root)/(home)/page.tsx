
// import { DeleteButton } from "@/components/ui/DeleteButton";
import {UsersList} from "@/components/UsersList";
import { FormComponent } from "../../../components/ui/form";


export default function Home() {
  return (
    <div>
      <h1 className="text-xl m-auto text-center mt-8">Pomocnik zakupowy AI</h1>
      {/* <DeleteButton /> */}
      <UsersList />

      <h1 className="text-5xl font-semibold m-auto text-center mt-12 text-slate-600">
        Pomocnik zakupowy AI
      </h1>
      <h2 className="text-xl font-semibold m-auto text-center mt-12 text-slate-400">Hej! Oto Twój pomocnik zakupowy, wprowadź nazwę pożądanego produktu i ciesz się najtańszą i najlepiej ocenianą ofertą na rynku!</h2>
      <FormComponent/>
    </div>
  );
}