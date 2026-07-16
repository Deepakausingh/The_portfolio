import React from 'react';

const SocialLinks = [
  {
    id: "CH_01",
    platform: "GITHUB",
    handle: "@dk-singh",
    link: "https://github.com",
    color: "text-white",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    )
  },
  {
    id: "CH_02",
    platform: "LINKEDIN",
    handle: "Deepak Singh",
    link: "https://linkedin.com",
    color: "text-[#00f2ff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    id: "CH_03",
    platform: "INSTAGRAM",
    handle: "@deepak_studio",
    link: "https://instagram.com",
    color: "text-pink-500",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  },
  {
    id: "CH_04",
    platform: "TWITTER",
    handle: "@dk_tweets",
    link: "https://twitter.com",
    color: "text-sky-400",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    )
  },
  {
    id: "CH_05",
    platform: "EMAIL",
    handle: "hello@deepak.dev",
    link: "mailto:hello@deepak.dev",
    color: "text-[#00f2ff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  }
];

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-32 px-8 md:px-24 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background HUD Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-grid"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00f2ff]/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="font-mono text-[#00f2ff] text-xs">06.</span>
              <h2 className="font-sync text-4xl md:text-5xl uppercase tracking-tighter">
                Let’s <span className="text-outline">Connect</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              [SIGNAL_TRANSMISSION // UPLINK_ESTABLISHMENT]
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="font-mono text-[9px] text-green-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 animate-pulse"></span>
              Frequency_Open: 5.0GHz_SECURE
            </div>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Transmission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* Signal Meta Info (Replacing Form) */}
          <div className="relative bg-white/[0.02] border border-dashed border-white/10 p-8 flex flex-col justify-between overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[8px] text-[#00f2ff] tracking-[0.4em] uppercase">Status_Log</div>
              <h3 className="font-sync text-lg text-white uppercase tracking-tighter">Active_Nodes</h3>
              <p className="font-mono text-[10px] text-gray-500 leading-relaxed">
                System uplink is active and secured via end-to-end encryption. Select a channel to initiate direct signal transmission.
              </p>
            </div>
            
            <div className="mt-12 space-y-2 relative z-10">
              <div className="flex justify-between font-mono text-[8px] text-gray-600 uppercase">
                <span>Signal_Strength</span>
                <span className="text-green-500">98%</span>
              </div>
              <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                <div className="h-full bg-green-500 w-[98%] animate-pulse"></div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 font-sync text-[120px] text-white/[0.01] pointer-events-none select-none">
              SIG
            </div>
          </div>

          {/* Social Links Mapping */}
          {SocialLinks.map((social, idx) => (
            <a 
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/[0.02] border border-white/5 p-8 flex flex-col items-start transition-all duration-500 hover:bg-white/[0.04] hover:border-[#00f2ff]/30 overflow-hidden"
            >
              {/* Channel ID */}
                <div className="flex justify-between w-full mb-8">
                  <span className="font-mono text-[8px] text-[#00f2ff] tracking-widest">{social.id}</span>
                  <div className="w-4 h-[1px] bg-white/10 group-hover:bg-[#00f2ff] group-hover:w-8 transition-all"></div>
                </div>

                {/* Icon & Platform */}
                <div className="flex items-center gap-5 mb-6">
                  <div className={`p-3 bg-black/40 border border-white/5 group-hover:border-[#00f2ff]/40 transition-all duration-500 ${social.color}`}>
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="font-sync text-[10px] uppercase text-gray-400 group-hover:text-white transition-colors">
                      {social.platform}
                    </h3>
                    <p className="font-mono text-[8px] text-gray-600 uppercase mt-1 tracking-tighter">Status: Standby</p>
                  </div>
                </div>

                {/* Handle */}
                <div className="w-full mt-auto">
                  <div className="font-mono text-[11px] text-white/50 group-hover:text-[#00f2ff] transition-colors truncate">
                    {social.handle}
                  </div>
                </div>

                {/* Hover Background ID */}
              <div className="absolute -bottom-6 -right-6 font-sync text-[80px] text-white/[0.01] group-hover:text-[#00f2ff]/[0.03] transition-colors pointer-events-none select-none">
                {social.id.split('_')[1]}
              </div>
            </a>
          ))}
          
          {/* Technical Node Placeholder */}
          <div className="group relative bg-black/20 border border-white/5 border-dashed p-8 flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-8 h-8 border border-white/10 flex items-center justify-center mb-4">
                <div className="w-1 h-1 bg-white animate-ping"></div>
              </div>
              <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">Waiting_For_Input</span>
              <span className="font-sync text-[7px] text-gray-700 mt-2">LISTENING_ON_PORT_8080</span>
          </div>
        </div>

        {/* Footer Navigation / Credits */}
        <div className="mt-32 pt-12 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Credits */}
            <div className="order-2 md:order-1 flex flex-col">
              <span className="font-sync text-[9px] text-white/40 uppercase tracking-[0.3em] mb-2">Deepak_Studio // v25.0</span>
              <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">© 2024 ALL_RIGHTS_ENCRYPTED</span>
            </div>

            {/* Central Terminal Display */}
            <div className="order-1 md:order-2 flex flex-col items-center">
              <div className="px-6 py-2 border border-white/10 bg-white/[0.02] font-mono text-[9px] text-[#00f2ff] uppercase tracking-[0.5em] animate-pulse">
                System_Standby
              </div>
            </div>

            {/* Quick Action */}
            <div className="order-3 flex justify-end gap-8">
              <div className="flex flex-col items-end">
                <span className="font-mono text-[8px] text-gray-600 uppercase mb-1">Local_Time</span>
                <span className="font-sync text-[10px] text-white">VARANASI.IN</span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 font-sync text-[9px] text-gray-500 hover:text-[#00f2ff] transition-colors"
              >
                BACK_TO_TOP
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}