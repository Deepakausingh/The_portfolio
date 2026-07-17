import React, { useState, useEffect } from 'react';
import Tr_1 from "../assets/hobbies_assets/Tr_1.webp";
import Tr_2 from "../assets/hobbies_assets/Tr_2.webp";
import Tr_3 from "../assets/hobbies_assets/Tr_3.webp";
import Tr_4 from "../assets/hobbies_assets/Tr_4.webp";
import Tr_5 from "../assets/hobbies_assets/Tr_5.webp";
import Game_1 from "../assets/hobbies_assets/Game_1.webp";
import Game_2 from "../assets/hobbies_assets/Game_2.webp";
import Game_3 from "../assets/hobbies_assets/Game_3.webp";
import Game_4 from "../assets/hobbies_assets/Game_4.webp";
import Game_5 from "../assets/hobbies_assets/Game_5.webp";
import Game_6 from "../assets/hobbies_assets/Game_6.webp";
import Game_7 from "../assets/hobbies_assets/Game_7.webp";
import Game_8 from "../assets/hobbies_assets/Game_8.webp";
import Game_9 from "../assets/hobbies_assets/Game_9.webp";
import Game_11 from "../assets/hobbies_assets/Game_11.webp";
import Game_13 from "../assets/hobbies_assets/Game_13.webp";



const HobbyData = [ 
  {
    id: "NODE_H1",
    title: "TRAVELLING",
    alias: "PHOTOGRAPHY",
    intensity: "85%",
    desc: "Photography teaches me to slow down and notice the beauty in everyday life. Every click captures a unique story, preserving moments that can never be repeated. Through my lens, I see creativity, emotion, and perspective in everything around me.",
    images: [
      Tr_1, Tr_2, Tr_3, Tr_4, Tr_5 
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
      </svg>
    )
  },
  {
    id: "NODE_H2",
    title: "GAMING",
    alias: "GAMING",
    intensity: "92%",
    desc: "Gaming is more than entertainment—it's a way to sharpen my problem-solving skills and strategic thinking. Every challenge teaches patience, adaptability, and perseverance. It reminds me that every setback is simply another chance to improve.",
    images: [
      Game_1, Game_2, Game_3, Game_4, Game_5, Game_6, Game_7, Game_8, Game_9, Game_11, Game_13 
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><rect x="2" y1="6" x2="22" y2="18" rx="2"/><path d="M15 12h.01"/><path d="M18 10h.01"/>
      </svg>
    )
  },
  {
    id: "NODE_H3",
    title: "BOOK_READING",
    alias: "READING",
    intensity: "70%",
    desc: "Books open doors to new worlds, fresh ideas, and different perspectives. Every page expands my knowledge and fuels my imagination. Reading inspires me to think critically, stay curious, and continue learning every day.",
    images: [
      "https://i.pinimg.com/1200x/13/b9/2b/13b92bc46b6db1a26e558a6393eeed9f.jpg",
      "https://i.pinimg.com/736x/fd/be/b5/fdbeb5662eda8c292f31464eedd47bb4.jpg"
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    )
  },
  {
    id: "NODE_H4",
    title: "MECHANICS",
    alias: "MECHINE_DESIGNING",
    intensity: "60%",
    desc: "Robotics combines creativity with technology to solve real-world problems. I enjoy exploring how software and hardware work together to bring ideas to life. Building and learning about robots inspires me to innovate and create meaningful solutions.",
    images: [
      "https://i.pinimg.com/1200x/07/7f/b0/077fb067e19104f24384549bca63aace.jpg",
      "https://i.pinimg.com/736x/b1/c8/53/b1c8531b780eb39ed1b4b26a8e65ffa7.jpg",
      "https://i.pinimg.com/736x/51/79/17/517917c1961df090a0c4971a9e8a96bc.jpg",
      "https://i.pinimg.com/736x/a5/da/43/a5da43de63643809efc3e183623750de.jpg"
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    )
  }
];

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (hobby) => {
    setSelectedHobby(hobby);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedHobby(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedHobby) {
      setActiveImageIndex((prev) => (prev + 1) % selectedHobby.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedHobby) {
      setActiveImageIndex((prev) => (prev - 1 + selectedHobby.images.length) % selectedHobby.images.length);
    }
  };

  return (
    <section 
      id="hobbies" 
      className="relative py-32 px-8 md:px-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="font-mono text-[#00f2ff] text-xs">05.</span>
              <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter">
                The <span className="text-outline">Hobbies</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              [BEHAVIORAL_ANALYTICS // RECREATION_LOG]
            </p>
          </div>

          <div className="flex flex-col items-end">
            <div className="font-mono text-[9px] text-[#00f2ff] uppercase tracking-widest mb-1">Personal_Mode: Enabled</div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`w-3 h-1 ${i < 4 ? 'bg-[#00f2ff]' : 'bg-white/10'}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hobby Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HobbyData.map((hobby, idx) => (
            <div 
              key={idx}
              onClick={() => openModal(hobby)}
              className="group relative bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] hover:border-[#00f2ff]/30 transition-all duration-500 overflow-hidden stark-panel cursor-pointer"
            >
              <div className="font-mono text-[8px] text-gray-600 mb-6 flex justify-between items-center">
                <span>{hobby.id}</span>
                <span className="text-[#00f2ff]/50 group-hover:text-[#00f2ff] transition-colors uppercase">Click_To_View_Assets</span>
              </div>

              <div className="mb-8 p-4 w-fit bg-white/[0.02] border border-white/5 group-hover:border-[#00f2ff]/30 group-hover:text-[#00f2ff] transition-all duration-500">
                {hobby.icon}
              </div>

              <div className="mb-6 space-y-1">
                <h3 className="font-sync text-[11px] uppercase text-white tracking-widest group-hover:text-[#00f2ff] transition-colors">
                  {hobby.title} 
                </h3>
                <p className="font-mono text-[9px] text-gray-500 uppercase tracking-tighter">
                  Alias: {hobby.alias}
                </p>
              </div>

              <p className="font-mono text-[10px] text-gray-500 leading-relaxed mb-8 h-12 overflow-hidden border-l border-white/5 pl-4 group-hover:border-[#00f2ff]/30 transition-colors">
                {hobby.desc}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[8px] text-gray-600 uppercase">
                  <span>Intensity</span>
                  <span className="text-white">{hobby.intensity}</span>
                </div>
                <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full bg-[#00f2ff] transition-all duration-1000 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ width: hobby.intensity }}
                  ></div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 font-sync text-[60px] text-white/[0.01] group-hover:text-[#00f2ff]/[0.02] pointer-events-none transition-colors">
                {hobby.id.split('_')[1]}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="mt-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[7px] text-gray-600 uppercase tracking-[0.5em]">
            Behavioral_Sync: COMPLETED_005
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[8px] text-gray-500 uppercase">System_State</span>
              <span className="font-sync text-[9px] text-green-500 uppercase animate-pulse">Balanced_Load</span>
            </div>
          </div>
        </div>
      </div>

      {}
      {selectedHobby && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 animate-in fade-in"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            className="fixed top-10 right-10 z-[210] w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-all hover:border-red-500 group"
            onClick={closeModal}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:rotate-90 transition-transform">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Left Arrow */}
          <button 
            className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-[210] w-14 h-14 border border-white/5 flex items-center justify-center hover:border-[#00f2ff] hover:text-[#00f2ff] transition-all bg-black/50"
            onClick={prevImage}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[210] w-14 h-14 border border-white/5 flex items-center justify-center hover:border-[#00f2ff] hover:text-[#00f2ff] transition-all bg-black/50"
            onClick={nextImage}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Modal Content */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center p-12 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Asset Display Wrapper */}
            <div className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[25/15] bg-white/[0.02] border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
               {selectedHobby.images.map((img, i) => (
                 <img 
                   key={i}
                   src={img} 
                   alt={`${selectedHobby.alias} asset ${i}`}
                   className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700 ease-in-out
                     ${i === activeImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                 />
               ))}
               
               {/* UI Overlays */}
               <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
               <div className="absolute top-8 left-8 space-y-1">
                  <div className="font-sync text-[10px] text-[#00f2ff] tracking-[0.3em]">{selectedHobby.title}</div>
                  <div className="font-mono text-[8px] text-white/40 uppercase">Asset_Node: {activeImageIndex + 1}/{selectedHobby.images.length}</div>
               </div>
               
               <div className="absolute bottom-8 right-8 flex items-center gap-4">
                  <div className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">Format: RAW_Industrial_Asset</div>
                  <div className="w-8 h-px bg-white/20"></div>
                  <div className="font-sync text-[8px] text-green-500">SECURE_VIEW</div>
               </div>
            </div>

            {/* Pagination Dials */}
            <div className="flex gap-4 mt-12">
              {selectedHobby.images.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`h-1 transition-all duration-500 ${i === activeImageIndex ? 'w-12 bg-[#00f2ff]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>

            <div className="mt-10 text-center max-w-xl">
               <h4 className="font-sync text-sm text-white mb-3 tracking-widest uppercase">{selectedHobby.alias} // INTERFACE</h4>
               <p className="font-mono text-[10px] text-gray-500 leading-relaxed uppercase tracking-tight">
                  Displaying cinematic asset visualization for behavior profile: {selectedHobby.id}. 
                  Navigate using dials or directional keys to review the complete image sequence.
               </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}