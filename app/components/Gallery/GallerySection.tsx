import React from "react";
import { Heart } from "lucide-react";
import { dominionCommunityMedia } from "../data/media";
import { motion } from "framer-motion";


export default function GlobalAtmosphereSlider() {
  // Split the 25+ images into three groups for the columns
  const col1 = dominionCommunityMedia.slice(0, 8);
  const col2 = dominionCommunityMedia.slice(8, 16);
  const col3 = dominionCommunityMedia.slice(16, 24);

  return (
    <section className="relative py-24 bg-white overflow-hidden h-[700px] md:h-[900px] border-y border-slate-100">
      
      {/* 1. OVERLAY TEXT (Center Focus) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none w-full px-6">
        <div className="bg-white/10 backdrop-blur-md inline-block px-8 py-10 rounded-[3rem] border border-white/20 shadow-2xl">
            <h3 className="text-[#003399] font-serif text-5xl md:text-8xl font-bold leading-tight drop-shadow-md">
            Global <br /><span className="text-[#D4AF37] italic">Mandate</span>
            </h3>
            <p className="text-[#003399] font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mt-4">
                A People of Power & Presence
            </p>
        </div>
      </div>

      {/* 2. PARALLAX VERTICAL COLUMNS */}
      <div className="flex justify-center gap-4 md:gap-12 px-4 h-full">
        
        {/* Column 1 - Moving Up Slow */}
        <div className="flex flex-col gap-4 md:gap-8 animate-scroll-up-slow">
          {[...col1, ...col1].map((img, i) => (
            <GalleryCard key={`col1-${i}`} img={img} />
          ))}
        </div>

        {/* Column 2 - Moving Down Fast (Center Column) */}
        <div className="flex flex-col gap-4 md:gap-8 animate-scroll-down-fast mt-[-300px]">
          {[...col2, ...col2].map((img, i) => (
            <GalleryCard key={`col2-${i}`} img={img} isWide />
          ))}
        </div>

        {/* Column 3 - Moving Up Normal (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col gap-4 md:gap-8 animate-scroll-up-normal">
          {[...col3, ...col3].map((img, i) => (
            <GalleryCard key={`col3-${i}`} img={img} />
          ))}
        </div>

      </div>

      {/* 3. CINEMATIC GRADIENT FADES (Top and Bottom) */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/60 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent z-20 pointer-events-none" />

      {/* 4. ANIMATION STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up-slow { animation: scrollUp 80s linear infinite; }
        .animate-scroll-up-normal { animation: scrollUp 55s linear infinite; }
        .animate-scroll-down-fast { animation: scrollDown 65s linear infinite; }
        
        /* Pause on hover to allow users to admire the photos */
        .animate-scroll-up-slow:hover, 
        .animate-scroll-up-normal:hover, 
        .animate-scroll-down-fast:hover { 
          animation-play-state: paused; 
        }
      `}} />
    </section>
  );
}

/** * Sub-component for individual Gallery Cards 
 */
function GalleryCard({ img, isWide = false }: { img: string; isWide?: boolean }) {
  return (
    <div className={`
      relative flex-shrink-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group 
      border border-slate-100 shadow-xl transition-all duration-700 cursor-pointer
      ${isWide ? 'w-[260px] h-[350px] md:w-[400px] md:h-[550px]' : 'w-[200px] h-[280px] md:w-[320px] md:h-[450px]'}
    `}>
      <img 
        src={img} 
        alt="Dominion City Global" 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-in-out group-hover:scale-110" 
        loading="lazy"
      />
      
      {/* Interactive Hover Overlay */}
            <div className="absolute inset-0 bg-[#003399]/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-[1px]">
            {/* Corrected: use motion.div (with a dot) */}
            <motion.div 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-center p-4"
            >
                <Heart className="text-[#D4AF37] mx-auto mb-2 fill-[#D4AF37] scale-75 group-hover:scale-100 transition-transform duration-500" size={24} />
                <span className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Dominion Family</span>
            </motion.div>
            </div>
    </div>
  );
}