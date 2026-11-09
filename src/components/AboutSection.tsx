import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-16 sm:space-y-20">
          {/* Section 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-snug mb-5 text-center drop-shadow-md">
              You Create, We Build.
            </h2>
            <div className="space-y-3 text-base sm:text-lg md:text-xl font-normal text-neutral-200 leading-relaxed text-center max-w-3xl mx-auto drop-shadow-xs break-keep">
              <p>당신의 크리에이티비티와 우리의 인프라가 만나 세상에 없던 제품을 만들어냅니다</p>
              <p>크리에이터의 눈부신 영향력, 독보적인 브랜드로 입증하겠습니다</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center">
            {/* 한 줄로 정렬 + 더 굵은 폰트(font-black) (모바일에서는 자연스러운 줄바꿈) */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug mb-6 text-center break-keep drop-shadow-md">
              개인이 브랜드가 되는 시대, 크리에이터 브랜드 생태계를 구축합니다
            </h2>

            {/* 가독성을 높인 3단 줄배열 정렬 */}
            <div className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-neutral-200 leading-relaxed text-center max-w-4xl mx-auto drop-shadow-xs break-keep">
              <p className="whitespace-normal md:whitespace-nowrap">
                크리에이터에 대한 인식의 변화는 이들 한 명 한 명이 하나의 브랜드 주체로 자리 잡는 계기가 되었습니다.
              </p>
              <p className="whitespace-normal md:whitespace-nowrap">
                3B 파트너스는 이 거대한 흐름 속에서 메가히트 상품을 지속해서 만들어 내고,
              </p>
              <p className="whitespace-normal md:whitespace-nowrap">
                향후 자신만의 시그니처 브랜드를 열망하는 수많은 파트너를 선점하는 시장 선도자로 서고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
