import React from 'react';

interface StarParticle {
  id: number;
  top: string;
  left: string;
  size: string;
  color: string;
  glowColor: string;
  duration: string;
  delay: string;
}

/**
 * 23 delicate star particles naturally distributed from the top of the viewport
 * through "You Create, We Build." down to right above "크리에이터의 눈부신 영향력, 독보적인 브랜드로 입증하겠습니다".
 *
 * Micro-sizes (1px ~ 2.5px), gentle staggered twinkle (3.4s ~ 5.2s), low intrusion.
 */
const EXPANDED_STARS: StarParticle[] = [
  // 1. Topmost Sky Region (4% ~ 14%)
  { id: 1, top: '4%', left: '10%', size: '2px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.9)]', duration: '3.6s', delay: '0s' },
  { id: 2, top: '8%', left: '25%', size: '1.5px', color: 'bg-amber-100', glowColor: 'shadow-[0_0_4px_rgba(255,230,0,0.8)]', duration: '4.2s', delay: '1.2s' },
  { id: 3, top: '3%', left: '46%', size: '2px', color: 'bg-white', glowColor: 'shadow-[0_0_5px_rgba(255,255,255,0.9)]', duration: '5.0s', delay: '0.4s' },
  { id: 4, top: '11%', left: '63%', size: '2.5px', color: 'bg-amber-200', glowColor: 'shadow-[0_0_5px_rgba(255,220,0,0.85)]', duration: '3.8s', delay: '2.0s' },
  { id: 5, top: '6%', left: '79%', size: '1.5px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.9)]', duration: '4.5s', delay: '0.8s' },
  { id: 6, top: '12%', left: '91%', size: '2px', color: 'bg-yellow-100', glowColor: 'shadow-[0_0_4px_rgba(255,230,0,0.8)]', duration: '3.5s', delay: '1.6s' },

  // 2. Upper Mid Region Approaching First Title (16% ~ 26%)
  { id: 7, top: '17%', left: '7%', size: '1px', color: 'bg-white', glowColor: 'shadow-[0_0_3px_rgba(255,255,255,0.8)]', duration: '4.8s', delay: '2.4s' },
  { id: 8, top: '22%', left: '20%', size: '2px', color: 'bg-amber-100', glowColor: 'shadow-[0_0_4px_rgba(255,220,0,0.8)]', duration: '3.9s', delay: '0.6s' },
  { id: 9, top: '18%', left: '38%', size: '1.5px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.9)]', duration: '4.3s', delay: '1.9s' },
  { id: 10, top: '24%', left: '54%', size: '1.5px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.9)]', duration: '5.2s', delay: '2.7s' },
  { id: 11, top: '19%', left: '72%', size: '2px', color: 'bg-yellow-200', glowColor: 'shadow-[0_0_4px_rgba(255,230,0,0.85)]', duration: '4.0s', delay: '1.1s' },
  { id: 12, top: '25%', left: '85%', size: '1px', color: 'bg-white', glowColor: 'shadow-[0_0_3px_rgba(255,255,255,0.8)]', duration: '3.7s', delay: '3.1s' },

  // 3. Across and Flanking "You Create, We Build." (28% ~ 37%)
  { id: 13, top: '29%', left: '13%', size: '2px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.8)]', duration: '4.6s', delay: '0.3s' },
  { id: 14, top: '33%', left: '27%', size: '1.5px', color: 'bg-amber-100', glowColor: 'shadow-[0_0_4px_rgba(255,220,0,0.8)]', duration: '4.1s', delay: '1.7s' },
  { id: 15, top: '30%', left: '68%', size: '2px', color: 'bg-amber-200', glowColor: 'shadow-[0_0_4px_rgba(255,220,0,0.8)]', duration: '3.8s', delay: '2.3s' },
  { id: 16, top: '35%', left: '81%', size: '1.5px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.9)]', duration: '4.9s', delay: '1.4s' },
  { id: 17, top: '32%', left: '93%', size: '2px', color: 'bg-yellow-100', glowColor: 'shadow-[0_0_4px_rgba(255,230,0,0.8)]', duration: '3.4s', delay: '0.9s' },

  // 4. Extending to right above "크리에이터의 눈부신 영향력..." (39% ~ 48%)
  { id: 18, top: '40%', left: '8%', size: '1.5px', color: 'bg-white', glowColor: 'shadow-[0_0_3px_rgba(255,255,255,0.8)]', duration: '4.4s', delay: '2.1s' },
  { id: 19, top: '44%', left: '18%', size: '2px', color: 'bg-amber-100', glowColor: 'shadow-[0_0_4px_rgba(255,220,0,0.8)]', duration: '3.7s', delay: '0.5s' },
  { id: 20, top: '39%', left: '33%', size: '1px', color: 'bg-white', glowColor: 'shadow-[0_0_3px_rgba(255,255,255,0.8)]', duration: '5.1s', delay: '1.8s' },
  { id: 21, top: '42%', left: '64%', size: '1.5px', color: 'bg-yellow-200', glowColor: 'shadow-[0_0_4px_rgba(255,230,0,0.85)]', duration: '4.0s', delay: '2.8s' },
  { id: 22, top: '46%', left: '76%', size: '2px', color: 'bg-white', glowColor: 'shadow-[0_0_4px_rgba(255,255,255,0.9)]', duration: '4.7s', delay: '0.2s' },
  { id: 23, top: '47%', left: '89%', size: '1.5px', color: 'bg-amber-100', glowColor: 'shadow-[0_0_4px_rgba(255,220,0,0.8)]', duration: '3.9s', delay: '1.5s' },
];

export const CosmicBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-black"
      aria-hidden="true"
    >
      {/* 1. Deep solid black canvas */}
      <div className="absolute inset-0 bg-black" />

      {/* 2. Ambient Glow Points */}
      {/* Top-Left Soft Pink Ambient Glow */}
      <div
        className="absolute -top-20 -left-20 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-pink-500 blur-[110px] opacity-[0.14]"
      />

      {/* Top-Left Offset Warm Yellow Ambient Glow */}
      <div
        className="absolute top-[8%] left-[14%] w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full bg-yellow-400 blur-[95px] opacity-[0.11]"
      />

      {/* Bottom-Right Soft Pink Ambient Glow */}
      <div
        className="absolute -bottom-24 -right-24 w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-pink-500 blur-[110px] opacity-[0.11]"
      />

      {/* Bottom-Right Offset Warm Yellow Ambient Glow */}
      <div
        className="absolute bottom-[8%] right-[14%] w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] rounded-full bg-yellow-400 blur-[90px] opacity-[0.09]"
      />

      {/* 3. Starlight Particles Expanded from Top down through 'You Create, We Build.' to mid-description */}
      <div className="absolute inset-0 pointer-events-none">
        {EXPANDED_STARS.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.color} ${star.glowColor} animate-star-twinkle`}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              ['--twinkle-duration' as string]: star.duration,
              ['--twinkle-delay' as string]: star.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
};
