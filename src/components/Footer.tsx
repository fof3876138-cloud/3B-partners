import React from 'react';
import { useSite } from '../context/SiteContext';
import { Share2, Sliders, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { content, setIsAdminOpen, setIsShareModalOpen, setActiveCategory } = useSite();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm py-14 text-white text-xs relative overflow-hidden">
      {/* Background ambient lighting points */}
      <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-[#FFE600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-[#FF2E93]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-black text-white tracking-tight">3B PARTNERS</span>
              <span className="w-2 h-2 rounded-full bg-[#FF2E93] shadow-xs shadow-pink-500" />
              <span className="text-[#FFE600] font-mono font-bold text-[11px] bg-gradient-to-r from-[#FFE600]/20 to-[#FF2E93]/20 px-2 py-0.5 rounded border border-[#FFE600]/30">
                D2C BUILDER
              </span>
            </div>
            <p className="text-neutral-400 font-medium max-w-md">
              {content.brandSlogan} · 크리에이터 IP 머천다이즈 전문 제조 및 글로벌 풀필먼트 파트너
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-300 font-bold">
            <button
              onClick={() => {
                setActiveCategory('about');
                document.getElementById('category-view')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline decoration-[#FFE600] decoration-2 cursor-pointer"
            >
              회사소개
            </button>
            <button
              onClick={() => {
                setActiveCategory('solution');
                document.getElementById('category-view')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline decoration-[#FF2E93] decoration-2 cursor-pointer"
            >
              비즈니스 & 솔루션
            </button>
            <button
              onClick={() => {
                setActiveCategory('contact');
                document.getElementById('category-view')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline decoration-[#FF2E93] decoration-2 cursor-pointer"
            >
              업무협약 & 파트너십 문의
            </button>
          </div>

          {/* Actions & Sharing */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-pink-500 text-white font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-white" />
              <span>소셜 공유</span>
            </button>

            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-[#FFE600] text-white font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-[#FFE600]" />
              <span>관리자 모드</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 text-white transition-all shadow-sm cursor-pointer"
              aria-label="맨 위로 가기"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Legal & Registration Info */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-neutral-400 font-medium">
          <div className="space-y-1">
            <div>
              <span className="font-bold text-neutral-300">(주)3B 파트너스</span>
              <span className="mx-2">·</span>
              <span>대표이사: 강동원</span>
              <span className="mx-2">·</span>
              <span>사업자등록번호: {content.contact.businessNumber}</span>
              <span className="mx-2">·</span>
              <span>통신판매업신고: 제2026-서울강남-04182호</span>
            </div>
            <div>
              <span>주소: {content.contact.address}</span>
              <span className="mx-2">·</span>
              <span>고객센터: {content.contact.phone}</span>
              <span className="mx-2">·</span>
              <span>제휴/문의: {content.contact.email}</span>
            </div>
          </div>

          <div className="text-neutral-400 font-medium">
            © {new Date().getFullYear()} 3B Partners Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
