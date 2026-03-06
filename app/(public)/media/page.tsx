"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, ExternalLink, Play, Search, Tag, X } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { broadcastData } from "../../components/data/broadcastData";
import { ReelsGallery } from "../../components/Gallery/ReelsGallery";
import Socials from "../../components/socials";

export default function SermonLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const categories = ["All", "Spiritual", "Prophetic", "Leadership", "Marketplace", "Family"];

  // Close modal on 'Esc' key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const filteredSermons = useMemo(() => {
    return broadcastData.filter((sermon: any) => {
      const matchesSearch = 
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (sermon.event?.toLowerCase() || "").includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || sermon.cat === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="bg-[#f8fafc] py-24 min-h-screen relative">


        <ReelsGallery/>
        
      <div className="max-w-7xl pt-8 mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">Digital Heritage 2020 - 2026</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003399]">Apostolic Vault</h2>
            <p className="text-slate-500 max-w-md italic">Access over 50 life-changing teachings.</p>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-auto">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#003399]/10 text-sm shadow-sm bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* RESTORED: Category Filter Bar */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-[#003399] text-white border-[#003399] shadow-lg shadow-[#003399]/20"
                      : "bg-white text-slate-500 border-slate-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSermons.map((sermon) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={sermon.id}
                onClick={() => setActiveVideo(sermon)}
                className="cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col md:flex-row group transition-all hover:shadow-2xl"
              >
                {/* Visual Side */}
                <div className="relative w-full md:w-2/5 bg-[#003399] h-48 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003399] to-[#001a4d] opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                      <Play className="text-[#D4AF37] fill-[#D4AF37]" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                      {sermon.cat}
                    </span>
                    <h3 className="text-xl font-bold text-[#003399] mt-4 mb-3 leading-tight">{sermon.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">{sermon.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-4">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                      <Calendar size={14} className="text-[#D4AF37]" /> {sermon.date}
                    </div>
                    <span className="text-[#003399] font-bold text-[10px] uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors">Watch Inside</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredSermons.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 italic">No messages found matching your criteria.</p>
          </div>
        )}
      </div>

           {/* 5. DUAL CALL TO ACTION */}
          <Socials/>

      {/* VIDEO MODAL OVERLAY */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-[#001a4d]/95 backdrop-blur-sm" 
              onClick={() => setActiveVideo(null)} 
            />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.link)}?autoplay=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6 bg-[#003399] text-white">
                <h2 className="text-2xl font-serif font-bold">{activeVideo.title}</h2>
                <div className="flex items-center gap-4 mt-2 text-white/70 text-sm font-medium">
                   <span className="flex items-center gap-1.5"><Tag size={14} className="text-[#D4AF37]"/> {activeVideo.cat}</span>
                   <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#D4AF37]"/> {activeVideo.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}