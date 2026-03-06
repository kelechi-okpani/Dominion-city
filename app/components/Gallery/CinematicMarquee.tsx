"use client";
import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface MarqueeProps {
  images: string[];
  title?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export default function CinematicMarquee({ 
  images, 
  title = "Worship Atmosphere", 
  reverse = false,
  speed = "normal"
}: MarqueeProps) {
  
  // Map speeds to duration values
  const durations = {
    slow: "80s",
    normal: "60s",
    fast: "40s"
  };

  const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="relative py-8 overflow-hidden group/container">
      {/* The Moving Track */}
      <div 
        className={`flex gap-6 w-fit ${animationClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: durations[speed] }}
      >
        {/* We double the array to ensure seamless looping */}
        {[...images, ...images].map((img, i) => (
          <div 
            key={`${title}-${i}`} 
            className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-[2rem] overflow-hidden group border border-slate-200 shadow-lg flex-shrink-0"
          >
            <img 
              src={img} 
              alt={title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              loading="lazy"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-center"
              >
                <Heart className="text-white mx-auto mb-2 fill-white" size={24} />
                <span className="text-white text-[10px] font-black uppercase tracking-widest leading-tight block px-4">
                  {title}
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Cinematic Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/40 to-transparent z-10 pointer-events-none" />

      {/* Tailwind Keyframes injected via Style Tag for absolute portability */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse linear infinite; }
      `}</style>
    </div>
  );
}