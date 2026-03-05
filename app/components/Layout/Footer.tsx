"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#001A4D] pt-24 text-white overflow-hidden border-t border-white/10">
      {/* Top Gold Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D4AF37]" />
      
      {/* Decorative Background Watermark */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.05] pointer-events-none">
        <div className="relative h-[450px] w-[450px]">
           <Image src="/logo.png" alt="watermark" fill className="object-contain" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-24 relative z-10">
        
        {/* Brand Column */}
        <div className="space-y-8">
          <Link href="/" className="relative h-10 w-40 block transition-transform active:scale-95">
            <Image 
              src="/logo-white.png" 
              alt="Dominion City Logo" 
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="text-slate-300 leading-relaxed text-sm font-normal max-w-[280px]">
            Raising Leaders that Transform Society. A global movement committed to your total spiritual and intellectual development.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#001A4D] transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {[
          {
            title: "The Mission",
            links: ['Global Chapters', 'Golden Heart Foundation', 'Dominion Business Network', 'Campus Fellowships']
          },
          {
            title: "Resources",
            links: ['Sermon Archive', 'Academy Portal', 'Leadership Summit', 'Online Giving']
          }
        ].map((col, idx) => (
          <div key={idx}>
            <h4 className="font-bold text-[#D4AF37] uppercase text-xs tracking-[0.2em] mb-10 border-l-2 border-[#D4AF37] pl-4">
              {col.title}
            </h4>
            <ul className="space-y-4 text-slate-200 text-[15px] font-medium">
              {col.links.map(link => (
                <li key={link} className="group flex items-center gap-2">
                  <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-200">{link}</Link>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:text-[#D4AF37] transition-all" />
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div className="space-y-8">
          <h4 className="font-bold text-[#D4AF37] uppercase text-xs tracking-[0.2em] mb-10 border-l-2 border-[#D4AF37] pl-4">
            Headquarters
          </h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4 text-sm text-slate-200 leading-relaxed">
              <MapPin size={20} className="text-[#D4AF37] shrink-0" />
              <span>112 Oladipo Diya St, Gudu,<br/> Abuja, Nigeria.</span>
            </div>
          
            <div className="flex items-center gap-4 text-sm text-slate-200">
              <Mail size={20} className="text-[#D4AF37]" />
              <span>info@dominioncity.global</span>
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3 font-bold">Stay Connected</p>
              <div className="flex border-b border-white/30 pb-2 focus-within:border-[#D4AF37] transition-all">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent flex-1 outline-none text-sm placeholder:text-slate-500" 
                />
                <button className="text-[#D4AF37] hover:scale-110 transition-transform">
                  <ArrowUpRight size={20}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#001133] py-10 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
            &copy; 2026 Dominion City Abuja HQ. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-bold text-slate-400">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">Terms</Link>
            <button onClick={scrollToTop} className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
              Back to top <ArrowUpRight size={14} className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}