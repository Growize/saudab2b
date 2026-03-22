"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, ArrowRight, Building2, Send } from "lucide-react";

export default function B2BContact() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans pt-24">
      
      {/* --- HEADER SECTION --- */}
      <section className="py-20 px-10 bg-[#F7F3EB] border-b border-[#E8E2D5]">
        <div className="max-w-[1600px] mx-auto text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] text-[11px] uppercase tracking-[0.6em] font-bold block"
          >
            Global Partnership
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif italic font-light"
          >
            Contact the <span className="not-italic font-bold">Atelier</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-[11px] uppercase tracking-[0.3em] text-gray-500 leading-loose"
          >
            Our dedicated B2B team is available for wholesale inquiries, regional distribution, and bespoke couture commissions.
          </motion.p>
        </div>
      </section>

      {/* --- FORM & INFO SECTION --- */}
      <section className="py-24 max-w-[1600px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Global Presence */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-10">
              <h2 className="text-3xl font-serif italic border-b border-gray-100 pb-6 text-[#C5A059]">Global Offices</h2>
              
              {/* UAE Office */}
              <div className="space-y-4 group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#F7F3EB] flex items-center justify-center text-[#C5A059]">
                      <MapPin className="w-4 h-4" />
                   </div>
                   <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold">Headquarters • UAE</h3>
                </div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-loose pl-14">
                  SAUDA Atelier, Industrial Area 1,<br /> Ajman, United Arab Emirates
                </p>
                <p className="text-[11px] font-bold pl-14 tracking-widest">+971 (0) 50 123 4567</p>
              </div>

              {/* European Distribution */}
              <div className="space-y-4 group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#F7F3EB] flex items-center justify-center text-[#C5A059]">
                      <Globe className="w-4 h-4" />
                   </div>
                   <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold">Distribution • Europe</h3>
                </div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-loose pl-14">
                  Mayfair Showroom, London, UK<br /> (By Appointment Only)
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-10 bg-[#FAFAFA] border border-gray-100 space-y-6">
               <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#C5A059]">Direct Channels</h4>
               <div className="space-y-4">
                  <a href="mailto:wholesale@saudacouture.com" className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold hover:text-[#C5A059] transition-colors">
                    <Mail className="w-4 h-4" /> wholesale@saudacouture.com
                  </a>
                  <a href="#" className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold hover:text-[#C5A059] transition-colors">
                    <Phone className="w-4 h-4" /> Request a Callback
                  </a>
               </div>
            </div>
          </div>

          {/* Right: The B2B Inquiry Form */}
          <div className="lg:col-span-7 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.04)] border border-gray-50 p-10 md:p-16">
            <div className="mb-12 space-y-2">
              <h2 className="text-3xl font-serif">Inquiry <span className="italic font-light">Form</span></h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Response time: Within 24 Business Hours</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent outline-none text-[11px] uppercase tracking-widest" placeholder="YOUR NAME" />
                </div>
                <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Company Website</label>
                  <input type="text" className="w-full bg-transparent outline-none text-[11px] uppercase tracking-widest" placeholder="WWW.BOUTIQUE.COM" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Business Email</label>
                  <input type="email" className="w-full bg-transparent outline-none text-[11px] uppercase tracking-widest" placeholder="EMAIL@BUSINESS.COM" />
                </div>
                <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Region</label>
                  <select className="w-full bg-transparent outline-none text-[11px] uppercase tracking-widest text-gray-400">
                    <option>SELECT MARKET</option>
                    <option>GCC / MIDDLE EAST</option>
                    <option>EUROPEAN UNION</option>
                    <option>UNITED KINGDOM</option>
                    <option>NORTH AMERICA</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Estimated Annual Volume (Units)</label>
                  <select className="w-full bg-transparent outline-none text-[11px] uppercase tracking-widest text-gray-400">
                    <option>50 - 200 UNITS</option>
                    <option>200 - 500 UNITS</option>
                    <option>500 - 1000+ UNITS</option>
                    <option>BESPOKE / COUTURE ONLY</option>
                  </select>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">Message / Inquiry Details</label>
                <textarea rows={4} className="w-full bg-[#FAFAFA] border border-gray-50 p-4 outline-none text-[11px] tracking-widest mt-2" placeholder="PLEASE DESCRIBE YOUR INTEREST IN SAUDA COUTURE..."></textarea>
              </div>

              <button className="w-full bg-black text-white py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group">
                Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-24 border-t border-gray-50 text-center">
         <h3 className="text-[11px] uppercase tracking-[0.6em] text-gray-400 mb-8">Prefer Instant Communication?</h3>
         <button className="px-10 py-4 border-2 border-black text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-black hover:text-white transition-all">
           Connect via WhatsApp B2B
         </button>
      </section>

    </div>
  );
}