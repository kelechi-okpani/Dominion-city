"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Search, Filter, MoreHorizontal, 
  Plus, X, ChevronRight, BookOpen, ShieldCheck, 
  Download, School, User
} from 'lucide-react';
import Layout from '@/app/(admin)/Layout';

// --- MOCK DATA ---
const DCA_DATA = [
  { id: 1, name: "Blessing Enang", phone: "+234 802 111 2233", level: "Foundation", status: "Active", date: "2026-02-10" },
  { id: 2, name: "David Okonkwo", phone: "+234 901 333 4455", level: "Maturity", status: "Completed", date: "2026-01-15" },
];

const DLI_DATA = [
  { id: 1, name: "Pastor Emeka Silva", phone: "+234 703 555 6677", course: "LDR 101", status: "Exam Pending", date: "2026-03-01" },
];

const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState<'DCA' | 'DLI'>('DCA');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const currentData = activeTab === 'DCA' ? DCA_DATA : DLI_DATA;

  return (
    <Layout>
      <div className=" px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <div className="flex items-center gap-2 text-[#4B0082] mb-2">
              <GraduationCap size={20} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Education Portal</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Foundation School</h1>
            <p className="text-slate-500 font-medium">Equipping saints for the work of the ministry.</p>
          </div>

          {/* Tab Switcher (Segmented Control) */}
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 self-start">
            <button 
              onClick={() => setActiveTab('DCA')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'DCA' ? 'bg-white text-[#4B0082] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              DCA
            </button>
            <button 
              onClick={() => setActiveTab('DLI')}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'DLI' ? 'bg-white text-[#4B0082] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              DLI
            </button>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder={`Search ${activeTab} students...`} 
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm outline-none focus:ring-4 focus:ring-[#4B0082]/5 focus:border-[#4B0082]/20 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:bg-slate-50"><Filter size={20}/></button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 bg-[#4B0082] px-6 py-3 rounded-2xl text-sm font-bold text-white shadow-lg shadow-purple-200 hover:bg-[#3b0066] transition-all"
            >
              <Plus size={18} /> Enrollment
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Student Details</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">{activeTab === 'DCA' ? 'Academy Level' : 'DLI Course'}</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Reg. Date</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress Status</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-8 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-purple-50 text-[#4B0082] flex items-center justify-center font-bold text-sm">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-[#4B0082] transition-colors">{item.name}</p>
                          <p className="text-xs text-slate-500 font-medium">{item.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {activeTab === 'DCA' ? <BookOpen size={14} className="text-amber-500" /> : <ShieldCheck size={14} className="text-sky-500" />}
                        <span className="text-sm font-bold text-slate-700">{(item as any).level || (item as any).course}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-xs font-semibold text-slate-400">{item.date}</td>
                    <td className="px-8 py-5 whitespace-nowrap">
                      <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                        item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-purple-100 text-[#4B0082]'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors"><MoreHorizontal size={20}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- ENROLLMENT FORM (DRAWER) --- */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 w-full md:max-w-2xl bg-white shadow-2xl z-[70] flex flex-col"
            >
              {/* Form Header */}
              <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4B0082] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-100">
                    {activeTab === 'DCA' ? <School size={24} /> : <ShieldCheck size={24} />}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900 leading-none">{activeTab} Enrollment</h2>
                    <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-widest">Academic Year 2026</p>
                  </div>
                </div>
                <button onClick={() => setIsFormOpen(false)} className="p-2.5 hover:bg-white rounded-full text-slate-400 border border-slate-100 shadow-sm"><X size={20}/></button>
              </div>

              {/* Form Fields */}
              <form className="flex-1 overflow-y-auto p-8 space-y-8">
                <section>
                  <p className="text-[10px] font-black text-[#4B0082] uppercase tracking-[0.2em] mb-6">Personal Information</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="md:col-span-2">
                      <label className="text-xs font-bold text-slate-400 mb-2 block">Full Student Name</label>
                      <input type="text" className="w-full px-5 py-3.5 rounded-2xl bg-slate-100 border-none text-sm font-semibold focus:bg-white focus:ring-4 focus:ring-[#4B0082]/5" placeholder="Johnathan Doe" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 mb-2 block">WhatsApp Number</label>
                      <input type="tel" className="w-full px-5 py-3.5 rounded-2xl bg-slate-100 border-none text-sm font-semibold" placeholder="+234" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 mb-2 block">Gender</label>
                      <select className="w-full px-5 py-3.5 rounded-2xl bg-slate-100 border-none text-sm font-semibold">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </section>

                <section>
                  <p className="text-[10px] font-black text-[#4B0082] uppercase tracking-[0.2em] mb-6">Academic Path</p>
                  <div className="p-6 bg-purple-50 rounded-3xl border border-purple-100 space-y-6 text-left">
                    {activeTab === 'DCA' ? (
                      <div>
                        <label className="text-xs font-bold text-[#4B0082] mb-2 block">Select DCA Level</label>
                        <select className="w-full px-5 py-3.5 rounded-2xl bg-white border-none shadow-sm text-sm font-semibold">
                          <option>Foundation Class</option>
                          <option>Maturity Class</option>
                          <option>Ministry Class</option>
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label className="text-xs font-bold text-[#4B0082] mb-2 block">DLI Course Code</label>
                        <input type="text" className="w-full px-5 py-3.5 rounded-2xl bg-white border-none shadow-sm text-sm font-semibold" placeholder="e.g. LDR 101" />
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-5 h-5 rounded-lg border-purple-200 text-[#4B0082] focus:ring-[#4B0082]" />
                      <span className="text-xs font-bold text-slate-600">Student has completed previous prerequisites</span>
                    </div>
                  </div>
                </section>
              </form>

              {/* Form Footer */}
              <div className="p-8 bg-slate-50/50 border-t border-slate-100">
                <button className="w-full bg-[#4B0082] text-white font-black py-4 rounded-2xl shadow-xl shadow-purple-100 hover:bg-[#3b0066] transition-all flex items-center justify-center gap-2">
                  Complete Enrollment <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default AcademyPage;