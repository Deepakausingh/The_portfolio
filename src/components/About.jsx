import React from 'react';

const TechnicalStats = [
  { label: 'RESUME.PDF', value: 'DOWNLOAD', icon: 'fa-file-pdf' },
  { label: 'LOCATION', value: 'VARANASI, IN', icon: 'fa-location-dot' },
  { label: 'UPLINK', value: 'DK_SINGH', icon: 'fa-envelope' },
  { label: 'REPO', value: 'GIT_BRANCH', icon: 'fa-code-branch' },
];

const EducationTimeline = [
  {
    period: "2021 — 2025",
    title: "Bachelor of Engineering | CS",
    institution: "Dr. B.R Ambedkar University | Agra",
    details: "CGPA: 7.5 | Specialized in DSA, DBMS, and AI/ML foundations.",
    current: true
  },
  {
    period: "2018 — 2020",
    title: "Higher Secondary (12th)",
    institution: "Shandilya Public School | Varanasi",
    details: "PCM Focus. 72% aggregate. Science exhibition participant.",
    current: false
  },
  {
    period: "2018",
    title: "High School (10th)",
    institution: "Shandilya Public School | Varanasi",
    details: "84% aggregate. Foundation in Computer Science.",
    current: false
  }
];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-32 px-8 md:px-24 bg-[#030303] border-t border-white/5 overflow-hidden"
    >
      {}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: The Narrative */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 group">
              <span className="font-mono text-[#00f2ff] text-xs">01.</span>
              <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter">
                The <span className="text-outline">Script</span>
              </h2>
              <div className="h-px flex-1 bg-white/10 group-hover:bg-[#00f2ff]/30 transition-colors"></div>
            </div>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light font-mono">
              [ANALYSIS]: I am a creative <span className="text-white font-bold">React developer</span> driven by the intersection of cinematic design and high-performance logic. 
              <br /><br />
              Specializing in building responsive, scalable user interfaces where 
              <span className="text-[#00f2ff]"> latency is minimized</span> and 
              <span className="text-white"> visual fidelity is maximized.</span>
            </p>

            {}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
              {TechnicalStats.map((stat, index) => (
                <div key={index} className="group cursor-crosshair">
                  <div className="flex items-center gap-3 text-gray-500 font-mono text-[15px] uppercase tracking-widest mb-1 group-hover:text-[#00f2ff] transition-colors">
                    <i className={`fa-solid ${stat.icon} text-[#00f2ff]/50`}></i>
                    {stat.label}
                  </div>
                  <div className="font-sync text-[15px] text-white tracking-wider">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Records */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#00f2ff]/5 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="relative bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 stark-panel">
              <div className="flex justify-between items-center mb-12">
                <h3 className="font-sync text-[#00f2ff] text-[10px] uppercase tracking-[0.3em]">
                  Academic_Records.vhs
                </h3>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white/20"></div>
                  <div className="w-1 h-1 bg-white/20"></div>
                  <div className="w-1 h-1 bg-[#00f2ff]"></div>
                </div>
              </div>

              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00f2ff] via-white/10 to-transparent"></div>

                {EducationTimeline.map((item, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Node */}
                    <div className={`absolute left-0 top-1 w-[11px] h-[11px] border-2 ${item.current ? 'bg-[#00f2ff] border-[#00f2ff]' : 'bg-black border-white/20 group-hover:border-[#00f2ff]'} transition-all`}></div>
                    
                    <div className="font-mono text-[9px] text-gray-500 mb-2 uppercase tracking-widest group-hover:text-[#00f2ff] transition-colors">
                      {item.period}
                    </div>
                    <h4 className="font-sync text-sm uppercase mb-1 leading-tight group-hover:translate-x-1 transition-transform">
                      {item.title}
                    </h4>
                    <div className="font-mono text-[10px] text-gray-400 mb-3 opacity-80 uppercase">
                      {item.institution}
                    </div>
                    <p className="text-[11px] text-gray-500 font-mono leading-relaxed border-l border-white/5 pl-4 group-hover:border-[#00f2ff]/30 transition-colors">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>

              {/* Panel Footer Telemetry */}
              <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center font-mono text-[7px] text-gray-600 uppercase tracking-[0.4em]">
                <span>Status: Records_Verified</span>
                <span>Node: 01_Agra_Varanasi</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}