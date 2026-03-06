"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Bell, Sparkles, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const featuredEvent = {
  title: "Global Camp Meeting 2026",
  date: "Tue. April 1 — Mon. April 6, 2026",
  time: "8AM & 5PM Daily",
  location: "Golden Heart Place, KM 22 Lekki Epe Express Way, Ajah, Lagos",
  theme: "THE YEAR OF THE EAGLE",
  description: "Join Dr. David Ogbueli and global anointed voices for a landmark convocation of spiritual empowerment and apostolic shift.",
  category: "Global Mandate",
  speakers: ["Dr. David Ogbueli", "Andres Bissoni", "Dr. Ferdinand Nweke", "Charles Ndifon"],
  // ARRAY OF IMAGES: Add your other flyer or event photos here
  gallery: [
    "/programs/slide1.jpg", 
    "/programs/slide2.jpg", 
    "/programs/slide3.jpg", 
  ]
};

export default function FeaturedProgram() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredEvent.gallery.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featuredEvent.gallery.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featuredEvent.gallery.length) % featuredEvent.gallery.length);

  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[2px] w-12 bg-[#D4AF37]" />
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px]">
            Next Major Encounter
          </span>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 bg-[#003399] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 min-h-[600px]">
          
          {/* Left: Content Side */}
          <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center relative z-20 bg-[#003399]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 w-fit"
            >
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">2026 Mandate</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
              {featuredEvent.title}
            </h2>
            
            <p className="text-[#D4AF37] font-black italic tracking-widest text-sm mb-8 uppercase">
              "{featuredEvent.theme}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-white">
              <div className="flex items-start gap-4">
                <Calendar className="text-[#D4AF37] mt-1" size={20} />
                <div>
                  <p className="font-bold text-sm">{featuredEvent.date}</p>
                  <p className="text-white/50 text-[11px] uppercase tracking-tighter flex items-center gap-1 mt-1">
                    <Clock size={10} /> {featuredEvent.time}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D4AF37] mt-1" size={20} />
                <div>
                  <p className="font-bold text-sm">Lagos, Nigeria</p>
                  <p className="text-white/50 text-[11px] line-clamp-2 mt-1 leading-tight">{featuredEvent.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#D4AF37] text-[#003399] rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2">
                Register Now <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Dynamic Image Slider Side */}
          <div className="lg:col-span-6 relative h-[400px] lg:h-auto overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIndex}
                src={featuredEvent.gallery[currentIndex]} 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003399] via-transparent to-transparent hidden lg:block" />
            
            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={prevSlide} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-[#D4AF37] transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-[#D4AF37] transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredEvent.gallery.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/30'}`} 
                />
              ))}
            </div>

            {/* "Upcoming" Badge */}
            <div className="absolute top-8 right-8 flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full animate-pulse shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Speakers Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-400">
           <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Ministering:</span>
           {featuredEvent.speakers.map((speaker, idx) => (
             <span key={idx} className="text-xs font-medium border-r border-slate-200 pr-6 last:border-0">{speaker}</span>
           ))}
        </div>
      </div>
    </section>
  );
}