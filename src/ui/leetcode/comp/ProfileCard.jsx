import { useState } from "react";
import profileImage from "./img/img.jpg";
import badge from "./img/badge.png"
import badgebig from "./img/badgebig.png"
import { FiExternalLink, FiImage, FiX } from "react-icons/fi";

export default function ProfileCard({ data }) {
    const [showImage, setShowImage] = useState(false);
    return (
        <div className="relative overflow-hidden px-10 p-4 shadow-inner">
            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f2ff]/5 blur-3xl rounded-full" />
            
            <div className="relative flex items-center justify-between spacegap-6">
                {/* Profile Image with Ring */}
                

                {/* Info */}
                <div className="space-y-1">
                    <h1 className="font-sync text-[30px] tracking-[0.4em] uppercase text-white tracking-tight">
                        Deepak Singh
                    </h1>

                    <a
                    href={`https://leetcode.com/u/deepaksingh804142/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 w-fit font-sync text-[17px] text-white tracking-tight hover:text-[#00f2ff] hover:underline underline-offset-4 decoration-[#00f2ff] transition-all duration-300"
                    >
                    @{data?.username || "deepaksingh804142"}

                    <FiExternalLink
                        size={15}
                        className="text-[#00f2ff] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#fb9700]"
                    />
                    </a>
                    
                    <div className="pt-2 flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="font-sync text-[15px] tracking-[0.4em] text-cyan tracking-tight uppercase">Global Ranking</span>
                            <span className="font-sync text-[13px] tracking-[0.4em] text-white tracking-tight uppercase">#{data.ranking?.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 rounded-full border-[1px] border-[#07e6ff] blur-sm opacity-20" />
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-[150px] h-[150px] rounded-full border border-[#07e6ff]/50 object-cover"
                    />
                </div>
            </div>
            <div className="mt-2 flex justify-start">
    <div className="relative group inline-block">
    <button
        onClick={() => setShowImage(true)}
        className="relative flex items-center justify-center w-11 h-11 bg-[#0a0a0a] transition-all duration-300 overflow-hidden"
    >
        {/* Glow */}
        <div className="absolute inset-0 bg-[#07e6ff]/10 opacity-0 transition-opacity duration-300" />

        <img
            src={badge}
            alt="View"
            className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
    </button>

    {/* Custom Cyber Tooltip */}
    {/* Right Side Tooltip */}
<div className="absolute left-full top-1/2 ml-3 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 z-[9999]">
    <div className="relative w-max max-w-[180px] border border-[#07e6ff]/40 bg-[#090909]/95 backdrop-blur-md px-2 py-1.5 shadow-[0_0_20px_rgba(7,230,255,0.18)]">
        <span className="font-sync text-[9px] tracking-[0.18em] uppercase text-[#07e6ff] leading-none">
            50 days badge
        </span>

        {/* Left Arrow */}
        <div className="absolute right-full top-1/2 -translate-y-1/2">
            <div className="w-2.5 h-2.5 rotate-45 bg-[#090909] border-l border-b border-[#07e6ff]/40"></div>
        </div>
    </div>
</div>
</div>
</div>

{/* Fullscreen Image Modal */}
{showImage && (
    <div
        onClick={() => setShowImage(false)}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md"
    >
        <button
            onClick={() => setShowImage(false)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition"
        >
            <FiX size={32} />
        </button>

        <img
            src={badgebig}
            alt="Profile"
            onClick={(e) => e.stopPropagation()}
            className="max-w-auto max-h-[600px] border border-[#07e6ff]/50 shadow-[0_0_40px_rgba(7,230,255,0.35)]"
        />
    </div>
)}
        </div>
    );
}