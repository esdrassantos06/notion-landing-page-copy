import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import LayoutComponent from "@/components/LayoutComponent";


const fontInter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Your connected workspace for wiki, docs & projects | Notion",
  description: "Generated by Esdras Santos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning 
        className={`bg-background ${fontInter.className} w-full h-screen`}
      >
        <LayoutComponent>
        {children}
        </LayoutComponent>
      </body>
    </html>
  );
}
