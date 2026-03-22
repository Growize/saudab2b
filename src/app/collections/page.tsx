"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // --- CRITICAL FOR ROUTING ---
import { motion } from "framer-motion";
import { LayoutGrid, List, Filter } from "lucide-react";

const PRODUCTS = [
  { id: "signature-noir", name: "Signature Noir Abaya", fabric: "Italian Silk", price: "1,200 AED", img: "/cat1.webp" },
  { id: "desert-wrap", name: "Desert Sand Wrap", fabric: "Premium Linen", price: "950 AED", img: "/cat2.webp" },
  { id: "midnight-crepe", name: "Midnight Crepe", fabric: "Korean Crepe", price: "1,450 AED", img: "/cat3.webp" },
  { id: "pearl-organza", name: "Pearl Organza", fabric: "Silk Organza", price: "2,100 AED", img: "/cat4.webp" },
  { id: "emirati-gold", name: "Emirati Gold Silk", fabric: "Raw Silk", price: "3,200 AED", img: "/cat5.webp" },
  { id: "linen-essential", name: "Linen Essential", fabric: "Organic Linen", price: "1,100 AED", img: "/cat6.webp" },
];

export default function CollectionsPage() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[1800px] mx-auto px-10">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-serif italic mb-4">The Atelier <span className="not-italic font-bold text-[#C5A059]">Gallery</span></h1>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">Professional B2B Sourcing • Global Distribution</p>
        </div>

        {/* Grid of Products */}
        <div className={`grid gap-10 ${viewType === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"}`}>
          {PRODUCTS.map((product) => (
            /* --- THE KEY CHANGE: LINKING TO THE DYNAMIC ID --- */
            <Link href={`/collections/${product.id}`} key={product.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group cursor-pointer bg-[#F9F9F9] p-4 border border-gray-50 shadow-sm"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    unoptimized 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black text-[10px] uppercase tracking-widest font-bold px-8 py-4 shadow-xl">
                      View Specifications
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-[12px] uppercase tracking-widest font-bold group-hover:text-[#C5A059] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-sans">{product.price}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}