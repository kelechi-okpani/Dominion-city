"use client";
import React, { useState } from 'react';
import { Calendar, MapPin, Zap, ArrowRight, CheckCircle, Flame, Star, Trophy, Clock, Sparkles } from 'lucide-react';
import FeaturedProgram from '../components/Programs/FeaturedProgram';
import { pastEvents2025, upcomingEvents2026 } from '../components/data/program';


export default function Programs() {
  const [activeYear, setActiveYear] = useState(2026);
  const currentList = activeYear === 2026 ? upcomingEvents2026 : pastEvents2025;

  return (
    <div className="min-h-screen bg-[#FDFDFF] py-24 px-6">

      <FeaturedProgram/>

      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#003399] mb-6">
            Our <span className="italic text-[#D4AF37]">Journey.</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-400 font-light">
            {activeYear === 2026 
              ? "The roadmap for our current mandate and the encounters ahead."
              : "Reflecting on the foundations laid and the victories won in the previous year."}
          </p>
        </div>

        {/* Year Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
            {[2025, 2026].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-12 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all duration-300 ${
                  activeYear === year ? 'bg-white text-[#003399] shadow-md scale-105' : 'text-slate-400'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentList.map((event) => (
            <div key={event.id} className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-[#003399] group-hover:text-white transition-colors">
                  {event.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                  {event.category}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#003399] mb-2">{event.title}</h3>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6 italic">"{event.theme}"</p>
              
              <div className="space-y-3 mb-10 border-l-2 border-slate-100 pl-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Calendar size={14} className="text-[#003399]" /> {event.date}
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <MapPin size={14} className="text-[#003399]" /> {event.location}
                </div>
              </div>

              <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 h-20 overflow-hidden">
                {event.description}
              </p>

              <button className={`w-full py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all flex items-center justify-center gap-2 ${
                activeYear === 2026 
                ? 'bg-[#003399] text-white hover:bg-[#D4AF37]' 
                : 'border border-slate-200 text-slate-400 hover:border-[#003399] hover:text-[#003399]'
              }`}>
                {activeYear === 2026 ? 'Secure Seat' : 'Watch Replay'} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}