"use client";

import React from 'react';
import { Bell, Search, Menu, UserCircle, ChevronDown, Settings, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <nav className="h-16 md:h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 md:px-8 flex items-center justify-between sticky top-0 z-40 transition-all">
      
      {/* Left Section: Mobile Toggle & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all active:scale-95"
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>

        {/* Search Bar - Modernized with better focus ring */}
        <div className="hidden md:flex items-center relative group max-w-md w-full">
          <Search className="absolute left-4 text-slate-400 group-focus-within:text-[#4B0082] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search converts, leaders, or reports..." 
            className="w-full pl-11 pr-4 py-2.5 bg-slate-100/50 border border-transparent rounded-2xl text-sm font-medium placeholder:text-slate-400 focus:bg-white focus:border-[#4B0082]/20 focus:outline-none focus:ring-4 focus:ring-[#4B0082]/5 transition-all"
          />
          <div className="absolute right-3 px-1.5 py-0.5 border border-slate-200 rounded text-[10px] text-slate-400 font-bold bg-white pointer-events-none">
            ⌘ K
          </div>
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-5">
        
        {/* Utility Icons */}
        <div className="hidden sm:flex items-center gap-1">
          <button className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all" title="Help">
            <HelpCircle size={20} />
          </button>
          <button className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all" title="Settings">
            <Settings size={20} />
          </button>
        </div>

        {/* Notification Bell with improved dot */}
        <button className="relative p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all group">
          <Bell size={22} />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#4B0082] rounded-full border-2 border-white ring-1 ring-[#4B0082]/10"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200/60 mx-1 hidden sm:block"></div>
        
        {/* User Profile - Refined with Chevron and Hover effects */}
        <div className="flex items-center gap-3 pl-1 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-tight group-hover:text-[#4B0082] transition-colors">Pastor David</p>
            <p className="text-[11px] text-slate-500 font-semibold mt-0.5 tracking-wide uppercase opacity-80">Lagos Branch</p>
          </div>
          
          <div className="relative">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-[#4B0082] to-[#6D28D9] p-[2px] shadow-lg shadow-purple-200 group-hover:rotate-3 transition-transform">
              <div className="w-full h-full rounded-[14px] bg-white overflow-hidden flex items-center justify-center">
                <UserCircle size={44} className="text-slate-200 -mb-1" />
                {/* Image tag placeholder for real user photo */}
                {/* <img src="/avatar.jpg" alt="Profile" className="object-cover w-full h-full" /> */}
              </div>
            </div>
            {/* Online Status Indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          
          <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-900 transition-all group-hover:translate-y-0.5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;