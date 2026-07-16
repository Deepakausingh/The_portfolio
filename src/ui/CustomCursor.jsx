import { useEffect, useState } from "react";

export default function CustomCursor() {
  // Global position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Hover state for the dynamic scaling/opacity effect
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Mouse tracking logic
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Hover detection logic for interactive elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, textarea, .hover-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none transition-transform duration-100 ease-out z-[10005] mix-blend-difference"
      style={{ 
        transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})` 
      }}
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Main pointer */}
        <div className="absolute w-1.5 h-1.5 bg-[#00f2ff] shadow-[0_0_10px_#00f2ff]"></div>
        
        {/* Outer ring */}
        <div className={`absolute inset-0 border border-[#00f2ff]/30 rounded-full transition-all duration-300 ${isHovering ? 'scale-125 opacity-100' : 'scale-100 opacity-50'}`}></div>
        
        {/* Corner accents */}
        <div className="absolute -top-1 -left-1 w-1 h-1 border-t border-l border-[#00f2ff]"></div>
        <div className="absolute -bottom-1 -right-1 w-1 h-1 border-b border-r border-[#00f2ff]"></div>
      </div>
    </div>
  );
}