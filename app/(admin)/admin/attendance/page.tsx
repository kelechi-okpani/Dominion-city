'use client'
import React, { useState, useMemo } from 'react';
import { 
  Plus, Building2, User, UserCheck, Baby, MapPin, ChevronRight, Filter, Download, X, Calendar, FileText
} from 'lucide-react';
import Layout from '@/app/(admin)/Layout';

const BRANCHES = [
  { id: 'hq', name: 'Dc- Gudu HQ' },
  { id: 'durumi', name: 'Dc - Durumi ' },
  { id: 'lugbe', name: 'Dc - Lugbe ' },
  { id: 'gwarinpa', name: 'Dc - Gwarinpa ' },
];

const AttendanceDashboard = () => {
  const [currentUser] = useState({ role: 'HQ', branchId: 'hq' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('all');
  
  const [attendanceData, setAttendanceData] = useState([
    { 
        id: 1, 
        branchId: 'dc-gudu', 
        date: '2026-03-01', 
        event: 'Sunday Service', 
        description: 'First service of the month with communion.',
        men: 150, women: 200, children: 100, total: 450 
    },
       { 
        id: 2, 
        branchId: 'dc-durumi', 
        date: '2026-02-05', 
        event: 'Mid-week Service', 
        description: 'First service of the month with communion.',
        men: 150, women: 200, children: 100, total: 450 
    },
  ]);

  const [formData, setFormData] = useState({ 
    branchId: currentUser.branchId, 
    date: new Date().toISOString().split('T')[0], 
    event: '', 
    description: '',
    men: '', 
    women: '', 
    children: '',
  });

  const currentTotal = Number(formData.men) + Number(formData.women) + Number(formData.children);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newData = { 
      ...formData, 
      id: Date.now(), 
      men: Number(formData.men),
      women: Number(formData.women),
      children: Number(formData.children),
      total: currentTotal 
    };
    setAttendanceData([newData, ...attendanceData]);
    setFormData({ 
        ...formData, 
        event: '', 
        description: '', 
        men: '', 
        women: '', 
        children: '' 
    });
    setIsFormOpen(false);
  };

  const filteredData = useMemo(() => {
    let baseData = currentUser.role === 'HQ' 
        ? attendanceData 
        : attendanceData.filter(d => d.branchId === currentUser.branchId);

    if (selectedBranchFilter !== 'all') {
        return baseData.filter(d => d.branchId === selectedBranchFilter);
    }
    return baseData;
  }, [attendanceData, selectedBranchFilter, currentUser]);

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 p-4 md:p-6 font-sans text-slate-900">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1.5 w-10 bg-[#4B0082] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4B0082]">Kingdom Harvest</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Attendance</h1>
            <p className="text-slate-500 font-medium mt-1">Track and manage service attendance and branch records.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {currentUser.role === 'HQ' && (
                <div className="relative bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-purple-100 transition-colors">
                    <select 
                    className="w-full min-w-[260px] appearance-none bg-transparent pl-5 pr-12 py-3 text-sm font-bold text-slate-700 outline-none cursor-pointer"
                    value={selectedBranchFilter}
                    onChange={(e) => setSelectedBranchFilter(e.target.value)}
                    >
                    <option value="all" className="py-2 cursor-pointer">All Branches</option>
                    {BRANCHES.map(b => (
                        <option className="py-8 px-4 cursor-pointer" key={b.id} value={b.id}>
                        {b.name}
                        </option>
                    ))}
                    </select>
            
                    <Filter 
                    size={14} 
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" 
                    />
                </div>
                )}

            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 hover:border-slate-200 transition-all">
              <Download size={18} /> Export
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="cursor-pointer flex-1 lg:flex-none flex items-center justify-center gap-2 bg-[#4B0082] px-8 py-3.5 rounded-2xl text-sm font-black text-white shadow-xl shadow-purple-200 hover:bg-[#3b0066] transition-all transform active:scale-[0.98]"
            >
              <Plus size={18} /> New Entry
            </button>
          </div>
        </div>

        {/* Attendance Log History */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50">
                <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <Building2 size={20} className="text-[#4B0082]" />
                    Log History
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                            <th className="px-8 py-6">Branch & Event</th>
                            <th className="px-8 py-6">Date</th>
                            <th className="px-8 py-6 text-center">Breakdown</th>
                            <th className="px-8 py-6 text-center">Total</th>
                            <th className="px-8 py-6"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredData.map((row) => (
                            <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-black text-slate-900 italic">
                                            {BRANCHES.find(b => b.id === row.branchId)?.name}
                                        </span>
                                        <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-tight">{row.event}</span>
                                        <p className="text-[10px] text-slate-400 font-medium truncate max-w-[200px] mt-1">{row.description}</p>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-sm text-slate-500 font-bold">{row.date}</td>
                                <td className="px-8 py-6">
                                    <div className="flex justify-center items-center gap-2 flex-nowrap">
                                        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1.5 rounded-lg border border-blue-100 whitespace-nowrap">Male - {row.men}</span>
                                        <span className="text-[10px] font-black text-pink-600 bg-pink-50 px-2 py-1.5 rounded-lg border border-pink-100 whitespace-nowrap">Female - {row.women}</span>
                                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1.5 rounded-lg border border-emerald-100 whitespace-nowrap">Child - {row.children}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-center font-black text-xl text-slate-900 tracking-tighter">{row.total}</td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 text-slate-300 group-hover:text-[#4B0082] transition-colors"><ChevronRight size={20}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Side Panel Drawer */}
        <div className={`fixed inset-0 z-50 transition-all duration-500 ${isFormOpen ? 'visible' : 'invisible'}`}>
            <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isFormOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsFormOpen(false)} />
            <div className={`absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#4B0082]">Log Entry</span>
                            <h2 className="text-2xl font-black text-slate-900">Attendance</h2>
                        </div>
                        <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition">
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 flex-1 overflow-y-auto pr-2">
                        {/* Branch Selection */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Target Branch</label>
                            <div className="relative">
                                <select 
                                    disabled={currentUser.role !== 'HQ'}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition"
                                    value={formData.branchId}
                                    onChange={(e) => setFormData({...formData, branchId: e.target.value})}
                                >
                                    {BRANCHES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                </select>
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        {/* Event Name */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Event Name</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    required 
                                    placeholder="e.g. Sunday Service"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition" 
                                    value={formData.event} 
                                    onChange={(e) => setFormData({...formData, event: e.target.value})} 
                                />
                                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Service Date</label>
                            <input type="date" required className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Event Description</label>
                            <div className="relative">
                                <textarea 
                                    rows={3}
                                    placeholder="Brief notes about the service..."
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition resize-none" 
                                    value={formData.description} 
                                    onChange={(e) => setFormData({...formData, description: e.target.value})} 
                                />
                                <FileText size={18} className="absolute left-4 top-6 text-slate-400" />
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Men</label>
                                <input type="number" placeholder="0" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold focus:bg-white focus:border-blue-500 outline-none transition" value={formData.men} onChange={(e) => setFormData({...formData, men: e.target.value})} />
                            </div>
                            <div className="col-span-1">
                                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Women</label>
                                <input type="number" placeholder="0" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold focus:bg-white focus:border-pink-500 outline-none transition" value={formData.women} onChange={(e) => setFormData({...formData, women: e.target.value})} />
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Children</label>
                            <input type="number" placeholder="0" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold focus:bg-white focus:border-emerald-500 outline-none transition" value={formData.children} onChange={(e) => setFormData({...formData, children: e.target.value})} />
                        </div>

                        {/* Footer / Submit */}
                        <div className="mt-auto pt-8">
                            <div className="p-6 bg-slate-900 rounded-[1.5rem] text-white flex justify-between items-center mb-6">
                                <span className="text-xs font-black uppercase tracking-widest opacity-60">Grand Total</span>
                                <span className="text-4xl font-black">{currentTotal}</span>
                            </div>

                            <button className="w-full bg-[#4B0082] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#3b0066] transition shadow-xl shadow-purple-100">
                                Save Attendance Record
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AttendanceDashboard;