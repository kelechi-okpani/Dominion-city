"use client";
import React, { useState } from 'react';
import Layout from '@/app/(admin)/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Wallet, Zap, Users, MapPin, Car, Filter, Download, 
  ChevronRight, PieChart as PieIcon, X, Check, ArrowRight
} from 'lucide-react';

// Enhanced Data Structure with Branch-Specific Transactions
const ABUJA_SATELLITES: any = {
  "Gudu HQ (Central)": { 
    total: "₦4.8M", burn: "₦161k", peak: "Media & IT", 
    mix: { ops: 45, ministry: 35, projects: 20 },
    logs: [
      { title: "Generator Diesel (Main)", cat: "Operations", amount: "₦85,000", date: "Mar 07", status: "Approved", icon: <Zap size={16}/> },
      { title: "Guest Welfare (Sunday)", cat: "Ministry", amount: "₦120,000", date: "Mar 06", status: "Pending", icon: <Users size={16}/> },
      { title: "Fiber Internet Sub", cat: "Media & IT", amount: "₦45,000", date: "Mar 05", status: "Approved", icon: <Zap size={16}/> },
      { title: "Facility Cleaning", cat: "Operations", amount: "₦25,000", date: "Mar 04", status: "Approved", icon: <MapPin size={16}/> }
    ]
  },
  "Lugbe Satellite": { 
    total: "₦620k", burn: "₦20k", peak: "Rent/Ops", 
    mix: { ops: 60, ministry: 30, projects: 10 },
    logs: [
      { title: "Venue Rent Bal.", cat: "Operations", amount: "₦450,000", date: "Mar 01", status: "Approved", icon: <MapPin size={16}/> },
      { title: "PA System Repair", cat: "Media", amount: "₦15,000", date: "Feb 28", status: "Approved", icon: <MapPin size={16}/> },
      { title: "Flyer Printing", cat: "Outreach", amount: "₦12,000", date: "Feb 27", status: "Approved", icon: <PieIcon size={16}/> }
    ]
  },
  "Kubwa Satellite": { 
    total: "₦410k", burn: "₦13k", peak: "Welfare", 
    mix: { ops: 30, ministry: 60, projects: 10 },
    logs: [
      { title: "Community Welfare", cat: "Ministry", amount: "₦200,000", date: "Mar 06", status: "Approved", icon: <Users size={16}/> },
      { title: "Bus Fuel", cat: "Logistics", amount: "₦18,000", date: "Mar 05", status: "Approved", icon: <Car size={16}/> }
    ]
  },
  "Jahi Satellite": { 
    total: "₦580k", burn: "₦19k", peak: "Logistics", 
    mix: { ops: 40, ministry: 20, projects: 40 },
    logs: [
      { title: "Protocol Logistics", cat: "Logistics", amount: "₦85,000", date: "Mar 07", status: "Pending", icon: <Car size={16}/> },
      { title: "Stage Lighting", cat: "Media", amount: "₦120,000", date: "Mar 04", status: "Approved", icon: <Zap size={16}/> }
    ]
  },
};

export default function AbujaExpensesPage() {
  const [selectedBranch, setSelectedBranch] = useState("Gudu HQ (Central)");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBranchMenuOpen, setIsBranchMenuOpen] = useState(false);

  const activeData = ABUJA_SATELLITES[selectedBranch];

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'Operations',
    department: ''
  });


   const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Submitting to Database:", { ...formData, branch: selectedBranch });
    // Add your Sanity/API call here
    setIsModalOpen(false);
  };



  return (
    <Layout>
      <div className="max-w-[1300px] mx-auto pb-10 px-6">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 pt-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
               <MapPin size={12} className="text-amber-600" />
               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">DC Abuja Regional</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              Expense Monitor 
              <span className="text-slate-200 font-thin text-xl">/</span>
              <div className="relative">
                <button 
                  onClick={() => setIsBranchMenuOpen(!isBranchMenuOpen)}
                  className="text-[#4B0082] text-xl hover:opacity-70 transition-all flex items-center gap-1"
                >
                  {selectedBranch} <ChevronRight size={16} className={isBranchMenuOpen ? 'rotate-90' : ''} />
                </button>
                <AnimatePresence>
                  {isBranchMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-4 w-64 bg-white shadow-2xl rounded-lg border border-slate-100 z-50 p-2 overflow-hidden"
                    >
                      {Object.keys(ABUJA_SATELLITES).map((branch) => (
                        <button 
                          key={branch}
                          onClick={() => { setSelectedBranch(branch); setIsBranchMenuOpen(false); }}
                          className={`w-full text-left p-4 rounded-2xl text-xs font-black transition-all ${selectedBranch === branch ? 'bg-purple-50 text-[#4B0082]' : 'hover:bg-slate-50 text-slate-600'}`}
                        >
                          {branch}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </h1>
          </div>
          
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#4B0082] text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:shadow-lg transition-all active:scale-95">
            <Plus size={16} className="text-amber-400" /> New Disbursement
          </button>
        </div>

        {/* --- Metrics --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <MetricCard label="Total Disbursement" value={activeData.total} icon={<Wallet size={18} />} accent="purple" />
          <MetricCard label="Daily Operational" value={activeData.burn} icon={<Zap size={18} />} dark />
          <MetricCard label="Primary Sector" value={activeData.peak} icon={<PieIcon size={18} />} accent="amber" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Responsive Dynamic Table */}
          <div className="lg:col-span-8 bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 md:p-8 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
              <h4 className="text-lg font-black text-slate-900 tracking-tight">Recent Logs</h4>
              <button className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-slate-900 transition"><Filter size={16}/></button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-left">Item & Dept</th>
                    <th className="hidden md:table-cell px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-left">Date</th>
                    <th className="hidden sm:table-cell px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-left">Status</th>
                    <th className="px-6 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {activeData.logs.map((log: any, idx: number) => (
                    <ExpenseRow key={idx} {...log} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dynamic Summary */}
          <div className="lg:col-span-4 bg-[#4B0082] rounded-[2.5rem] p-8 text-white relative overflow-hidden h-fit">
            <h4 className="text-sm font-black mb-6 uppercase tracking-widest opacity-60">Branch Mix</h4>
            <div className="space-y-6 mb-8">
              <ProgressBar label="Operations" val={activeData.mix.ops} />
              <ProgressBar label="Ministry" val={activeData.mix.ministry} />
              <ProgressBar label="Projects" val={activeData.mix.projects} />
            </div>
            <div className="pt-6 border-t border-white/10">
               <p className="text-[10px] font-black uppercase text-purple-300">Available Budget</p>
               <p className="text-2xl font-black">₦12.5M</p>
            </div>
          </div>
        </div>

        {/* --- MODAL (Kept same as previous but added to context) --- */}


 
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />

          {/* Side Modal */}
          <motion.div 
            // Mobile: Slide from bottom | Desktop: Slide from right
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-[480px] bg-white z-[101] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header - Fixed */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-slate-50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                  <Wallet size={24} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">Disbursement</h2>
                  <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.15em]">
                    Log Outflow: {selectedBranch}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Body - Scrollable */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Description</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Fuel for generator (Gudu)" 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold focus:border-indigo-100 focus:bg-white transition-all outline-none" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Amount (₦)</label>
                  <input 
                    required
                    type="number" 
                    placeholder="0.00" 
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold focus:border-indigo-100 focus:bg-white outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Category</label>
                  <div className="relative">
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold focus:border-indigo-100 focus:bg-white outline-none appearance-none cursor-pointer"
                    >
                      <option>Operations</option>
                      <option>Ministry</option>
                      <option>Missions</option>
                      <option>Logistics</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Requesting Department</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Protocol" 
                  value={formData.department}
                  onChange={(e) => setFormData({...formData, department: e.target.value})}
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl p-4 text-sm font-bold focus:border-indigo-100 focus:bg-white outline-none transition-all" 
                />
              </div>

              {/* Branch Warning Card */}
              <div className="p-5 bg-blue-50/50 rounded-[2rem] border border-blue-100/50">
                 <div className="flex gap-4">
                    <div className="bg-blue-500 p-1.5 rounded-full h-fit mt-0.5">
                      <Check className="text-white" size={12} strokeWidth={4} />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-blue-900 uppercase tracking-tighter">Audit Trail Active</p>
                      <p className="text-[10px] font-medium text-blue-700/80 leading-relaxed mt-1">
                        This transaction will be attributed to <span className="font-black underline">{selectedBranch}</span>. Ensure receipts are uploaded to the media archive.
                      </p>
                    </div>
                 </div>
              </div>
            </form>

            {/* Footer - Fixed at bottom */}
            <div className="p-6 sm:p-8 border-t border-slate-50 bg-white">
              <button 
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-[0.98]"
              >
                Post Transaction <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
      </div>
    </Layout>
  );
}

// Sub-components updated for responsiveness
function ExpenseRow({ title, cat, amount, date, status, icon }: any) {
  const isPending = status === 'Pending';
  return (
    <tr className="group hover:bg-slate-50/50 transition-colors cursor-pointer">
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="hidden xs:flex w-10 h-10 rounded-xl bg-slate-50 items-center justify-center text-slate-400 group-hover:bg-[#4B0082] group-hover:text-white transition-all">
            {icon}
          </div>
          <div className="min-w-0">
            <p className="font-black text-slate-900 text-xs md:text-sm truncate">{title}</p>
            <p className="text-[9px] font-black text-[#4B0082] uppercase tracking-wider opacity-60">{cat}</p>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-5">
        <span className="text-[11px] font-bold text-slate-400">{date}</span>
      </td>
      <td className="hidden sm:table-cell px-6 py-5">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${isPending ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
          <span className={`text-[9px] font-black uppercase tracking-widest ${isPending ? 'text-amber-600' : 'text-emerald-600'}`}>{status}</span>
        </div>
      </td>
      <td className="px-6 py-5 text-right font-black text-slate-900 text-sm md:text-base">{amount}</td>
    </tr>
  );
}

function MetricCard({ label, value, icon, accent, dark }: any) {
  const isAmber = accent === 'amber';
  return (
    <div className={`${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-100'} p-6 rounded-lg shadow-sm`}>
      <div className="flex justify-between items-center mb-4">
        <div className={`p-3 rounded-xl ${dark ? 'bg-white/10 text-emerald-400' : isAmber ? 'bg-amber-50 text-amber-600' : 'bg-purple-50 text-[#4B0082]'}`}>{icon}</div>
        <p className="text-[9px] font-black uppercase opacity-40 tracking-widest">{label}</p>
      </div>
      <h3 className="text-2xl font-black tracking-tight">{value}</h3>
    </div>
  );
}

function ProgressBar({ label, val }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[9px] font-black uppercase text-purple-200">
        <span>{label}</span>
        <span>{val}%</span>
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} className="h-full bg-amber-400" />
      </div>
    </div>
  );
}






