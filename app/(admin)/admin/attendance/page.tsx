
'use client'
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  PlusCircle, 
  ChevronRight, 
  TrendingUp, 
  Filter,
  Download
} from 'lucide-react';
import Layout from '@/app/(admin)/Layout';

const AttendanceDashboard = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, date: '2026-03-01', service: 'Morning Service', count: 450, notes: 'Special Guest Speaker' },
    { id: 2, date: '2026-02-22', service: 'Evening Service', count: 120, notes: 'Rainy weather' },
    { id: 3, date: '2026-02-15', service: 'Morning Service', count: 385, notes: 'Youth Sunday' },
  ]);

  const [formData, setFormData] = useState({ date: '', service: 'Morning Service', count: '', notes: '' });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const newData = { ...formData, id: Date.now(), count: parseInt(formData.count) };
    setAttendanceData([newData, ...attendanceData]);
    setFormData({ date: '', service: 'Morning Service', count: '', notes: '' });
  };

  return (
    <Layout>

        <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
        {/* Header Section */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-800">Attendance Tracker</h1>
            <p className="text-slate-500">Monitor and manage your congregation's growth.</p>
            </div>
            <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition shadow-sm">
                <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-md">
                <PlusCircle size={18} /> New Report
            </button>
            </div>
        </header>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Users size={24} /></div>
                <span className="text-emerald-500 text-sm font-bold flex items-center bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Avg. Attendance</p>
            <h3 className="text-2xl font-bold text-slate-800">318</h3>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Calendar size={24} /></div>
            </div>
            <p className="text-slate-500 text-sm font-medium">Last Sunday</p>
            <h3 className="text-2xl font-bold text-slate-800">450</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><TrendingUp size={24} /></div>
            </div>
            <p className="text-slate-500 text-sm font-medium">Peak Month</p>
            <h3 className="text-2xl font-bold text-slate-800">December</h3>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-8">
                <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <PlusCircle size={20} className="text-indigo-600" /> 
                Add New Entry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Service Date</label>
                    <input 
                    type="date" 
                    required
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                    <select 
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                    <option>Morning Service</option>
                    <option>Mid-week Service</option>
                    <option>Evening Service</option>
                    <option>Special Event</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Total Count</label>
                    <input 
                    type="number" 
                    placeholder="0"
                    required
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    value={formData.count}
                    onChange={(e) => setFormData({...formData, count: e.target.value})}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Notes (Optional)</label>
                    <textarea 
                    placeholder="E.g. Communion Sunday..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    ></textarea>
                </div>
                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg active:scale-95">
                    Save Record
                </button>
                </form>
            </div>
            </div>

            {/* Data Table Section */}
            <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <h2 className="text-lg font-semibold text-slate-800">Historical Records</h2>
                <button className="text-slate-400 hover:text-slate-600"><Filter size={20}/></button>
                </div>
                <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Service</th>
                        <th className="px-6 py-4 font-semibold text-center">Count</th>
                        <th className="px-6 py-4 font-semibold">Notes</th>
                        <th className="px-6 py-4 font-semibold"></th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                    {attendanceData.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50 transition group">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-700">
                            {new Date(row.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                            {row.service}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-slate-800">
                            {row.count}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">
                            {row.notes || "—"}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button className="text-slate-300 group-hover:text-indigo-600 transition">
                            <ChevronRight size={20} />
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                {attendanceData.length === 0 && (
                <div className="p-12 text-center text-slate-400">
                    No records found. Start by adding a service count.
                </div>
                )}
            </div>
            </div>
        </div>
        </div>

     </Layout>
  );
};

export default AttendanceDashboard;