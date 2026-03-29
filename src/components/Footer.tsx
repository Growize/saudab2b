"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-32 pb-12 border-t border-gray-100 overflow-hidden">
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]" 
        style={{
          backgroundImage: "url('/footer-bg.webp')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* COLUMN 1: BRAND & CONTACT */}
          <div className="space-y-8 text-center md:text-left">
            <Image src="/logo.png" alt="SAUDA" width={120} height={40} className="mx-auto md:mx-0" unoptimized />
            <div className="space-y-4">
              <p className="text-[11px] text-gray-500 leading-loose uppercase tracking-[0.2em] font-medium">
                Premium Abaya couture for the modern women. <br/> DUBAI • WORLDWIDE
              </p>
              <div className="flex flex-col gap-2 text-[10px] uppercase tracking-widest font-bold text-black">
                <a href="tel:+971544802041" className="hover:text-[#C5A059] transition-colors">+971 54 480 2041</a>
                <a href="mailto:info@saudafashion.com" className="hover:text-[#C5A059] transition-colors lowercase tracking-normal">info@saudafashion.com</a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="p-2.5 rounded-full border border-gray-100 hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-black"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2.5 rounded-full border border-gray-100 hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-black"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2.5 rounded-full border border-gray-100 hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-black"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
          
          {/* COLUMN 2: THE HOUSE (Black & Bold Links) */}
          <div className="text-center md:text-left">
            <h4 className="text-[12px] uppercase tracking-[0.4em] mb-10 font-bold text-black opacity-40">The House</h4>
            <ul className="text-[11px] text-black space-y-5 uppercase tracking-[0.3em] font-bold">
              <li><Link href="/who-we-are" className="hover:text-[#C5A059] transition-colors">Who We Are</Link></li>
              <li><Link href="/collections" className="hover:text-[#C5A059] transition-colors">Collections</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES (Black & Bold Links) */}
          <div className="text-center md:text-left">
            <h4 className="text-[12px] uppercase tracking-[0.4em] mb-10 font-bold text-black opacity-40">Services</h4>
            <ul className="text-[11px] text-black space-y-5 uppercase tracking-[0.3em] font-bold">
              <li><Link href="/wholesale" className="hover:text-[#C5A059] transition-colors">Wholesale Portal</Link></li>
              <li><Link href="/custom-design" className="hover:text-[#C5A059] transition-colors">Custom Made</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A059] transition-colors">Production Sourcing</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: GLASSMORPHISM NEWSLETTER */}
          <div className="text-center md:text-left">
            <div className="relative p-8 overflow-hidden border border-white/40 shadow-xl rounded-sm">
              {/* Glass Effect Layers */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md z-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#F7F3EB]/30 to-transparent z-0" />
              
              <div className="relative z-10 space-y-6">
                <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold text-black">Atelier News</h4>
                <div className="flex border-b border-black/20 pb-2">
                  <input 
                    type="email" 
                    placeholder="BUSINESS EMAIL" 
                    className="bg-transparent text-[10px] w-full outline-none tracking-[0.3em] uppercase text-black placeholder:text-gray-400" 
                  />
                  <button className="hover:text-[#C5A059] transition-all"><Send className="w-4 h-4 text-black" /></button>
                </div>
                <p className="text-[8px] text-gray-400 uppercase tracking-widest leading-loose">
                  Subscribe for B2B catalogs & <br/> seasonal drops.
                </p>
              </div>
            </div>
          </div>
        </div>

               {/* BOTTOM COPYRIGHT AREA */}
        <div className="border-t border-gray-100 mt-12 pt-8 pb-4">
          <div className="relative flex flex-col md:flex-row items-center justify-between">
            
            {/* LEFT: Copyright */}
            <div className="md:w-1/3 text-left">
              <span className="text-[10px] text-black font-bold uppercase tracking-[0.4em]">
                © {new Date().getFullYear()} SAUDA COUTURE <span className="text-[#C5A059] mx-1">•</span> SAUDA FASHION FZC LLC
              </span>
            </div>

            {/* CENTER: Agency Credit */}
            <div className="md:w-1/3 text-center mt-4 md:mt-0">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">
                Designed & Developed by <a href="https://gro-wize.com" target="_blank" className="font-black text-black border-b border-[#C5A059]/40 hover:text-[#C5A059] transition-colors">Growize</a>
              </div>
            </div>

            {/* RIGHT: Empty spacer to maintain center alignment for the credit */}
            <div className="hidden md:block md:w-1/3" />
            
          </div>
        </div>
      </div>
    </footer>
  );
}