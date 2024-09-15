import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import { LogIn } from "lucide-react";
// import { Button } from "./button";

export const Header: React.FC = () => {
  return (
    <header className="h-[100px] flex items-center justify-end pr-8 bg-slate-100">
      <SignedOut>
        
          <SignInButton />
          {/* <LogIn strokeWidth={1} className="ml-2 h-4 w-4" /> */}
        
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
