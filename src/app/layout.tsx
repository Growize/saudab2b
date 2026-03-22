"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, User, Search, MessageCircle, ArrowUp, Instagram, Facebook, Linkedin 
} from "lucide-react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#C5A059] selection:text-white font-sans">
        
        {/* --- GLOBAL NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-[1800px] mx-auto px-10 h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-8">
              <Image src="/logo.png" alt="SAUDA" width={130} height={45} className="object-contain" unoptimized />
              <div className="hidden lg:block h-8 w-[1px] bg-gray-200" />
              <div className="hidden lg:block leading-tight">
                <span className="block text-[11px] font-serif tracking-[0.25em] text-[#C5A059] font-bold uppercase">Couture • B2B</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium tracking-widest">International</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-14 text-[12px] uppercase tracking-[0.25em] font-bold">
              <Link href="/" className={`${pathname === '/' ? 'border-b-2 border-black text-black' : 'text-black/60 hover:text-[#C5A059]'} pb-1 transition-all`}>Home</Link>
              <Link href="/collections" className={`${pathname === '/collections' ? 'border-b-2 border-black text-black' : 'text-black/60 hover:text-[#C5A059]'} pb-1 transition-all`}>Collections</Link>
              <Link href="/heritage" className={`${pathname === '/heritage' ? 'border-b-2 border-black text-black' : 'text-black/60 hover:text-[#C5A059]'} pb-1 transition-all`}>Heritage</Link>
              <Link href="/wholesale" className={`${pathname === '/wholesale' ? 'border-b-2 border-black text-black' : 'text-black/60 hover:text-[#C5A059]'} pb-1 transition-all`}>Wholesale</Link>
              <Link href="/contact" className={`${pathname === '/contact' ? 'border-b-2 border-black text-black' : 'text-black/60 hover:text-[#C5A059]'} pb-1 transition-all`}>Contact</Link>
            </div>

            <div className="flex items-center gap-7">
              <Search className="w-5 h-5 cursor-pointer hover:text-[#C5A059]" />
              <Link href="/wholesale"><User className="w-5 h-5 cursor-pointer hover:text-[#C5A059]" /></Link>
              <div className="relative cursor-pointer group">
                <ShoppingBag className="w-5 h-5 group-hover:text-[#C5A059]" />
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </div>
            </div>
          </div>
        </nav>

        {/* --- DYNAMIC PAGE CONTENT --- */}
        <main className="min-h-screen">
          {children}
        </main>

       {/* --- GLOBAL MASTER FOOTER --- */}
        <footer className="bg-white pt-32 pb-8 border-t border-gray-100">
          <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            
            {/* Column 1: Brand & Direct Contact */}
            <div className="space-y-8 text-center md:text-left">
              <Image src="/logo.png" alt="SAUDA" width={120} height={40} className="mx-auto md:mx-0" unoptimized />
              <div className="space-y-4">
                <p className="text-[11px] text-gray-400 leading-loose uppercase tracking-[0.2em] font-medium">Refined Abaya Couture for the Modern Woman. <br/> AJMAN • DUBAI • EUROPE</p>
                <div className="flex flex-col gap-2 text-[10px] uppercase tracking-widest font-bold text-black/70">
                  <a href="tel:+971544802041" className="hover:text-[#C5A059] transition-colors">+971 54 480 2041</a>
                  <a href="mailto:info@saudafashion.com" className="hover:text-[#C5A059] transition-colors lowercase tracking-normal">info@saudafashion.com</a>
                </div>
              </div>
              {/* Social Media Integration */}
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="p-2.5 rounded-full border border-gray-100 hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full border border-gray-100 hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full border border-gray-100 hover:border-[#C5A059] hover:text-[#C5A059] transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Column 2: The House */}
            <div className="text-center md:text-left">
              <h4 className="text-[12px] uppercase tracking-[0.4em] mb-10 font-bold text-black">The House</h4>
              <ul className="text-[11px] text-gray-500 space-y-5 uppercase tracking-[0.3em] font-medium">
                <li><Link href="/heritage" className="hover:text-black transition-colors">Atelier Heritage</Link></li>
                <li><Link href="/collections" className="hover:text-black transition-colors">The Archive Gallery</Link></li>
                <li><Link href="/#testimonials" className="hover:text-black transition-colors">Retailer Voices</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="text-center md:text-left">
              <h4 className="text-[12px] uppercase tracking-[0.4em] mb-10 font-bold text-black">Services</h4>
              <ul className="text-[11px] text-gray-500 space-y-5 uppercase tracking-[0.3em] font-medium">
                <li><Link href="/wholesale" className="hover:text-black transition-colors">Wholesale Portal</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Bespoke Couture</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Production Sourcing</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="text-center md:text-left">
              <h4 className="text-[12px] uppercase tracking-[0.4em] mb-10 font-bold text-black">Atelier News</h4>
              <div className="flex border-b border-gray-200 pb-3">
                <input type="email" placeholder="BUSINESS EMAIL" className="bg-transparent text-[11px] w-full outline-none tracking-[0.3em] uppercase" />
                <button className="text-[11px] font-bold tracking-[0.3em] hover:text-[#C5A059] transition-all uppercase">Join</button>
              </div>
            </div>
          </div>

          {/* --- HIGH-VISIBILITY LEGAL & CREDIT ROW --- */}
          <div className="max-w-[1600px] mx-auto px-10 border-t border-gray-200 pt-10 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Copyright & Legal Links */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <span className="text-[11px] text-black font-bold uppercase tracking-[0.4em]">
                  © 2026 SAUDA COUTURE <span className="text-[#C5A059] mx-2">•</span> B2B WORLDWIDE
                </span>
                <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  <Link href="/privacy" className="hover:text-[#C5A059] transition-all duration-300 hover:tracking-widest">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-[#C5A059] transition-all duration-300 hover:tracking-widest">
                    Terms of Use
                  </Link>
                </div>
              </div>

              {/* Enhanced Growize Credit */}
              <div className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                Designed & Developed by{" "}
                <a 
                  href="https://growizedigital.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 font-black text-black hover:text-[#C5A059] transition-all duration-500 border-b-2 border-[#C5A059]/30 hover:border-[#C5A059] pb-0.5"
                >
                  Growize
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* --- GLOBAL FLOATING BUTTONS --- */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[999]">
          <AnimatePresence>
            {showBackToTop && (
              <motion.button 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-white border border-gray-200 p-4 rounded-full shadow-2xl hover:bg-[#C5A059] hover:text-white transition-all text-gray-400"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
          <a 
            href="https://wa.me/971544802041"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>

      </body>
    </html>
  );
}