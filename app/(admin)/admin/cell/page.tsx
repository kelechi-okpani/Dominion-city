'use client'
import React, { useState, useMemo } from 'react';
import { 
  Plus, Building2, MapPin, ChevronRight, Filter, Download, X, Users, Home, Search
} from 'lucide-react';
import Layout from '@/app/(admin)/Layout';

const BRANCHES = [
  { id: 'hq', name: 'Dc- Gudu HQ' },
  { id: 'durumi', name: 'Dc - Durumi ' },
  { id: 'lugbe', name: 'Dc - Lugbe ' },
  { id: 'gwarinpa', name: 'Dc - Gwarinpa ' },
];

const CellUnitsPage = () => {
  // Mock current user - In production this comes from Auth context
  const [currentUser] = useState({ role: 'HQ', branchId: 'hq' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('all');
  
  const [cellUnits, setCellUnits] = useState([
    { 
      id: 1, 
      branchId: 'durumi', 
      cellName: 'Grace Circle', 
      leader: 'Bro. Samuel Okon', 
      locality: 'Area 1, Garki', 
      meetingDay: 'Wednesday',
      memberCount: 12
    },
    { 
      id: 2, 
      branchId: 'lugbe', 
      cellName: 'Faith Tabernacle', 
      leader: 'Sis. Mary Jane', 
      locality: 'Federal Housing Estate', 
      meetingDay: 'Friday',
      memberCount: 8
    },
  ]);

  const [formData, setFormData] = useState({ 
    branchId: currentUser.role === 'HQ' ? 'durumi' : currentUser.branchId, 
    cellName: '', 
    leader: '', 
    locality: '',
    meetingDay: 'Wednesday',
    memberCount: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newCell = { ...formData, id: Date.now(), memberCount: Number(formData.memberCount) };
    setCellUnits([newCell, ...cellUnits]);
    setFormData({ ...formData, cellName: '', leader: '', locality: '', memberCount: '' });
    setIsFormOpen(false);
  };

  // Advanced Filtering Logic
  const filteredCells = useMemo(() => {
    return cellUnits.filter(cell => {
      const matchesBranch = selectedBranchFilter === 'all' || cell.branchId === selectedBranchFilter;
      const matchesSearch = cell.cellName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            cell.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            cell.leader.toLowerCase().includes(searchQuery.toLowerCase());
      
      // If not HQ, user only sees cells belonging to their branch
      const belongsToUserBranch = currentUser.role === 'HQ' || cell.branchId === currentUser.branchId;
      
      return matchesBranch && matchesSearch && belongsToUserBranch;
    });
  }, [cellUnits, selectedBranchFilter, searchQuery, currentUser]);

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50 p-4 md:p-6 font-sans text-slate-900">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1.5 w-10 bg-[#4B0082] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4B0082]">Kingdom Harvest</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Cell Units</h1>
            <p className="text-slate-500 font-medium mt-1">Manage locality-based house fellowships and cell leaders.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative bg-white border-2 border-slate-100 rounded-2xl shadow-sm focus-within:border-purple-200 transition-all">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                    type="text"
                    placeholder="Search cells or locality..."
                    className="pl-11 pr-4 py-3 text-sm font-bold text-slate-700 outline-none w-full md:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Branch Filter (Only for HQ) */}
            {currentUser.role === 'HQ' && (
                <div className="relative bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
                  <select 
                    className="appearance-none bg-transparent pl-5 pr-12 py-3 text-sm font-bold text-slate-700 outline-none cursor-pointer"
                    value={selectedBranchFilter}
                    onChange={(e) => setSelectedBranchFilter(e.target.value)}
                  >
                    <option value="all">&nbsp;&nbsp;All Satellite Churches</option>
                    {BRANCHES.map(b => <option key={b.id} value={b.id}>&nbsp;&nbsp;{b.name}</option>)}
                  </select>
                  <Filter size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
            )}

            <button 
              onClick={() => setIsFormOpen(true)}
              className="cursor-pointer flex-1 lg:flex-none flex items-center justify-center gap-2 bg-[#4B0082] px-8 py-3.5 rounded-2xl text-sm font-black text-white shadow-xl shadow-purple-200 hover:bg-[#3b0066] transition-all transform active:scale-[0.98]"
            >
              <Plus size={18} /> Add Cell Unit
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                            <th className="px-8 py-6">Cell Details</th>
                            <th className="px-8 py-6">Locality</th>
                            <th className="px-8 py-6">Leader</th>
                            <th className="px-8 py-6 text-center">Members</th>
                            <th className="px-8 py-6"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredCells.map((cell) => (
                            <tr key={cell.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-black text-slate-900">{cell.cellName}</span>
                                        <span className="text-[11px] font-bold text-[#4B0082] uppercase">
                                            {BRANCHES.find(b => b.id === cell.branchId)?.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-bold italic">
                                        <MapPin size={14} className="text-slate-300" />
                                        {cell.locality}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-sm text-slate-700 font-bold">{cell.leader}</td>
                                <td className="px-8 py-6 text-center">
                                    <span className="bg-purple-50 text-[#4B0082] px-3 py-1 rounded-full text-xs font-black">
                                        {cell.memberCount} Members
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 text-slate-300 group-hover:text-[#4B0082] transition-colors">
                                        <ChevronRight size={20}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredCells.length === 0 && (
                    <div className="p-20 text-center text-slate-400 font-medium">
                        No cell units found for the selected criteria.
                    </div>
                )}
            </div>
        </div>

        {/* Side Panel Form Drawer */}
        <div className={`fixed inset-0 z-50 transition-all duration-500 ${isFormOpen ? 'visible' : 'invisible'}`}>
            <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isFormOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsFormOpen(false)} />
            <div className={`absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#4B0082]">New Registration</span>
                            <h2 className="text-2xl font-black text-slate-900">Cell Unit</h2>
                        </div>
                        <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition">
                            <X size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 flex-1 overflow-y-auto pr-2">
                        {/* Satellite Church Selection */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Satellite Church</label>
                            <div className="relative">
                                <select 
                                    disabled={currentUser.role !== 'HQ'}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition"
                                    value={formData.branchId}
                                    onChange={(e) => setFormData({...formData, branchId: e.target.value})}
                                >
                                    {BRANCHES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                </select>
                                <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        {/* Cell Name */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Cell Name</label>
                            <div className="relative">
                                <input 
                                    type="text" required placeholder="e.g. Life Seeders"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition" 
                                    value={formData.cellName} 
                                    onChange={(e) => setFormData({...formData, cellName: e.target.value})} 
                                />
                                <Home size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        {/* Locality */}
                        <div>
                            <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Locality / Address</label>
                            <div className="relative">
                                <input 
                                    type="text" required placeholder="e.g. Area 11, Garki"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition" 
                                    value={formData.locality} 
                                    onChange={(e) => setFormData({...formData, locality: e.target.value})} 
                                />
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        {/* Leader & Member Count */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Cell Leader</label>
                                <input 
                                    type="text" required placeholder="Name"
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold focus:bg-white focus:border-[#4B0082] outline-none transition" 
                                    value={formData.leader} 
                                    onChange={(e) => setFormData({...formData, leader: e.target.value})} 
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Initial Members</label>
                                <input 
                                    type="number" placeholder="0"
                                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold focus:bg-white focus:border-[#4B0082] outline-none transition" 
                                    value={formData.memberCount} 
                                    onChange={(e) => setFormData({...formData, memberCount: e.target.value})} 
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-[#4B0082] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#3b0066] transition shadow-xl shadow-purple-100">
                                Register Cell Unit
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

export default CellUnitsPage;