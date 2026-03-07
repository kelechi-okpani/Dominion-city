"use client";
import React, { useState } from 'react';
import Layout from '@/app/(admin)/Layout';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MessageSquare, UserPlus, Download, Search, 
  ScanText, ImageUp, SendHorizonal, X, MoreVertical, Phone, Mail,
  ShieldCheck, CheckSquare, Square
} from 'lucide-react';

export default function GroupDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  // --- UI State ---
  const [isSmsOpen, setIsSmsOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [smsMessage, setSmsMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', branch: 'Gudu HQ' });

  const handleCloseModals = () => {
    setIsSmsOpen(false);
    setIsAddUserOpen(false);
  };

  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto pb-20 px-4">
        
        {/* --- Top Navigation --- */}
        <button 
          onClick={() => router.back()} 
          className="group flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-[#4B0082] transition-all mb-8"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Folders
        </button>


     {/* --- Tools Container --- */}
<div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
  
  {/* Primary Action Card: Broadcast */}
  <div className="flex-1 bg-[#4B0082] p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
     <div className="relative z-10 h-full flex flex-col">
        <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6 w-fit">
          <ShieldCheck size={24} className="text-purple-200" />
        </div>
        
        <h2 className="text-3xl font-black tracking-tight capitalize mb-2">
          {id?.toString().replace(/-/g, ' ')}
        </h2>
        
        <p className="text-purple-200 text-xs font-medium mb-10 leading-relaxed max-w-xs">
          Broadcast updates and manage member records for this specific segment.
        </p>
        
        <div className="mt-auto space-y-3">
          <button 
            onClick={() => setIsSmsOpen(true)} 
            className="w-full bg-white text-[#4B0082] py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20"
          >
            <MessageSquare size={18} /> Broadcast SMS
          </button>
          <button className="w-full bg-purple-400/20 text-white border border-purple-400/30 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-400/30 transition-all flex items-center justify-center gap-2">
            <Download size={18} /> Export List
          </button>
        </div>
     </div>
     {/* Decorative Ambient Light */}
     <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 blur-[80px] rounded-full" />
  </div>

  {/* OCR Utility Card: Digitizer */}
  <div className="flex-1 bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-xl relative overflow-hidden group">
     <div className="relative z-10 h-full flex flex-col">
       <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:rotate-6 transition-transform">
          <ScanText className="text-purple-400" size={28} />
       </div>
       
       <h4 className="text-xl font-black tracking-tight">List OCR Digitizer</h4>
       
       <p className="text-slate-400 text-xs mt-3 mb-8 leading-relaxed max-w-xs">
         Upload a photo of a handwritten attendance sheet. Our AI will extract names and numbers automatically.
       </p>
       
       <div className="mt-auto">
         <button className="w-full bg-slate-800 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-700 transition-all flex items-center justify-center gap-2 border border-slate-700">
            <ImageUp size={18} /> Upload Register
         </button>
       </div>
     </div>
     <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[80px]" />
  </div>

</div>

           {/* --- Content Area: Member Table --- */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden">
              
              {/* Table Toolbar */}
              <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-50/30">
                <div className="relative w-full md:max-w-md">
                  <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or phone..." 
                    className="w-full pl-16 pr-8 py-5 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold focus:ring-4 ring-purple-50 focus:border-[#4B0082] outline-none transition-all shadow-sm" 
                  />
                </div>
                <button 
                  onClick={() => setIsAddUserOpen(true)} 
                  className="bg-emerald-50 text-emerald-600 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-100 active:scale-95 transition-all whitespace-nowrap shadow-sm"
                >
                  <UserPlus size={20} /> Add Member
                </button>
              </div>

              {/* Table Body */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">
                      <th className="p-10 w-12 text-center">#</th>
                      <th className="py-8 px-4">Member Identity</th>
                      <th className="py-8 px-4">Contact Detail</th>
                      <th className="py-8 px-4 text-center">Status</th>
                      <th className="py-8 px-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-all group">
                        <td className="p-10 text-center text-slate-300 font-black text-xs">0{i}</td>
                        <td className="py-6 px-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm font-black text-[#4B0082] flex items-center justify-center text-xs">
                              {i === 1 ? 'ty' : 'JD'}
                            </div>
                            <div>
                              <p className="font-black text-slate-800 text-sm">
                                {i === 1 ? 'Temmy yade' : `Member Name ${i}`}
                              </p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Gudu HQ Branch</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-slate-700 flex items-center gap-2">
                              <Phone size={12} className="text-emerald-500"/> +234 810 000 {i}111
                            </p>
                            <p className="text-[11px] font-bold text-slate-400 flex items-center gap-2 italic">
                              <Mail size={12}/> contact{i}@dc.org
                            </p>
                          </div>
                        </td>
                        <td className="py-6 px-4 text-center">
                           <span className="text-[9px] font-black px-4 py-1.5 bg-blue-50 text-blue-500 rounded-full uppercase tracking-widest">Verified</span>
                        </td>
                        <td className="py-6 px-10 text-right">
                          <button className="p-3 text-slate-200 hover:text-slate-900 hover:bg-white rounded-xl shadow-sm transition-all">
                            <MoreVertical size={20}/>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        {/* --- Modal: Broadcast SMS --- */}
        <AnimatePresence>
          {isSmsOpen && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                onClick={handleCloseModals} 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" 
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="bg-white w-full max-w-2xl rounded-[4rem] p-12 relative z-10 shadow-2xl overflow-hidden"
              >
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-purple-50 rounded-[1.5rem] text-[#4B0082]">
                      <SendHorizonal size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-slate-900 tracking-tight">Broadcast</h2>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">To: {id?.toString().replace(/-/g, ' ')}</p>
                    </div>
                  </div>
                  <button onClick={handleCloseModals} className="p-4 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors">
                    <X size={24} className="text-slate-400" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div className="relative">
                    <label className="text-[10px] font-black uppercase text-slate-400 mb-3 ml-2 block tracking-[0.2em]">Message Body</label>
                    <textarea 
                      rows={6}
                      value={smsMessage}
                      onChange={(e) => setSmsMessage(e.target.value)}
                      className="w-full p-8 bg-slate-50 border-2 border-slate-50 rounded-[2.5rem] font-bold text-slate-800 focus:bg-white focus:border-[#4B0082] outline-none transition-all resize-none shadow-inner"
                      placeholder="Type your message here..."
                    />
                    <div className="flex justify-between mt-4 px-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      <span>{smsMessage.length} Characters</span>
                      <span className="text-[#4B0082]">{Math.ceil(smsMessage.length / 160)} SMS Credits</span>
                    </div>
                  </div>

                  <button className="w-full py-7 bg-[#4B0082] text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] hover:bg-[#3a0063] transition shadow-2xl shadow-purple-200 flex items-center justify-center gap-3">
                    Blast Message <SendHorizonal size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- Modal: Add Contact --- */}
        <AnimatePresence>
          {isAddUserOpen && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                onClick={handleCloseModals} 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" 
              />
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white w-full max-w-xl rounded-[3.5rem] p-12 relative z-10 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">New Member</h3>
                  <button onClick={handleCloseModals} className="p-3 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Full Name</label>
                    <input className="w-full p-5 bg-slate-50 rounded-2xl font-bold border-none outline-none focus:ring-2 ring-purple-100" placeholder="e.g. John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Phone Number</label>
                    <input className="w-full p-5 bg-slate-50 rounded-2xl font-bold border-none outline-none focus:ring-2 ring-purple-100" placeholder="+234..." />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Email (Optional)</label>
                    <input className="w-full p-5 bg-slate-50 rounded-2xl font-bold border-none outline-none focus:ring-2 ring-purple-100" placeholder="member@email.com" />
                  </div>
                  
                  <div className="pt-6">
                    <button className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all">
                      Save Member Record
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
}