"use client";
import React, { useState } from 'react';
// Added Eye and EyeOff icons
import { 
  Lock, User, ShieldCheck, MapPin, Mail, 
  ChevronRight, CheckCircle2, Eye, EyeOff 
} from 'lucide-react';
import Link from 'next/link';

// ... (ABUJA_SATELLITES_LIST remains the same)
const ABUJA_SATELLITES_LIST = [
  { id: "gudu-hq", name: "Gudu HQ (Central)", zone: "CBD", code: "ABJ-001" },
  { id: "lugbe-sat", name: "Lugbe Satellite", zone: "Airport Road", code: "ABJ-002" },
  { id: "kubwa-sat", name: "Kubwa Satellite", zone: "Bwari Area", code: "ABJ-003" },
  { id: "jahi-sat", name: "Jahi Satellite", zone: "VGC District", code: "ABJ-004" },
  { id: "kuje-sat", name: "Kuje Satellite", zone: "Kuje Area", code: "ABJ-005" },
  { id: "gwarinpa-sat", name: "Gwarinpa Satellite", zone: "Municipal", code: "ABJ-006" }
];

export default function AdminRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    satelliteId: '',
    secureKey: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // 1. New state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(`Profile created for ${formData.fullName}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-12">
      <div className="max-w-lg w-full bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-10 mt-[5rem] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-[#003399]" />

        {/* ... (Header remains the same) ... */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#003399] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#003399]/20">
            <ShieldCheck size={40} className="text-[#D4AF37]" />
          </div>
          <h1 className="text-2xl font-black text-[#003399] uppercase tracking-tighter italic">Onboard Admin</h1>
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mt-2 font-black">Satellite Church Network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name & Email & Satellite Select (Kept for context) */}
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input required type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm font-bold transition-all text-slate-700" placeholder="Enter Official Name" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Administrative Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm font-bold transition-all text-slate-700" placeholder="admin@dcabuja.org" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Assign to Satellite</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              <select required value={formData.satelliteId} onChange={(e) => setFormData({...formData, satelliteId: e.target.value})} className="w-full pl-12 pr-10 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm font-bold appearance-none cursor-pointer text-slate-700 transition-all">
                <option value="" disabled>Select Branch Location</option>
                {ABUJA_SATELLITES_LIST.map((branch) => (
                  <option key={branch.id} value={branch.id}>{branch.name} ({branch.zone})</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300"><ChevronRight size={16} className="rotate-90" /></div>
            </div>
          </div>

          {/* --- SECURE KEY WITH TOGGLE --- */}
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Create Secure Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
              
              <input 
                required
                type={showPassword ? "text" : "password"} // 2. Dynamic type switch
                value={formData.secureKey}
                onChange={(e) => setFormData({...formData, secureKey: e.target.value})}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm font-bold transition-all text-slate-700" 
                placeholder="••••••••" 
              />

              {/* 3. Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#003399] transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3">
             <CheckCircle2 size={16} className="text-emerald-500 mt-0.5" />
             <p className="text-[10px] font-bold text-emerald-800 leading-tight">
               By registering, this user will have administrative oversight of the selected satellite's church logs and data.
             </p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-5 bg-[#003399] text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-xl shadow-[#003399]/10 flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#D4AF37] hover:text-[#003399]'}`}
          >
            {isSubmitting ? 'Encrypting Profile...' : 'Authorize Admin Profile'}
          </button>

          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-tighter pt-4 gap-4 flex items-center justify-center">
            Authorized Personnel? <Link href="/login" className="text-[#003399] hover:underline decoration-2 underline-offset-4"> Return to Vault</Link>
          </p>
        </form>
      </div>
    </div>
  );
}