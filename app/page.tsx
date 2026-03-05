// "use client";
// import React from 'react';
// import { motion, HTMLMotionProps } from 'framer-motion';
// import { 
//   ArrowRight, Globe, Zap, Heart, 
//   Users, MapPin, Clock, Calendar, GraduationCap, Trophy,
//   ChevronRight, Flame, Sparkles
// } from 'lucide-react';
// import HeroVideo from './components/HeroVideo';

// export default function HomeContent() {
//   const fadeInUp: HTMLMotionProps<"div"> = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6, ease: "easeOut" }
//   };

//   return (
//     <div className="bg-white font-sans selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      
//       {/* 1. CINEMATIC HERO */}
//       <HeroVideo />

//       {/* 2. THE ACADEMY: DISCIPLESHIP TRACK */}
//       <section className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-10">
//           <motion.div {...fadeInUp} className="max-w-2xl">
//             <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Discipleship System</span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#003399] leading-tight mb-6 tracking-tight">
//               Raising Leaders <br/> <span className="italic text-[#D4AF37] font-medium">Transforming Society.</span>
//             </h2>
//             <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
//               At the Abuja Headquarters, we run a leadership factory designed to 
//               move you from discovery to global deployment.
//             </p>
//           </motion.div>
          
//           <motion.div {...fadeInUp} className="bg-slate-50 p-8 rounded-2xl flex items-center gap-5 border border-slate-100 shadow-sm">
//             <div className="bg-[#D4AF37]/10 p-4 rounded-xl">
//               <GraduationCap className="text-[#D4AF37]" size={28} />
//             </div>
//             <div>
//               <p className="font-bold text-[#003399] uppercase text-xs tracking-widest mb-1">Enroll in the Academy</p>
//               <p className="text-sm text-slate-400 font-medium italic">Sundays at Gudu HQ</p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {[
//             { step: "01", title: "Foundation", body: "Master the 12 core pillars of faith and identity." },
//             { step: "02", title: "Maturity", body: "Deepen intimacy with the Holy Spirit and purpose." },
//             { step: "03", title: "Encounter", body: "A 3-day life-altering activation retreat." },
//             { step: "04", title: "DLI Leadership", body: "Strategies for marketplace dominance and impact." }
//           ].map((item, i) => (
//             <motion.div 
//               key={i} 
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-[#D4AF37]/50 transition-all group shadow-sm hover:shadow-xl"
//             >
//               <div className="text-slate-200 font-serif italic text-5xl mb-6 group-hover:text-[#D4AF37]/20 transition-colors">{item.step}</div>
//               <h3 className="text-sm font-black mb-3 text-[#003399] uppercase tracking-wider">{item.title}</h3>
//               <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.body}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* MARQUEE */}
//       <section className="relative bg-[#003399] py-4 overflow-hidden border-b border-white/5">
//         <style dangerouslySetInnerHTML={{ __html: `
//           @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//           .animate-marquee-infinite { display: flex; width: max-content; animation: marquee 35s linear infinite; }
//         `}} />
//         <div className="animate-marquee-infinite items-center gap-16">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="flex items-center gap-10 text-white font-bold text-xs uppercase tracking-[0.2em]">
//               <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
//               Live from Gudu: Sunday 8:00 AM & 10:00 AM WAT
//               <span className="text-[#D4AF37]"><Sparkles size={14}/></span>
//               <span className="text-white/80">Watch on Dominion TV</span>
//               <span className="text-[#D4AF37] text-xl">●</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. MARKETPLACE INFLUENCE */}
//       <section className="py-32 bg-slate-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
//           <motion.div {...fadeInUp} className="space-y-8">
//             <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">Public Service & Governance</span>
//             <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-[#003399] tracking-tight">Influencing Power.</h2>
//             <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-xl">
//               Situated in the heart of the Federal Capital, we provide the spiritual intelligence 
//               to lead with integrity in the corridors of power.
//             </p>
//             <div className="flex gap-12 pt-6">
//               <div><p className="text-4xl font-black text-[#003399]">DLI</p><p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Marketplace</p></div>
//               <div><p className="text-4xl font-black text-[#003399]">GLS</p><p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Global Summit</p></div>
//             </div>
//             <button className="flex items-center gap-3 text-[#003399] font-bold uppercase text-xs tracking-[0.2em] group">
//               Join the Business Hub <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
//             </button>
//           </motion.div>
//           <motion.div 
//              initial={{ opacity: 0, scale: 0.98 }}
//              whileInView={{ opacity: 1, scale: 1 }}
//              viewport={{ once: true }}
//              className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square border-[12px] border-white"
//           >
//             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Abuja" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-[#003399]/10" />
//           </motion.div>
//         </div>
//       </section>

//       {/* 4. THE GOLDEN HEART FOUNDATION */}
//       <section className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-20">
//             <Heart className="mx-auto text-[#D4AF37] mb-8" size={48} />
//             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#003399]">Golden Heart Foundation</h2>
//             <p className="text-slate-500 font-light text-base md:text-lg">Empowering youth and community through UN Sustainable Development Goals.</p>
//           </motion.div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: <Users size={28}/>, label: 'National Youth Summit', count: '50k+' },
//               { icon: <Trophy size={28}/>, label: 'Scholarships Awarded', count: '100+' },
//               { icon: <Globe size={28}/>, label: 'Global SDG Goals', count: '6' }
//             ].map((stat, i) => (
//               <div key={i} className="p-14 bg-slate-50 rounded-[2.5rem] border border-slate-50 transition-all hover:bg-white hover:shadow-2xl">
//                 <div className="text-[#D4AF37] mb-6 flex justify-center">{stat.icon}</div>
//                 <h4 className="text-4xl font-black text-[#003399] mb-2">{stat.count}</h4>
//                 <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. DEPARTMENTS */}
//       <section className="py-32 bg-[#003399] text-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Find Your Tribe.</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//             {['Music', 'Creative Arts', 'Media & IT', 'Ushering', 'Medical', 'Dominion Kids', 'Teen Church', 'Greeters'].map((dept) => (
//               <div key={dept} className="p-6 border border-white/10 rounded-2xl hover:bg-white hover:text-[#003399] transition-all cursor-pointer flex justify-between items-center group">
//                 <span className="font-bold text-xs uppercase tracking-widest">{dept}</span>
//                 <ChevronRight size={18} className="text-[#D4AF37]" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6. SPIRITUAL OVERSIGHT */}
//       <section className="py-32 px-6 bg-white max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center gap-20">
//           <div className="lg:w-1/2 relative">
//             <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto">
//               <img src="/asset/mpa.jpg" alt="Dr David Ogbueli" className="w-full lg:h-[650px] object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/90 via-[#003399]/10 to-transparent flex flex-col justify-end p-12">
//                   <p className="text-white italic text-lg md:text-xl font-serif mb-6 leading-relaxed">
//                     "We are not just building a church; we are raising a kingdom of kings and priests."
//                   </p>
//                   <p className="text-[#D4AF37] font-bold uppercase text-xs tracking-[0.3em]">Dr. David Ogbueli</p>
//               </div>
//             </div>
//           </div>
//           <motion.div {...fadeInUp} className="lg:w-1/2 space-y-8">
//             <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-xs">Global Oversight</span>
//             <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#003399] leading-tight tracking-tight">The Vision Behind Gudu.</h2>
//             <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
//               Founded by Dr. David Ogbueli, Dominion City Abuja stands as the flagship headquarters for the Northern region.
//             </p>
//             <div className="space-y-4 pt-4">
//               {['President, Dominion City Global', 'Founder, Golden Heart Foundation'].map((item) => (
//                 <div key={item} className="flex items-center gap-4 text-[#003399] font-bold text-xs uppercase tracking-wider">
//                   <div className="h-[1px] w-6 bg-[#D4AF37]" /> {item}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* 7. CTA */}
//       <section className="bg-slate-50 py-24 px-6 text-center border-t border-slate-100">
//         <div className="max-w-4xl mx-auto space-y-10">
//           <div className="space-y-4">
//             <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#003399]">Experience the Presence.</h3>
//             <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-500 font-bold uppercase tracking-widest pt-4">
//               <span className="flex items-center gap-2"><MapPin size={16} className="text-[#D4AF37]"/> Gudu, Abuja</span>
//               <span className="flex items-center gap-2"><Clock size={16} className="text-[#D4AF37]"/> Sunday 8AM & 10AM</span>
//             </div>
//           </div>
//           <button className="bg-[#003399] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37] transition-all shadow-2xl">
//             Plan Your Visit
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// }



"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { 
  ArrowRight, Globe, Zap, Heart, 
  Users, MapPin, Clock, Calendar, GraduationCap, Trophy,
  ChevronRight, Flame, Sparkles
} from 'lucide-react';
import HeroVideo from './components/HeroVideo';

// Provided Media Array
const abujaHqMedia = [
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/643728484_1389856406517355_4570297543047804772_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=AAjwyzIkJo8Q7kNvwGiUsaD&_nc_oc=AdlLIypIGzcd6Z9ZnYn0pd57veEwj-Efo1hzzPN7k9XzBxL6eAxW4xNyHeqeWRq1LTc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=3ITCYnc86brKVflMCzsGeg&_nc_ss=8&oh=00_AfyycixNnaz0wrEKNcDjXOp4OO2gN5IvK04XUsj6AiGdXQ&oe=69AF7B6B",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/643440519_1389856393184023_2900003294784001852_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Dhpsb_XCs4wQ7kNvwFRCqzF&_nc_oc=Adnq8Qg1FTKeRNzvla-thIxNzxz3_B6Ef9asQWskIv_u7tFeems9WjWLtlzSMFv2ZEY&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=qRopZBgrs_r6HHUQkGPZBg&_nc_ss=8&oh=00_Afz15tepXlfsZW7BRRVXZ-URZrnV-0o7w04eNcBy0v5AiQ&oe=69AF5702",
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/626493437_1366338078869188_418403715621799087_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=afFq6NIEKpUQ7kNvwFI6Pqe&_nc_oc=AdlJuAPRdC2mvVpLZGZgL4iSpiakIhKHtEec7LlBWudcyENTIlL7CgOrn1EkYR7895g&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=NbXcyjtakCK7wJ-s7sXYGg&_nc_ss=8&oh=00_Afwt782jkX-qRaT9lO1QAO3q0SDT4kBEovz-UKvq2wIBiQ&oe=69AF75FE",
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/618231048_1355414029961593_7288733600598153488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=guTN1u_klJAQ7kNvwFFYTvQ&_nc_oc=AdlXPQVRy710m_4rIANLpqPMqK1-QemmYGaRvRHiv3dPziPXG4MB-q0NWjNwciIxsbc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=ruJK57N_nkRysum0l40Ieg&_nc_ss=8&oh=00_Afx5xAM9m7RfB_iZEKYCkm40rTYNVlq5fyic_8lW1hH5jw&oe=69AF56F4",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/612141347_1342172967952366_5511741730072550255_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SXVURZquJxoQ7kNvwFDL6dZ&_nc_oc=Adl5NExiRgUU2u32SuNhXzmKHw3x73yBXLnTEhTbiJ9-FqtVHcZy0ad_YdHLP6zzR8s&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=FaEltbjDEJP-nmgMgSy51w&_nc_ss=8&oh=00_AfxoWsdei19nb5_TQVzVtP14jfxcr8cbfOIKeXlS98REbg&oe=69AF7687",
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/608451711_1339403378229325_8034998198314290018_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Doq7ojVlIAgQ7kNvwEddCtM&_nc_oc=Adklu3K3tx5oxK8ms0liXDF00ked5gyJNe88I-WPeLHJZ2ZKaE4YtD_UrL1swsLqjao&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=XnCtQYreVIYn33es4QSAUg&_nc_ss=8&oh=00_Afy8HJNhSrhQLgla-Fqc6Os8iplSo5xnVzeJ29Etn4YiaA&oe=69AF5EF5",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/608317178_1338992038270459_2843977468596946266_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=VdoVO32lKKgQ7kNvwHOb3bG&_nc_oc=AdnsAMJt4CdI8Yqr4Idbo5Rs8AabbgwwfY1YVkVZvNNiBr27RD-wezsXDh1X2RI2JH8&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=ApwLOplNNHlR33VzBJtGzg&_nc_ss=8&oh=00_AfyGvuHKZMbfMXBbIeSzgqOj0lSj_xrBCH26ITs-z88I2Q&oe=69AF60AF",
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/608513699_1338992018270461_5905202434569150658_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=HWoQt1RfWdUQ7kNvwHA6112&_nc_oc=AdmNt8BAbIdLGiQcsQSh7r5J50aVR4mvrmXLltGJAc5VahADWmY_LloGHmH0CoZkMRc&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=KEl04Rje8bsw1a12xdSZjw&_nc_ss=8&oh=00_AfzLRhzbZPYY7CQIyMbjmoeu4LlrjmZ9zD11h6c3RslpqA&oe=69AF8B6A",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/608054050_1338992014937128_4161752614379138413_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=BuNgc7_U1HQQ7kNvwG-vtl-&_nc_oc=AdmWNU022OaNxkwvben8pMfuz9Gkh2wHGBXq3EKBN35joSOD0ks5MLDz_J7BhBYRG5U&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=n2WuljeGKLYDxof2ohtLyw&_nc_ss=8&oh=00_AfxXey6oa9P0kGUf941xW20FBCHW8tDvDEBTX0Tt9TLA2w&oe=69AF62BB",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/607709560_1338991951603801_3382436141829144124_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=QajM2zT4CaYQ7kNvwGvtfog&_nc_oc=AdkM_IHPEoWWorLSDSHemzowp2VSjCSnY5dlgDzZhV78g_rkUv-ewtM8ULKSCR9-NzU&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=i_ftp36s_sxNxEl3qS7Oog&_nc_ss=8&oh=00_Afz6AUNj-zpNIqYxltb2g597OG7q3wh6sSLwaBv8wDcj-Q&oe=69AF5ABC",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/608414150_1338948114941518_2600748514848443057_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=P17KazzHo00Q7kNvwH_87vE&_nc_oc=AdmCsFhProSn-6KI59_6t7iHphXE2mB9A0nq1pMV3_ZedR_PUzuJV5ZCOPAIFteEfGc&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=6kwvajpofa59dY1n0iOTsQ&_nc_ss=8&oh=00_Afy8RWyayDUCrxbVASF-ElILT8hMUWmvTWYSF0QMAXMbjA&oe=69AF6CAF",
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/607949886_1338811071621889_4543449791116270792_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=yB8yCklfvX8Q7kNvwFiWrEo&_nc_oc=AdnCVhBxzukFccEJtvLTL0GeVuv95dfM4PoJTli7hKDUWn4mkSKierXJdD8KfcH56z0&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=rPmggg5o2Hhtp-Py2nmz_Q&_nc_ss=8&oh=00_AfwHWH174PwJa3P6L-2TjkPC9RLUyu0Ww648gylHb9Z5Vw&oe=69AF8D3F",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/607989658_1338353235001006_6172706066433359897_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=6i2K8tEymDEQ7kNvwEtA8pN&_nc_oc=Adn6w2gElcZbhd1PejpEsUTee2UberplZt0g0TQ_XiT4gEVZZUluR-MdFCBvbDQhEK0&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=4TTNk6j53t7-68zwGez_Ng&_nc_ss=8&oh=00_AfyUyRd0vte_DFEPvS16T4qQOIh0WrD2ozgKmWyTdL5sXg&oe=69AF6409",
  "https://scontent.fabv3-1.fna.fbcdn.net/v/t39.30808-6/608758178_1338353168334346_3037578123280684554_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=Ijc5EilN6N4Q7kNvwGZiLki&_nc_oc=Adlp20Xt0hbd4cgxvnNA1ueudzIgxqdovYun8xLgNlBDRazf7Yne_XA5ce5fmOahHJA&_nc_zt=23&_nc_ht=scontent.fabv3-1.fna&_nc_gid=iRIt1MFRin9HpMkdiM9EMQ&_nc_ss=8&oh=00_Afy-AVaRUnwrkWjhjK3-lIeDpN4lXUztU04vZF9roIuSmA&oe=69AF7FF4",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/608845366_1338352838334379_7300033014812729506_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=fngHPJavf10Q7kNvwG0-5NY&_nc_oc=AdmGrnQuPN4lb0Tz_E6Ib6IUBAiCEYesz9-kAThIf18cG9ecXXeE69Eqg4I3T6gxG2Y&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=yzix0HKoovfy6JG3UJrBrg&_nc_ss=8&oh=00_AfyFdkBNJBSVPMuZ85jRCWNgmdDEbX0ZquprcDlyg501qg&oe=69AF6860",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/607746747_1338352761667720_6795067778853546935_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=Kdu5ur8T3pIQ7kNvwHNlk20&_nc_oc=Adle-6d8-aAM7e0R8qDP82zU4nkcGyBkorRu-H6zGwN5Rn3kQlJ_YPsj_eKvuNN4Vfc&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=hLmuA38Hd5Ul90xHF9BYUA&_nc_ss=8&oh=00_Afxmwny4XomRgtlR5PlMb9z65dlr-1mZ7iuhHagwvsGKQA&oe=69AF6DA4",
  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/608201648_1338352651667731_2218571830293623281_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=3G1UeXtJIEwQ7kNvwHJkzFT&_nc_oc=Adn0311mFDy6gtbzwxWbVlgW4bofsGNwIMHFD5b8AIEGQ_PhuEsJ4K9u8Un75fjYF3c&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=ntKo1tNYdM7LJ53h4Yo2BQ&_nc_ss=8&oh=00_AfxES_IUofwhCFQJYXPSIP6aZJTPaSq5rsu4ATbVAjKiyg&oe=69AF8166"
];

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
              { icon: <Users size={28}/>, label: 'National Youth Summit', count: '50k+', img: abujaHqMedia[5] },
              { icon: <Trophy size={28}/>, label: 'Scholarships Awarded', count: '100+', img: abujaHqMedia[8] },
              { icon: <Globe size={28}/>, label: 'Global SDG Goals', count: '6', img: abujaHqMedia[10] }
            ].map((stat, i) => (
              <div key={i} className="p-1 w-full bg-slate-50 rounded-[2.5rem] border border-slate-50 transition-all hover:bg-white hover:shadow-2xl group overflow-hidden">
                <div className="h-48 w-full overflow-hidden rounded-t-[2.3rem]">
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
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto group">
              {/* Using high-impact leadership shot from array */}
              <img src={abujaHqMedia[3]} alt="Dr David Ogbueli" className="w-full lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/90 via-[#003399]/10 to-transparent flex flex-col justify-end p-12">
                  <p className="text-white italic text-lg md:text-xl font-serif mb-6 leading-relaxed">
                    "We are not just building a church; we are raising a kingdom of kings and priests."
                  </p>
                  <p className="text-[#D4AF37] font-bold uppercase text-xs tracking-[0.3em]">Dr. David Ogbueli</p>
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