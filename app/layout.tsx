import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

import { server } from "@/mocks/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Well",
  description: "Generated by create next app",
};

if (process.env.NODE_ENV === "development") {
  require("../mocks");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${golos.variable}`}>
      <body className="inter antialiased bg-dark-blue">
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
