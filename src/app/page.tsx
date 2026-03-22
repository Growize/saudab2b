"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Changed to Next.js Link for active routing
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, User, Search, ChevronLeft, ChevronRight,
  Truck, ShieldCheck, Globe, Star, ArrowRight, Instagram,
  MessageCircle, ArrowUp
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
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7500);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!mounted) return <div className="bg-white min-h-screen" />;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#C5A059] selection:text-white font-sans overflow-x-hidden relative">
      
      {/* --- GLOBAL NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1800px] mx-auto px-10 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-8">
            <Image src="/logo.png" alt="SAUDA" width={130} height={45} className="object-contain" unoptimized />
            <div className="hidden lg:block h-8 w-[1px] bg-gray-200" />
            <div className="hidden lg:block leading-tight">
              <span className="block text-[11px] font-serif tracking-[0.25em] text-[#C5A059] font-bold uppercase">Couture • B2B</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium tracking-widest">International</span>
            </div>
          </Link>

          {/* Navigation with Heritage Added & Active Links */}
          <div className="hidden md:flex items-center gap-14 text-[12px] uppercase tracking-[0.25em] font-semibold text-black/80">
            <Link href="/" className="relative group border-b-2 border-black pb-1">Home</Link>
            <Link href="/collections" className="hover:text-[#C5A059] transition-all duration-300">Collections</Link>
            <Link href="/heritage" className="hover:text-[#C5A059] transition-all duration-300">Heritage</Link>
            <Link href="/wholesale" className="hover:text-[#C5A059] transition-all duration-300">Wholesale</Link>
            <Link href="/contact" className="hover:text-[#C5A059] transition-all duration-300">Contact</Link>
          </div>

          <div className="flex items-center gap-7">
            <Search className="w-5 h-5 stroke-[1.2px] cursor-pointer hover:text-[#C5A059]" />
            <Link href="/wholesale"><User className="w-5 h-5 stroke-[1.2px] cursor-pointer hover:text-[#C5A059]" /></Link>
            <div className="relative cursor-pointer group">
              <ShoppingBag className="w-5 h-5 stroke-[1.2px] group-hover:text-[#C5A059]" />
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Overlay Removed for Clarity) --- */}
      <section className="relative pt-24 h-[85vh] w-full flex flex-col md:flex-row items-center overflow-hidden bg-white">
        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center px-12 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.18]">
            <Image src="/monstera-bg.png" alt="" fill className="object-contain object-left-bottom translate-x-[-8%] translate-y-[12%] scale-125" unoptimized />
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10">
            <h2 className="text-[12px] uppercase tracking-[0.6em] text-[#C5A059] mb-5 font-bold">The 2026 Atelier</h2>
            <h1 className="text-5xl lg:text-[5.5rem] font-serif leading-[1.05] mb-8 text-black">
              Timeless <br /> <span className="text-[#C5A059] italic font-light drop-shadow-sm">Modesty</span>
            </h1>
            <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-12 font-medium tracking-wide">
              Bespoke B2B solutions for luxury boutiques. Premium Emirati craftsmanship designed for global elegance.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/collections" className="px-12 py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-2xl active:scale-95">Shop Collection</Link>
              <Link href="/contact" className="text-[11px] uppercase tracking-[0.3em] font-bold border-b border-gray-300 pb-1 hover:border-black transition-all">Wholesale Inquiry</Link>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-full relative group bg-white overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.12, transition: { opacity: { duration: 1.5 }, scale: { duration: 9, ease: "linear" }}}}
              exit={{ opacity: 0, transition: { duration: 1.2 }}}
              className="absolute inset-0 w-full h-full"
            >
              <Image src={HERO_IMAGES[currentIndex]} alt="Sauda" fill className="object-cover object-top" priority unoptimized />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-12 right-12 text-[11px] uppercase tracking-[0.5em] text-white/90 drop-shadow-md z-10 font-bold">0{currentIndex + 1} / 05</div>
        </div>
      </section>

      {/* --- TRUST RIBBON --- */}
      <section className="py-12 bg-[#F7F3EB] border-y border-[#E8E2D5]">
        <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {[
            { icon: Globe, t: "Global Distribution", s: "UK • Europe • GCC" },
            { icon: ShieldCheck, t: "Couture Quality", s: "Premium Silk Blends" },
            { icon: Truck, t: "Priority Logistics", s: "5-Day Global Delivery" },
            { icon: Star, t: "Exclusive Designs", s: "Bespoke B2B Sourcing" },
          ].map((item, i) => (
            <div key={i} className="group flex items-center gap-6 cursor-default justify-center lg:justify-start px-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#C5A059] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-[#E8E2D5] group-hover:border-[#C5A059] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-[#C5A059] stroke-[1.2px]" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#1a1a1a] group-hover:text-[#C5A059] transition-colors duration-300">{item.t}</h3>
                <p className="text-[9px] text-[#8D8678] uppercase tracking-[0.15em] font-semibold mt-1">{item.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BEST SELLERS EDITORIAL GRID --- */}
      <section className="py-28 bg-[#FBFBFB] border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-10">
          
          {/* RESTORED HEADER */}
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-bold mb-4 block underline underline-offset-8">Market Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-light">
              The <span className="text-[#C5A059]">Bestseller</span> List
            </h2>
            <p className="mt-6 text-gray-400 text-[11px] uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
              Our most requested silhouettes by international retailers and global boutiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {BEST_SELLERS.map((item, i) => (
              /* --- CLICKABLE LINK WRAPPER --- */
              <Link href={`/collections/${item.id}`} key={i} className="group cursor-pointer">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-default"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-gray-50 mb-8">
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" unoptimized />
                    
                    {/* Market Indicator Overlay */}
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 backdrop-blur-md border border-[#C5A059]/30 px-4 py-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-pulse" />
                        <span className="text-[9px] uppercase tracking-widest font-bold text-black">{item.stats}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-10">
                      <button className="bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold px-8 py-4 shadow-2xl hover:bg-[#C5A059] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                        Product Specs
                      </button>
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold text-black/90 group-hover:text-[#C5A059] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[11px] text-gray-400 font-sans tracking-widest">{item.price}</span>
                      <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#C5A059] py-1 border-t border-[#C5A059]/20 w-1/3">
                        Wholesale Tier 1
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
       {/* --- HANDCRAFTED UAE --- */}
      <section className="py-16 bg-white border-t border-gray-100/50 overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Handcrafted in <br /> Dubai, <span className="text-[#C5A059] italic font-light">UAE</span></h2>
              <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-md">Every intricate pattern is hand-stitched by our master artisans, merging traditional Emirati techniques with modern high-fashion silhouettes.</p>
              <Link href="/heritage" className="inline-block px-12 py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-xl">Meet Artisans</Link>
            </div>
          </div>
        </div>
      </section>


      {/* --- COLLECTIONS GRID --- */}
      <section className="pt-28 pb-14 max-w-[1600px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-4 block underline underline-offset-8">Our Atelier</span>
          <h2 className="text-4xl font-serif italic font-light">Explore <span className="text-[#C5A059]">Collections</span></h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CATEGORIES.map((cat, i) => (
            <Link href={cat.link} key={i}>
              <motion.div whileHover={{ y: -12 }} className="group relative aspect-[3/4] overflow-hidden cursor-pointer shadow-lg bg-gray-50">
                <Image src={cat.img} alt={cat.name} fill className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 m-4">
                  <h3 className="text-lg uppercase tracking-[0.4em] font-light mb-6">{cat.name}</h3>
                  <button className="text-[10px] uppercase tracking-[0.3em] font-bold border border-white px-7 py-3 hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                    View Collection
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

{/* --- MASTER CHAMPAGNE B2B RETAILER VOICES (Trust Bar Size) --- */}
      <section className="py-12 bg-[#F7F3EB] border-y border-[#E8E2D5]">
        <div className="max-w-[1600px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Section Label (Light to contrast with cream bg) */}
          <div className="flex-shrink-0 border-r border-[#B08D4B]/20 pr-10 hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block">Partner</span>
            <span className="text-[14px] font-serif italic text-black">Testimonials</span>
          </div>

          {/* Rotating Testimonial Content */}
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} // Syncs with Hero timer
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-8 justify-center lg:justify-start"
              >
                {/* Stars are now gold to match the UAE and logo style */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.1, 1], // Shimmer effect on load
                        filter: ["drop-shadow(0px 0px 0px rgba(197, 160, 89, 0))", "drop-shadow(0px 0px 5px rgba(197, 160, 89, 0.5))", "drop-shadow(0px 0px 0px rgba(197, 160, 89, 0))"],
                        transition: { duration: 1, delay: i * 0.1, ease: "easeInOut" }
                      }}
                    >
                      <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial Quote (Text is standard SAUDA black) */}
                <p className="text-[11px] md:text-[13px] font-medium tracking-wide text-gray-700 italic max-w-2xl leading-relaxed">
                  {currentIndex === 0 && "“The quality of the silk blends is unmatched in the European market. Our boutiques in London sold out in 48 hours.”"}
                  {currentIndex === 1 && "“SAUDA's B2B portal made our seasonal ordering seamless. The 5-day delivery to Paris is a game changer.”"}
                  {currentIndex === 2 && "“Authentic Emirati craftsmanship that resonates perfectly with our high-end clientele in Milan.”"}
                  {currentIndex === 3 && "“Exceptional attention to detail in the embroidery. Truly the gold standard for luxury modesty.”"}
                  {currentIndex === 4 && "“A reliable partner for custom wholesale orders. Their lead times are the best in the UAE.”"}
                </p>

                {/* Testimonial Name (Text is light to contrast with cream bg) */}
                <div className="hidden md:flex flex-col border-l border-[#B08D4B]/20 pl-8">
                  <motion.span
                    animate={{
                      textShadow: ["0 0 0px #C5A059", "0 0 10px #C5A059", "0 0 0px #C5A059"], // Gold text-shadow shimmer
                      transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }
                    }}
                    className="text-[10px] font-bold uppercase tracking-widest text-black"
                  >
                    {currentIndex === 0 && "Elena V. • London"}
                    {currentIndex === 1 && "Marc A. • Paris"}
                    {currentIndex === 2 && "Sophia L. • Milan"}
                    {currentIndex === 3 && "Amira K. • Doha"}
                    {currentIndex === 4 && "Julian R. • Zurich"}
                  </motion.span>
                  <span className="text-[8px] text-[#C5A059] uppercase tracking-widest font-bold">Authorized Retailer</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- NEW ARRIVALS SECTION --- */}
      <section className="pt-14 pb-28 bg-[#FAFAFA] overflow-hidden border-t border-gray-100">
        <div className="max-w-[1800px] mx-auto px-10">
          
          {/* RESTORED HEADER */}
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-4 block italic">Seasonal Edit</span>
            <h2 className="text-4xl font-serif italic font-light">
              The <span className="text-[#C5A059]">New</span> Arrivals
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
          </div>

          <div className="relative group">
            {/* Scroll Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
              <button onClick={() => scroll("left")} className="p-5 border border-gray-200 hover:border-black transition-all rounded-full bg-white shadow-xl">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
              <button onClick={() => scroll("right")} className="p-5 border border-gray-200 hover:border-black transition-all rounded-full bg-white shadow-xl">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div ref={scrollRef} className="flex gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-10">
              {NEW_ARRIVALS.map((item, i) => (
                /* --- CLICKABLE LINK WRAPPER --- */
                <Link href={`/collections/${item.id}`} key={i} className="min-w-[85%] md:min-w-[24%] snap-start group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-white overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                    <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" unoptimized />
                    <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold border border-gray-100 shadow-sm">{item.tag}</span>
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <button className="w-full bg-black text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-colors">
                        View Specifications
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3 px-2 text-center">
                    <h3 className="text-[12px] uppercase tracking-[0.25em] font-bold group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
                    <div className="flex items-center justify-center gap-4">
                      <p className="text-[12px] text-gray-400 font-sans tracking-tight font-medium">{item.price}</p>
                      <div className="w-[1px] h-3 bg-gray-300" />
                      <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold italic">B2B Portal</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FLOATING BUTTONS --- */}
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
    </div>
  );
}