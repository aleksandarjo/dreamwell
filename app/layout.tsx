import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";
import ReactQueryProvider from "@/providers/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { setupMocks } from "../mocks";

// if (process.env.NODE_ENV === "development") {
import("../mocks").then(({ setupMocks }) => {
  setupMocks();
});
// }

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${golos.variable}`}>
      <body className="inter bg-dark-blue antialiased">
        <div className="container">
          <ReactQueryProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <Navbar />
            {children}
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
