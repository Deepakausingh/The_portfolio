import { useState } from "react";

export default function StatsGrid({ data }) {
  const [hovered, setHovered] = useState(null);

  const stats = [
    { label: "Easy", solved: data.easySolved, total: data.totalEasy, color: "#fbfbfb" },
    { label: "Med.", solved: data.mediumSolved, total: data.totalMedium, color: "#ffc01e" },
    { label: "Hard", solved: data.hardSolved, total: data.totalHard, color: "#ff375f" },
  ];

  const display = hovered 
    ? { title: hovered.label, val: hovered.solved, sub: hovered.total, color: hovered.color }
    : { title: "Solved", val: data.totalSolved, sub: data.totalQuestions, color: "#07e6ff" };

  const percentage = (display.val / display.sub) * 100;

  return (
    <div className="p-6 mb-[30px] flex items-center justify-between w-full max-w-[400px] border-b-2 border-transparent hover:border-[#00f2ff] transition-all duration-300">
      {/* Linear Progress Section */}
      <div className="flex flex-col w-40 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-2xl font-sync font-bold leading-[0.9] uppercase tracking-tighter">{display.val}</h2>
          <p className="text-xs md:text-xs font-sync leading-[0.9] uppercase tracking-tighter">{display.title} / {display.sub}</p>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-[2px] bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full transition-all duration-300 ease-out"
            style={{ 
              width: `${percentage}%`, 
              backgroundColor: display.color,
              boxShadow: `0 0 10px ${display.color}` // Neon Effect
            }}
          />
        </div>
      </div>

      {/* Difficulty Cards */}
      <div className="flex flex-col gap-2 w-32">
  {stats.map((stat) => (
    <div
      key={stat.label}
      onMouseEnter={() => setHovered(stat)}
      onMouseLeave={() => setHovered(null)}
      // Removed the static border classes and added 'relative' for the pseudo-element
      className="px-3 py-2 relative cursor-pointer group"
    >
      <p className="text-[10px] font-sync leading-[0.9] uppercase tracking-tighter font-bold" style={{ color: stat.color }}>
        {stat.label}
      </p>
      <p className="text-white text-xs font-sync leading-[0.9] uppercase tracking-tighter">
        {stat.solved} <span className="text-gray-500">/{stat.total}</span>
      </p>

      {/* Animated Border Line */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-[#00f2ff] w-0 transition-all duration-500 ease-out group-hover:w-full"
      />
    </div>
  ))}
</div>
    </div>
  );
}