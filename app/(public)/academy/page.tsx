"use client";
import React from 'react';
import { motion, HTMLMotionProps, Transition, TargetAndTransition } from 'framer-motion';
import { 
  BookOpen, Target, Award, ArrowRight, Briefcase,
  CheckCircle2, Sparkles, ChevronRight, ShieldCheck, TrendingUp, Clock, MapPin
} from 'lucide-react';
import { abujaHqMedia } from '../../components/data/media';
import Socials from '../../components/socials';


export default function TrainingPortals() {
  const fadeInUpVariants: TargetAndTransition = { opacity: 1, y: 0 };
  const fadeInInitial: TargetAndTransition = { opacity: 0, y: 20 };
  const transitionSettings: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const motionProps: HTMLMotionProps<"div"> = {
    initial: fadeInInitial,
    whileInView: fadeInUpVariants,
    viewport: { once: true },
    transition: transitionSettings
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-32 px-6 bg-[#001A4D] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={abujaHqMedia[0]} 
          alt="Dominion City Abuja" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        
        <div className="max-w-7xl mx-auto relative z-20">
          <motion.div {...motionProps} className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-[1px] w-16 bg-[#D4AF37]" />
               <span className="text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">The Institute of Leadership</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 tracking-tight">
              Raising Leaders <br/>
              <span className="italic text-[#D4AF37] font-medium text-4xl md:text-7xl">Transforming Society.</span>
            </h1>
            <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12 border-l border-[#D4AF37] pl-8">
              Experience the systematic transformation from spiritual depth at the Academy to marketplace mastery at DLI.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#academy" className="bg-[#D4AF37] text-[#001A4D] px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl">
                The Academy
              </a>
              <a href="#dli" className="border border-white/40 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                The Institute
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DC ACADEMY SECTION --- */}
      <section id="academy" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div {...motionProps} className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative border border-slate-100">
              <img 
                src={abujaHqMedia[2]} 
                alt="Academy Session" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A4D]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-3xl shadow-2xl border border-slate-50 max-w-[300px]">
               <div className="bg-[#D4AF37]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                 <ShieldCheck className="text-[#D4AF37]" size={24} />
               </div>
               <p className="text-[#001A4D] font-serif font-bold text-2xl mb-2 text-nowrap">Spiritual Depth</p>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">Foundation & Maturity</p>
            </div>
          </motion.div>

          <motion.div {...motionProps} className="space-y-10">
            <header>
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Track 01</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#001A4D] leading-tight mb-6 tracking-tighter">Dominion City <br/>Academy.</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                A systematic discipleship process designed to ground every believer in the word of God, leading them through the 12 pillars of faith into full maturity.
              </p>
            </header>
            
            <div className="space-y-6">
              {['Foundation Class', 'Encounter Retreat', 'Maturity Class', 'Workers Training'].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-[#D4AF37]/30 transition-all">
                  <CheckCircle2 className="text-[#D4AF37]" size={20} />
                  <span className="text-[#001A4D] font-bold text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DLI SECTION --- */}
      <section id="dli" className="py-32 bg-[#001A4D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-center">
            <motion.div {...motionProps}>
              <Sparkles className="text-[#D4AF37] mb-8" size={48} />
              <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tighter">Dominion <br/>Leadership <br/><span className="italic text-[#D4AF37]">Institute.</span></h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                Weaponizing your profession for Kingdom influence. DLI provides the strategic intelligence required to lead in Business, Governance, and Media.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Briefcase />, title: 'Marketplace', desc: 'Kingdom economics & business scaling.' },
                { icon: <Target />, title: 'Governance', desc: 'Policy & leadership for public office.' },
                { icon: <TrendingUp />, title: 'Excellence', desc: 'Personal mastery & peak performance.' },
                { icon: <Award />, title: 'Certificate', desc: 'Globally recognized leadership credentials.' }
              ].map((card, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-[#D4AF37] mb-6">{card.icon}</div>
                  <h4 className="font-serif font-bold text-xl mb-2">{card.title}</h4>
                  <p className="text-slate-400 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE GALLERY SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-16">
           <h3 className="text-[#001A4D] font-serif font-bold text-3xl">The Experience</h3>
           <p className="text-slate-400 text-sm mt-2 uppercase tracking-widest font-bold font-sans">Abuja HQ Sessions</p>
        </div>
        
        {/* Infinite CSS Marquee */}
        <div className="flex gap-6 animate-[marquee_50s_linear_infinite] whitespace-nowrap">
          {[...abujaHqMedia, ...abujaHqMedia].map((img, i) => (
            <div key={i} className="min-w-[400px] h-[280px] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-xl">
              <img src={img} alt="Gallery item" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
        
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* --- INFO STRIP --- */}
      <section className="py-20 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <div className="flex flex-col items-center gap-4">
              <Clock className="text-[#D4AF37]" />
              <p className="text-[#001A4D] font-bold text-sm uppercase tracking-[0.2em]">Saturdays & Sundays</p>
           </div>
           <div className="flex flex-col items-center gap-4 border-x border-slate-200">
              <MapPin className="text-[#D4AF37]" />
              <p className="text-[#001A4D] font-bold text-sm uppercase tracking-[0.2em]">Gudu HQ, Abuja</p>
           </div>
           <div className="flex flex-col items-center gap-4">
              <Award className="text-[#D4AF37]" />
              <p className="text-[#001A4D] font-bold text-sm uppercase tracking-[0.2em]">Certified Programs</p>
           </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 bg-white text-center">
        <motion.div {...motionProps} className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#001A4D] mb-8 tracking-tighter">Your Journey to <span className="italic text-[#D4AF37]">Dominion</span> Starts Here.</h2>
          <button className="bg-[#001A4D] text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#D4AF37] transition-all shadow-2xl">
            Register for Next Batch
          </button>
        </motion.div>
      </section>

      {/* DUAL CALL TO ACTION */}
          <Socials/>
          

    </div>
  );
}