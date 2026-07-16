import React, { useState, useEffect } from 'react';
import C_PROGRAMMIZ from '../assets/C-Programiiz.jpg';
import webdesign from '../assets/WEBDESIGN.jpg';
import udemy from '../assets/UDEMY.png';
import GenerativeAI from '../assets/GenerativeAI.png';
import CiscoP1 from '../assets/CiscoP1.png';

const CertificationData = [
  {
    id: "CRT_01",
    title: "C PROGRAMMING QUIZ COMPETITION",
    issuer: "C-PROGRAMMIZ(T&P_CELL)",
    date: "14 DEC 2022",
    verificationId: "PX-882-091",
    status: "VERIFIED",
    link: "#",
    image: C_PROGRAMMIZ,
    description: "Participated in a competitive programming quiz, demonstrating proficiency in C language fundamentals and problem-solving skills."
  },
  {
    id: "CRT_02",
    title: "WEB DESIGN AND ANALYTICS",
    issuer: "MIND LUSTER",
    date: "16 JUNE 2023",
    verificationId: "1036756074",
    status: "VERIFIED",
    link: "#",
    image: webdesign,
    description: "Architecting high-availability systems. Coverage includes load balancing, microservices communication, database sharding, and global CDN distribution strategies for enterprise-level traffic."
  },
  {
    id: "CRT_03",
    title: "WEB DEVELOPMENT",
    issuer: "UDEMY",
    date: "24 SEP 2023",
    verificationId: "UC-76001864-13f4-4647-ac1b-4680263e2213",
    status: "VERIFIED",
    link: "#",
    image: udemy,
    description: "Comprehensive course on modern web development practices, including HTML, CSS, JavaScript, and popular frameworks."
  },
  {
    id: "CRT_04",
    title: "GENERATIVE AI",
    issuer: "OPEN_JS_FOUNDATION",
    date: "19 JUNE 2024",
    verificationId: "441f5b9b2ea4cf694f9ad88f229de923b6b74347e7d791d75e1b692d542730d7",
    status: "VERIFIED",
    link: "#",
    image: GenerativeAI,
    description: "Exploration of generative models, including GANs and VAEs. Focus on architecture design, training techniques, and real-world applications in content creation and data augmentation."
  },
  {
    id: "CRT_05",
    title: "PYTHON ESSENTIALS",
    issuer: "CISCO_NETWORKING_ACADEMY",
    date: "23 MAY 2026",
    verificationId: "a2911f0d-fe00-4186-b49e-981a080eeb8e",
    status: "BADGE_VERIFIED",
    link: "#",
    image: CiscoP1,
    description: "Fundamental Python programming concepts, including data types, control structures, functions, and libraries. Emphasis on practical coding exercises and real-world applications."
  },
  {
    id: "CRT_06",
    title: "AWS_SOLUTIONS_ARCHITECT",
    issuer: "AMAZON_WEB_SERVICES",
    date: "FEB 2024",
    verificationId: "AWS-CLD-900",
    status: "PENDING_SYNC",
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    description: "Cloud infrastructure deployment using AWS EC2, S3, RDS, and Lambda. Establishing VPC networking and IAM security policies for serverless and containerized applications."
  }
];

export default function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [typedDesc, setTypedDesc] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [fullImage, setFullImage] = useState(false);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setTypedDesc("");
    setIsTyping(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    setTypedDesc("");
    setIsTyping(false);
    setFullImage(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (selectedCert && isTyping) {
      let i = 0;
      const fullText = selectedCert.description;
      const timer = setInterval(() => {
        setTypedDesc(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 15);
      return () => clearInterval(timer);
    }
  }, [selectedCert, isTyping]);

  return (
    <div className="bg-[#050505] min-h-screen cursor-none">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=JetBrains+Mono:wght@300;400;700&display=swap');
        
        * { cursor: none !important; }

        .font-sync { font-family: 'Syncopate', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .text-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
        .bg-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 40px 40px; }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .scanline-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(0, 242, 255, 0.03), transparent);
          animation: scanline 6s linear infinite;
          pointer-events: none;
          z-index: 10;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #00f2ff; }
      `}</style>

      {/* Main Grid Content */}
      <section className="relative py-32 px-6 md:px-24" id="certification">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <span className="font-mono text-[#00f2ff] text-xs">04.</span>
                <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter text-white">
                  The <span className="text-outline">Certifications</span>
                </h2>
              </div>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                [AUTHORIZED_CREDENTIALS // SECURITY_CLEARANCE]
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00f2ff] animate-pulse"></div>
              <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest">
                Security_Status: Verified_Professional
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CertificationData.map((cert, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => openModal(cert)}
                className="group relative bg-white/[0.02] border border-white/5 p-8 hover:border-[#00f2ff]/30 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={cert.image} alt="" className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-[#00f2ff] tracking-tighter">{cert.id}</span>
                    <span className={`font-mono text-[7px] uppercase tracking-widest ${cert.status === 'VERIFIED' ? 'text-green-500' : 'text-orange-500 animate-pulse'}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <div className="relative z-10 mb-10">
                  <p className="font-mono text-[8px] text-gray-400 uppercase mb-2 tracking-[0.2em]">ORIGIN: {cert.issuer}</p>
                  <h3 className="font-sync text-[11px] uppercase leading-relaxed tracking-wider text-white">
                    {cert.title.replace(/_/g, ' ')}
                  </h3>
                </div>
                <div className="relative z-10 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center text-[8px] font-mono">
                    <span className="text-gray-600 uppercase">Verification_Hash</span>
                    <span
  className="text-gray-400 group-hover:text-[#00f2ff] transition-colors inline-block max-w-[180px] truncate"
  title={cert.verificationId}
>
  {cert.verificationId}
</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SCREEN MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 w-full h-full z-[9999] bg-[#030303] flex flex-col md:flex-row overflow-hidden animate-in fade-in duration-300">
          <div className="scanline-overlay"></div>

          {/* LEFT SIDE: Technical Information (Full Height) */}
          <div className="w-full md:w-1/2 flex flex-col border-r border-white/5 bg-[#080808] relative z-20 overflow-hidden">
            <div className="p-8 md:p-18 pt-20 md:pt-20 flex-grow overflow-y-auto custom-scrollbar">
              <div className="max-w-2xl mx-auto space-y-16">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-mono text-[10px] text-[#00f2ff]">
                    <span className="px-2 py-0.5 border border-[#00f2ff]/30 bg-[#00f2ff]/5 uppercase">Secure_Node</span>
                    <span className="text-gray-500 tracking-[0.4em]">{selectedCert.id}</span>
                  </div>
                  <h2 className="font-sync text-3xl md:text-5xl uppercase tracking-tighter text-white leading-tight">
                    {selectedCert.title.replace(/_/g, ' ')}
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-4 bg-[#00f2ff]"></div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Digital_Credential_Log</span>
                  </div>
                  <p className="font-mono text-sm md:text-xl text-gray-300 leading-relaxed tracking-wide min-h-[160px]">
                    {typedDesc}
                    {isTyping && <span className="inline-block w-2.5 h-6 bg-[#00f2ff] ml-2 animate-pulse"></span>}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/5 pt-8">
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Authority</span>
                    <div className="font-sync text-[11px] text-white">{selectedCert.issuer}</div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Verification_Hash</span>
                    <div className="font-mono text-[11px] text-[#00f2ff]">{selectedCert.verificationId}</div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Deployment_Stamp</span>
                    <div className="font-mono text-[11px] text-white">{selectedCert.date}</div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Encryption_Status</span>
                    <div className="font-mono text-[11px] text-green-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
                        ACTIVE_SECURE
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href={selectedCert.link}
                    className="group flex items-center justify-between p-6 border border-white/10 hover:border-[#00f2ff]/50 bg-white/[0.02] transition-all"
                  >
                    <span className="font-sync text-[9px] text-gray-500 group-hover:text-white uppercase transition-colors">Request_External_Check</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 group-hover:text-[#00f2ff] transition-all transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom System Bar */}
            <div className="p-8 border-t border-white/5 flex justify-between items-center bg-black/40">
              <div className="font-mono text-[7px] text-gray-700 uppercase tracking-[0.4em]">
                System_Node: VARANASI_VIRTUAL_01 // LVL_MAX
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[8px] text-gray-500">AUTH_CLEARANCE: S-CLASS</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Layout (Top Half Image, Bottom Half Visuals) */}
          <div className="flex-1 flex flex-col h-full bg-[#050505] relative z-20">
            {/* Top Half: Cinematic Image (Clickable) */}
            <div 
              className="h-1/2 relative overflow-hidden border-b border-white/5 cursor-zoom-in group"
              onClick={() => setFullImage(true)}
            >
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-full object-cover brightness-50 group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-[2000ms]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="font-mono text-[10px] text-[#00f2ff] border border-[#00f2ff]/30 px-4 py-2 bg-black/60 backdrop-blur-sm uppercase tracking-widest">
                  Expand_Visual_Record
                </div>
              </div>

              {/* Close Button for Main Modal */}
              <button 
                onClick={closeModal}
                className="absolute top-10 right-10 w-14 h-14 border border-white/10 bg-black/80 backdrop-blur-xl hover:bg-red-600/20 hover:border-red-600/50 transition-all flex items-center justify-center group z-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white group-hover:rotate-90 transition-transform">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Bottom Half: Additional Graphics */}
            <div className="h-1/2 p-8 md:p-24 flex flex-col justify-center space-y-12">
               <div className="space-y-6">
                  <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.3em] text-gray-600">
                    <span>BITSTREAM_DECODING</span>
                    <span className="text-[#00f2ff] animate-pulse">REAL_TIME</span>
                  </div>
                  <div className="grid grid-cols-8 gap-1 h-20 opacity-40">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="bg-white/[0.05] w-full h-full transition-colors" 
                           style={{ animation: `pulse ${1 + Math.random() * 2}s infinite ${Math.random()}s` }}></div>
                    ))}
                  </div>
                </div>

                <div className="p-8 border border-white/5 bg-white/[0.01] rounded-sm space-y-6 relative">
                   <div className="absolute top-0 right-0 p-2 font-mono text-[6px] text-white/10 uppercase">Security_Layer_4</div>
                   <div className="flex items-center justify-between font-mono text-[9px] text-gray-500">
                     <span className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                       LINK_STABILITY: 100%
                     </span>
                     <span>ENCRYPTION: AES-256</span>
                   </div>
                   <div className="font-mono text-[8px] text-gray-700 leading-relaxed h-16 opacity-40 overflow-hidden font-bold">
                    {`>> LOADING_CREDENTIALS_FOR_${selectedCert.id}...`} <br/>
                    {`>> ORIGIN_AUTHENTICATED: ${selectedCert.issuer}`} <br/>
                    {`>> DEPLOYMENT_TIMESTAMP: ${selectedCert.date}`} <br/>
                    {`>> SYSTEM_HANDSHAKE: COMPLETE...`} <br/>
                    {`>> RENDERING_INTERFACE... SUCCESS.`}
                   </div>
                </div>
            </div>
          </div>

          {/* NESTED FULL SCREEN IMAGE VIEWER */}
          {fullImage && (
            <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center animate-in fade-in duration-500">
              <button 
                onClick={() => setFullImage(false)}
                className="fixed top-10 right-10 w-16 h-16 border border-white/20 bg-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all flex items-center justify-center group z-[10001]"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white group-hover:scale-125 transition-transform">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-grid"></div>
              
              <img 
                src={selectedCert.image} 
                alt="Full View" 
                className="max-w-[95%] max-h-[95%] object-contain shadow-[0_0_100px_rgba(0,242,255,0.1)] border border-white/5 animate-in zoom-in-95 duration-500"
              />
              
              <div className="fixed bottom-10 left-10 font-mono text-[10px] text-[#00f2ff]/50 uppercase tracking-[1em]">
                {selectedCert.title} // VISUAL_INSPECTION_MODE
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}