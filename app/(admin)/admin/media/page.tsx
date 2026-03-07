"use client";
import React, { useState, useMemo } from 'react';
import Layout from '@/app/(admin)/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Layers3, Trash2, Search, X, 
  UploadCloud, ChevronLeft, Info, Camera, 
  FileText, MoreVertical 
} from 'lucide-react';
import { abujaHqMedia, dominionCommunityMedia } from '@/app/components/data/media';

// --- Types ---
interface MediaItem {
  id: string;
  url: string;
  type: 'image' | 'video';
}

interface Album {
  id: number;
  branchId: string;
  name: string;
  description: string;
  date: string;
  type: 'Gallery' | 'Carousel' | 'Sermon Notes';
  itemCount: number;
  coverImg: string;
  items?: MediaItem[];
}

// --- Constants ---
// const DEFAULT_ALBUM_COVER = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop";
// const DEFAULT_ALBUM_COVER = "  "https://scontent.fabv3-2.fna.fbcdn.net/v/t39.30808-6/612141347_1342172967952366_5511741730072550255_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SXVURZquJxoQ7kNvwFDL6dZ&_nc_oc=Adl5NExiRgUU2u32SuNhXzmKHw3x73yBXLnTEhTbiJ9-FqtVHcZy0ad_YdHLP6zzR8s&_nc_zt=23&_nc_ht=scontent.fabv3-2.fna&_nc_gid=FaEltbjDEJP-nmgMgSy51w&_nc_ss=8&oh=00_AfxoWsdei19nb5_TQVzVtP14jfxcr8cbfOIKeXlS98REbg&oe=69AF7687";
const DEFAULT_ALBUM_COVER = dominionCommunityMedia[3]

const BRANCHES = [
  { id: 'hq', name: 'Dc- Gudu HQ' },
  { id: 'durumi', name: 'Dc - Durumi' },
  { id: 'lugbe', name: 'Dc - Lugbe' },
];

const INITIAL_ALBUMS: Album[] = [
  { 
    id: 1, branchId: 'hq', name: 'Sunday Celebration - Mar 1', description: 'Main service photography.', 
    date: '2026-03-01', type: 'Gallery', itemCount: 24, coverImg: DEFAULT_ALBUM_COVER,
    items: abujaHqMedia.map((url, i) => ({ id: `abuja-${i}`, url, type: 'image' }))
  },
  { 
    id: 2, branchId: 'hq', name: 'Youth Ignite Conference', description: 'Annual youth gathering highlights.', 
    date: '2026-02-28', type: 'Carousel', itemCount: 0, coverImg: DEFAULT_ALBUM_COVER, items: []
  },
  { 
    id: 3, branchId: 'durumi', name: 'Mid-Week Communion', description: 'Wednesday service media.', 
    date: '2026-02-25', type: 'Sermon Notes', itemCount: 0, coverImg: DEFAULT_ALBUM_COVER, items: []
  }
];

const MediaArchivePage = () => {
  const [albums, setAlbums] = useState<Album[]>(INITIAL_ALBUMS);
  const [viewingAlbum, setViewingAlbum] = useState<Album | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const [newGroup, setNewGroup] = useState({
    name: '',
    description: '',
    branchId: 'hq',
    type: 'Gallery' as Album['type'],
    date: new Date().toISOString().split('T')[0]
  });

  const filteredAlbums = useMemo(() => {
    return albums.filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [albums, searchQuery]);

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Album = {
      ...newGroup,
      id: Date.now(),
      itemCount: 0,
      coverImg: DEFAULT_ALBUM_COVER,
      items: []
    };
    setAlbums([created, ...albums]);
    setIsCreateModalOpen(false);
    setViewingAlbum(created); 
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="max-w-[1600px] mx-auto pb-20 px-4 md:px-0">
        
        {/* --- Dynamic Header --- */}
        <AnimatePresence mode="wait">
          {!viewingAlbum ? (
            <motion.div 
              key="list-header" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
            >
              <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Media Archive</h1>
                <p className="text-slate-500 font-medium mt-1">Manage service galleries and digital assets across all branches.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="relative bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" placeholder="Search groups..." 
                    className="pl-12 pr-6 py-4 text-sm font-bold outline-none w-full md:w-72 bg-transparent"
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex items-center gap-2 bg-[#4B0082] px-8 py-4 rounded-2xl text-sm font-black text-white shadow-xl hover:bg-[#3a0063] transition-all"
                >
                  <Plus size={20} /> New Media Group
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail-header" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between mb-12 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setViewingAlbum(null)}
                  className="p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl text-slate-600 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest bg-purple-50 px-2 py-0.5 rounded-md">
                        {BRANCHES.find(b => b.id === viewingAlbum.branchId)?.name}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{viewingAlbum.date}</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">{viewingAlbum.name}</h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <button className="bg-slate-50 text-slate-600 px-6 py-4 rounded-2xl text-xs font-black hover:bg-slate-100 transition-all">
                    Settings
                 </button>
                 <button className="bg-[#4B0082] text-white px-8 py-4 rounded-2xl text-xs font-black flex items-center gap-2 shadow-lg shadow-purple-100">
                    <UploadCloud size={20} /> Push to Live
                 </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Main Content Section --- */}
        <AnimatePresence mode="wait">
          {!viewingAlbum ? (
            /* --- VIEW 1: ALBUM LIST --- */
            <motion.div 
              key="album-list"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredAlbums.map((album, index) => (
                <motion.div 
                  key={album.id}
                  layoutId={`album-${album.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
                  onClick={() => setViewingAlbum(album)}
                  className="group relative bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={album.coverImg} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                      alt="" 
                    />
                    <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2 border border-white/20">
                      <Camera size={14} className="text-[#4B0082]" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">{album.type}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-black text-slate-900 text-xl tracking-tight group-hover:text-[#4B0082] transition-colors">{album.name}</h3>
                    <div className="flex items-center gap-6 mt-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-300 uppercase">Items</span>
                        <span className="text-sm font-black text-slate-700">{album.itemCount}</span>
                      </div>
                      <div className="w-px h-8 bg-slate-100" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-300 uppercase">Date</span>
                        <span className="text-sm font-black text-slate-700">{new Date(album.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* --- VIEW 2: PHOTO GRID --- */
            <motion.div 
              key="photo-grid"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {/* Upload Card */}
              <motion.label 
                whileHover={{ y: -5 }}
                className="relative aspect-square border-2 border-dashed border-slate-200 rounded-[3rem] bg-slate-50/50 flex flex-col items-center justify-center text-slate-400 hover:border-[#4B0082] hover:bg-purple-50 hover:text-[#4B0082] transition-all cursor-pointer group shadow-sm overflow-hidden"
              >
                <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileUpload} disabled={isUploading} />
                <AnimatePresence mode="wait">
                  {isUploading ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-purple-100 border-t-[#4B0082] rounded-full animate-spin mb-3" />
                      <span className="text-[10px] font-black uppercase text-[#4B0082]">Uploading...</span>
                    </motion.div>
                  ) : (
                    <motion.div key="prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#4B0082] group-hover:text-white transition-all">
                        <Plus size={32} />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">Add Media</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.label>

              {/* Photos (Uses album items OR abujaHqMedia as fallback) */}
              {(viewingAlbum.items && viewingAlbum.items.length > 0 
                ? viewingAlbum.items 
                : abujaHqMedia.map((url, i) => ({ id: `abuja-${i}`, url, type: 'image' }))
              ).map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: idx * 0.02 } }}
                  whileHover={{ y: -10 }}
                  className="aspect-square relative group rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-100"
                >
                  <img src={item.url} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" alt="" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full bg-white/30 backdrop-blur-2xl border border-white/40 p-2 rounded-2xl flex items-center justify-between shadow-2xl">
                      <div className="flex gap-1.5">
                        <button className="p-3 bg-white/90 hover:bg-[#4B0082] hover:text-white rounded-xl text-slate-900 transition-all"><Info size={16}/></button>
                        <button className="p-3 bg-white/90 hover:bg-rose-500 hover:text-white rounded-xl text-rose-500 transition-all"><Trash2 size={16}/></button>
                      </div>
                      <span className="pr-3 text-[10px] font-black text-white uppercase tracking-widest opacity-80">
                        {viewingAlbum.branchId.toUpperCase()}_{idx + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Create Modal --- */}
        <AnimatePresence>
          {isCreateModalOpen && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-[3.5rem] p-12 w-full max-w-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Create Media Group</h2>
                  <button onClick={() => setIsCreateModalOpen(false)} className="p-3 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-full transition-colors"><X/></button>
                </div>

                <form onSubmit={handleCreateGroup} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Event Title</label>
                      <input 
                        required type="text" placeholder="e.g. Sunday Harvest"
                        className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#4B0082] focus:bg-white transition-all font-bold text-slate-800"
                        onChange={e => setNewGroup({...newGroup, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Branch</label>
                      <select 
                        className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#4B0082] font-bold text-slate-800 cursor-pointer"
                        onChange={e => setNewGroup({...newGroup, branchId: e.target.value})}
                      >
                        {BRANCHES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-2">Description</label>
                    <textarea 
                      rows={3} placeholder="Describe the media context..."
                      className="w-full p-5 bg-slate-50 border-2 border-slate-50 rounded-2xl outline-none focus:border-[#4B0082] font-bold text-slate-800 resize-none"
                      onChange={e => setNewGroup({...newGroup, description: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="w-full py-6 bg-[#4B0082] text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-[#3a0063] transition-all">
                    Initialize Group
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default MediaArchivePage;