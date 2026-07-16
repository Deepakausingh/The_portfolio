import React, { useState, useEffect, useRef } from 'react';
import Profile from '../assets/profile.png';
import Resume from '../assets/Resume.pdf';

const logSequence = [
  "> [SYSTEM]: INITIALIZING_BOOT_SEQUENCE...",
  "> loading_kernel... [DONE]",
  "> import { NeuralNet } from './brain';",
  "> const app = express.init();",
  "> [USER_CMD]: load profilephoto", 
  "> await db.connect(process.env.DB_URI);",
  "> status: ACTIVE_DEVELOPMENT",
  "> location: VARANASI_NODE_01",
  "> security: SSL_ENCRYPTED",
  "> [SYSTEM]: UPLINK_ESTABLISHED."
];

export default function Hero() {
  const [completedLogs, setCompletedLogs] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const scrollRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement);
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);

  return () => {
    document.removeEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );
  };
}, []);

  useEffect(() => {
    if (lineIndex >= logSequence.length) {
      setIsTypingComplete(true);
      return;
    }

    const currentLineTarget = logSequence[lineIndex];

    // Check if we should trigger the photo module
    if (currentLineTarget.includes("load profilephoto") && charIndex === 0) {
      setShowPhoto(true);
    }

    if (charIndex < currentLineTarget.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentLine(prev => prev + currentLineTarget[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 10); // Typing speed per character

      return () => clearTimeout(typingTimeout);
    } else {
      // Line finished typing
      const lineTransitionTimeout = setTimeout(() => {
        setCompletedLogs(prev => [...prev, currentLineTarget]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(prev => prev + 1);
      }, 10); // Pause between lines

      return () => clearTimeout(lineTransitionTimeout);
    }
  }, [lineIndex, charIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [completedLogs, currentLine]);

  const closePhotoModule = () => {
    setShowPhoto(false);
    
    // Resetting terminal sequence states to trigger a restart
    setCompletedLogs([]);
    setCurrentLine("");
    setLineIndex(0);
    setCharIndex(0);
    setIsTypingComplete(false);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden bg-[#050505]"
    >
      {}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-grid"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5 hidden md:flex flex-col z-20">
        
        {/* Terminal Logs (Character Typing Layer) */}
        <div 
          ref={scrollRef}
          className="flex-1 p-12 pt-32 font-mono text-[10px] text-[#00f2ff]/20 select-none overflow-y-auto relative scrollbar-hide"
        >
          <div className="space-y-1">
            {completedLogs.map((log, i) => (
              <div key={i} className={`${log.includes('USER_CMD') ? 'text-[#00f2ff] opacity-100' : ''}`}>
                <span className="opacity-40">[{Math.random().toString(16).slice(2, 8)}]</span> {log}
              </div>
            ))}
            {currentLine && (
              <div className={`${logSequence[lineIndex]?.includes('USER_CMD') ? 'text-[#00f2ff] opacity-100' : ''}`}>
                <span className="opacity-40">[{Math.random().toString(16).slice(2, 8)}]</span> {currentLine}
                <span className="inline-block w-1.5 h-3 bg-[#00f2ff]/60 ml-1 animate-pulse"></span>
              </div>
            )}
            {isTypingComplete && (
               <div className="text-green-500/40 mt-4 font-sync tracking-widest text-[8px]">
                  &gt; SYSTEM_READY_FOR_INPUT
               </div>
            )}
          </div>
        </div>

        {/* Floating Photo Module Overlay (Now Non-Blocking) */}
        <div 
          className={`absolute mt-6 inset-0 flex items-center justify-center p-8 transition-all duration-1000 ease-in-out z-30 
          ${showPhoto ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}
        >
          <div className="relative w-full max-w-[20rem] bg-[#080808]/90 backdrop-blur-md border border-[#00f2ff]/30 shadow-[0_0_50px_rgba(0,242,255,0.1)] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center px-5 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex flex-col">
                <span className="font-sync text-[8px] text-[#00f2ff] tracking-[0.2em] uppercase">Profile_Photo</span>
                <span className="font-mono text-[7px] text-gray-500 uppercase">Status: Live_Feed</span>
              </div>
              <button 
                onClick={closePhotoModule}
                className="group w-7 h-7 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500 transition-all"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-500 group-hover:text-red-500">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden group/img">
               <img 
                  src={Profile} 
                  alt="Profile" 
                  className="w-full h-full object-cover contrast-125 opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none bg-scanline opacity-10"></div>
                <div className="absolute bottom-6 left-6 font-mono text-[8px] text-white/50 space-y-1">
                   <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#00f2ff]"></span>
                      SCAN_REF: 09X-ALPHA
                   </div>
                   <div>COORDS: 25.3176° N, 82.9739° E</div>
                </div>
            </div>
            <div className="p-6 bg-black border-t border-white/5">
               <div className="flex justify-between items-end">
                  <div className="space-y-1">
                     <div className="font-sync text-[9px] text-white tracking-widest">DEEPAK_SINGH</div>
                     <div className="font-mono text-[7px] text-[#00f2ff] uppercase opacity-60">Auth_Token: GNT_882</div>
                  </div>
                  <div className="text-right">
                     <div className="font-sync text-[8px] text-green-500 uppercase">Verified</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="relative z-10 max-w-5xl">
        <div className="font-mono text-[#00f2ff] text-[10px] mb-8 flex items-center gap-4 tracking-[0.4em] opacity-80">
          <div className="w-12 h-px bg-[#00f2ff]"></div>
          SOFTWARE_ENGINEER // DIGITAL_CRAFTSMAN // CREATIVE_CODER
        </div>

        <h1 className="text-6xl md:text-[9vw] font-sync font-bold leading-[0.9] uppercase mb-10 tracking-tighter">
          Deepak <br /> 
          <span className="text-outline">Singh</span>
        </h1>

        <div className="max-w-xl space-y-6">
          <p className="text-gray-400 text-sm md:text-base font-mono leading-relaxed">
            <span className="text-white/40">// SYSTEM_LOG:</span> I don’t just write code — I engineer 
            <span className="text-white"> experiences, solve complex problems, and build ideas that scale.</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mt-12">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-5 bg-white text-black font-sync text-[10px] uppercase tracking-[0.2em] hover:bg-[#00f2ff] transition-all overflow-hidden"
          >
            <span className="relative z-10">Start Sequence</span>
            <div className="absolute inset-0 bg-[#00f2ff] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border border-white/10 font-sync text-[10px] uppercase tracking-[0.2em] text-white hover:border-[#00f2ff] hover:text-[#00f2ff] transition-all inline-flex items-center"
          >
            View Resume
          </a>
        </div>
      </div>

      {}
      <div className="absolute bottom-12 left-8 md:left-24 flex gap-12 font-mono text-[8px] text-gray-600 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${!isTypingComplete ? 'bg-[#00f2ff]' : 'bg-green-500'} animate-pulse`}></div>
          Status: {!isTypingComplete ? 'PROCESSING_LOGS' : 'UPLINK_READY'}
        </div>
        <div className="flex items-center gap-2">
           <span className="opacity-40">NODE_01:</span> VARANASI.IN
        </div>
      </div>
      <div className="fixed bottom-8 right-8 z-[9999] group">
  {/* Floating Label */}
  <div
  className="
    absolute right-16 top-1/2 -translate-y-1/2
    w-[200px]
    h-auto
    px-3 py-2
    bg-[#0a0a0a]/95
    backdrop-blur-md
    border border-[#00f2ff]/30
    shadow-[0_0_20px_rgba(0,242,255,0.15)]
    text-[#00f2ff]
    font-sync
    text-[9px]
    uppercase
    tracking-[0.15em]
    leading-relaxed
    text-center
    whitespace-normal
    break-words
    opacity-0
    translate-x-2
    pointer-events-none
    transition-all
    duration-300
    group-hover:opacity-100
    group-hover:translate-x-0
  "
>
  {isFullscreen ? "Exit Fullscreen" : "Please Go Fullscreen For better Viewport"}

  {/* Arrow */}
  <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0a0a0a] border-r border-t border-[#00f2ff]/30"></div>
</div>
  {/* Square Button */}
  <button
    onClick={toggleFullscreen}
    className="
      w-10 h-10
      bg-[#080808]/90
      backdrop-blur-xl
      border border-[#00f2ff]/30
      hover:border-[#00f2ff]
      shadow-[0_0_20px_rgba(0,242,255,0.15)]
      hover:shadow-[0_0_30px_rgba(0,242,255,0.35)]
      transition-all
      duration-300
      flex
      items-center
      justify-center
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="text-[#00f2ff]"
    >
      {isFullscreen ? (
        <>
          <path d="M8 3H3v5" />
          <path d="M3 3l6 6" />
          <path d="M16 21h5v-5" />
          <path d="M21 21l-6-6" />
          <path d="M21 8V3h-5" />
          <path d="M21 3l-6 6" />
          <path d="M3 16v5h5" />
          <path d="M3 21l6-6" />
        </>
      ) : (
        <>
          <path d="M8 3H3v5" />
          <path d="M3 3l6 6" />
          <path d="M16 3h5v5" />
          <path d="M21 3l-6 6" />
          <path d="M3 16v5h5" />
          <path d="M3 21l6-6" />
          <path d="M21 16v5h-5" />
          <path d="M21 21l-6-6" />
        </>
      )}
    </svg>
  </button>
</div>
    </section>
    
  );
}