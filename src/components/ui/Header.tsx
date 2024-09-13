import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";

export const Header:React.FC = () => {
    return (
        <header className="bg-slate-800 h-[100px] flex items-center justify-evenly mt-8">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <p className="text-white m-auto text-center">Header here</p>
      </header>
    )
}