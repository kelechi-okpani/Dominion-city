"use client";
import React, { useState } from 'react';
import Layout from '@/app/(admin)/Layout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Users, ChevronRight, X, FolderPlus } from 'lucide-react';

const GROUPS = [
  { id: 'leaders', name: 'Church Leaders', count: 42, color: 'bg-purple-500', desc: 'Pastors, Deacons, and HODs' },
  { id: 'workers', name: 'Sanctuary Workers', count: 88, color: 'bg-emerald-500', desc: 'Active service unit members' },
  { id: 'first-timers', name: 'First Timers', count: 15, color: 'bg-amber-500', desc: 'Recent visitors and converts' },
  { id: 'all', name: 'General Members', count: 1250, color: 'bg-indigo-500', desc: 'General congregation' },
];

export default function ContactGroupsPage() {
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto pb-20 px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Contact Groups</h1>
            <p className="text-slate-500 font-medium mt-1">Organize your congregation into manageable folders.</p>
          </div>
          <button 
            onClick={() => setIsGroupModalOpen(true)}
            className="flex items-center gap-2 bg-[#4B0082] text-white px-8 py-4 rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-105 transition shadow-xl"
          >
            <Plus size={20} /> Create New Group
          </button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {GROUPS.map((group) => (
            <Link key={group.id} href={`/admin/communications/${group.id}`}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm group hover:border-purple-200 transition-all cursor-pointer h-full flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl ${group.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">{group.name}</h3>
                <p className="text-slate-400 text-xs font-bold mt-2 leading-relaxed flex-grow">{group.desc}</p>
                
                <div className="mt-10 pt-6 border-t border-slate-50 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{group.count} Members</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#4B0082] group-hover:text-white transition-colors">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Side Modal: Create Group */}
        <AnimatePresence>
          {isGroupModalOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsGroupModalOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]" />
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }}
                className="fixed top-0 right-0 h-full w-full max-w-lg bg-white z-[120] shadow-2xl p-12"
              >
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <FolderPlus className="text-[#4B0082]" size={24} />
                    <h2 className="text-2xl font-black text-slate-900">New Group</h2>
                  </div>
                  <button onClick={() => setIsGroupModalOpen(false)} className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition"><X size={20}/></button>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Group Identity</label>
                    <input type="text" className="w-full p-6 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 ring-purple-100 outline-none" placeholder="e.g. Choir Department" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Objective</label>
                    <textarea className="w-full p-6 bg-slate-50 border-none rounded-2xl font-bold focus:ring-2 ring-purple-100 outline-none resize-none" rows={4} placeholder="What is this group for?" />
                  </div>
                  <button className="w-full py-6 bg-[#4B0082] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-purple-100 mt-4">Initialize Group</button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}