import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import leetcodeLogo from '../assets/leetcode.png';

const LeetcodeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="fixed bottom-10 left-10 z-50 flex h-10 w-10 items-center justify-center border border-[#00f2ff]/30 bg-[#6054426a] p-2 shadow-lg"
      style={{ borderRadius: '0px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: "#6054426a",
        borderColor: "#fb9700" 
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -10, 0]
      }}
      transition={{ 
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        duration: 0.3 
      }}
      onClick={() => window.open('https://leetcode.com/u/deepaksingh804142/', '_blank')}
    >
      <img src={leetcodeLogo} alt="LeetCode" className="h-full w-full object-contain" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            // Positioning the tooltip to the right of the button
            className="absolute left-14 top-1/2 -translate-y-1/2 w-[240px] px-3 py-2 bg-[#0a0a0a]/95 backdrop-blur-md border border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.15)] flex items-center justify-center"
          >
            <span className="text-[#00f2ff] font-sync text-[9px] uppercase tracking-[0.15em] text-center whitespace-normal">
              Visit to my leetcode Profile to check the progress
            </span>

            {/* Left-pointing Arrow */}
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#0a0a0a] border-l border-b border-[#00f2ff]/30"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default LeetcodeButton;