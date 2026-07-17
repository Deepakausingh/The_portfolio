import React, { useMemo } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";

export default function DifficultyBar({ data }) {
  const { values, totalCount } = useMemo(() => {
    if (!data?.submissionCalendar) return { values: [], totalCount: 0 };
    
    let count = 0;
    const formatted = Object.entries(data.submissionCalendar).map(([timestamp, val]) => {
      count += val;
      return {
        date: new Date(Number(timestamp) * 1000),
        count: val,
      };
    });
    return { values: formatted, totalCount: count };
  }, [data]);

  if (!data?.submissionCalendar) return null;

  // Set start date to Jan 1st of the current year
  const startDate = new Date(new Date().getFullYear(), 0, 1);
  const endDate = new Date();

  return (
    <div className="w-full max-w-5xl mx-auto p-4 shadow-2xl p-2">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="mb-4 text-2xl font-sync leading-[0.9] uppercase tracking-tighter">Activity Graph</h2>
        </div>
        <div className="text-right">
          <div className="text-3xl font-sync leading-[0.9] uppercase tracking-tighter text-cyan-400">{totalCount}</div>
          <div className="text-xs text-white font-sync leading-[0.9] uppercase tracking-tighter">Total Submissions</div>
        </div>
      </div>

      {/* Added 'overflow-x-auto' for horizontal scrolling */}
      <div className="custom-heatmap-wrapper overflow-x-auto pb-4">
        <div className="min-w-[550px] font-sync leading-[0.9] uppercase tracking-tighter text-white"> {/* Ensures enough width for scroll */}
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={values}
            showWeekdayLabels={false} // Removed weekday labels
            showMonthLabels={true}    // Kept month labels for context
            gutterSize={4}
            classForValue={(value) => {
              if (!value) return "color-empty";
              if (value.count >= 10) return "color-github-4";
              if (value.count >= 5) return "color-github-3";
              if (value.count >= 2) return "color-github-2";
              return "color-github-1";
            }}
            tooltipDataAttrs={(value) => ({
              "data-tooltip-id": "heatmap-tooltip",
              "data-tooltip-content": value?.date 
                ? `${value.count} submissions on ${value.date.toDateString()}` 
                : "No activity",
            })}
          />
        </div>
        <Tooltip id="heatmap-tooltip" className="!bg-[#1a1a1a] !text-xs !px-[1px] !py-[1px] !border !border-cyan" />
      </div>

      {/* Legend remains the same */}
      <div className="flex items-center justify-end gap-2 mt-6 text-[10px] text-gray-500 uppercase">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-[#171717]" />
          <div className="w-3 h-3 bg-[rgba(0,242,255,0.2)]" />
          <div className="w-3 h-3 bg-[rgba(0,242,255,0.4)]" />
          <div className="w-3 h-3 bg-[rgba(0,242,255,0.7)]" />
          <div className="w-3 h-3 bg-[#00f2ff]" />
        </div>
        <span>More</span>
      </div>

      <style jsx global>{`
        /* Hide text/labels specifically */
        .custom-heatmap-wrapper .react-calendar-heatmap text {
          display: none; 
        }
        /* Show Month labels only */
        .custom-heatmap-wrapper .react-calendar-heatmap .react-calendar-heatmap-month-label {
          display: block;
          fill: #444;
          font-size: 10px;
        }
        .custom-heatmap-wrapper .react-calendar-heatmap .color-empty { fill: #171717; }
        .custom-heatmap-wrapper .react-calendar-heatmap .color-github-1 { fill: rgba(0, 242, 255, 0.2); }
        .custom-heatmap-wrapper .react-calendar-heatmap .color-github-2 { fill: rgba(0, 242, 255, 0.4); }
        .custom-heatmap-wrapper .react-calendar-heatmap .color-github-3 { fill: rgba(0, 242, 255, 0.7); }
        .custom-heatmap-wrapper .react-calendar-heatmap .color-github-4 { fill: #00f2ff; }
        
        .custom-heatmap-wrapper .react-calendar-heatmap rect {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .custom-heatmap-wrapper .react-calendar-heatmap rect:hover {
          stroke: white;
          stroke-width: 1px;
          filter: brightness(1.2);
        }
          /* Width */
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Thumb */
::-webkit-scrollbar-thumb {
  background: #00f2ff;
  border-radius: 999px;
  box-shadow:
    0 0 4px #00f2ff,
    0 0 8px #00f2ff;
  transition: background 0.3s ease;
}

/* Hover */
::-webkit-scrollbar-thumb:hover {
  background: #66f8ff;
  box-shadow:
    0 0 6px #00f2ff,
    0 0 12px #00f2ff;
}

/* Corner */
::-webkit-scrollbar-corner {
  background: transparent;
}
      `}</style>
    </div>
  );
}