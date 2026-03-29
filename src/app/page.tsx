"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, ChevronLeft, ChevronRight,
  Truck, ShieldCheck, Globe, Star
} from "lucide-react"; 

// --- Configuration & Assets ---
const HERO_IMAGES = ["/slide01.webp", "/slide02.webp", "/slide03.webp", "/slide04.webp", "/slide05.webp"];

const CATEGORIES = [
  { name: "Signature Abayas", img: "/cat1.webp", link: "/collections" },
  { name: "Evening Couture", img: "/cat2.webp", link: "/collections" },
  { name: "Essential Modesty", img: "/cat3.webp", link: "/collections" }
];

const BEST_SELLERS = [
  { id: "classic-noir-abaya", name: "Classic Noir Abaya", price: "1,200 AED", img: "/cat1.webp", stats: "High Demand" },
  { id: "gold-threaded-silk", name: "Gold Threaded Silk", price: "2,450 AED", img: "/cat2.webp", stats: "Global Favorite" },
  { id: "sand-dune-linen", name: "Sand-Dune Linen", price: "950 AED", img: "/cat3.webp", stats: "B2B Staple" },
  { id: "bridal-organza", name: "Bridal Organza", price: "3,800 AED", img: "/cat6.webp", stats: "Limited Stock" },
];

const NEW_ARRIVALS = [
  { id: "raw-silk-kimono", name: "Raw Silk Kimono", price: "1,850 AED", img: "/cat1.webp", tag: "New" },
  { id: "organza-overlay", name: "Organza Overlay", price: "2,100 AED", img: "/cat2.webp", tag: "Limited" },
  { id: "linen-desert-wrap", name: "Linen Desert Wrap", price: "1,400 AED", img: "/cat3.webp", tag: "Bestseller" },
  { id: "midnight-crepe", name: "Midnight Crepe", price: "2,400 AED", img: "/cat4.webp", tag: "New" },
];

export default function SaudaFullPage() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return <div className="bg-white min-h-screen" />;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#C5A059] selection:text-white font-sans overflow-x-hidden relative">
      
{/* --- HERO SECTION (Mechanical Fix for Laptop Overlap) --- */}
 <section className="relative pt-24 min-h-[85vh] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
  
  {/* Left Content Column: Removed 'h-full' so it can expand if text is long */}
  <div className="relative w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-24 py-24 md:py-32 overflow-hidden bg-white">
    
    {/* Monstera Leaf Background Asset */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]">
      <Image 
        src="/monstera-bg.png" 
        alt="" 
        fill 
        className="object-contain object-left-bottom translate-x-[-8%] translate-y-[12%] scale-125" 
        unoptimized 
      />
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="relative z-10"
    >
      <h2 className="text-[12px] uppercase tracking-[0.6em] text-[#C5A059] mb-6 font-bold">
        The 2026 Atelier
      </h2>
      <h1 className="text-5xl lg:text-[5.5rem] font-serif leading-[1.05] mb-10 text-black">
        Timeless <br /> 
        <span className="text-[#C5A059] italic font-light drop-shadow-sm">Modesty</span>
      </h1>
      <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-14 font-medium tracking-wide">
        Bespoke B2B solutions for luxury boutiques. Premium Emirati craftsmanship designed for global elegance.
      </p>
      
      {/* CTA Buttons: Guaranteed spacing from bottom */}
      <div className="flex flex-wrap items-center gap-10">
        <Link 
          href="/collections" 
          className="px-12 py-5 bg-black text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-2xl active:scale-95"
        >
          Shop Collection
        </Link>
        <Link 
          href="/contact" 
          className="text-[11px] uppercase tracking-[0.3em] font-bold border-b border-gray-300 pb-1 hover:border-black transition-all text-black"
        >
          Wholesale Inquiry
        </Link>
      </div>
    </motion.div>
  </div>

  {/* Right Image Column: min-h forces image visibility on short screens */}
  <div className="w-full md:w-1/2 min-h-[500px] md:min-h-full relative group bg-white overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ 
          opacity: 1, 
          scale: 1.12, 
          transition: { 
            opacity: { duration: 1.5 }, 
            scale: { duration: 9, ease: "linear" }
          }
        }}
        exit={{ opacity: 0, transition: { duration: 1.2 }}}
        className="absolute inset-0 w-full h-full"
      >
        <Image 
          src={HERO_IMAGES[currentIndex]} 
          alt="Sauda Collection" 
          fill 
          className="object-cover object-top" 
          priority 
          unoptimized 
        />
      </motion.div>
    </AnimatePresence>
    
    {/* Image Counter Overlay */}
    <div className="absolute bottom-12 right-12 text-[11px] uppercase tracking-[0.5em] text-white/90 drop-shadow-md z-10 font-bold">
      0{currentIndex + 1} / 05
    </div>
  </div>
</section>
      {/* --- TRUST RIBBON --- */}
      <section className="py-16 bg-[#F7F3EB] border-y border-[#E8E2D5] relative z-20">
        <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {[
            { icon: Globe, t: "Global Distribution", s: "UK • Europe • Worldwide" },
            { icon: ShieldCheck, t: "Couture Quality", s: "Premium Fabric Blends" },
            { icon: Truck, t: "Priority Logistics", s: "5 to 10 Days Global Delivery" },
            { icon: Star, t: "Exclusive Designs", s: "Bespoke B2B Sourcing" },
          ].map((item, i) => (
            <div key={i} className="group flex items-center gap-6 justify-center lg:justify-start px-4">
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-[#E8E2D5]">
                <item.icon className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#1a1a1a]">{item.t}</h3>
                <p className="text-[9px] text-[#8D8678] uppercase tracking-[0.15em] font-semibold mt-1">{item.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BEST SELLERS --- */}
      <section className="py-28 bg-[#FBFBFB] border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-10">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-bold mb-4 block underline underline-offset-8">Market Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-light">The <span className="text-[#C5A059]">Top seller</span> </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {BEST_SELLERS.map((item, i) => (
              <Link href={`/product/${item.id}`} key={i} className="group cursor-pointer">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm mb-8">
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" unoptimized />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold text-black/90 group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
                    <span className="text-[11px] text-gray-400 font-sans tracking-widest block">{item.price}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        
      </section>
      {/* --- HANDCRAFTED UAE SECTION --- */}
      <section className="py-24 bg-white border-t border-gray-100/50 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 relative group">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative aspect-square w-full md:w-[85%] bg-white shadow-xl overflow-hidden border border-gray-100 p-6 ml-auto">
              <Image src="/embrodery.webp" alt="Embroidery Detail" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105 p-6" unoptimized />
            </motion.div>
          </div>
          <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]">
              <Image src="/monstera-bg2.png" alt="" fill className="object-contain object-right-top" unoptimized />
            </div>
            <div className="relative z-10 space-y-8">
              <span className="text-[#C5A059] text-[11px] uppercase tracking-[0.5em] font-bold block italic">Atelier Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-black">Handcrafted in <br /> Dubai, <span className="text-[#C5A059] italic font-light">UAE</span></h2>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-md">Every intricate pattern is hand-stitched by our master artisans.</p>
              <Link href="/custom-design" className="inline-block px-12 py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all shadow-xl">
                Design Your Own
              </Link>
            </div>
          </div>
        </div>
      </section>
 {/* --- EXPLORE COLLECTIONS SECTION (REPOSITIONED) --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 font-bold block">Our Atelier</span>
            <h2 className="text-4xl md:text-5xl font-serif text-black">
              Explore <span className="text-[#C5A059]">Collections</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {CATEGORIES.map((cat, i) => (
              <Link href={cat.link} key={i} className="group relative aspect-[4/5] overflow-hidden bg-gray-100 shadow-xl">
                <Image 
                  src={cat.img} 
                  alt={cat.name} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-black/15 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white text-[12px] md:text-[14px] uppercase tracking-[0.5em] font-black drop-shadow-lg mb-4">
                    {cat.name}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                    <span className="px-6 py-2 border border-white text-white text-[9px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm">
                      View Collection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNER TESTIMONIALS RIBBON (REPOSITIONED) --- */}
      <section className="py-14 bg-[#F9F6F0] border-y border-[#E8E2D5]">
        <div className="max-w-[1600px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-1">Partner</span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-black text-black">Testimonials</span>
          </div>
          <div className="flex flex-col items-center space-y-4 max-w-2xl px-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />)}
            </div>
            <p className="text-[11px] md:text-[13px] text-gray-500 italic font-medium text-center leading-relaxed">
              "SAUDA’s B2B portal made our seasonal ordering seamless. The 5-day delivery to Paris is a game changer."
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black">Marc J. • Paris</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Authorized Retailer</span>
          </div>
        </div>
      </section>

      {/* --- NEW ARRIVALS (RESTORED) --- */}
      <section className="pt-14 pb-28 bg-[#FAFAFA] overflow-hidden border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic font-light">The <span className="text-[#C5A059]">New</span> Arrivals</h2>
          </div>

          <div className="relative group">
            <div ref={scrollRef} className="flex gap-10 overflow-x-auto no-scrollbar snap-x pb-10">
              {NEW_ARRIVALS.map((item, i) => (
                <Link href={`/product/${item.id}`} key={i} className="min-w-[85%] md:min-w-[24%] snap-start group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-white overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" unoptimized />
                  </div>
                  <h3 className="text-[12px] uppercase tracking-[0.25em] font-bold text-center group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    
    </div>
  );
}