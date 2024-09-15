import { Footer } from "@/components/Footer";
import { Header } from "@/components/ui/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
