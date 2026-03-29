"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Search } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to handle consistent link styling
  const getLinkStyle = (path: string) => 
    `${pathname === path ? 'border-b-2 border-black text-black' : 'text-black/60 hover:text-[#C5A059]'} pb-1 transition-all`;

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1800px] mx-auto px-10 h-24 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-10 group">
          <Image 
            src="/logo.png" 
            alt="SAUDA" 
            width={210} 
            height={70} 
            className="object-contain transition-transform duration-500 group-hover:scale-105 filter brightness-110 contrast-110 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" 
            priority
            unoptimized 
          />
          <div className="hidden lg:block h-12 w-[1px] bg-gray-200" />
          <div className="hidden lg:block leading-tight">
            <span className="block text-[11px] font-serif tracking-[0.3em] text-[#C5A059] font-bold uppercase">Couture • B2B</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-medium tracking-widest">International</span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-14 text-[12px] uppercase tracking-[0.25em] font-bold">
          <Link href="/" className={getLinkStyle('/')}>Home</Link>
            <Link href="/who-we-are" className={getLinkStyle('/who-we-are')}>Who We Are</Link>
          <Link href="/collections" className={getLinkStyle('/collections')}>Collections</Link>
          <Link href="/custom-design" className={getLinkStyle('/custom-design')}>Custom Made</Link>
        
          <Link href="/wholesale" className={getLinkStyle('/wholesale')}>Wholesale</Link>
          
          {/* RESOLVED: Contact now matches the uniform styling and hover behavior */}
          <Link href="/contact" className={getLinkStyle('/contact')}>
            Contact
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-7">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#C5A059] text-black" />
          <Link href="/wholesale"><User className="w-5 h-5 cursor-pointer hover:text-[#C5A059] text-black" /></Link>
          <div className="relative cursor-pointer group">
            <ShoppingBag className="w-5 h-5 group-hover:text-[#C5A059] text-black" />
            <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}