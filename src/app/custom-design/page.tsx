"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Upload, Ruler, Scissors, MessageCircle, Info, Plus, ChevronRight } from "lucide-react";

export default function CustomDesignPage() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-40 pb-20">
      <div className="max-w-[1400px] mx-auto px-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#C5A059] font-bold mb-4 block">
              The Bespoke Atelier
            </span>
            <h1 className="text-5xl md:text-6xl font-serif italic text-black leading-tight">
              Bring Your <span className="text-[#C5A059]">Vision</span> to Life
            </h1>
            <p className="text-gray-500 text-sm mt-6 leading-relaxed max-w-lg uppercase tracking-widest font-medium">
              Submit your inspirations and measurements. Our master tailors in Dubai will craft a one-of-a-kind masterpiece tailored exclusively for you.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
              <span>Inspiration</span>
              <ChevronRight className="w-3 h-3" />
              <span>Details</span>
              <ChevronRight className="w-3 h-3" />
              <span>Atelier Review</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: THE FORM --- */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* 1. Image Upload Section */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">01</div>
                <h2 className="text-[12px] uppercase tracking-[0.3em] font-bold">Referral Image & Inspiration</h2>
              </div>
              
              <div 
                className={`relative border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center py-16 px-6 cursor-pointer
                  ${dragActive ? "border-[#C5A059] bg-[#C5A059]/5" : "border-gray-200 bg-[#FAFAFA] hover:border-gray-400"}`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
              >
                <Upload className="w-8 h-8 text-gray-300 mb-4 stroke-[1px]" />
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Drag & Drop Sketch or Photo</p>
                <p className="text-[10px] text-gray-400">High-resolution PNG or JPG preferred</p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </section>

            {/* 2. Fabric & Specifications */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">02</div>
                <h2 className="text-[12px] uppercase tracking-[0.3em] font-bold">Fabric & Material Choice</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Fabric Type</label>
                  <select className="w-full bg-[#FAFAFA] border border-gray-100 p-4 text-[12px] focus:outline-none focus:border-[#C5A059] appearance-none">
                    <option>Premium Nida Silk</option>
                    <option>Japanese Crepe</option>
                    <option>French Organza</option>
                    <option>Linen Blend</option>
                    <option>Other (Specify in Instructions)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Quantity</label>
                  <div className="flex items-center border border-gray-100 bg-[#FAFAFA]">
                    <button className="px-4 py-4 hover:text-[#C5A059] transition-colors"><Plus className="w-4 h-4" /></button>
                    <input type="number" defaultValue={1} className="w-full bg-transparent text-center text-sm font-bold focus:outline-none" />
                    <button className="px-4 py-4 hover:text-[#C5A059] transition-colors"><Plus className="w-4 h-4 rotate-45" /></button>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Measurements */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">03</div>
                <h2 className="text-[12px] uppercase tracking-[0.3em] font-bold">Size & Measurements (Inches)</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Length", "Shoulder", "Bust", "Sleeve"].map((label) => (
                  <div key={label} className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">{label}</label>
                    <input type="text" placeholder="--" className="w-full bg-[#FAFAFA] border border-gray-100 p-4 text-[12px] focus:outline-none focus:border-[#C5A059]" />
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Special Instructions */}
            <section className="bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">04</div>
                <h2 className="text-[12px] uppercase tracking-[0.3em] font-bold">Special Instructions</h2>
              </div>
              <textarea 
                rows={5}
                placeholder="Describe any specific embroidery patterns, button styles, or modifications..."
                className="w-full bg-[#FAFAFA] border border-gray-100 p-6 text-[12px] focus:outline-none focus:border-[#C5A059] resize-none"
              />
            </section>

            <button className="w-full bg-black text-white py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-xl">
              Submit Bespoke Request
            </button>
          </div>

          {/* --- RIGHT COLUMN: INFO & PROCESS --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-40 space-y-8">
              <div className="bg-[#1a1a1a] text-white p-10 lg:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Scissors className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-serif italic mb-6 relative z-10">What happens next?</h3>
                <ul className="space-y-8 relative z-10">
                  {[
                    { t: "Atelier Review", d: "Our Dubai design team reviews your sketch and fabric choice within 24 hours." },
                    { t: "WhatsApp Consultation", d: "You will receive a notification to finalize measurements and pricing via WhatsApp." },
                    { t: "Master Tailoring", d: "Production begins in our Ajman atelier with weekly status updates." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-6">
                      <span className="text-[#C5A059] font-bold text-[11px]">0{i+1}</span>
                      <div>
                        <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">{item.t}</h4>
                        <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-widest">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#C5A059]/5 border border-[#C5A059]/20 p-8 flex items-start gap-4">
                <Info className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose">
                  Bespoke orders typically require <span className="text-black font-bold">14-21 days</span> for production and shipping. Pricing depends on fabric complexity and embroidery details.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}