import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import ProfileCard from "./comp/ProfileCard";
import StatsGrid from "./comp/StatsGrid";
import DifficultyBar from "./comp/DifficultyBar";
import useLeetcode from "./useLeetcode";

export default function LeetcodePopup({ open, onClose }) {
    const { loading, error, data, refresh } = useLeetcode(open);

    // Scroll locking logic
    useEffect(() => {
        if (open) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-[1000px] max-h-[600px] bg-[#050505]/95 backdrop-blur-xl border border-[#00f2ff]/20 shadow-[0_0_50px_rgba(0,242,255,0.05)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-2 py-[10px] flex items-center justify-between">
                            <h2 className="font-sync text-[10px] tracking-[0.4em] uppercase text-white flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#00f2ff] rounded-full mb-[2px] animate-pulse" />
                                LEETCODE_OVERVIEW
                            </h2>
                            <button 
                                onClick={onClose} 
                                className="text-[#00f2ff]/60 hover:text-[#00f2ff] transition-colors p-1"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="max-h-[600px] overflow-y-auto p-8 space-y-8 custom-scrollbar">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center h-64 gap-4">
                                    <div className="w-10 h-10 border-2 border-[#00f2ff]/30 border-t-[#00f2ff] rounded-full animate-spin" />
                                    <p className="font-sync text-[10px] tracking-[0.4em] uppercase text-[#00f2ff]/20">Fetching Data...</p>
                                </div>
                            ) : error ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="text-red-500/80 text-4xl font-light">!</div>
                                    <h2 className="font-sync text-[10px] tracking-[0.4em] uppercase text-red">Connection Failed</h2>
                                    <button 
                                        onClick={refresh} 
                                        className="px-6 py-2 border border-[#00f2ff]/30 font-sync text-[10px] tracking-[0.4em] uppercase text-[#00f2ff]/20 hover:bg-[#00f2ff]/20 transition-all text-sm"
                                    >
                                        Retry Sequence
                                    </button>
                                </div>
                            ) : data ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <ProfileCard data={data} />
                                    </div>
                                    <div className="relative md:col-span-2 grid grid-cols-2 gap-6 mb-4">

                                    {/* Vertical Divider */}
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-[90%] bg-[#00f2ff] mr-4" />

                                    <StatsGrid data={data} />

                                    <DifficultyBar data={data} />

                                </div>
                                </div>
                            ) : null}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}