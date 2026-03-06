"use client";
import React, { useState } from 'react';
import { ExternalLink, Eye, Calendar, Play } from 'lucide-react';
import { reelsData } from '../data/reelsData';

// Helper to extract YouTube ID
const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const ReelsGallery = () => {
  const [filter, setFilter] = useState('All');
  const [playingId, setPlayingId] = useState<number | null>(null);

  const categories = ['All', ...new Set(reelsData.map(item => item.cat))];

  const filteredData = filter === 'All' 
    ? reelsData 
    : reelsData.filter(item => item.cat === filter);

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen pb-8">
      {/* Header & Filter */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[#003399] tracking-tight font-serif">Prophetic Reels</h2>
          <p className="text-slate-500 mt-2 italic">Short impactful insights from Dr. David Ogbueli</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                ? 'bg-[#003399] text-white shadow-lg shadow-blue-200 border-[#003399]' 
                : 'bg-white text-slate-500 hover:border-[#D4AF37] border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredData.map((reel: any) => (
          <div 
            key={reel.id}
            className="group relative bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Video Container */}
            <div className="aspect-[9/16] bg-black relative overflow-hidden">
              {playingId === reel.id ? (
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${getYouTubeId(reel.link)}?autoplay=1&modestbranding=1&rel=0`}
                  title={reel.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div 
                  className="w-full h-full cursor-pointer group/overlay"
                  onClick={() => setPlayingId(reel.id)}
                >
                  {/* Thumbnail Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a4d] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Dynamic Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover/overlay:scale-125 group-hover/overlay:bg-[#D4AF37] transition-all duration-500">
                      <Play className="text-white fill-white group-hover/overlay:fill-white" size={24} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-[#003399]/80 backdrop-blur-md border border-white/10 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest">
                    {reel.icon}
                    {reel.cat}
                  </div>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-6">
              <h3 className="font-bold text-[#003399] text-lg line-clamp-1 mb-2 group-hover:text-[#D4AF37] transition-colors">{reel.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4 h-10 leading-relaxed">
                {reel.desc}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-4 text-slate-400 text-[11px] font-bold">
                  <span className="flex items-center gap-1">
                    <Eye size={14} className="text-[#D4AF37]" /> {reel.views}
                  </span>
                  <span className="flex items-center gap-1 uppercase">
                    <Calendar size={14} className="text-[#D4AF37]" /> {reel.date}
                  </span>
                </div>
                
                <button 
                  onClick={() => setPlayingId(reel.id)}
                  className="text-[#003399] font-black text-[10px] uppercase tracking-tighter hover:text-[#D4AF37] transition-colors"
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};