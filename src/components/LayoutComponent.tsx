'use client'

import Header from "./header";
//  Criar Footer depois import Footer from "./footer";

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex-col min-h-screen w-full mx-auto container px-25 flex justify-center ">
      <Header />
        {children}
        {/* <Footer /> */}
      </main>
  );
}
