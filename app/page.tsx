"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { 
  ArrowRight, Globe, Zap, Heart, 
  Users, MapPin, Clock, Calendar, GraduationCap, Trophy,
  ChevronRight, Flame, Sparkles,
  BookOpen,
  Music,
  Mic
} from 'lucide-react';
import HeroVideo from './components/HeroVideo';
import Gallery from './components/Gallery/Moving-Gallery';
import ResidentPastorSection from './components/ResidentPastorSection';
import { abujaHqMedia } from './components/data/media';
import Image from "next/image";
import HeroImg from "@/public/asset/mpa2.jpg";



export default function HomeContent() {


  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO */}
      <HeroVideo />

      {/* 2. THE ACADEMY SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-10">
          <motion.div {...fadeInUp} className="max-w-2xl">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Discipleship System</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003399] leading-tight mb-6 tracking-tight">
              Raising Leaders <br/> <span className="italic text-[#D4AF37] font-medium">Transforming Society.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
              At the Abuja Headquarters, we run a leadership factory designed to 
              move you from discovery to global deployment.
            </p>
          </motion.div>
          
          <motion.div {...fadeInUp} className="bg-slate-50 p-8 rounded-2xl flex items-center gap-5 border border-slate-100 shadow-sm">
            <div className="bg-[#D4AF37]/10 p-4 rounded-xl">
              <GraduationCap className="text-[#D4AF37]" size={28} />
            </div>
            <div>
              <p className="font-bold text-[#003399] uppercase text-xs tracking-widest mb-1">Enroll in the Academy</p>
              <p className="text-sm text-slate-400 font-medium italic">Sundays at Gudu HQ</p>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Academy Steps with Gallery Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Foundation", body: "Master the 12 core pillars of faith and identity.", img: abujaHqMedia[11] },
            { step: "02", title: "Maturity", body: "Deepen intimacy with the Holy Spirit and purpose.", img: abujaHqMedia[12] },
            { step: "03", title: "Encounter", body: "A 3-day life-altering activation retreat.", img: abujaHqMedia[2] },
            { step: "04", title: "DLI Leadership", body: "Strategies for marketplace dominance and impact.", img: abujaHqMedia[13] }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white h-full p-8 rounded-3xl border border-slate-100 hover:border-[#D4AF37]/50 transition-all shadow-sm hover:shadow-xl overflow-hidden relative">
                <div className="text-slate-200 font-serif italic text-5xl mb-6 group-hover:text-[#D4AF37]/20 transition-colors">{item.step}</div>
                <h3 className="text-sm font-black mb-3 text-[#003399] uppercase tracking-wider relative z-10">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium relative z-10">{item.body}</p>
                <div className="mt-6 rounded-xl overflow-hidden h-32 opacity-80 group-hover:opacity-100 transition-opacity">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative bg-[#003399] py-4 overflow-hidden border-b border-white/5">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee-infinite { display: flex; width: max-content; animation: marquee 35s linear infinite; }
        `}} />
        <div className="animate-marquee-infinite items-center gap-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-10 text-white font-bold text-xs uppercase tracking-[0.2em]">
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              Live from Gudu: Sunday 8:00 AM & 10:00 AM WAT
              <span className="text-[#D4AF37]"><Sparkles size={14}/></span>
              <span className="text-white/80">Watch on Dominion TV</span>
              <span className="text-[#D4AF37] text-xl">●</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MARKETPLACE INFLUENCE */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">Public Service & Governance</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#003399] tracking-tight">Influencing Power.</h2>
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-xl">
              Situated in the heart of the Federal Capital, we provide the spiritual intelligence 
              to lead with integrity in the corridors of power.
            </p>
            <div className="flex gap-12 pt-6">
              <div><p className="text-4xl font-black text-[#003399]">DLI</p><p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Marketplace</p></div>
              <div><p className="text-4xl font-black text-[#003399]">GLS</p><p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Global Summit</p></div>
            </div>
            <button className="flex items-center gap-3 text-[#003399] font-bold uppercase text-xs tracking-[0.2em] group">
              Join the Business Hub <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square border-[12px] border-white"
          >
            {/* Using a structural/architectural shot from array */}
            <img src={abujaHqMedia[0]} alt="Gudu Headquarters" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#003399]/10" />
          </motion.div>
        </div>
      </section>


        <Gallery/>
  
       <ResidentPastorSection/>

  
      {/* 4. THE GOLDEN HEART FOUNDATION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-20">
            <Heart className="mx-auto text-[#D4AF37] mb-8" size={48} />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#003399]">Golden Heart Foundation</h2>
            <p className="text-slate-500 font-light text-base md:text-lg">Empowering youth and community through UN Sustainable Development Goals.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <BookOpen size={28}/>, 
              label: 'The Word', 
              count: 'Deep Truths', 
              img: abujaHqMedia[16] 
            },
            { 
              icon: <Music size={28}/>, 
              label: 'Worship', 
              count: 'Intimate', 
              img: abujaHqMedia[8] 
            },
            { 
              icon: <Mic size={28}/>, 
              label: 'Prayers', 
              count: 'Fire & Power', 
              img: abujaHqMedia[14] 
            }
          ].map((stat, i) => (
              <div key={i} className="p-1 w-full bg-slate-50 rounded-[2.5rem] border border-slate-50 transition-all hover:bg-white hover:shadow-2xl group overflow-hidden">
                <div className="h-58 w-full overflow-hidden rounded-t-[2.3rem]">
                   <img src={stat.img} alt={stat.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-10">
                  <div className="text-[#D4AF37] mb-6 flex justify-center">{stat.icon}</div>
                  <h4 className="text-4xl font-black text-[#003399] mb-2">{stat.count}</h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEPARTMENTS */}
      <section className="py-32 bg-[#003399] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Find Your Tribe.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {['Music', 'Creative Arts', 'Media & IT', 'Ushering', 'Medical', 'Dominion Kids', 'Teen Church', 'Greeters'].map((dept) => (
              <div key={dept} className="p-6 border border-white/10 rounded-2xl hover:bg-white hover:text-[#003399] transition-all cursor-pointer flex justify-between items-center group">
                <span className="font-bold text-xs uppercase tracking-widest">{dept}</span>
                <ChevronRight size={18} className="text-[#D4AF37]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPIRITUAL OVERSIGHT */}
      <section className="py-32 px-6 bg-white max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:h-[650px] relative group">
            
            {/* Next.js Optimized Image */}
            <Image
              src={HeroImg}
              alt="Dr. David Ogbueli"
              fill
              priority // Critical for the main ministry portrait to load instantly
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />

            {/* The Content Overlay - Ensure z-index is higher than Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/90 via-[#003399]/10 to-transparent flex flex-col justify-end p-8 md:p-12 z-10">
              <p className="text-white italic text-lg md:text-xl font-serif mb-6 leading-relaxed">
                "We are not just building a church; we are raising a kingdom of kings and priests."
              </p>
              <p className="text-[#D4AF37] font-bold uppercase text-xs tracking-[0.3em]">
                Dr. David Ogbueli
              </p>
            </div>
          </div>
        </div>
          <motion.div {...fadeInUp} className="lg:w-1/2 space-y-8">
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">Global Oversight</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#003399] leading-tight tracking-tight">The Vision Behind Gudu.</h2>
            <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
              Founded by Dr. David Ogbueli, Dominion City Abuja stands as the flagship headquarters for the Northern region.
            </p>
            <div className="space-y-4 pt-4">
              {['President, Dominion City Global', 'Founder, Golden Heart Foundation'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-[#003399] font-bold text-xs uppercase tracking-wider">
                  <div className="h-[1px] w-6 bg-[#D4AF37]" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="bg-slate-50 py-24 px-6 text-center border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
           <img src={abujaHqMedia[4]} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#003399]">Experience the Presence.</h3>
            <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-500 font-bold uppercase tracking-widest pt-4">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-[#D4AF37]"/> Gudu, Abuja</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4AF37]"/> Sunday 8AM & 10AM</span>
            </div>
          </div>
          <button className="bg-[#003399] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] transition-all shadow-2xl">
            Plan Your Visit
          </button>
        </div>
      </section>

    </div>
  );
}