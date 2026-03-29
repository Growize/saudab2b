"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Filter } from "lucide-react";

const ALL_PRODUCTS = [
  { id: "classic-noir-abaya", name: "Classic Noir Abaya", img: "/cat1.webp", category: "Signature" },
  { id: "gold-threaded-silk", name: "Gold Threaded Silk", img: "/cat2.webp", category: "Evening" },
  { id: "sand-dune-linen", name: "Sand-Dune Linen", img: "/cat3.webp", category: "Essential" },
  { id: "bridal-organza", name: "Bridal Organza", img: "/cat6.webp", category: "Couture" },
  { id: "raw-silk-kimono", name: "Raw Silk Kimono", img: "/cat1.webp", category: "New Arrival" },
  { id: "midnight-crepe", name: "Midnight Crepe", img: "/cat4.webp", category: "Signature" },
];

export default function CollectionsPage() {
  return (
    <div className="pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-[1800px] mx-auto px-10">
        
        {/* --- HEADER & BREADCRUMBS --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">
              <Link href="/" className="hover:text-[#C5A059]">Home</Link> 
              <ChevronRight className="w-3 h-3" />
              <span className="text-black">All Collections</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-serif italic text-black">
              The <span className="text-[#C5A059]">Atelier</span> Edit
            </h1>
          </div>
          
          <button className="flex items-center gap-3 px-8 py-4 border border-gray-100 text-[11px] uppercase tracking-[0.3em] font-bold hover:border-[#C5A059] transition-all">
            <Filter className="w-4 h-4" /> Filter By
          </button>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {ALL_PRODUCTS.map((product, i) => (
            <Link href={`/product/${product.id}`} key={i} className="group cursor-pointer">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F9F9F9] mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    unoptimized 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/80 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-center text-black">
                      View Details
                    </p>
                  </div>
                </div>

                {/* Product Info (Price Section Removed) */}
                <div className="text-center space-y-2">
                  <p className="text-[#C5A059] text-[9px] uppercase tracking-[0.4em] font-bold">
                    {product.category}
                  </p>
                  <h3 className="text-[13px] uppercase tracking-[0.2em] font-bold text-black group-hover:text-[#C5A059] transition-colors">
                    {product.name}
                  </h3>
                  {/* Elegant decorative line for B2B aesthetic */}
                  <div className="flex flex-col items-center pt-3">
                    <div className="w-8 h-[1px] bg-gray-200 group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}