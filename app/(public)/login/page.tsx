"use client";
import React, { useState } from 'react';
import { Lock, User, ShieldCheck, Eye, EyeOff, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication delay
    setTimeout(() => {
      setIsSubmitting(false);
      // In a real app, use router.push('/admin') here after validation
      window.location.href = '/admin';
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-[#003399] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#003399]/20">
            <ShieldCheck size={40} className="text-[#D4AF37]" />
          </div>
          <h1 className="text-2xl font-black text-[#003399] uppercase tracking-tighter italic">Dominion Portal</h1>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-2 font-bold">Authorized Administrative Access</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Admin ID Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Admin Email</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-bold text-slate-700" 
                placeholder="Enter ID..." 
              />
            </div>
          </div>

          {/* Secure Key Input with Toggle */}
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Secure Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                required
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all font-bold text-slate-700" 
                placeholder="••••••••" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#003399] transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button with Loading State */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 bg-[#003399] text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all shadow-xl shadow-[#003399]/10 flex items-center justify-center gap-3 ${
              isSubmitting 
                ? 'opacity-80 cursor-not-allowed' 
                : 'hover:bg-[#D4AF37] hover:text-[#003399] active:scale-95'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Validating...
              </>
            ) : (
              'Unlock Dashboard'
            )}
          </button>

          {/* Registration Link for new Satellite Admins */}
          <div className="pt-6 border-t border-gray-50">
            <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-tighter gap-4 flex items-center justify-center">
              New Satellite Admin?{' '}
              <Link 
                href="/register" 
                className="text-[#003399] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1 group"
              >
                Request Access 
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}