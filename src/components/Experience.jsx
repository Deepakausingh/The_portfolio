import React from 'react';

const ExperienceData = [
  {
    id: "LOG_01",
    company: "FREELANCING",
    role: "FULL_STACK_DEVELOPER",
    period: "2025 — PRESENT",
    status: "ACTIVE",
    desc: "Currently engaged in multiple projects, including a real-time collaboration tool built with React and Node.js, and an interactive data visualization dashboard using GSAP.",
    tech: ["REACT", "NEXT.JS", "NODE", "GSAP"]
  },
  {
    id: "LOG_02",
    company: "EXTION INFOTECH",
    role: "SOFTWARE_ENGINEER_INTERN",
    period: "JUNE 2024 — AUGUST 2024",
    status: "ARCHIVED",
    desc: "Contributed to the development of a customer relationship management (CRM) system, implementing key features such as dynamic dashboards and real-time notifications.",
    tech: ["PYTHON", "WEB", "DJANGO", "POSTGRESQL"]
  },
  {
    id: "LOG_03",
    company: "UDEMY",
    role: "WEB_DEVELOPMENT_COURSE",
    period: "SEP 2024",
    status: "ARCHIVED",
    desc: "Completed a comprehensive course on MERN stack development, building a full-featured e-commerce application with user authentication, product management, and payment integration.",
    tech: ["MONGODB", "EXPRESS", "REACT", "NODE"]
  },
  
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative py-32 px-8 md:px-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00f2ff]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="font-mono text-[#00f2ff] text-xs">02.</span>
              <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter">
                Professional <span className="text-outline">Timeline</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              [OPERATIONAL_HISTORY // CAREER_STREAM]
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <div className="text-right">
              <div className="font-mono text-[10px] text-white">SYSTEM_RELIABILITY</div>
              <div className="h-1 w-32 bg-white/10 mt-1 overflow-hidden">
                <div className="h-full w-[94%] bg-[#00f2ff]"></div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] text-white">UPTIME</div>
              <div className="font-sync text-[#00f2ff] text-xs uppercase">99.98%</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ExperienceData.map((job, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col bg-white/[0.02] border border-white/5 p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#00f2ff]/30 h-full"
            >
              {/* Card Header: ID and Status */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-[#00f2ff] tracking-widest">{job.id}</span>
                  <span className={`font-mono text-[8px] tracking-[0.2em] ${job.status === 'ACTIVE' ? 'text-green-500' : 'text-gray-600'}`}>
                     // {job.status}
                  </span>
                </div>
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center">
                   <div className={`w-1 h-1 ${job.status === 'ACTIVE' ? 'bg-[#00f2ff] animate-pulse' : 'bg-gray-700'}`}></div>
                </div>
              </div>

              {/* Card Body: Role and Period */}
              <div className="space-y-2 mb-6">
                <h3 className="font-sync text-lg uppercase tracking-tight group-hover:text-[#00f2ff] transition-colors leading-tight">
                  {job.role}
                </h3>
                <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  {job.company}
                </p>
                <p className="font-mono text-[9px] text-[#00f2ff]/60 uppercase tracking-tighter">
                  {job.period}
                </p>
              </div>

              {/* Description */}
              <div className="flex-grow">
                <p className="font-mono text-[11px] text-gray-500 leading-relaxed border-l border-white/10 pl-4 mb-8 group-hover:border-[#00f2ff]/30 transition-colors">
                  {job.desc}
                </p>
              </div>

              {/* Footer: Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {job.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-white/5 border border-white/5 text-[8px] font-mono text-gray-400 group-hover:text-white transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover Scanline / Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-[#00f2ff]/[0.03] to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-between items-center font-mono text-[7px] text-gray-600 uppercase tracking-[0.5em]">
          <span>Deployment_Ref: STK_EX_002</span>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-[#00f2ff]"></div>
            <span>Verified_Professional_Path</span>
          </div>
        </div>
      </div>
    </section>
  );
}