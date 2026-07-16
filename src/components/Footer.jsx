import React from 'react';

const SkillCategories = [
  {
  id: "LANG_CORE",
  title: "PROGRAMMING_LANGUAGES",
  skills: [
    { name: "Python", level: "95", status: "EXPERT", code: "PY-01" },
    { name: "JavaScript", level: "92", status: "ACTIVE", code: "JS-02" },
    { name: "C", level: "85", status: "COMPILED", code: "C-03" },
    { name: "SQL", level: "88", status: "QUERIED", code: "SQL-04" },
    { name: "HTML5", level: "98", status: "RENDERED", code: "HT-05" },
    { name: "CSS3", level: "97", status: "STYLED", code: "CS-06" },
    { name: "TypeScript", level: "80", status: "TYPED", code: "TS-07" },
    { name: "Java", level: "65", status: "LEARNING", code: "JV-08" }
  ]
},
  {
    id: "FE_UNIT",
    title: "FRONTEND_ARCHITECTURE",
    skills: [
      { name: "React.js", level: "95", status: "OPTIMIZED", code: "RE-25" },
      { name: "Next.js", level: "90", status: "STABLE", code: "NX-01" },
      { name: "TypeScript", level: "88", status: "COMPILED", code: "TS-88" },
      { name: "Tailwind", level: "98", status: "RENDERED", code: "TW-09" },
      { name: "GSAP", level: "85", status: "ANIMATED", code: "GS-44" },
      { name: "Three.js", level: "70", status: "SIMULATED", code: "TH-03" }
    ]
  },
  {
    id: "BE_UNIT",
    title: "BACKEND_INFRASTRUCTURE",
    skills: [
      { name: "Node.js", level: "92", status: "ACTIVE", code: "ND-12" },
      { name: "Express", level: "90", status: "LISTENING", code: "EX-90" },
      { name: "MongoDB", level: "85", status: "INDEXED", code: "DB-MG" },
      { name: "Postgres", level: "82", status: "QUERIED", code: "DB-PG" },
      { name: "GraphQL", level: "88", status: "CONNECTED", code: "GQ-07" },
      { name: "Docker", level: "75", status: "SHIPPED", code: "DK-01" }
    ]
  },
  {
    id: "CD_UNIT",
    title: "CREATIVE_DIRECTION",
    skills: [
      { name: "UI/UX", level: "90", status: "PROTOTYPED", code: "UX-99" },
      { name: "Figma", level: "94", status: "LAYERED", code: "FG-02" },
      { name: "Motion", level: "82", status: "KEYFRAMED", code: "MG-X1" },
      { name: "Modeling", level: "80", status: "DRAFTED", code: "3D-DD" }
    ]
  },
  {
    id: "TL_UNIT",
    title: "TECHNICAL_TOOLKIT",
    skills: [
      { name: "Git", level: "95", status: "PUSHED", code: "GT-SC" },
      { name: "AWS", level: "80", status: "DEPLOYED", code: "AW-S3" },
      { name: "Firebase", level: "85", status: "SYNCED", code: "FB-RE" },
      { name: "Python", level: "78", status: "EXECUTED", code: "PY-SH" }
    ]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative py-32 px-8 md:px-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00f2ff]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="font-mono text-[#00f2ff] text-xs">02.</span>
              <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter">
                Technical <span className="text-outline">Arsenal</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              [COMPETENCY_MATRIX // MODULE_OVERRIDE]
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="font-mono text-[9px] text-[#00f2ff] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00f2ff] animate-pulse"></span>
              Grid_Sync: Multi_Cluster
            </div>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SkillCategories.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className="bg-white/[0.01] border border-white/5 p-10 group hover:border-[#00f2ff]/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Category Metadata Header */}
              <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] text-[#00f2ff] tracking-[0.2em]">{category.id}</span>
                  <h3 className="font-sync text-sm text-white uppercase tracking-wider group-hover:text-[#00f2ff] transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-[1px] bg-white/10"></div>
                  <span className="font-mono text-[8px] text-gray-600 uppercase">Ver: 2.0</span>
                </div>
              </div>

              {}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx} 
                    className="group/skill relative p-4 bg-black border border-white/5 hover:border-[#00f2ff]/40 transition-all duration-300 cursor-default"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[7px] text-gray-600 group-hover/skill:text-[#00f2ff] transition-colors">
                        {skill.code}
                      </span>
                      <div className="w-1 h-1 bg-white/10 group-hover/skill:bg-[#00f2ff] group-hover/skill:animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="font-sync text-[9px] text-gray-400 group-hover/skill:text-white transition-colors uppercase truncate">
                        {skill.name}
                      </div>
                      <div className="flex items-center justify-between font-mono text-[7px] text-gray-600 uppercase">
                        <span>Lvl: {skill.level}%</span>
                      </div>
                    </div>

                    {/* Status Ribbon (Hover Only) */}
                    <div className="absolute top-0 right-0 h-[1px] w-0 bg-[#00f2ff] group-hover/skill:w-full transition-all duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Background ID Watermark */}
              <div className="absolute -bottom-8 -right-8 font-sync text-[120px] text-white/[0.01] pointer-events-none select-none uppercase group-hover:text-[#00f2ff]/[0.02] transition-colors">
                {category.id.split('_')[0]}
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="mt-20 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[7px] text-gray-600 uppercase tracking-[0.5em]">
            Core_Integration: COMPLETED_002
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">Processing_Mode</span>
              <span className="font-sync text-[9px] text-[#00f2ff] uppercase">Non_Linear_Grid</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="font-mono text-[10px] text-white/40">
              [SYSTEM_STATUS: <span className="text-green-500">NOMINAL</span>]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}