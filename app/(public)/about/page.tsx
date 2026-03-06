"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, ArrowRight, Star, BookOpen, GraduationCap, Globe } from 'lucide-react';
import { abujaHqMedia, dominionCommunityMedia } from '../../components/data/media';
import Gallery from '../../components/Gallery/Moving-Gallery';
import Socials from '../../components/socials';

const pillars = [
  {
    icon: <GraduationCap className="text-[#D4AF37]" size={28} />,
    title: "Leadership Institute",
    description: "We strongly believe in leadership and transformation. We are committed to raising and developing sons and daughters in Christ, who will transform society at large through various spheres of life."
  },
  {
    icon: <BookOpen className="text-[#D4AF37]" size={28} />,
    title: "Our Beliefs",
    description: "Discover how we view God, Jesus, the Bible, man, and many significant aspects of our faith. Our beliefs are shaped by biblical truths and guided by Scripture."
  },
  {
    icon: <Globe className="text-[#D4AF37]" size={28} />,
    title: "Ministries",
    description: "Designed to meet specific needs of our members and the body of Christ, fulfilling our mission to raise leaders that transform society."
  }
];

export default function AboutUs() {
  // const heroImage = abujaHqMedia[4]
  const heroImage = dominionCommunityMedia[4]
  const founderImage = abujaHqMedia[3] || heroImage;
  const collageImages = abujaHqMedia.slice(2, 6);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-[#D4AF37] mb-6">
              <Star size={16} fill="currentColor" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">Dominion City Abuja</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#003399] leading-[0.9] mb-8 tracking-tighter">
              About <span className="italic text-[#D4AF37]">Us.</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed mb-10 font-medium">
              A body of believers with one vision; raising leaders that transform society.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#003399] text-white px-8 py-4 rounded-full font-bold text-sm hover:shadow-2xl transition-all">
                Plan a Visit
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-slate-100">
              <img src={heroImage} alt="Worship" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <p className="text-4xl font-serif font-bold text-[#003399]">Gudu HQ</p>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Abuja Church</p>
            </div>
          </motion.div>
        </div>
      </section>


        <Gallery/>

      {/* 2. FOUNDER SECTION - DR. DAVID OGBUELI */}
      <section className="py-24 bg-[#003399] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/10">
                <img src={founderImage} alt="Dr. David Ogbueli" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 rounded-2xl shadow-xl text-[#003399]">
                <p className="font-serif text-2xl font-bold italic">Dr. David Ogbueli</p>
                <p className="text-[10px] uppercase font-black tracking-widest opacity-80">Founder & Senior Pastor</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                Our Founder
              </h2>
              <div className="space-y-6 text-blue-100/80 leading-relaxed font-medium text-sm md:text-base">
                <p>
                  Dr. David Ogbueli is the founder of the New Covenant Family Ministries and the Senior Pastor of Dominion City, International. He is also the President of the Dominion Leadership Institute, and a Senior Facilitator in the Institute of National Transformation.
                </p>
                <p>
                  He is a minister of the Gospel, and an icon of transformational leadership. His passion for Personal Transformation and National Transformation has produced various initiatives and ministries causing a stir among youth, governments, corporate institutions, and the media globally.
                </p>
                <p>
                  A Management and Government Consultant, social reformer, and widely read author, Dr. David Ogbueli is married to Pastor Sarah Ogbueli and they have four children.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-[#003399] mb-4">How We Transform Society</h2>
            <div className="w-12 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="mb-8 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#003399] mb-4">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <img src={collageImages[0] || heroImage} className="rounded-3xl h-64 w-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" alt="Leadership" />
                   <img src={collageImages[1] || heroImage} className="rounded-3xl h-80 w-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" alt="Transformation" />
                </div>
                <div className="space-y-4">
                   <img src={collageImages[2] || heroImage} className="rounded-3xl h-80 w-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" alt="Integrity" />
                   <img src={collageImages[3] || heroImage} className="rounded-3xl h-64 w-full object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-700" alt="Service" />
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <Heart className="text-[#D4AF37] mb-6" size={32} />
                <h2 className="text-5xl font-serif font-bold text-[#003399] mb-8">Our Core <span className="text-[#D4AF37]">Values</span></h2>
                <p className="text-slate-500 text-lg mb-8 font-medium">
                  Explore the values that embody the vision of Dominion City Church. Our values reflect our mission to transform the total man so we can impact our communities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Excellence", "Integrity", "Leadership", "Service"].map((val) => (
                    <div key={val} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-[#003399] bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <Star size={12} className="text-[#D4AF37]" /> {val}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

  {/* DUAL CALL TO ACTION */}
          <Socials/>

          
      {/* 5. FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-[#003399] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to transform your world?</h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-12 text-lg">
              Whether you are looking for a place to worship or a place to lead, we have a seat saved for you at The Golden Heart Place.
            </p>
            <button className="bg-[#D4AF37] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">
              Visit Us This Sunday <ArrowRight size={16} className="inline ml-2" />
            </button>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}