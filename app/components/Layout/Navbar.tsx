"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
     { name: 'Chapters', href: '/satellite' },
    { name: 'Give', href: '/give' },
    { name: 'The Academy', href: '/academy' },
    { name: 'Programs', href: '/programs' },
   
    { name: 'Media Hub', href: '/media' },
    { name: 'Missions', href: '/missions' },
 
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled || isMenuOpen 
          ? 'bg-white py-4 shadow-md border-b border-slate-100' 
          : 'bg-transparent py-6 md:py-8 '
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="relative h-9 w-36 sm:h-11 sm:w-44 transition-transform active:scale-95">
            <Image 
              src={(isScrolled || isMenuOpen) ? "/logo.png" : "/logo-white.png"}
              alt="Dominion City Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          
          {/* Desktop Links (Right-aligned for Desktop) */}
          <div className={`hidden lg:flex items-center gap-8 font-bold text-[11px] uppercase tracking-[0.2em] ${
            isScrolled ? 'text-[#003399]' : 'text-[#003399]'
          }`}>
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="hover:text-[#D4AF37] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all group-hover:w-full" />
              </Link>
            ))}
          <Link href="/join" className="inline-block">
              <button className={`px-7 py-3 cursor-pointer rounded-full transition-all shadow-lg font-black uppercase tracking-tighter text-[10px] ${
                  isScrolled 
                  ? 'bg-[#003399] text-white hover:bg-[#D4AF37]' 
                  : 'bg-[#D4AF37] text-white hover:bg-white hover:text-[#003399]'
                }`}>
                Join the Family
              </button>
          </Link>
          </div>

          {/* Mobile Actions */}
          <div className={`flex lg:hidden items-center gap-5 ${
            (isScrolled || isMenuOpen) ? 'text-[#003399]' : 'text-white'
          }`}>
             <Search size={22} strokeWidth={2.5} />
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
               {isMenuOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
             </button>
          </div>
        </div>

        {/* Mobile Dropdown (Left-Aligned Content) */}
        <div className={`absolute top-full left-0 w-full bg-white border-b border-slate-100 transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-5 opacity-0 invisible'
        }`}>
          <div className="flex flex-col px-8 py-10 gap-0">
            {navLinks.map((item, index) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between py-5 border-b border-slate-50 last:border-none"
              >
                <span className="text-[#003399] text-base font-black uppercase tracking-[0.15em] group-hover:text-[#D4AF37] transition-colors">
                  {item.name}
                </span>
                <ChevronRight className="text-slate-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" size={18} />
              </Link>
            ))}
            
            <div className="mt-10 space-y-4">
               <button className="bg-[#003399] text-white w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-blue-900/10 active:scale-[0.98] transition-transform">
                 Join the Family
               </button>
               <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                 Abuja Headquarters
               </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Dimmer */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-[90] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}