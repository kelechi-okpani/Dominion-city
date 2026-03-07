"use client";
import React, { useState, useMemo } from 'react';
import Layout from '@/app/(admin)/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Users, SendHorizonal, Plus, Trash2, 
  Search, Filter, BookUser, ImageUp, ScanText, X, Phone,
  MoreVertical, CheckSquare, Square, ChevronRight,
  Download, UserPlus, Mail, ShieldCheck, ArrowRightLeft
} from 'lucide-react';

// --- Types ---
interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  groupId: string;
  branch: string;
}

interface Group {
  id: string;
  name: string;
  count: number;
  color: string;
  description: string;
}

// --- Mock Data ---
const GROUPS: Group[] = [
  { id: 'all', name: 'All Members', count: 1250, color: 'bg-indigo-500', description: 'General congregation database' },
  { id: 'leaders', name: 'Church Leaders', count: 42, color: 'bg-purple-500', description: 'Pastors, Deacons, and HODs' },
  { id: 'workers', name: 'Sanctuary Workers', count: 88, color: 'bg-emerald-500', description: 'Active service unit members' },
  { id: 'first-timers', name: 'First Timers', count: 15, color: 'bg-amber-500', description: 'Recent visitors and converts' },
];

const INITIAL_CONTACTS: Contact[] = [
  { id: 1, name: 'John Doe', phone: '+2348012345678', email: 'john@dc.org', groupId: 'all', branch: 'Gudu HQ' },
  { id: 2, name: 'Jane Smith', phone: '+2348098765432', email: 'jane@dc.org', groupId: 'first-timers', branch: 'Durumi' },
  { id: 3, name: 'Mike Johnson', phone: '+2347011122233', email: 'mike@dc.org', groupId: 'leaders', branch: 'Gudu HQ' },
  { id: 4, name: 'Sarah Williams', phone: '+2348022233344', email: 'sarah@dc.org', groupId: 'workers', branch: 'Gudu HQ' },
  { id: 5, name: 'Kelechi Okpani', phone: '+2348100001111', email: 'k.okpani@dc.org', groupId: 'leaders', branch: 'Gudu HQ' },
];

const CommunicationsPage = () => {
  const [activeGroupId, setActiveGroupId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);
  const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
  const [smsMessage, setSmsMessage] = useState('');

  // --- Logic: Active Group Context ---
  const activeGroup = useMemo(() => 
    GROUPS.find(g => g.id === activeGroupId) || GROUPS[0], 
  [activeGroupId]);

  const filteredContacts = useMemo(() => {
    return INITIAL_CONTACTS.filter(c => {
      const isInGroup = activeGroupId === 'all' ? true : c.groupId === activeGroupId;
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.phone.includes(searchQuery);
      return isInGroup && matchesSearch;
    });
  }, [activeGroupId, searchQuery]);

  // --- Action Handlers ---
  const toggleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) setSelectedContacts([]);
    else setSelectedContacts(filteredContacts.map(c => c.id));
  };

  const handleSelect = (id: number) => {
    setSelectedContacts(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto pb-20 px-4">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Communications</h1>
            <p className="text-slate-500 font-medium mt-1 italic">Managing the flock through digital connection.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-slate-100 text-slate-600 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition">
              <Download size={18} /> Export List
            </button>
            <button 
              onClick={() => setIsSmsModalOpen(true)}
              className="flex items-center gap-2 bg-[#4B0082] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#3a0063] transition shadow-xl shadow-purple-100"
            >
              <MessageSquare size={18} /> New Broadcast
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- Sidebar: Group Folders (4 Cols) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-8 px-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Database Folders</h3>
                <button className="p-2 bg-purple-50 text-[#4B0082] rounded-xl hover:scale-110 transition-transform">
                  <Plus size={20} />
                </button>
              </div>

              <div className="space-y-3">
                {GROUPS.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => {
                      setActiveGroupId(group.id);
                      setSelectedContacts([]);
                    }}
                    className={`w-full group flex items-center justify-between p-5 rounded-[2rem] transition-all duration-500 ${
                      activeGroupId === group.id 
                      ? 'bg-[#4B0082] text-white shadow-2xl shadow-purple-200 translate-x-2' 
                      : 'bg-transparent text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        activeGroupId === group.id ? 'bg-white border-white/20' : `${group.color} border-transparent`
                      }`} />
                      <div className="text-left">
                        <p className="font-black text-sm tracking-tight">{group.name}</p>
                        <p className={`text-[9px] font-bold uppercase tracking-widest ${
                          activeGroupId === group.id ? 'text-purple-200' : 'text-slate-400'
                        }`}>{group.count} Members</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className={activeGroupId === group.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'} />
                  </button>
                ))}
              </div>
            </div>

            {/* AI Assistant Utility */}
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                  <ScanText className="text-purple-400" size={24} />
                </div>
                <h4 className="text-xl font-black tracking-tight">List OCR Digitizer</h4>
                <p className="text-slate-400 text-xs mt-2 mb-8 leading-relaxed">Scan handwritten attendance sheets. Our AI will automatically extract names and numbers into {activeGroup.name}.</p>
                <button className="flex items-center justify-center gap-2 w-full bg-white text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-50 transition">
                  <ImageUp size={16} /> Upload Sheet
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[80px]" />
            </div>
          </div>

          {/* --- Content: Group Table (8 Cols) --- */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Dynamic Table Header */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-[1.5rem] ${activeGroup.color} flex items-center justify-center text-white shadow-xl rotate-3`}>
                  <Users size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">{activeGroup.name}</h2>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-1">{activeGroup.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition">
                  <ArrowRightLeft size={20} />
                </button>
                <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-100 transition">
                  <UserPlus size={18} /> Add Contact
                </button>
              </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 bg-slate-50/30">
                <div className="relative">
                  <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input 
                    type="text" 
                    placeholder={`Search members in ${activeGroup.name}...`}
                    className="w-full pl-16 pr-8 py-5 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:border-[#4B0082] transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white">
                      <th className="p-8 w-12">
                        <button onClick={toggleSelectAll} className="text-slate-300 hover:text-[#4B0082] transition-colors">
                          {selectedContacts.length === filteredContacts.length && filteredContacts.length > 0 
                            ? <CheckSquare size={22} className="text-[#4B0082]"/> : <Square size={22}/>}
                        </button>
                      </th>
                      <th className="py-6 px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Congregant</th>
                      <th className="py-6 px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Contact Info</th>
                      <th className="py-6 px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Branch</th>
                      <th className="py-6 px-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <AnimatePresence mode="popLayout">
                      {filteredContacts.map((contact) => (
                        <motion.tr 
                          layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          key={contact.id} 
                          className={`group transition-all ${selectedContacts.includes(contact.id) ? 'bg-purple-50/40' : 'hover:bg-slate-50/50'}`}
                        >
                          <td className="p-8">
                            <button onClick={() => handleSelect(contact.id)} className="text-slate-200 group-hover:text-slate-400 transition-colors">
                              {selectedContacts.includes(contact.id) ? <CheckSquare size={22} className="text-[#4B0082]"/> : <Square size={22}/>}
                            </button>
                          </td>
                          <td className="py-6 px-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center font-black text-[#4B0082] text-xs">
                                {contact.name.split(' ').map(n=>n[0]).join('')}
                              </div>
                              <div>
                                <p className="text-sm font-black text-slate-900">{contact.name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <ShieldCheck size={12} className="text-blue-500" />
                                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Verified Member</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-6 px-4">
                            <div className="space-y-1">
                              <p className="text-xs font-bold text-slate-700 flex items-center gap-2">
                                <Phone size={12} className="text-emerald-500" /> {contact.phone}
                              </p>
                              <p className="text-[11px] font-bold text-slate-400 flex items-center gap-2 italic">
                                <Mail size={12} /> {contact.email}
                              </p>
                            </div>
                          </td>
                          <td className="py-6 px-4">
                            <span className="text-[10px] font-black px-4 py-1.5 bg-slate-100 rounded-full text-slate-500 uppercase tracking-widest">
                              {contact.branch}
                            </span>
                          </td>
                          <td className="py-6 px-4 text-right pr-8">
                            <button className="p-3 text-slate-300 hover:text-slate-900 transition-colors bg-transparent hover:bg-white rounded-xl shadow-sm">
                              <MoreVertical size={20} />
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
              
              {filteredContacts.length === 0 && (
                <div className="py-20 text-center">
                   <div className="inline-flex p-6 bg-slate-50 rounded-full mb-4 text-slate-300">
                      <Search size={40} />
                   </div>
                   <p className="text-slate-400 font-bold">No members found in this group matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- SMS Modal --- */}
        <AnimatePresence>
          {isSmsModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsSmsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="bg-white w-full max-w-2xl rounded-[4rem] shadow-2xl relative z-10 overflow-hidden"
              >
                <div className="p-12">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-purple-50 rounded-[1.5rem] text-[#4B0082]">
                        <SendHorizonal size={28} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Compose Broadcast</h2>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Sending to {activeGroup.name}</p>
                      </div>
                    </div>
                    <button onClick={() => setIsSmsModalOpen(false)} className="p-4 bg-slate-50 hover:bg-slate-100 rounded-full transition">
                      <X size={24} className="text-slate-400" />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Recipients</label>
                        <div className="flex items-center gap-2">
                           <Users size={18} className="text-[#4B0082]" />
                           <span className="font-black text-slate-800">
                            {selectedContacts.length > 0 ? `${selectedContacts.length} Selected` : `All ${activeGroup.name}`}
                           </span>
                        </div>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                        <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Channel</label>
                        <div className="flex items-center gap-2 text-blue-600">
                           <MessageSquare size={18} />
                           <span className="font-black">Bulk SMS (GSM)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 mb-3 ml-2 block tracking-[0.2em]">Message Body</label>
                      <textarea 
                        rows={6}
                        className="w-full p-8 bg-slate-50 border-2 border-slate-50 rounded-[2.5rem] font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition-all resize-none shadow-inner"
                        placeholder="Grace be unto you! Join us for..."
                        value={smsMessage}
                        onChange={(e) => setSmsMessage(e.target.value)}
                      />
                      <div className="flex justify-between mt-4 px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        <span>{smsMessage.length} Characters</span>
                        <span className="text-[#4B0082]">{Math.ceil(smsMessage.length / 160)} SMS Credits Required</span>
                      </div>
                    </div>

                    <button className="w-full py-7 bg-[#4B0082] text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#3a0063] transition shadow-2xl shadow-purple-200 flex items-center justify-center gap-3">
                      Blast Message <SendHorizonal size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </Layout>
  );
};

export default CommunicationsPage;