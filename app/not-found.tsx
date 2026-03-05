"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Heart, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 overflow-hidden relative">
      
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#003399]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        
        {/* 2. ICON & 404 TEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 rounded-[2rem] mb-8 text-[#D4AF37] shadow-inner">
            <Search size={40} strokeWidth={1.5} />
          </div>
          <h1 className="text-[12rem] md:text-[16rem] font-serif font-bold text-[#003399]/5 leading-none absolute inset-0 -z-10 select-none">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#003399] mb-6">
            Even the best <br />
            <span className="italic text-[#D4AF37]">get lost</span> sometimes.
          </h2>
          <p className="text-slate-400 max-w-md mx-auto font-medium leading-relaxed">
            The page you're looking for has moved to a higher calling (or just doesn't exist anymore). Don't worry, we'll help you find your way back home.
          </p>
        </motion.div>

        {/* 3. FRIENDLY NAVIGATION OPTIONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-16"
        >
          <Link href="/" className="group flex items-center gap-4 p-6 bg-[#003399] rounded-3xl text-left hover:shadow-2xl hover:shadow-[#003399]/20 transition-all">
            <div className="p-3 bg-white/10 rounded-2xl text-white group-hover:scale-110 transition-transform">
              <Home size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Go to Homepage</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-black">Back to Start</p>
            </div>
          </Link>

          <Link href="/contact" className="group flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-3xl text-left hover:border-[#D4AF37] hover:shadow-xl transition-all">
            <div className="p-3 bg-[#D4AF37]/10 rounded-2xl text-[#D4AF37] group-hover:scale-110 transition-transform">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[#003399] font-bold text-sm">Visit a Campus</p>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black">Find Us Nearby</p>
            </div>
          </Link>
        </motion.div>

        {/* 4. FOOTER NOTE */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-slate-300 font-bold uppercase text-[10px] tracking-[0.3em]"
        >
          <Heart size={12} className="text-red-400 fill-red-400" />
          <span>Built with love by Dominion City Abuja</span>
        </motion.div>

      </div>
    </div>
  );
}