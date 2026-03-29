"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ArrowUp } from "lucide-react";
import WhatsappLogo from "@/app/whatsapp-logo.png";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 1. Scroll Listener Logic
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);

    // 2. Popup "Show Once" Logic
    const hasSeenPopup = localStorage.getItem("sauda_b2b_popup_seen");
    
    let popupTimer: NodeJS.Timeout;
    if (!hasSeenPopup) {
      popupTimer = setTimeout(() => {
        setShowPopup(true);
      }, 4000); 
    }

    // 3. Cleanup all listeners and timers
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (popupTimer) clearTimeout(popupTimer);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    // Mark as seen so it doesn't annoy the visitor again
    localStorage.setItem("sauda_b2b_popup_seen", "true");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    localStorage.setItem("sauda_b2b_popup_seen", "true");
    
    // Brief delay before closing to show the success state
    setTimeout(handleClosePopup, 2500);
  };

  if (!mounted) return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={handleClosePopup} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            
            {/* Main Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="relative w-full max-w-[850px] flex flex-col md:flex-row min-h-[480px] overflow-hidden rounded-sm bg-white shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={handleClosePopup} 
                className="absolute top-6 right-6 z-30 p-2 text-gray-400 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Restored to your Brand Aesthetic */}
              <div className="hidden md:block w-5/12 relative bg-gray-100">
                <Image 
                  src="/cat1.webp" 
                  alt="Sauda Couture" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  unoptimized 
                />
              </div>

              {/* Right Column: Form Content */}
              <div className="flex-1 p-10 md:p-16 flex flex-col justify-center bg-white">
                {!isSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-bold block mb-4">The 2026 Atelier</span>
                      <h2 className="text-4xl font-serif italic text-black leading-tight">
                        Sauda Couture <br />
                        <span className="not-italic font-bold text-[#C5A059]">B2B Access</span>
                      </h2>
                    </div>
                    
                    <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest leading-relaxed">
                      Join our inner circle for seasonal drops, <br /> wholesale updates, and exclusive news.
                    </p>

                    <div className="space-y-6">
                      <input 
                        type="email" 
                        required 
                        placeholder="YOUR BUSINESS EMAIL" 
                        className="w-full bg-transparent border-b border-gray-200 py-4 text-[11px] font-bold tracking-widest outline-none focus:border-[#C5A059] transition-colors text-black placeholder:text-gray-300" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                      <button 
                        type="submit" 
                        className="w-full bg-black text-white py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] transition-all shadow-lg active:scale-[0.98]"
                      >
                        Join the Atelier
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <Star className="w-12 h-12 text-[#C5A059] mx-auto animate-pulse" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif italic text-black uppercase tracking-widest">Welcome.</h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Your request is being processed.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {children}

      {/* WhatsApp & Scroll Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-[999]">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: 10 }} 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="bg-white border border-gray-100 p-4 rounded-full shadow-xl text-gray-400 hover:text-[#C5A059] transition-all group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <a 
          href="https://wa.me/971544802041" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 transition-transform active:scale-95 drop-shadow-2xl"
        >
          <Image src={WhatsappLogo} alt="WhatsApp" width={65} height={65} unoptimized />
        </a>
      </div>
    </>
  );
}