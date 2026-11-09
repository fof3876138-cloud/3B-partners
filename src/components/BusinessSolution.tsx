import React from 'react';
import { useSite } from '../context/SiteContext';
import { ArrowRight, RefreshCw } from 'lucide-react';

export const BusinessSolution: React.FC = () => {
  const { setActiveCategory } = useSite();

  const handleGoToContact = () => {
    setActiveCategory('contact');
    document.getElementById('category-view')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-24 md:py-32 relative overflow-hidden text-white">
      {/* Background ambient yellow & pink gradient points */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-br from-[#FFE600]/15 to-[#FF2E93]/15 blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#FF2E93]/15 to-[#FFE600]/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Pillars Layout: Top row 2-columns (01, 02), Bottom row full-width (03) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mb-24">
          {/* [01번 항목] */}
          <div className="py-4 flex flex-col justify-start group transition-transform hover:-translate-y-1 break-keep">
            <div className="mb-4 pb-3 border-b border-white/10 flex items-center">
              <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-400 group-hover:text-[#FFE600] transition-colors">
                01
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug break-keep">
              콘텐츠는 지나가지만, 브랜드의 가치는 남습니다
            </h3>
            <div className="text-base text-neutral-300 font-medium leading-relaxed break-keep">
              매번 새로운 협찬과 단발성 광고로 소비되는 피로감,
              <br />
              이제 더 이상 감수할 필요 없습니다.
              <br />
              일회성 광고를 넘어 오랫동안 쌓이는 브랜드 자산으로,
              <br />
              3B 파트너스가 지속 가능한 성장의 길을 함께 열어갑니다.
            </div>
          </div>

          {/* [02번 항목] */}
          <div className="py-4 flex flex-col justify-start group transition-transform hover:-translate-y-1 break-keep">
            <div className="mb-4 pb-3 border-b border-white/10 flex items-center">
              <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-400 group-hover:text-[#FFE600] transition-colors">
                02
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug break-keep">
              완벽한 턴키(Turn-key) 전담 시스템
            </h3>
            <div className="text-base text-neutral-300 font-medium leading-relaxed break-keep">
              복잡한 프로세스. 상품기획·제조·배송·CS·재고관리·초기투자금의 벽 때문에 미뤄두셨나요?
              <br />
              이러한 부담은 우리가 안겠습니다.
              <br />
              실무의 모든 번거로움도 우리가 해결하겠습니다.
            </div>
          </div>

          {/* [03번 항목 - 아랫줄 전체 너비(col-span-full)] */}
          <div className="md:col-span-2 pt-8 mt-2 border-t border-white/5 flex flex-col justify-start group transition-transform hover:-translate-y-1 break-keep">
            <div className="mb-4 pb-3 border-b border-white/10 flex items-center">
              <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-400 group-hover:text-[#FFE600] transition-colors">
                03
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug break-keep">
              콘텐츠에 전념하는 동안, 브랜드는 끊임없이 진화합니다
            </h3>
            <div className="text-base text-neutral-300 font-medium leading-relaxed break-keep max-w-4xl space-y-3">
              <p>
                런칭보다 중요한 건, 멈추지 않는 &apos;성장과 관리&apos;입니다.
                <br />
                본업인 콘텐츠와 타사 광고만으로도 벅찬 크리에이터에게 상품 관리, 트렌드 분석, 채널별 마케팅은 너무나 버거운 일입니다.
                <br />
                우리가 이 문제를 해결하겠습니다.
              </p>

              <div className="py-1 space-y-1.5 text-neutral-200">
                <p>• Continuous Care: 꾸준한 품질 개선 및 피드백 반영</p>
                <p>• Line-up Expansion: 시즌별 신규 파생상품 및 굿즈 기획</p>
                <p>• Multi-Channel Marketing: 다양한 플랫폼으로의 확장 마케팅</p>
              </div>

              <p>
                3B 파트너스가 묵묵히 뒤에서 서포트하여 당신의 브랜드를 지속 가능한 거대한 자산으로 키워내겠습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Section (No Card Boxes, Clean Open Layout) */}
        <div className="pt-12 border-t border-white/10">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black">
              <RefreshCw className="w-5 h-5 text-black" />
            </span>
            <span>크리에이터가 체감하는 3B 파트너스 협업 효과</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base">
            <div className="space-y-4">
              <div className="font-black text-red-400 flex items-center gap-2.5 text-xl">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-black shrink-0">✕</span>
                <span>혼자 진행할 때 마주치는 장벽</span>
              </div>
              <div className="space-y-3 text-neutral-300 font-medium">
                <p className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>수백~수천 개 MOQ 발주로 초기 수천만 원 자본이 묶임</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>공장마다 다른 용어와 단가조절 실패로 인한 마진 손실</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>제품기획, 재고관리, 악성리뷰 응대 등 여러 리스크로 인한 본업인 콘텐츠 제작 마비</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>기타 사업이 처음이라 겪는 모든 시행착오 및 리스크</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-black text-[#FFE600] flex items-center gap-2.5 text-xl">
                <span className="w-6 h-6 rounded-full bg-[#FFE600]/20 text-[#FFE600] flex items-center justify-center text-xs font-black shrink-0">✓</span>
                <span>3B 파트너스와 함께할 때</span>
              </div>
              <div className="space-y-3 text-neutral-200 font-bold">
                <p className="flex items-start gap-2">
                  <span className="text-[#FFE600]">•</span>
                  <span>초기자본금 Zero 전속모델, 자본출자후 브랜드설립 등 원하는 방향의 비즈니스 선택</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFE600]">•</span>
                  <span>전담 디렉터가 원가 투명 공개 및 최적화된 마진 구조 설계</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFE600]">•</span>
                  <span>제품기획·제작·타채널마케팅·재고관리·배송·CS응대 100%대행</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#FFE600]">•</span>
                  <span>크리에이터는 <strong className="text-[#FF94B9]">콘텐츠 창작과 팬덤 소통에만 100% 집중</strong></span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleGoToContact}
              className="px-8 py-4 text-base font-black text-white bg-gradient-to-r from-[#FFE600]/20 via-[#FFD000]/15 to-[#FF2E93]/20 hover:from-[#FFE600]/30 hover:to-[#FF2E93]/30 border border-white/20 hover:border-[#FFE600]/50 backdrop-blur-md rounded-2xl transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-pink-500/10 active:scale-95 inline-flex items-center gap-2.5 cursor-pointer group"
            >
              <span className="tracking-tight">비즈니스 솔루션 1:1 상담 예약</span>
              <ArrowRight className="w-4 h-4 text-[#FFE600] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
