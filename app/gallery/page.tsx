"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, ArrowRight, Camera, ZoomIn, Heart } from 'lucide-react';
import { abujaHqMedia } from '../components/data/media';
import GlobalAtmosphereSlider from '../components/Gallery/GallerySection';
import Socials from '../components/socials';

export default function GalleryPage() {


  const col1 = [...abujaHqMedia].slice(0, 6);
  const col2 = [...abujaHqMedia].slice(6, 12);
  const col3 = [...abujaHqMedia].slice(11, 17);


  return (
    <div className="bg-white pt-32 pb-20 overflow-hidden">
      {/* 1. SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-3 text-[#D4AF37] mb-6"
        >
          <Camera size={18} />
          <span className="font-black uppercase tracking-[0.5em] text-[10px]">The Life of the City</span>
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#003399] mb-8 tracking-tighter">
          Abuja <span className="italic text-[#D4AF37]">Highlights.</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto font-medium text-sm leading-relaxed">
          Direct snapshots from our Gudu Headquarters. Witness the power of worship and the transformation of lives across our social platforms.
        </p>
      </div>


        <GlobalAtmosphereSlider/>


      {/* 2. DYNAMIC MARQUEE STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-forward {
          display: flex;
          width: max-content;
          animation: marquee-forward 70s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 90s linear infinite;
        }
        .animate-marquee-forward:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 3. TOP CAROUSEL (Moving Left - Tall Cards) */}
      <div className="relative py-4">
        <div className="animate-marquee-forward gap-8">
          {[...abujaHqMedia, ...abujaHqMedia].map((img, i) => (
            <div key={`forward-${i}`} className="relative w-[350px] h-[450px] md:w-[500px] md:h-[600px] rounded-[3.5rem] overflow-hidden group border border-slate-100 shadow-2xl bg-slate-50">
              <img 
                src={img} 
                alt="Dominion City Abuja Feed" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                 <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white font-black uppercase text-[10px] tracking-widest mb-1">HQ Archive</p>
                      <p className="text-[#D4AF37] font-serif italic text-lg">Gudu, Abuja</p>
                    </div>
                    <Facebook size={20} className="text-white hover:text-[#D4AF37] transition-colors" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. BOTTOM CAROUSEL (Moving Right - Cinematic Wide) */}
      <div className="relative py-12">
        <div className="animate-marquee-reverse gap-6">
          {[...abujaHqMedia].reverse().concat([...abujaHqMedia].reverse()).map((img, i) => (
            <div key={`reverse-${i}`} className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-3xl overflow-hidden group border border-slate-200 shadow-lg">
              <img 
                src={img} 
                alt="Atmosphere" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="text-white mx-auto mb-2 fill-white" size={24} />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">Worship Atmosphere</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cinematic Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />
      </div>




      <section className="relative py-24 bg-white overflow-hidden h-[700px] md:h-[900px] border-y border-slate-100">
      
      {/* 2. OVERLAY TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none w-full px-6">
        <h3 className="text-[#003399] font-serif text-5xl md:text-8xl font-bold leading-tight drop-shadow-sm opacity-90">
          The Gudu <br /><span className="text-[#D4AF37] italic">Atmosphere</span>
        </h3>
        <p className="text-[#003399] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mt-4">Experience Transfomation</p>
      </div>

      {/* 3. PARALLAX COLUMNS */}
      <div className="flex justify-center gap-4 md:gap-12 px-4 h-full">
        
        {/* Column 1 - Moving Up */}
        <div className="flex flex-col gap-4 md:gap-8 animate-scroll-up-slow">
          {[...col1, ...col1].map((img, i) => (
            <GalleryCard key={`col1-${i}`} img={img} />
          ))}
        </div>

        {/* Column 2 - Moving Down */}
        <div className="flex flex-col gap-4 md:gap-8 animate-scroll-down-fast mt-[-200px]">
          {[...col2, ...col2].map((img, i) => (
            <GalleryCard key={`col2-${i}`} img={img} isWide />
          ))}
        </div>

        {/* Column 3 - Moving Up (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col gap-4 md:gap-8 animate-scroll-up-normal">
          {[...col1, ...col1].map((img, i) => (
            <GalleryCard key={`col3-${i}`} img={img} />
          ))}
        </div>

      </div>

      {/* 4. CINEMATIC GRADIENT FADES */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white via-white/40 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/40 to-transparent z-20 pointer-events-none" />

      {/* 5. DYNAMIC ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up-slow { animation: scrollUp 60s linear infinite; }
        .animate-scroll-up-normal { animation: scrollUp 45s linear infinite; }
        .animate-scroll-down-fast { animation: scrollDown 50s linear infinite; }
      `}} />
    </section>



      {/* 5. DUAL CALL TO ACTION */}
          <Socials/>
    </div>
  );
}



const GalleryCard = ({ img, isWide = false }: { img: string; isWide?: boolean }) => (
  <div className={`relative ${isWide ? 'w-[200px] md:w-[350px]' : 'w-[160px] md:w-[280px]'} aspect-[3/4] rounded-2xl md:rounded-[2.5rem] overflow-hidden group shadow-2xl transition-transform duration-700 hover:scale-95 flex-shrink-0`}>
    <img 
      src={img} 
      alt="Dominion City Atmosphere" 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-[#003399]/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
      <Heart className="text-[#D4AF37] mb-3 fill-[#D4AF37]" size={20} />
      <p className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Encounter God</p>
    </div>
  </div>
);