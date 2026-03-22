"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, Mail, Globe, CheckCircle2 } from "lucide-react";

export default function WholesalePortal() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7F3EB] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Decor - Subtle Monstera Watermark */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none">
        <Image src="/monstera-bg2.png" alt="" fill className="object-contain object-right-top scale-125" unoptimized />
      </div>

      {/* Main Portal Card */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.07)] rounded-sm overflow-hidden relative z-10">
        
        {/* Left Side: Brand Imagery */}
        <div className="relative hidden md:block bg-black overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-70"
          >
            <Image src="/slide02.webp" alt="Sauda Atelier" fill className="object-cover" unoptimized />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block underline underline-offset-8">Partnership</span>
            <h2 className="text-3xl font-serif leading-tight mb-4">The Global <br />Showroom</h2>
            <p className="text-[11px] uppercase tracking-widest text-gray-300 leading-relaxed">
              Access exclusive B2B pricing, real-time stock availability, and priority production scheduling.
            </p>
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center md:text-left">
            <Image src="/logo.png" alt="SAUDA" width={110} height={35} className="mb-8 mx-auto md:mx-0" unoptimized />
            <h1 className="text-2xl font-serif italic mb-2">
              {isLogin ? "Welcome Back" : "Partner Application"}
            </h1>
            <p className="text-[11px] text-gray-400 uppercase tracking-widest">
              {isLogin ? "Authorized Personnel Only" : "Register for B2B Distribution"}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form 
                key="login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Business Email
                  </label>
                  <input type="email" placeholder="atelier@boutique.com" className="w-full bg-transparent text-sm outline-none py-2 font-medium" />
                </div>
                
                <div className="space-y-2 border-b border-gray-100 pb-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 flex items-center gap-2">
                    <Lock className="w-3 h-3" /> Access Key
                  </label>
                  <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm outline-none py-2 font-medium tracking-widest" />
                </div>

                <button className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-xl group">
                  Enter Showroom <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="register"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <input type="text" placeholder="COMPANY NAME" className="w-full border-b border-gray-100 py-3 text-[11px] outline-none tracking-widest" />
                <input type="text" placeholder="TRADE LICENSE NO." className="w-full border-b border-gray-100 py-3 text-[11px] outline-none tracking-widest" />
                <select className="w-full border-b border-gray-100 py-3 text-[11px] outline-none tracking-widest bg-transparent text-gray-400">
                  <option>REGIONAL MARKET (GCC / EU / US)</option>
                  <option>UNITED ARAB EMIRATES</option>
                  <option>EUROPEAN UNION</option>
                  <option>UNITED KINGDOM</option>
                </select>
                <input type="email" placeholder="BUSINESS EMAIL" className="w-full border-b border-gray-100 py-3 text-[11px] outline-none tracking-widest" />
                
                <button className="w-full bg-[#C5A059] text-white py-5 text-[11px] uppercase tracking-[0.3em] font-bold shadow-lg mt-4">
                  Request Credentials
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 pt-8 border-t border-gray-50 flex flex-col items-center gap-4">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-black transition-colors"
            >
              {isLogin ? "Don't have an account? Apply Here" : "Existing Partner? Secure Login"}
            </button>
            <div className="flex gap-4">
               <span className="text-[9px] text-gray-300 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> SSL Secured</span>
               <span className="text-[9px] text-gray-300 uppercase tracking-widest flex items-center gap-1"><Globe className="w-3 h-3" /> Global B2B</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Link */}
      <a href="/" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-[#C5A059] transition-all">
        ← Return to Atelier
      </a>
    </div>
  );
}