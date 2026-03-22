"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Wind, Sparkles, MapPin, ChevronDown } from "lucide-react";

export default function AtelierHeritage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* --- HERO: THE SOUL OF SAUDA --- */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/slide04.webp" // Use a wide-angle workshop or atmospheric shot
            alt="The Atelier" 
            fill 
            className="object-cover opacity-80"
            unoptimized 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white z-10" />

        <div className="relative z-20 text-center space-y-8 max-w-4xl px-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] text-[12px] uppercase tracking-[0.8em] font-bold block"
          >
            Since 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-serif text-white italic font-light leading-tight"
          >
            The <span className="text-white not-italic font-bold">Atelier</span> <br /> 
            <span className="text-[0.6em] tracking-[0.2em] uppercase font-sans">Heritage</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12"
          >
            <ChevronDown className="w-8 h-8 text-white mx-auto animate-bounce opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 01: THE PHILOSOPHY --- */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[3/4] group overflow-hidden">
            <Image 
              src="/embrodery.webp" 
              alt="Hand-stitching" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              unoptimized 
            />
            <div className="absolute inset-0 border-[20px] border-white/10 m-6" />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[#C5A059] text-[11px] uppercase tracking-[0.4em] font-bold">The Vision</span>
              <h2 className="text-5xl font-serif leading-tight text-black">A Dialogue of <br /> <span className="italic font-light">Thread & Silk</span></h2>
            </div>
            <p className="text-gray-500 leading-loose tracking-wide text-sm font-medium">
              SAUDA was founded on a singular promise: to preserve the dignity of traditional Emirati craftsmanship while redefining it for the modern global stage. Our journey began in a small atelier in Ajman, driven by the belief that modesty and high-fashion are not parallel lines, but a singular, elegant intersection.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-6">
              <div className="space-y-3">
                <Compass className="w-5 h-5 text-[#C5A059] stroke-[1px]" />
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Authentic Roots</h4>
                <p className="text-[10px] text-gray-400 leading-relaxed uppercase">Designed & manufactured <br/> entirely in the UAE.</p>
              </div>
              <div className="space-y-3">
                <Wind className="w-5 h-5 text-[#C5A059] stroke-[1px]" />
                <h4 className="text-[11px] uppercase tracking-widest font-bold">Slow Luxury</h4>
                <p className="text-[10px] text-gray-400 leading-relaxed uppercase">Small batch production <br/> to ensure zero waste.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: THE PROCESS (Horizontal Layout) --- */}
      <section className="py-32 bg-[#F7F3EB]">
        <div className="max-w-[1600px] mx-auto px-10">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif italic">The Art of <span className="not-italic font-bold text-[#C5A059]">Patient</span> Craft</h2>
            <div className="w-20 h-[1px] bg-[#C5A059] mx-auto opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { 
                step: "01", 
                title: "Sourcing", 
                desc: "We traverse the globe for the finest Italian silks and Japanese crepes, selecting fibers that breathe with the wearer." 
              },
              { 
                step: "02", 
                title: "Embroidery", 
                desc: "A single SAUDA abaya can take up to 45 hours of hand-stitching, using techniques passed down through generations." 
              },
              { 
                step: "03", 
                title: "Finishing", 
                desc: "Every seam is inspected in our Ajman atelier. We don't ship products; we ship masterpieces." 
              }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="relative bg-white p-12 shadow-sm border border-[#E8E2D5] space-y-6"
              >
                <span className="text-7xl font-serif opacity-[0.05] absolute top-8 right-8 pointer-events-none">{phase.step}</span>
                <Sparkles className="w-6 h-6 text-[#C5A059] stroke-[1px]" />
                <h3 className="text-sm uppercase tracking-[0.4em] font-bold">{phase.title}</h3>
                <p className="text-gray-500 text-[11px] leading-loose tracking-widest uppercase">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 03: THE LOCATION --- */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-10 text-center space-y-12">
          <MapPin className="w-8 h-8 text-[#C5A059] mx-auto stroke-[1px]" />
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">Headquartered in <br/> <span className="text-[#C5A059]">Dubai</span>, UAE</h2>
          <p className="text-gray-400 text-sm leading-loose max-w-2xl mx-auto tracking-wide">
            Our atelier serves as a bridge between East and West. Located in the heart of the global fashion logistics hub, we ensure that the craftsmanship of the Middle East reaches boutiques in London, Paris, and Milan within days.
          </p>
          <div className="pt-10">
             <button className="px-12 py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-2xl active:scale-95">
               Visit Our Showroom
             </button>
          </div>
        </div>
      </section>

    </div>
  );
}