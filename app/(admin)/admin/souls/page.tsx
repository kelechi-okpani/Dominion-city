"use client";

import React, { useState } from 'react';
import Layout from '../../Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, Search, Filter, MoreHorizontal, 
  CheckCircle2, Clock, Download, Plus, X, ChevronRight 
} from 'lucide-react';

const INITIAL_DATA = [
  { id: 1, name: "Olawale Johnson", email: "olawale.j@example.com", phone: "+234 803 123 4567", status: "Followed Up", date: "2026-03-05", category: "First Timer" },
  { id: 2, name: "Sarah Adams", email: "sadams@example.com", phone: "+234 812 987 6543", status: "Pending", date: "2026-03-05", category: "New Convert" },
  { id: 3, name: "Michael Chen", email: "m.chen@example.com", phone: "+234 701 444 2211", status: "Followed Up", date: "2026-03-04", category: "First Timer" },
];

const SoulsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [souls] = useState(INITIAL_DATA);

  return (
    <Layout>
      {/* Container with responsive padding */}
      <div className=" px-2 sm:px-4 lg:px-4 py-4 sm:py-4">
        
        {/* Header Section: Stack on mobile, row on tablet+ */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Soul Winning</h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium">Record and manage heaven's harvest.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex-1 sm:flex-none cursor-pointer flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Download size={18} /> <span className="hidden xs:inline">Export</span>
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="flex-1 sm:flex-none cursor-pointer flex items-center justify-center gap-2 bg-[#4B0082] px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-purple-200 hover:bg-[#3b0066] transition-all"
            >
              <Plus size={18} /> New Entry
            </button>
          </div>
        </div>

        {/* Stats: 1 col on mobile, 3 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 text-[#4B0082] rounded-full flex items-center justify-center flex-shrink-0"><UserPlus size={20}/></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Weekly Total</p><p className="text-lg font-black text-slate-900">42</p></div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 size={20}/></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Followed Up</p><p className="text-lg font-black text-slate-900">28</p></div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0"><Clock size={20}/></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Pending Call</p><p className="text-lg font-black text-slate-900">14</p></div>
            </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg sm:rounded-[1rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96 text-left">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#4B0082]/10 outline-none"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-semibold border border-slate-100 md:border-none">
              <Filter size={18} /> Filter Options
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Member Info</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Joined</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {souls.map((soul) => (
                  <tr key={soul.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-[#4B0082] font-bold text-xs">
                          {soul.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{soul.name}</p>
                          <p className="text-[11px] text-slate-500">{soul.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-bold text-slate-600">
                      <span className="bg-slate-100 px-2 py-1 rounded-md">{soul.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-slate-500">{soul.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                        soul.status === 'Followed Up' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${soul.status === 'Followed Up' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        {soul.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-[#4B0082] transition-colors"><MoreHorizontal size={20}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- RESPONSIVE SIDE DRAWER --- */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-xl md:max-w-2xl bg-white shadow-2xl z-[70] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 text-[#4B0082] rounded-xl flex items-center justify-center"><UserPlus size={20}/></div>
                  <h2 className="text-xl font-black text-slate-900">Personal Data</h2>
                </div>
                <button onClick={() => setIsFormOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors"><X size={24}/></button>
              </div>

              {/* Drawer Content */}
              <form className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="text-left">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Full Name</label>
                  <input type="text" placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#4B0082]/20 outline-none transition-all" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Phone Number</label>
                    <input type="tel" placeholder="+234..." className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#4B0082]/20 outline-none" />
                  </div>
                  <div className="text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Category</label>
                    <select className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#4B0082]/20 outline-none appearance-none">
                      <option>First Timer</option>
                      <option>New Convert</option>
                    </select>
                  </div>
                </div>

                <div className="text-left">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#4B0082]/20 outline-none" />
                </div>

                <div className="text-left">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Residential Address</label>
                  <textarea rows={3} placeholder="House address..." className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-[#4B0082]/20 resize-none outline-none"></textarea>
                </div>
              </form>

              {/* Drawer Footer */}
              <div className="p-6 sm:p-8 border-t border-slate-50">
                <button type="button" className="cursor-pointer w-full bg-[#4B0082] text-white font-black py-4 rounded-2xl shadow-lg shadow-purple-100 flex items-center justify-center gap-2 hover:bg-[#3b0066] transition-all transform active:scale-[0.98]">
                  Submit Record <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default SoulsPage;