"use client";

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, GraduationCap, 
  Wallet, LogOut, Cross, X, ChevronRight, Menu, ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean; // Mobile open/close
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setOpen }: SidebarProps) => {
  // New state for desktop collapse
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Soul Winning', path: '/admin/souls' },
    { icon: GraduationCap, label: 'Academy', path: '/admin/academy' },
    
    { icon: Users, label: 'Attendance', path: '/admin/attendance' },

    { icon: Wallet, label: 'Treasury', path: '/admin/finance' },
  ];

  const sidebarWidth = isCollapsed ? 'w-20' : 'w-72';

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed inset-y-0 left-0 z-50 ${sidebarWidth} bg-white 
        transform transition-all duration-300 ease-in-out lg:relative lg:translate-x-0
        border-r border-slate-200 shadow-sm flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        {/* Toggle Button (Desktop Only) */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-10 w-6 h-6 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-500 hover:text-[#4B0082] shadow-sm z-50"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Logo Section */}
        <div className={`p-6 mb-4 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-3">
            <div className="min-w-[40px] h-10 bg-[#4B0082] rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
              <Cross size={20} className="text-white" strokeWidth={2.5} />
            </div>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <span className="font-bold text-slate-900 leading-none">DOMINION CITY</span>
                <span className="text-[10px] text-[#4B0082] font-bold tracking-widest uppercase mt-1">Abuja HQ</span>
              </motion.div>
            )}
          </div>
          {/* Mobile Close Button */}
          <button className="lg:hidden text-slate-400" onClick={() => setOpen(false)}><X size={20}/></button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => {
                  router.push(item.path);
                  if (window.innerWidth < 1024) setOpen(false);
                }}
                className={`
                 cursor-pointer relative w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-purple-50 text-[#4B0082]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                  ${isCollapsed ? 'justify-center' : ''}
                `}
              >
                <div className="z-10 flex items-center justify-center">
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>

                {!isCollapsed && (
                  <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-sm font-semibold whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}

                {/* Tooltip for Collapsed Mode */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[60]">
                    {item.label}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer / Sign Out */}
        <div className="p-4 border-t border-slate-100">
          <button className={`
            flex items-center gap-4 w-full px-3 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all
            ${isCollapsed ? 'justify-center' : ''}
          `}>
            <LogOut size={22} />
            {!isCollapsed && <span className="text-sm font-semibold">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;