'use client'

import React, { useState, ReactNode } from 'react';
import Sidebar from '../components/admin/Sidebar';
import Navbar from '../components/admin/Navbar';
import Footer from '../components/admin/Footer';

// Define the interface for the Layout props
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar - Ensure your Sidebar.tsx also uses these types */}
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Pass the toggle function to the Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* <div className="max-w-7xl mx-auto"> */}
          <div>
            {children}
          </div>
        </main>

        <Footer />
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;