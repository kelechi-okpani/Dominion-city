"use client";
import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Search, ExternalLink } from 'lucide-react';
import { branches } from '../components/data/branches';

const containerStyle = { width: '100%', height: '100%' };

// Abuja Strict Bounds
const ABUJA_BOUNDS = {
  north: 9.30,
  south: 8.80,
  west: 7.20,
  east: 7.60,
};

export default function SatelliteChurches() {
  const [searchTerm, setSearchTerm] = useState("");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [activeBranch, setActiveBranch] = useState<any>(branches[0]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  const onSelectBranch = (branch: any) => {
    setActiveBranch(branch);
    if (map) {
      map.panTo({ lat: branch.lat, lng: branch.lng });
      map.setZoom(15);
    }
  };

  const filteredBranches = branches.filter(b => 
    b.district.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:h-[800px]">
          
          {/* SCROLLABLE LEFT SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col h-full max-h-[800px]">
            <div className="mb-6 shrink-0">
              <h1 className="text-4xl font-serif font-bold text-[#003399] mb-2">Our Locations</h1>
              <p className="text-slate-500 text-sm mb-6">Explore our campuses across Abuja.</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search district..."
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-[#D4AF37] text-sm"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 pb-6">
              <AnimatePresence mode="popLayout">
                {filteredBranches.map((branch) => (
                  <motion.div 
                    key={branch.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => onSelectBranch(branch)}
                    className={`p-5 rounded-[2rem] cursor-pointer transition-all border-2 ${
                      activeBranch.id === branch.id 
                      ? 'bg-[#003399] border-[#003399] shadow-xl' 
                      : 'bg-white border-transparent hover:border-slate-200 shadow-sm'
                    }`}
                  >
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block ${
                      activeBranch.id === branch.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#003399]'
                    }`}>
                      {branch.district}
                    </span>
                    <h3 className={`font-bold mb-1 ${activeBranch.id === branch.id ? 'text-white' : 'text-[#003399]'}`}>
                      {branch.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${activeBranch.id === branch.id ? 'text-blue-100' : 'text-slate-400'}`}>
                      {branch.address}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* LOCKED MAP AREA */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] p-3 shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-100">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{ lat: activeBranch.lat, lng: activeBranch.lng }}
                  zoom={11}
                  onLoad={map => setMap(map)}
                  options={{
                    restriction: {
                      latLngBounds: ABUJA_BOUNDS,
                      strictBounds: false,
                    },
                    disableDefaultUI: false,
                    mapTypeControl: false,
                  }}
                >
                  {filteredBranches.map(branch => (
                    <Marker 
                      key={branch.id} 
                      position={{ lat: branch.lat, lng: branch.lng }} 
                      onClick={() => onSelectBranch(branch)}
                    />
                  ))}
                </GoogleMap>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-400 italic">
                  Loading Abuja Map...
                </div>
              )}
            </div>

          {/* FLOATING ACTION OVERLAY */}
<div className="absolute bottom-8 right-8 left-8 lg:left-auto lg:w-80">
  <motion.div 
    key={activeBranch.id}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20"
  >
    <h4 className="text-[10px] font-black uppercase tracking-tighter text-[#D4AF37] mb-1">Selected Campus</h4>
    <p className="text-slate-800 font-bold mb-4">{activeBranch.name}</p>
    
    {/* Dynamic Google Maps Link */}
    <a 
      href={`https://www.google.com/maps/dir/?api=1&destination=${activeBranch.lat},${activeBranch.lng}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-full py-3 bg-[#D4AF37] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#003399] transition-all shadow-md active:scale-95"
    >
      <Navigation size={14} /> 
      Get Directions 
      <ExternalLink size={12} />
    </a>
  </motion.div>
</div>
          </div>

        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
}