import React from 'react';
import { useSite } from '../context/SiteContext';

export const StatsSection: React.FC = () => {
  const { content } = useSite();

  return (
    <section className="relative pt-12 pb-16 text-white mt-12">
      {/* Subtle top divider line fading at edges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column KPI Stats without card boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className="py-2 text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5"
            >
              <div className="text-xs sm:text-sm font-bold text-neutral-400 mb-2 truncate text-center tracking-tight">
                {stat.label}
              </div>
              <div className="flex items-baseline justify-center gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums font-mono drop-shadow-sm">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-black text-[#FFE600] tracking-wide">
                  {stat.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
