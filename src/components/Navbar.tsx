"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Collections", href: "/collections" },
    { name: "Custom Made", href: "/custom-design" },
    { name: "Contact", href: "/contact" },
  ];

  const getLinkStyle = (path: string) => 
    `relative pb-1 transition-all whitespace-nowrap ${
      pathname === path 
        ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black' 
        : 'text-black/60 hover:text-[#C5A059]'
    }`;

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-10 h-24 flex items-center justify-between gap-4">
          
          {/* --- LOGO SECTION --- */}
          <Link href="/" className="flex items-center gap-6 lg:gap-10 group shrink-0">
            <Image 
              src="/logo.png" 
              alt="SAUDA" 
              width={180} 
              height={60} 
              className="object-contain transition-transform duration-500 group-hover:scale-105 filter brightness-110 contrast-110 w-[130px] md:w-[150px] lg:w-[210px]" 
              priority
              unoptimized 
            />
            <div className="hidden xl:block h-10 w-[1px] bg-gray-200" />
            <div className="hidden xl:block leading-tight">
              <span className="block text-[10px] font-serif tracking-[0.3em] text-[#C5A059] font-bold uppercase">Couture • B2B</span>
              <span className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-medium">International</span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.3em] font-bold">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={getLinkStyle(link.href)}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- ACTIONS & HAMBURGER --- */}
          <div className="flex items-center gap-4 lg:gap-7 shrink-0">
            <Search className="hidden sm:block w-4 h-4 lg:w-5 lg:h-5 cursor-pointer hover:text-[#C5A059] text-black transition-colors" />
            <User className="hidden sm:block w-4 h-4 lg:w-5 lg:h-5 cursor-pointer hover:text-[#C5A059] text-black transition-colors" />
            
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 lg:w-5 lg:h-5 group-hover:text-[#C5A059] text-black transition-colors" />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[7px] lg:text-[8px] w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>

            {/* HAMBURGER BUTTON (Mobile Only) */}
            <button 
              className="md:hidden p-2 text-black hover:text-[#C5A059] transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white flex flex-col p-10 md:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <Image src="/logo.png" alt="SAUDA" width={140} height={40} className="object-contain" unoptimized />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 border border-gray-100 rounded-full">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif italic ${pathname === link.href ? 'text-[#C5A059]' : 'text-black'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto border-t border-gray-100 pt-10 space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">B2B Inquiries</span>
                <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em]">International Couture Atelier</p>
              </div>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-black text-white text-center text-[10px] uppercase tracking-[0.4em] font-bold"
              >
                Wholesale Inquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}