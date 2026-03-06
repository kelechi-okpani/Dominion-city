"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import HeroImg from "@/public/asset/pij.jpg";


export default function ResidentPastorSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* 1. IMAGE SIDE (Swapped to Left for visual balance) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Main Portrait Frame */}
         <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square border-[12px] border-slate-50 z-10">
            <Image 
                src={HeroImg} 
                alt="Pastor Ijedinma Nwankwo" 
                fill // This makes it fill the container
                placeholder="blur" // Adds a nice blur-up effect while loading
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/40 to-transparent pointer-events-none" />
            </div>

          {/* Decorative Gold Element */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0" />
          
          {/* Floating Experience Badge */}
          <div className="absolute top-10 -left-10 bg-white shadow-xl p-6 rounded-2xl z-20 hidden md:block border border-slate-100">
            <p className="text-[#003399] font-black text-3xl italic">2026</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Soaring On Eagles WIngs</p>
          </div>
        </motion.div>

        {/* 2. TEXT SIDE */}
      <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
            >
          <div className="space-y-4">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs flex items-center gap-2">
              <div className="w-8 h-px bg-[#D4AF37]" /> The Shepherd's Heart
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#003399] tracking-tight">
              Pastor Ijedinma <br /> Nwankwo
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Resident Pastor, DC Gudu</p>
          </div>

          <div className="relative">
            <Quote className="absolute -top-4 -left-6 text-slate-100" size={60} />
            <p className="text-base md:text-xl text-slate-600 font-light italic leading-relaxed relative z-10">
              "Our mandate is simple yet profound: to raise a people who carry 
              the fragrance of God's presence into every sector of human endeavor. 
              At Gudu, we don't just attend church; we embody the Kingdom."
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
              Known for her deep apostolic insight and motherly grace, Pastor Ijedinma 
              leads the Gudu family with a relentless focus on spiritual maturity, 
              excellence, and the restoration of the New Testament order.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-[#003399] text-white px-8 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#D4AF37] transition-colors shadow-lg shadow-[#003399]/20">
                Read Full Bio
              </button>
              <button className="flex items-center gap-3 text-[#003399] font-bold uppercase text-[10px] tracking-[0.2em] group px-6">
                Watch Messages <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}