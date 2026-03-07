"use client";

import React from 'react';
import Layout from '../Layout';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell, PieChart, Pie 
} from 'recharts';
import { 
  Users, UserPlus, GraduationCap, TrendingUp, Calendar, ArrowUpRight, 
  MoreHorizontal, Zap, Target, ArrowDownRight, Globe
} from 'lucide-react';

// --- Types & Mock Data ---
const GROWTH_DATA = [
  { month: 'Jan', attendance: 4000, souls: 240 },
  { month: 'Feb', attendance: 7200, souls: 380 },
  { month: 'Mar', attendance: 6800, souls: 420 },
  { month: 'Apr', attendance: 9500, souls: 590 },
  { month: 'May', attendance: 11000, souls: 700 },
];

const BRANCH_DISTRIBUTION = [
  { name: 'Gudu', value: 45, color: '#4B0082' },
  { name: 'Durumi', value: 25, color: '#8B5CF6' },
  { name: 'Lugbe', name2: 'Other', value: 30, color: '#DDD6FE' },
];

// --- Sub-Components ---

const StatCard = ({ title, value, icon: Icon, color, trend, isPositive, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative overflow-hidden bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(75,0,130,0.06)] transition-all duration-500 group"
  >
    <div className="flex justify-between items-start">
      <div className={`w-12 h-12 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
        <Icon className={color.replace('bg-', 'text-')} size={22} />
      </div>
      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {trend} {isPositive ? <TrendingUp size={12} /> : <ArrowDownRight size={12} />}
      </div>
    </div>
    <div className="mt-5">
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em]">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
        <span className="text-slate-300 text-xs font-medium">vs last month</span>
      </div>
    </div>
  </motion.div>
);

const DashboardPage = () => {
  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto pb-10">
        
        {/* --- 1. Top Navigation & Global Search --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Live System Overview</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Executive Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            <button className="px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all flex items-center gap-2">
              <Calendar size={16} /> Filter Date
            </button>
            <div className="h-6 w-[1px] bg-slate-100" />
            <button className="bg-[#4B0082] text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-purple-200 hover:bg-[#3b0066] transition-all flex items-center gap-2">
              <Zap size={16} /> Quick Action
            </button>
          </div>
        </div>

        {/* --- 2. Primary Stats --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Attendance" value="12.4k" icon={Users} color="bg-indigo-600" trend="+12%" isPositive={true} delay={0.1} />
          <StatCard title="Souls Won" value="842" icon={Target} color="bg-emerald-600" trend="+24%" isPositive={true} delay={0.2} />
          <StatCard title="Academy Growth" value="1.2k" icon={GraduationCap} color="bg-amber-500" trend="-2%" isPositive={false} delay={0.3} />
          <StatCard title="Global Reach" value="18" icon={Globe} color="bg-sky-500" trend="+3" isPositive={true} delay={0.4} />
        </div>

        {/* --- 3. Bento Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Chart Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">Performance Trajectory</h2>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Attendance vs Soul Winning</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#4B0082]" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Attendance</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase">Souls</span>
                    </div>
                </div>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={GROWTH_DATA}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4B0082" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#4B0082" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                    <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 700}} 
                        dy={15}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    />
                    <Area type="monotone" dataKey="attendance" stroke="#4B0082" strokeWidth={4} fill="url(#colorValue)" />
                    <Area type="monotone" dataKey="souls" stroke="#10b981" strokeWidth={4} fill="transparent" strokeDasharray="8 8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sub-Bento Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
                    <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-4">Leadership Pulse</h3>
                        <div className="space-y-4">
                            {['Level 1', 'Level 2', 'Level 3'].map((level, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-xs font-bold text-slate-400 w-12">{level}</span>
                                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${80 - i*20}%` }}
                                            className="h-full bg-purple-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/40 transition-all duration-700" />
                </div>
                
                <div className="bg-emerald-500 p-8 rounded-[2.5rem] text-white flex flex-col justify-between">
                    <div>
                        <h3 className="font-black text-2xl tracking-tight">Q1 Target</h3>
                        <p className="text-emerald-100 text-sm font-medium">Soul winning goal progress</p>
                    </div>
                    <div className="mt-8">
                        <div className="text-5xl font-black mb-2">84%</div>
                        <div className="w-full h-3 bg-white/20 rounded-full">
                            <div className="w-[84%] h-full bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Distribution & Activity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-black text-slate-900">Branch Distribution</h3>
                    <MoreHorizontal className="text-slate-400" size={20} />
                </div>
                <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={BRANCH_DISTRIBUTION}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={8}
                                dataKey="value"
                            >
                                {BRANCH_DISTRIBUTION.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-3 mt-4">
                    {BRANCH_DISTRIBUTION.map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-2xl bg-slate-50 border border-slate-100/50">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-xs font-bold text-slate-700">{item.name}</span>
                            </div>
                            <span className="text-xs font-black text-slate-900">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#4B0082] to-[#2E004F] p-8 rounded-[3rem] text-white shadow-2xl shadow-purple-200">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-black mb-2 tracking-tight">System Health</h3>
                <p className="text-purple-200 text-sm leading-relaxed mb-6">
                    All satellite church data streams are currently synchronized. Reporting is 100% accurate as of 5 mins ago.
                </p>
                <button className="w-full bg-white text-[#4B0082] py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-50 transition-all">
                    View Logs
                </button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;