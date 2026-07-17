import profileImage from "./img/img.jpg";
import { FiExternalLink } from "react-icons/fi";

export default function ProfileCard({ data }) {
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
        </div>
    );
}