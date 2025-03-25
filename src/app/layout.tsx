import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Softs Solution Limited",
  description: "A task by Olumide Ilesanmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
