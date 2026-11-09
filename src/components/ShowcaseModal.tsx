import React from 'react';
import { useSite } from '../context/SiteContext';
import { X, TrendingUp, Clock, PackageCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ShowcaseModal: React.FC = () => {
  const { selectedShowcaseForModal, setSelectedShowcaseForModal, setActiveCategory } = useSite();

  if (!selectedShowcaseForModal) return null;

  const item = selectedShowcaseForModal;

  const scrollToInquiry = () => {
    setSelectedShowcaseForModal(null);
    setActiveCategory('contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#111116] border border-white/15 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161620]">
          <div className="flex items-center gap-2 text-xs font-black text-white">
            <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20 text-[#FFE600]">{item.category}</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-white font-bold">{item.creator}</span>
          </div>

          <button
            onClick={() => setSelectedShowcaseForModal(null)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[16/10] bg-neutral-900">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-2">{item.title}</h2>
            <p className="text-sm text-neutral-300 font-medium leading-relaxed">{item.description}</p>
          </div>

          {/* Metric Callout Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#161622] border border-white/10 shadow-sm">
            <div className="p-2">
              <div className="text-xs text-neutral-400 font-bold flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#FFE600]" />
                <span>{item.highlightLabel}</span>
              </div>
              <div className="text-lg font-black text-[#FFE600] font-mono tabular-nums">
                {item.highlightMetric}
              </div>
            </div>

            <div className="p-2 border-t sm:border-t-0 sm:border-l border-white/10">
              <div className="text-xs text-neutral-400 font-bold flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-pink-400" />
                <span>제작 기간</span>
              </div>
              <div className="text-sm font-black text-white font-mono">{item.productionCycle}</div>
            </div>

            <div className="p-2 border-t sm:border-t-0 sm:border-l border-white/10">
              <div className="text-xs text-neutral-400 font-bold flex items-center gap-1.5 mb-1">
                <PackageCheck className="w-3.5 h-3.5 text-[#FFE600]" />
                <span>최소 주문 수량 (MOQ)</span>
              </div>
              <div className="text-sm font-black text-white font-mono">{item.moq}</div>
            </div>
          </div>

          {/* Deep dive detail */}
          <div className="p-5 rounded-xl bg-[#161622] border border-white/10">
            <h3 className="text-xs font-black text-[#FFE600] uppercase tracking-wider mb-2">
              제작 비하인드 & 3B 솔루션 리포트
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">{item.details}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 text-neutral-200 font-medium border border-white/10"
              >
                <CheckCircle2 className="w-3 h-3 text-[#FFE600]" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="text-xs text-neutral-300 font-medium">
              비슷한 콘셉트의 크리에이터 상품 제작을 희망하시나요?
            </div>
            <button
              onClick={scrollToInquiry}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-black text-black bg-gradient-to-r from-[#FFE600] to-[#FF2E93] rounded-xl shadow-lg shadow-pink-500/20 transition-opacity hover:opacity-95 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>이 프로젝트 스타일로 상담 받기</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
