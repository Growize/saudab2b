"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  MessageCircle, 
  Maximize2, 
  CheckCircle2, 
  Ruler,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from "lucide-react";

// --- Placeholder Images (Upload your 5 demo images to /public/products/) ---
const PRODUCT_IMAGES = [
  "/products/demo1.webp",
  "/products/demo2.webp",
  "/products/demo3.webp",
  "/products/demo4.webp",
  "/products/demo5.webp",
];

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [mainImage, setMainImage] = useState(PRODUCT_IMAGES[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 selection:bg-[#C5A059] selection:text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* --- BREADCRUMBS --- */}
        <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-12 font-bold">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/collections" className="hover:text-[#C5A059] transition-colors">Collections</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">Imperial Mauve Couture</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* --- LEFT: IMAGE GALLERY (ZOOM ENABLED) --- */}
          <div className="lg:col-span-7 space-y-6">
            <div 
              className="relative aspect-[4/5] w-full bg-[#F9F9F9] overflow-hidden cursor-zoom-in border border-gray-100 group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image 
                src={mainImage} 
                alt="Product View" 
                fill 
                className={`object-cover transition-transform duration-200 ${isZoomed ? 'scale-[2.5]' : 'scale-100'}`}
                style={isZoomed ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : {}}
                unoptimized
              />
              {!isZoomed && (
                <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-5 h-5 text-black" />
                </div>
              )}
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-4">
              {PRODUCT_IMAGES.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-[3/4] border-2 transition-all overflow-hidden ${mainImage === img ? 'border-[#C5A059]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <Image src={img} alt={`Thumb ${i}`} fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT DETAILS --- */}
          <div className="lg:col-span-5 space-y-10">
            <header className="space-y-4">
              <span className="text-[#C5A059] text-[11px] uppercase tracking-[0.6em] font-bold block">Exclusive Atelier Edition</span>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight text-black">
                Imperial Mauve <br /> <span className="italic font-light">Hand-Embroidered</span> Couture
              </h1>
            </header>

            <div className="space-y-6">
              <p className="text-gray-600 text-[15px] leading-relaxed text-justify [text-align-last:left]">
                Elevate your wardrobe with a masterpiece of sartorial excellence. This elegant abaya, rendered in a sophisticated deep mauve-taupe, is designed for the modern woman who values intricate craftsmanship and timeless silhouettes. Perfect for high-end events, Eid celebrations, or evening gatherings where making a subtle yet powerful statement is key.
              </p>
            </div>

            {/* Design Highlights */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-bold text-black">Design Highlights</h3>
              <ul className="space-y-4">
                {[
                  { t: "Exquisite Artistry", d: "Heavy, hand-stitched golden embroidery with delicate beadwork." },
                  { t: "Cinematic Silhouette", d: "Classic A-line cut for a graceful, fluid drape." },
                  { t: "Premium Fabric", d: "High-quality, breathable crepe-georgette." },
                  { t: "Coordinated Elegance", d: "Comes with a matching chiffon hijab." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] mt-1 shrink-0" />
                    <p className="text-[13px] text-gray-500"><strong className="text-black font-bold uppercase tracking-tighter mr-2">{item.t}:</strong> {item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- SPECIFICATION TABLE --- */}
            <div className="pt-8">
              <table className="w-full text-left text-[12px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-4 uppercase tracking-widest text-black">Feature</th>
                    <th className="pb-4 uppercase tracking-widest text-black">Description</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-50"><td className="py-4 font-bold text-black">Color</td><td className="py-4">Deep Mauve / Dusty Purple</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-4 font-bold text-black">Material</td><td className="py-4">Premium Korean Nida / Luxury Crepe</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-4 font-bold text-black">Embroidery</td><td className="py-4">Hand-applied Gold Zari and Beadwork</td></tr>
                  <tr className="border-b border-gray-50"><td className="py-4 font-bold text-black">Included</td><td className="py-4">Abaya and Matching Hijab</td></tr>
                </tbody>
              </table>
            </div>

            {/* --- ACTIVE STANDARD SIZE GUIDE --- */}
            <div className="p-8 bg-white border-2 border-[#C5A059]/20 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-[12px] uppercase tracking-[0.4em] font-bold text-black">Standard Size Guide</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">Active Selection</span>
              </div>
              
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                  <div 
                    key={size} 
                    className="py-3 border border-black bg-black text-white text-[10px] font-bold text-center transition-all cursor-default shadow-md"
                  >
                    {size}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-pulse" />
                <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-medium">
                  Tailored for a modest, loose-fitting silhouette.
                </p>
              </div>
            </div>
            {/* --- WHATSAPP B2B CTA --- */}
            <Link 
              href="https://wa.me/971544802041?text=Hello,%20I%20am%20interested%20in%20wholesale%20details%20for%20the%20Imperial%20Mauve%20Couture%20Abaya." 
              target="_blank"
              className="flex items-center justify-center gap-4 w-full py-6 bg-black text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-2xl active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire via WhatsApp B2B
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}