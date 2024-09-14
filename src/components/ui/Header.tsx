import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";

export const Header:React.FC = () => {
  return (
      <header className=" h-[100px] flex justify-end mt-8 pr-8">
      <SignedOut >
        <button className="bg-amber-600 hover:bg-amber-500 w-1/5 h-12 flex items-center justify-center space-x-2 rounded-sm">
          <SignInButton />
          <LogIn />
        </button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}