"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  CreditCard, 
  Globe, 
  Users, 
  Building2, 
  Copy, 
  Check, 
  ExternalLink,
  Mail,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const accountData = [
  {
    category: "Accounts Information",
    description: "Tithe, Offering, and Partnership",
    accounts: [
      { name: "TITHE & OFFERING", acc: "101 378 2945", bank: "Zenith Bank", icon: <CreditCard size={20} /> },
      { name: "PROJECTS", acc: "101 441 8740", bank: "Zenith Bank", icon: <Building2 size={20} /> },
      { name: "PARTNERSHIP", acc: "101 716 4440", bank: "Zenith Bank", icon: <Users size={20} /> },
      { name: "WELFARE & SUPPORT", acc: "101 436 2520", bank: "Zenith Bank", icon: <Heart size={20} /> },
      { name: "MISSIONS", acc: "121 341 3517", bank: "Zenith Bank", icon: <Globe size={20} /> },
    ]
  }
];

export default function GivingPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    const cleanText = text.replace(/\s/g, '');
    navigator.clipboard.writeText(cleanText);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP HEADER SECTION - Matches "Our Locations" Style */}
        <header className="mb-12">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-serif font-bold text-[#003399] mb-4">Giving</h1>
            <p className="text-slate-500 max-w-2xl leading-relaxed">
              God remains faithful to His word, creating opportunities for us to set our faith to work. 
              Our show of gratitude for redeeming us is exemplified through our continued giving.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: ACCOUNT LISTING (Matches Sidebar List Style) */}
          <div className="lg:col-span-7 space-y-4 overflow-y-auto max-h-[800px] pr-2 custom-scrollbar">
            <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Bank Transfers</span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck size={12} /> Secure Transactions
                </span>
            </div>

            {accountData[0].accounts.map((acc, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center justify-between group hover:border-[#D4AF37] transition-all"
              >
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#003399] group-hover:bg-[#003399] group-hover:text-white transition-all">
                        {acc.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-[#003399] text-sm uppercase tracking-tight">{acc.name}</h3>
                        <p className="text-xl font-mono font-bold text-slate-800 tracking-tighter">{acc.acc}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{acc.bank}</p>
                    </div>
                </div>
                <button 
                  onClick={() => copyToClipboard(acc.acc)}
                  className={`p-4 rounded-2xl transition-all ${
                    copied === acc.acc ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400 hover:text-[#D4AF37]'
                  }`}
                >
                  {copied === acc.acc ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </motion.div>
            ))}

            {/* Special Accounts Sub-Section */}
            <div className="mt-12 p-8 bg-slate-100/50 rounded-[3rem] border border-dashed border-slate-200">
                <h3 className="text-[#003399] font-bold mb-6 flex items-center gap-2">
                    <Globe size={18} className="text-[#D4AF37]" /> Special Accounts
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-[10px] font-black text-[#D4AF37] uppercase mb-2">USD ($) Details</p>
                        <p className="text-sm font-bold text-slate-800">Zenith Bank: 507 059 2213</p>
                        <p className="text-[11px] text-slate-500">Swift: ZEIBNGLA | Sort: 18 50 08</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-[#D4AF37] uppercase mb-2">Prophet Honour</p>
                        <p className="text-sm font-bold text-slate-800">GTBank: 011 803 3621</p>
                        <p className="text-[11px] text-slate-500">Chuks & Sarah Ogbueli</p>
                    </div>
                </div>
            </div>
          </div>

          {/* RIGHT: ONLINE GIVING & SIGNUP (Matches Map/Action Box Style) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Give Online Card */}
            <div className="bg-[#003399] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-bold mb-4">Give Online</h2>
                    <p className="text-blue-100 text-sm mb-8 leading-relaxed opacity-80">
                        Prefer to use online payment channels? Use our secure portal for instant processing of your tithes and offerings.
                    </p>
                    <button className="w-full py-4 bg-[#D4AF37] hover:bg-white hover:text-[#003399] text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 group">
                        Proceed to Paystack <ExternalLink size={16} />
                    </button>
                </div>
                {/* Decorative Circles matching the Satellite UI logic */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#D4AF37]/20 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Newsletter/Signup Form */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#D4AF37]">
                        <Mail size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-[#003399]">Stay in the Loop</h3>
                </div>
                <p className="text-slate-500 text-sm mb-8">Sign up to receive email updates and church communications.</p>
                
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">First Name *</label>
                            <input type="text" className="w-full p-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#D4AF37]" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Last Name *</label>
                            <input type="text" className="w-full p-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#D4AF37]" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Email Address *</label>
                        <input type="email" className="w-full p-4 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#D4AF37]" />
                    </div>
                    <button className="w-full py-4 bg-[#003399] text-white font-bold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                        Subscribe Now <ChevronRight size={16} />
                    </button>
                </form>
            </div>
          </div>

        </div>
      </div>

      {/* Toast Notification for Copying */}
      <AnimatePresence>
        {copied && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#003399] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <Check size={18} className="text-[#D4AF37]" />
            <span className="text-sm font-bold tracking-tight uppercase">Account Copied to Clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}