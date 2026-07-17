import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex h-full items-center justify-center">
            <motion.div
                className="h-16 w-16 rounded-full border-4 border-[#00f2ff33] border-t-[#fb9700]"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}