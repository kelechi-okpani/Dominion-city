"use client";

import React, { useState, useMemo } from 'react';
import Layout from '../../Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, Search, Filter, MoreHorizontal, 
  Sparkles, CalendarDays, Download, Plus, X, ChevronRight, MapPin, Building2, AlignLeft, RotateCcw
} from 'lucide-react';

const BRANCHES = [
  { id: 'hq', name: 'Abuja HQ' },
  { id: 'durumi', name: 'Durumi Branch' },
  { id: 'lugbe', name: 'Lugbe Branch' },
  { id: 'gwarinpa', name: 'Gwarinpa Branch' },
];

const SERVICES = [
  "Sunday Service",
  "Mid-Week Service",
  "Outreach",
  "Special Event / Church Service",
];

const INITIAL_DATA = [
  { id: 1, name: "Olawale Johnson",  phone: "+234 803 123 4567", date: "2026-03-05", category: "First Timer", branchId: "hq", service: "Sunday Service", serviceDesc: "Special ministration on faith." },
  { id: 2, name: "Sarah Adams", phone: "+234 812 987 6543", date: "2026-03-05", category: "New Convert", branchId: "durumi", service: "Mid-Week Service", serviceDesc: "Bible study on Grace." },
  { id: 3, name: "Michael Chen", phone: "+234 701 444 2211", date: "2026-03-04", category: "First Timer", branchId: "lugbe", service: "Sunday Service", serviceDesc: "First service of the month." },
  { id: 4, name: " Chen Michael", phone: "+234 701 444 2222", date: "2026-03-04", category: "New Convert", branchId: "gwarinpa", service: "Outreach", serviceDesc: "First Outreach of the month." },
];

const SoulsPage = () => {
  const [currentUser] = useState({ role: 'HQ', branchId: 'hq' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [souls, setSouls] = useState(INITIAL_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Updated Filter States
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterBranch, setFilterBranch] = useState("All");
  const [filterService, setFilterService] = useState("All");

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'First Timer',
    service: 'Sunday Service',
    serviceDesc: '',
    address: '',
    branchId: currentUser.branchId
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilterCategory("All");
    setFilterBranch("All");
    setFilterService("All");
    setSearchQuery("");
  };

  const filteredSouls = useMemo(() => {
    return souls.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            s.phone.includes(searchQuery) ||
                            s.service.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filterCategory === "All" || s.category === filterCategory;
      const matchesBranch = filterBranch === "All" || s.branchId === filterBranch;
      const matchesService = filterService === "All" || s.service === filterService;

      return matchesSearch && matchesCategory && matchesBranch && matchesService;
    });
  }, [souls, searchQuery, filterCategory, filterBranch, filterService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSoul = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
    };
    setSouls([newSoul, ...souls]);
    setIsFormOpen(false);
    setFormData({ name: '', phone: '', category: 'First Timer', service: 'Sunday Service', serviceDesc: '', address: '', branchId: currentUser.branchId });
  };

  return (
    <Layout>
      <div className="px-4 py-8 max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1.5 w-10 bg-[#4B0082] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4B0082]">Kingdom Harvest</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Soul Winning</h1>
            <p className="text-slate-500 font-medium mt-1">Track and manage service attendance and new converts.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 hover:border-slate-200 transition-all">
              <Download size={18} /> Export
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-[#4B0082] px-8 py-3.5 rounded-2xl text-sm font-black text-white shadow-xl shadow-purple-200 hover:bg-[#3b0066] transition-all transform active:scale-[0.98]"
            >
              <Plus size={18} /> New Entry
            </button>
          </div>
        </div>

        {/* Updated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Total Records', val: souls.length.toString(), icon: <UserPlus />, color: 'bg-purple-50 text-purple-700' },
            { label: 'Sunday Service', val: souls.filter(s => s.service === 'Sunday Service').length.toString(), icon: <Sparkles />, color: 'bg-emerald-50 text-emerald-700' },
            { label: 'Other Events', val: souls.filter(s => s.service !== 'Sunday Service').length.toString(), icon: <CalendarDays />, color: 'bg-amber-50 text-amber-700' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] border-2 border-slate-50 shadow-sm flex items-center gap-5">
              <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`}>{stat.icon}</div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900 leading-tight">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2.5rem] border-2 border-slate-50 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b-2 border-slate-50 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-1/2">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search records..." 
                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#4B0082]/10 outline-none transition-all"
                    />
                </div>
                {(filterCategory !== "All" || filterBranch !== "All" || filterService !== "All") && (
                    <button onClick={clearFilters} className="flex items-center gap-2 text-xs font-black text-red-500 hover:text-red-600 uppercase tracking-widest">
                        <RotateCcw size={14} /> Clear Filters
                    </button>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                    <Filter size={14} className="text-slate-400" />
                    <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-transparent border-none text-[11px] font-black uppercase outline-none text-slate-600 cursor-pointer">
                        <option value="All">All Categories</option>
                        <option value="First Timer">First Timer</option>
                        <option value="New Convert">New Convert</option>
                    </select>
                </div>

                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                    <Building2 size={14} className="text-slate-400" />
                    <select value={filterBranch} onChange={(e) => setFilterBranch(e.target.value)} className="bg-transparent border-none text-[11px] font-black uppercase outline-none text-slate-600 cursor-pointer">
                        <option value="All">All Branches</option>
                        {BRANCHES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                    </select>
                </div>

                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                    <CalendarDays size={14} className="text-slate-400" />
                    <select value={filterService} onChange={(e) => setFilterService(e.target.value)} className="bg-transparent border-none text-[11px] font-black uppercase outline-none text-slate-600 cursor-pointer">
                        <option value="All">All Services</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Member Info</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Category</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Branch</th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Service / Event</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-50">
                {filteredSouls.length > 0 ? (
                    filteredSouls.map((soul) => (
                    <tr key={soul.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-[#4B0082] font-black text-sm">
                                {soul.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="text-base font-black text-slate-900 leading-tight">{soul.name}</p>
                                <p className="text-xs font-bold text-slate-400 mt-1">{soul.phone} • {soul.date}</p>
                              </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                            <span className="bg-slate-900 text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider block w-fit">
                              {soul.category}
                            </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2 text-slate-700">
                              <Building2 size={14} className="text-slate-400" />
                              <span className="text-sm font-black">{BRANCHES.find(b => b.id === soul.branchId)?.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${soul.service === 'Sunday Service' ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                                    <span className="text-sm font-black text-slate-800">{soul.service}</span>
                                </div>
                                {soul.serviceDesc && <p className="text-[11px] text-slate-400 font-medium italic pl-4 line-clamp-1">"{soul.serviceDesc}"</p>}
                            </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:text-[#4B0082] group-hover:bg-white group-hover:shadow-md transition-all">
                              <MoreHorizontal size={20}/>
                          </button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="px-8 py-20 text-center">
                            <p className="text-slate-500 font-bold">No records found matching your filters.</p>
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-xl bg-white shadow-2xl z-[70] flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b-2 border-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#4B0082] rounded-2xl flex items-center justify-center"><UserPlus size={24}/></div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">Record Entry</h2>
                    <p className="text-xs font-bold text-slate-400">Save a new record to the branch database</p>
                  </div>
                </div>
                <button onClick={() => setIsFormOpen(false)} className="p-3 bg-slate-50 text-slate-400 hover:text-red-500 rounded-2xl transition-all"><X size={24}/></button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block flex items-center gap-2">
                      <MapPin size={12}/> Satellite Branch
                    </label>
                    <select name="branchId" value={formData.branchId} onChange={handleInputChange} disabled={currentUser.role !== 'HQ'} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition-all">
                      {BRANCHES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                    </select>
                  </div>
                  <div className="text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block flex items-center gap-2">
                      <CalendarDays size={12}/> Service / Event
                    </label>
                    <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none appearance-none transition-all">
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="text-left">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block flex items-center gap-2">
                    <AlignLeft size={12}/> Event Description
                  </label>
                  <input name="serviceDesc" value={formData.serviceDesc} onChange={handleInputChange} type="text" placeholder="e.g. Prophetic Entrance Service" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition-all" />
                </div>

                <div className="text-left">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Full Name</label>
                  <input name="name" required value={formData.name} onChange={handleInputChange} type="text" placeholder="Member Name" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition-all" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Phone Number</label>
                    <input name="phone" required value={formData.phone} onChange={handleInputChange} type="tel" placeholder="+234..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none" />
                  </div>
                  <div className="text-left">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Category</label>
                    <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none appearance-none">
                      <option>First Timer</option>
                      <option>New Convert</option>
                    </select>
                  </div>
                </div>

                <div className="text-left">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Residential Address</label>
                  <textarea name="address" value={formData.address} onChange={handleInputChange} rows={3} placeholder="Street, City..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-50 text-sm font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] resize-none outline-none transition-all"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#4B0082] text-white font-black py-5 rounded-2xl shadow-xl shadow-purple-100 flex items-center justify-center gap-2 hover:bg-[#3b0066] transition-all transform active:scale-[0.98]">
                  Submit Record <ChevronRight size={18} />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default SoulsPage;