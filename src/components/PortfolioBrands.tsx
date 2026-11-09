import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Briefcase, ArrowUpRight, Plus } from 'lucide-react';

export const PortfolioBrands: React.FC = () => {
  const { showcases, setSelectedShowcaseForModal, setIsAdminOpen, setActiveAdminTab } = useSite();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 브랜드/제품' },
    { id: '테크/데스크', label: '테크 & 데스크테리어' },
    { id: '사운드/바이닐', label: '사운드 & 한정판 LP' },
    { id: '메탈/스테이셔너리', label: 'CNC 메탈 & 스테이셔너리' },
    { id: '패키지/기프트', label: '럭셔리 패키지 & 지류' },
  ];

  const filteredItems = showcases.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden text-white">
      {/* Background ambient yellow & pink gradient points */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-gradient-to-br from-[#FFE600]/15 to-[#FF2E93]/15 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-gradient-to-tr from-[#FF2E93]/15 to-[#FFE600]/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="flex items-center gap-2 text-xs font-black tracking-wider text-white uppercase mb-4">
          <span className="p-1.5 rounded-lg bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black">
            <Briefcase className="w-4 h-4 text-black" />
          </span>
          <span className="text-white font-black">03. 포트폴리오 & 브랜드 (PORTFOLIO & BRANDS)</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight">
              3B가 크리에이터와 함께 일궈낸<br />
              <span className="text-white underline decoration-[#FF2E93] decoration-wavy decoration-2">시그니처 브랜드 & 완판 라인업</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-medium max-w-2xl">
              단순 기념품을 넘어 팬덤의 일상에 가치 있게 자리 잡은 실제 런칭 사례입니다.
              카드를 클릭하여 상세 기획 배경과 생산 스펙, 성과 리포트를 확인하세요.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#111116] border border-white/10 rounded-2xl overflow-x-auto shrink-0 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-black rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedShowcaseForModal(item)}
              className="group rounded-2xl bg-[#111116] border border-white/10 hover:border-pink-500/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gradient-to-r group-hover:from-[#FFE600] group-hover:to-[#FF2E93] group-hover:text-black group-hover:border-transparent transition-colors shadow">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300 font-bold mb-2.5">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200 border border-white/15">{item.creator}</span>
                    <span aria-hidden="true" className="text-neutral-500">·</span>
                    <span className="text-[#FFE600] font-semibold">{item.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-medium line-clamp-2 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Metric & Spec Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-neutral-400 font-bold">{item.highlightLabel}</div>
                    <div className="text-base sm:text-lg font-black text-[#FFE600] tabular-nums font-mono">
                      {item.highlightMetric}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-neutral-400 font-bold">제작 수량 / 기간</div>
                    <div className="text-xs text-white font-black font-mono">
                      {item.moq} / {item.productionCycle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin Quick Add Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActiveAdminTab('content');
              setIsAdminOpen(true);
            }}
            className="inline-flex items-center gap-2 text-xs font-black text-white bg-white/5 border border-white/15 px-5 py-2.5 rounded-xl hover:bg-white/10 hover:border-[#FFE600] transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#FFE600]" />
            <span>새로운 브랜드 포트폴리오 등록 / 수정 (관리자)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
