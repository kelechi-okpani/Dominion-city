"use client";

import React from 'react';
import Layout from '../Layout';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, UserPlus, GraduationCap, Wallet, LucideIcon, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  trend: string;
  delay: number;
}

const StatCard = ({ title, value, icon: Icon, color, trend, delay }: StatCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(75,0,130,0.08)] transition-all duration-300 group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
      <span className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg">
        {trend} <TrendingUp size={12} />
      </span>
    </div>
    <div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
      <h3 className="text-3xl font-black text-slate-900 mt-1 tracking-tight">{value}</h3>
    </div>
  </motion.div>
);

const DashboardPage = () => {
  const data = [
    { n: 'Jan', s: 400, l: 240 }, { n: 'Feb', s: 700, l: 300 }, 
    { n: 'Mar', s: 600, l: 450 }, { n: 'Apr', s: 950, l: 500 }
  ];

  return (
    <Layout>
      {/* 1. Refined Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Executive Summary</h1>
          <p className="text-slate-500 font-medium mt-1">Global Impact Metrics for Lagos Headquarters</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Calendar size={18} /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 bg-[#4B0082] px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-purple-200 hover:bg-[#3b0066] transition-all">
            Generate Report
          </button>
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard title="Church Attendance" value="12,450" icon={Users} color="bg-indigo-600" trend="+12.5%" delay={0.1} />
        <StatCard title="New Converts" value="142" icon={UserPlus} color="bg-emerald-600" trend="+18.2%" delay={0.2} />
        <StatCard title="Academy Enrollment" value="840" icon={GraduationCap} color="bg-amber-500" trend="+4.1%" delay={0.3} />
      </div>

      {/* 3. Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Growth Chart (Bento Large) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-black text-xl text-slate-900 tracking-tight">Soul Winning Analytics</h2>
              <p className="text-slate-400 text-sm font-medium">Monthly trajectory of new members</p>
            </div>
            <button className="text-[#4B0082] text-sm font-bold flex items-center gap-1 hover:underline">
              Full Data <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4B0082" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#4B0082" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="n" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} dy={10} />
                <Tooltip 
                  cursor={{ stroke: '#4B0082', strokeWidth: 2, strokeDasharray: '5 5' }}
                  contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', padding: '15px' }}
                />
                <Area type="monotone" dataKey="s" stroke="#4B0082" fillOpacity={1} fill="url(#colorGrowth)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Leadership Pipeline (Bento Tall) */}
        <div className="bg-[#4B0082] p-8 rounded-[2.5rem] text-white shadow-xl shadow-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <h2 className="font-bold text-xl mb-2 relative z-10">Academy Progress</h2>
          <p className="text-purple-200 text-sm mb-8 relative z-10">Leadership pipeline distribution</p>
          
          <div className="space-y-6 relative z-10">
            {[
              { label: 'Foundational', value: 85, color: 'bg-amber-400' },
              { label: 'Maturity', value: 62, color: 'bg-emerald-400' },
              { label: 'DLI Level 1', value: 40, color: 'bg-sky-400' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className={`h-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-xs font-bold text-purple-200 uppercase tracking-widest mb-2">Next Goal</p>
            <p className="text-sm font-medium">1,000 Leaders by Q4 2026</p>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default DashboardPage;