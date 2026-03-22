"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Ruler, Truck, ShieldCheck, 
  Star, MessageCircle, ArrowLeft, Send
} from "lucide-react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeTab, setActiveTab] = useState("details");

  // This data would typically come from a database based on params.id
  const product = {
    name: "Signature Noir Abaya",
    price: "1,200 AED",
    sku: "SAU-26-001",
    fabric: "Italian Silk & Crepe",
    description: "A masterclass in silhouette. Our Signature Noir combines the weightless feel of Italian silk with the structural integrity of premium Korean crepe.",
    features: ["Hand-stitched hems", "Hidden side pockets", "Breathable fabric", "B2B Tier 1 pricing available"],
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 font-sans">
      <div className="max-w-[1600px] mx-auto px-10">
        
        {/* --- BREADCRUMBS (Connecting back to Home/Collections) --- */}
        <nav className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-12">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/collections" className="hover:text-black">Collections</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#C5A059] font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Product Imagery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[3/4] bg-[#F9F9F9] overflow-hidden group">
              <Image src="/cat1.webp" alt={product.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" priority unoptimized />
            </div>
          </div>

          {/* Right: Product Details & Inquiry */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40 h-fit">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">B2B Showroom</span>
              <h1 className="text-4xl md:text-5xl font-serif italic">{product.name}</h1>
              <p className="text-2xl font-light">{product.price}</p>
            </div>

            <p className="text-gray-500 text-sm leading-loose font-medium">{product.description}</p>

            {/* Selection */}
            <div className="space-y-6">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                <span>Select Size</span>
                <button className="text-[#C5A059] flex items-center gap-2 underline underline-offset-4"><Ruler className="w-3 h-3" /> Size Guide</button>
              </div>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`w-14 h-14 border text-[11px] font-bold transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-100 hover:border-black'}`}>{size}</button>
                ))}
              </div>
            </div>

            {/* B2B Action */}
            <div className="flex flex-col gap-4 pt-6">
              <button className="w-full bg-black text-white py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all shadow-2xl flex items-center justify-center gap-4">
                Wholesale Inquiry <Send className="w-4 h-4" />
              </button>
              <Link href="/wholesale" className="w-full border border-gray-200 py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:border-black transition-all text-center">B2B Portal Login</Link>
            </div>

            {/* Tabs */}
            <div className="pt-10 border-t border-gray-100">
               <div className="flex gap-8 mb-6">
                  {['details', 'shipping'].map(t => (
                    <button key={t} onClick={() => setActiveTab(t)} className={`text-[10px] uppercase tracking-widest font-bold ${activeTab === t ? 'text-black border-b-2 border-[#C5A059]' : 'text-gray-300'}`}>{t}</button>
                  ))}
               </div>
               <div className="text-[11px] text-gray-500 uppercase tracking-widest leading-loose">
                  {activeTab === 'details' ? product.features.map((f, i) => <div key={i}>• {f}</div>) : "Express 5-day delivery to UK, EU, and GCC countries."}
               </div>
            </div>
          </div>
        </div>

        {/* --- RELATED PRODUCTS: COMPLETE THE LOOK (Fully Linked) --- */}
      <section className="mt-32 pt-24 border-t border-gray-100 bg-[#F9F9F9] -mx-10 px-10">
        <div className="max-w-[1600px] mx-auto pb-32">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold block italic">
                You May Also Like
              </span>
              <h2 className="text-4xl font-serif italic font-light text-black">
                Complete the <span className="not-italic font-bold">Look</span>
              </h2>
            </div>
            <Link 
              href="/collections" 
              className="text-[11px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
            >
              View Full Archive
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { id: "desert-wrap", name: "Desert Sand Wrap", price: "950 AED", img: "/cat2.webp" },
              { id: "midnight-crepe", name: "Midnight Crepe", price: "1,450 AED", img: "/cat3.webp" },
              { id: "pearl-organza", name: "Pearl Organza", price: "2,100 AED", img: "/cat4.webp" },
              { id: "emirati-gold", name: "Emirati Gold Silk", price: "3,200 AED", img: "/cat5.webp" },
            ].map((item, i) => (
              /* --- DYNAMIC LINK WRAPPER --- */
              <Link 
                href={`/collections/${item.id}`} 
                key={i}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top on click
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  {/* Image Frame */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      unoptimized 
                    />
                    
                    {/* B2B Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                      <div className="bg-white text-black py-4 px-6 text-[9px] uppercase tracking-[0.4em] font-bold shadow-2xl group-hover:bg-[#C5A059] group-hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                        View Specifications
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="text-center space-y-2">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-sans tracking-tight">
                      {item.price}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}