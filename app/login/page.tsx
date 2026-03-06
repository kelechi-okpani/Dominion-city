"use client";
import React from 'react';
import { Lock, User, ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-10">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-[#003399] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#003399]/20">
            <ShieldCheck size={40} className="text-[#D4AF37]" />
          </div>
          <h1 className="text-2xl font-black text-[#003399] uppercase tracking-tighter">Dominion Portal</h1>
          <p className="text-gray-400 text-sm mt-2 font-medium">Authorized Administrative Access Only</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Admin ID</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all" placeholder="Enter ID..." />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Secure Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="password" className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all" placeholder="••••••••" />
            </div>
          </div>

          <button className="w-full py-4 bg-[#003399] text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#003399] transition-all shadow-xl shadow-[#003399]/10">
            Unlock Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}