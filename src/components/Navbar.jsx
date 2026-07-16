import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate slight frame fluctuations for realism
      setFps(Math.floor(Math.random() * (62 - 58) + 58));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: "01", label: "Script", href: "#about" },
    { id: "02", label: "Timeline", href: "#experience" },
    { id: "03", label: "PROJECTS", href: "#projects" },
    { id: "04", label: "Certs", href: "#certification" },
    { id: "05", label: "Hobbies", href: "#hobbies" },
    { id: "06", label: "Skills", href: "#skills" },
    { id: "07", label: "Connect", href: "#contact" },
    
    
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-5 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/10">
      
      {}
      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-10 h-10 border-2 border-[#00f2ff] flex items-center justify-center font-bold text-[10px] tracking-tighter text-[#00f2ff] animate-pulse">
          DKS
        </div>
        <div className="flex flex-col">
          <span className="font-sync text-[10px] tracking-[0.4em] uppercase text-white group-hover:text-[#00f2ff] transition-colors">
            Deepak_SINGH
          </span>
          <span className="font-mono text-[7px] text-gray-500 tracking-widest uppercase">
            Creative_Director_Unit
          </span>
        </div>
      </div>

      {}
      <div className="hidden md:flex gap-12">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="group flex flex-col items-start"
          >
            <span className="font-mono text-[8px] text-[#00f2ff] mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {link.id}_
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-all">
              {link.label}
            </span>
            <div className="h-px w-0 group-hover:w-full bg-[#00f2ff] transition-all duration-300 mt-1"></div>
          </a>
        ))}
      </div>

      {}
      <div className="hidden lg:flex items-center gap-6 font-mono text-[9px]">
        <div className="flex items-center gap-2 text-gray-500">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></div>
          <span className="uppercase">Uplink: Stable</span>
        </div>
        <div className="text-[#00f2ff] border-l border-white/10 pl-6">
          FPS: <span className="inline-block w-4">{fps}</span> // RAW_4K
        </div>
      </div>

      {/* Mobile Menu Toggle (Simplified for Production Look) */}
      <div className="md:hidden text-[#00f2ff]">
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </nav>
  );
}