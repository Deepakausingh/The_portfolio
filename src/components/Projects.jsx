import React from 'react';

const ProjectData = [
  {
    id: "01",
    title: "3D_Gesture_Interface",
    category: "Embedded HID Simulation",
    tech: ["PYTHON", "MEDIAPIPE", "OPENGL", "PYOPENGL"],
    desc: "Developed a hardware-interfacing system translating webcam gesture inputs into 3D commands via low-latency acquisition loops with noise-reduction — emulating interrupt-driven embedded HID firmware.",
    status: "LIVE_STABLE",
    link: "#"
  },
  {
    id: "02",
    title: "REAL_TIME_HUMAN_ACTIVITY DETECTOR",
    category: "Computer Vision API",
    tech: ["PYTHON", "TENSORFLOW", "OPENCV", "SCIKIT-LEARN"],
    desc: "Built a real-time ML inference pipeline for activity classification from video/sensor streams; optimized memory footprint and latency to approach embedded deployment constraints.",
    status: "DEPLOYED",
    link: "#"
  },
  {
    id: "03",
    title: "SOAP_WEBSITE",
    category: "Full-Stack Web Application",
    tech: ["REACT", "TAILWIND", "NODE.JS", "EXPRESS", "MONGODB"],
    desc: "Designed and developed a full-stack e-commerce platform for artisanal soaps, featuring a React frontend with Tailwind CSS, and a Node.js/Express backend connected to MongoDB for product management and order processing.",
    status: "LIVE_STABLE",
    link: "https://rustiquemud.vercel.app/"
  }
  
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative py-32 px-8 md:px-24 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="font-mono text-[#00f2ff] text-xs">03.</span>
              <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter">
                The <span className="text-outline">projects</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              [SELECTED_WORKS // PRODUCTION_HISTORY]
            </p>
          </div>

          <div className="flex gap-2">
            <div className="h-10 w-1 bg-[#00f2ff]/20"></div>
            <div className="text-[9px] font-mono text-gray-500 uppercase max-w-[150px] leading-tight">
              All assets are verified for high-performance deployment.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[25px] bg-transparent">
          {ProjectData.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#050505] border border-white/5 p-8 md:p-10 transition-all duration-500 hover:bg-[#080808] cursor-crosshair overflow-hidden"
            >
              {/* Background ID Watermark */}
              <div className="absolute top-4 right-4 font-sync text-[40px] text-white/[0.02] group-hover:text-[#00f2ff]/5 transition-colors">
                {project.id}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 mb-8">
                <div className={`w-1.5 h-1.5 rounded-none ${project.status === 'LIVE_STABLE' ? 'bg-[#00f2ff]' : 'bg-orange-500'} animate-pulse`}></div>
                <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">
                  {project.status}
                </span>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="font-mono text-[#00f2ff] text-[9px] mb-1 tracking-widest uppercase opacity-70">
                    {project.category}
                  </div>
                  <h3 className="font-sync text-lg uppercase tracking-tight group-hover:text-[#00f2ff] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-500 font-mono text-[11px] leading-relaxed h-12 overflow-hidden">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 border border-white/5 text-[8px] font-mono text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Industrial Action Button */}
                <div className="pt-8">
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-4 group/btn"
                  >
                    <span className="font-sync text-[9px] uppercase tracking-[0.2em] text-white group-hover/btn:text-[#00f2ff] transition-colors">
                      Initialize_Source
                    </span>
                    <div className="w-8 h-px bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-[#00f2ff] transition-all"></div>
                  </a>
                </div>
              </div>

              {/* Hover Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff]/0 via-[#00f2ff]/5 to-[#00f2ff]/0 translate-y-full group-hover:animate-scan-once pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-between items-center font-mono text-[7px] text-gray-600 uppercase tracking-[0.5em]">
          <span>Archive_Ref: PROJ_2024_03</span>
          <a href="">
            <div className="flex gap-4">
            <span>View_More</span>
            <span className="text-[#00f2ff] cursor-pointer hover:opacity-50 transition-opacity">---&gt;</span>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}