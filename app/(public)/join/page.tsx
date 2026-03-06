"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, 
  Heart, Stars, CheckCircle2, 
  ChevronRight, ArrowLeft 
} from 'lucide-react';

export default function JoinFamilyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-[#D4AF37]" size={48} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-[#003399] mb-4">Welcome Home!</h2>
          <p className="text-slate-500 font-light mb-8">
            Your journey with the Dominion City Abuja family has officially begun. 
            A member of our team will reach out to you within 24 hours.
          </p>
          <button className="text-[#003399] font-bold uppercase text-xs tracking-widest border-b-2 border-[#D4AF37] pb-1">
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      
      {/* LEFT: Branding/Inspiration Area */}
      <div className="lg:w-1/3 bg-[#003399] p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-12 h-1 bg-[#D4AF37] mb-8" />
          <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Find Your <br /> <span className="italic text-[#D4AF37]">Place.</span>
          </h1>
          <p className="text-white/70 font-light text-lg leading-relaxed">
            Dominion City is more than a church; it’s a family of kings and priests. 
            We are excited to walk this path of purpose with you.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Stars className="text-[#D4AF37]" size={20} />
            </div>
            <p className="text-sm font-bold tracking-wide">Spiritual Growth</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Heart className="text-[#D4AF37]" size={20} />
            </div>
            <p className="text-sm font-bold tracking-wide">Authentic Community</p>
          </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* RIGHT: Form Area */}
      <div className="lg:w-2/3 bg-white p-8 lg:p-24 flex items-center justify-center">
        <div className="w-full max-w-xl">
          
          {/* Step Indicator */}
          <div className="flex gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-[#D4AF37]' : 'bg-slate-100'}`} 
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: 20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#003399] mb-2">Tell us about you</h2>
                  <p className="text-slate-400 text-sm">Let's get the basics down.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Full Name" icon={<User size={18}/>} placeholder="John Doe" />
                  <InputField label="Phone Number" icon={<Phone size={18}/>} placeholder="+234..." />
                  <div className="md:col-span-2">
                    <InputField label="Email Address" icon={<Mail size={18}/>} placeholder="john@example.com" />
                  </div>
                </div>
                <button 
                  onClick={nextStep}
                  className="w-full bg-[#003399] text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#D4AF37] transition-all"
                >
                  Next Step <ChevronRight size={16} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: 20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#003399] mb-2">Location & Status</h2>
                  <p className="text-slate-400 text-sm">Help us connect you to a nearby cell center.</p>
                </div>
                <div className="space-y-6">
                  <InputField label="Residential Address" icon={<MapPin size={18}/>} placeholder="Area, Abuja" />
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">How did you hear about us?</label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-slate-600">
                      <option>Social Media</option>
                      <option>Friend/Family</option>
                      <option>Billboard</option>
                      <option>Dominion TV</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="p-5 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"><ArrowLeft size={20}/></button>
                  <button 
                    onClick={nextStep}
                    className="flex-1 bg-[#003399] text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#D4AF37] transition-all"
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: -20, x: 20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-[#003399] mb-2">Interest & Tribes</h2>
                  <p className="text-slate-400 text-sm">Where would you like to serve or grow?</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Music Ministry', 'Media & IT', 'Ushering', 'Greeters', 'Dominion Kids', 'Medical Team'].map((dept) => (
                    <div key={dept} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-[#D4AF37] cursor-pointer group transition-all">
                      <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-[#D4AF37]" />
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">{dept}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="p-5 rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"><ArrowLeft size={20}/></button>
                  <button 
                    onClick={() => setSubmitted(true)}
                    className="flex-1 bg-[#D4AF37] text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Complete Registration
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div >
  );
}

// Helper Component for inputs
function InputField({ label, icon, placeholder }: { label: string, icon: React.ReactNode, placeholder: string }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em]">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
          {icon}
        </div>
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-[#D4AF37] transition-all text-slate-600 placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}