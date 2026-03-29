import "./globals.css";
import React from "react";
import ClientWrapper from "@/components/ClientWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SAUDA COUTURE | Timeless Modesty",
  description: "Bespoke B2B solutions for luxury Abayas and Emirati craftsmanship.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#C5A059] selection:text-white font-sans bg-white">
        <Navbar />
        <ClientWrapper>
          {/* Content starts after the fixed navbar height */}
          <main className="min-h-screen relative overflow-x-hidden">
            {children}
          </main>
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}