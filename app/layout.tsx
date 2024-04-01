"use client";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        <>
          <Analytics />
          <ThemeProvider enableSystem={true} attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </>
      </body>
    </html>
  );
}
