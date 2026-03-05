// "use client";
// import React, { useRef, useState, useEffect } from 'react';
// import { Volume2, VolumeX } from 'lucide-react';

// export default function HeroVideo() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isMuted, setIsMuted] = useState(true);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       // We set these via JS to ensure browsers allow autoplay
//       video.muted = true;
//       video.play().catch((error) => {
//         console.log("Autoplay was prevented", error);
//       });
//     }
//   }, []);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       // Toggle the actual DOM property
//       const newMutedState = !videoRef.current.muted;
//       videoRef.current.muted = newMutedState;
      
//       // Update React state to change the icon
//       setIsMuted(newMutedState);
//     }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden "> 
      
//       {/* 1. THE VIDEO CONTAINER */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           playsInline
//           preload="auto"
//           // We remove the 'muted' attribute from here and let useEffect handle it
//           className="h-full w-full object-cover opacity-80" 
//         >
//           <source src="/asset/video2.mp4" type="video/mp4" />
//         </video>

//         {/* 2. OVERLAY LAYERS */}
//         <div className="absolute inset-0 bg-black/10" /> 
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue" />
//       </div>

//       {/* 3. FLOATING AUDIO CONTROL */}
//       <div className="absolute bottom-10 right-10 z-50">
//         <button 
//           onClick={toggleMute}
//           className="p-4 bg-[#003399] text-white rounded-full shadow-2xl hover:bg-[#D4AF37] transition-all flex items-center gap-3 active:scale-95"
//         >
//           {/* If isMuted is true, show VolumeX. If false, show Volume2 */}
//           {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
          
//           <span className="text-[10px] font-bold uppercase tracking-widest pr-2">
//             {isMuted ? "Unmute Abuja HQ" : "Audio On"}
//           </span>
//         </button>
//       </div>

//       {/* 4. HERO CONTENT */}
//       <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
//          <h1 className="text-[#003399] font-serif text-4xl md:text-6xl font-black leading-tight drop-shadow-sm">
//            DOMINION <br/> <span className="text-[#D4AF37] italic">CITY</span>
//          </h1>
//          <div className="mt-6 flex flex-col items-center">
//             <div className="h-[2px] w-20 bg-[#D4AF37] mb-4" />
//             <p className="text-[#003399] font-bold tracking-[0.5em] uppercase text-sm">
//               Abuja Headquarters
//             </p>
//          </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => console.log("Autoplay prevented", error));
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    /* Changed h-screen to h-[70vh] (70% of screen height) or h-[600px] */
    <section className="relative h-[75vh] min-h-[500px] w-full overflow-hidden bg-white"> 
      
      {/* 1. THE VIDEO CONTAINER */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-70" 
        >
          <source src="/asset/video2.mp4" type="video/mp4" />
        </video>

        {/* 2. OVERLAY LAYERS */}
        <div className="absolute inset-0 bg-black/5" /> 
        {/* Changed 'to-blue' to brand navy and made it subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* 3. FLOATING AUDIO CONTROL */}
      <div className="absolute bottom-6 right-6 z-50">
        <button 
          onClick={toggleMute}
          className="p-3 bg-[#003399] text-white rounded-full shadow-lg hover:bg-[#D4AF37] transition-all flex items-center gap-2 active:scale-95"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="animate-pulse" />}
          <span className="text-[9px] font-bold uppercase tracking-widest pr-1">
            {isMuted ? "Unmute" : "Sound On"}
          </span>
        </button>
      </div>

      {/* 4. HERO CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
         <h1 className="text-[#003399] font-serif text-5xl md:text-8xl font-black leading-tight drop-shadow-sm">
           DOMINION <br/> <span className="text-[#D4AF37] italic">CITY</span>
         </h1>
         <div className="mt-4 flex flex-col items-center">
            <div className="h-[2px] w-16 bg-[#D4AF37] mb-3" />
            <p className="text-[#003399] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Abuja Headquarters
            </p>
         </div>
      </div>
    </section>
  );
}