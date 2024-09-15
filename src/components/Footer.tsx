import Link from "next/link";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  const linksToProfiles = [
    { href: "https://www.linkedin.com/in/michal-wolanin/", label: "Michał" },
    {
      href: "https://www.linkedin.com/in/bartosz-podemski-b58a8a240/",
      label: "Bartek",
    },
    {
      href: "https://www.linkedin.com/in/ma%C5%82gorzata-krawczuk/",
      label: "Gosia",
    },
  ];
  return (
    <footer className="mx-auto w-full flex-col items-center gap-5 bg-slate-100 p-4 mt-8">
      <div className="mx-auto flex-col justify-center items-center text-sm max-w-[600px]">
        <span className="flex justify-center items-center py-2 px-4">
          &copy; {new Date().getFullYear()} - All rights reserved.
        </span>
        <ul className="flex justify-center items-center gap-8 py-2 px-8">
          {linksToProfiles.map((link, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{link.label}</span>
              <Link href={link.href} className="mr-1 hover:underline">
                <Linkedin size={24} fill="blue" strokeWidth="1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
