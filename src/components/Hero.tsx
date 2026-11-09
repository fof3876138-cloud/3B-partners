import React from 'react';
import { useSite } from '../context/SiteContext';
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content, setIsAdminOpen, setActiveCategory } = useSite();

  const handleGoToContact = () => {
    setActiveCategory('contact');
    document.getElementById('category-view')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToSolution = () => {
    setActiveCategory('solution');
    document.getElementById('category-view')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden text-white">
      {/* Background yellow-pink gradient point mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#FFE600]/15 via-[#FF2E93]/15 to-[#FFE600]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker - White text with yellow/pink point */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-black tracking-wider text-white uppercase shadow-xs">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FFE600] to-[#FF2E93] shadow-sm shadow-pink-500/50" />
          <span className="text-white">{content.heroKicker}</span>
          <span aria-hidden="true" className="text-neutral-400">·</span>
          <span className="text-neutral-300">CREATOR COMMERCE ACCELERATOR</span>
        </div>

        {/* Hero Headline & Subtitle - All white text */}
        <div className="max-w-4xl mb-14">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]"
            style={{ textWrap: 'balance' }}
          >
            {content.heroTitle}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 font-medium leading-relaxed max-w-3xl">
            {content.heroSubtitle}
          </p>

          {/* Primary Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleGoToContact}
              className="px-6 py-3.5 text-sm sm:text-base font-black text-black bg-gradient-to-r from-[#FFE600] to-[#FF2E93] hover:opacity-95 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-xl shadow-pink-500/25 active:scale-95 cursor-pointer"
            >
              <span className="text-black">{content.heroCtaText}</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={handleGoToSolution}
              className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:border-[#FFE600]"
            >
              <span className="text-white">{content.heroSecondaryCtaText}</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-xs text-neutral-400 font-bold hover:text-[#FFE600] transition-colors underline underline-offset-4 ml-1 cursor-pointer"
            >
              [관리자 모드로 텍스트·색상 즉시 편집]
            </button>
          </div>
        </div>

        {/* Trust Badges Strip with dark surface and yellow & pink gradient point */}
        <div className="mb-10 flex flex-wrap items-center gap-6 text-xs text-white font-bold pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#FFE600]" />
            <span className="text-white">KC 안전인증 및 전수 품질 검수 100% 보증</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-xs">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-white">선주문(Pre-order) 기반 무재고 D2C 모델</span>
          </div>
        </div>

        {/* 4-Column KPI Strip - Dark cards with white text & yellow/pink gradient points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111116] border border-white/10 hover:border-pink-500/50 shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="text-xs font-bold text-neutral-400 mb-1.5">{stat.label}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums font-mono">
                  {stat.value}
                </span>
                <span className="text-xs font-black text-[#FFE600] bg-gradient-to-r from-[#FFE600]/20 to-[#FF2E93]/20 border border-[#FFE600]/30 px-1.5 py-0.5 rounded">
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
