import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Menu, X, ArrowUpRight, Share2 } from 'lucide-react';

export const Header: React.FC = () => {
  const { activeCategory, setActiveCategory, setIsShareModalOpen } = useSite();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectCategory = (cat: 'about' | 'solution' | 'contact') => {
    setActiveCategory(cat);
    setMobileMenuOpen(false);
    const element = document.getElementById('category-view');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          className="text-lg sm:text-2xl font-black tracking-tight whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 cursor-pointer"
        >
          <span
            className="flex items-center gap-1 sm:gap-1.5 font-black text-base sm:text-2xl"
            style={{
              background: 'linear-gradient(90deg, #FF94B9 0%, #FFBED3 45%, #FFE269 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <span>3B</span>
            <span className="font-extrabold">PARTNERS</span>
          </span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#FF94B9] to-[#FFE269] shadow-sm shadow-pink-500/40 shrink-0" />
        </a>

        {/* Zone 2: Desktop clean text navigation links (lg screen and above) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-white">
          <button
            onClick={() => handleSelectCategory('about')}
            className={`transition-all whitespace-nowrap shrink-0 cursor-pointer pb-1.5 border-b-2 ${
              activeCategory === 'about'
                ? 'border-[#FFE600] text-white font-black'
                : 'text-neutral-300 border-transparent hover:text-white hover:border-[#FFE600]'
            }`}
          >
            회사소개
          </button>
          <button
            onClick={() => handleSelectCategory('solution')}
            className={`transition-all whitespace-nowrap shrink-0 cursor-pointer pb-1.5 border-b-2 ${
              activeCategory === 'solution'
                ? 'border-[#FFE600] text-white font-black'
                : 'text-neutral-300 border-transparent hover:text-white hover:border-[#FFE600]'
            }`}
          >
            비즈니스 & 솔루션
          </button>
          <button
            onClick={() => handleSelectCategory('contact')}
            className={`transition-all whitespace-nowrap shrink-0 cursor-pointer pb-1.5 border-b-2 ${
              activeCategory === 'contact'
                ? 'border-[#FFE600] text-white font-black'
                : 'text-neutral-300 border-transparent hover:text-white hover:border-[#FFE600]'
            }`}
          >
            업무협약 & 파트너십 문의
          </button>
        </nav>

        {/* Zone 3: Actions & Partnership Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setIsShareModalOpen(true)}
            aria-label="공유하기"
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-white/20 hover:border-[#FFE600]/50 bg-gradient-to-r from-[#FFE600]/20 via-[#FFD000]/15 to-[#FF2E93]/20 hover:from-[#FFE600]/30 hover:to-[#FF2E93]/30 backdrop-blur-md transition-all duration-300 shadow-sm active:scale-95 cursor-pointer group"
            title="소셜 공유 및 링크 복사"
          >
            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE600] group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => handleSelectCategory('contact')}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#FFE600]/20 via-[#FFD000]/15 to-[#FF2E93]/20 hover:from-[#FFE600]/30 hover:to-[#FF2E93]/30 border border-white/20 hover:border-[#FFE600]/50 backdrop-blur-md rounded-xl transition-all duration-300 shadow-sm active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1 sm:gap-1.5 cursor-pointer group"
          >
            <span className="tracking-tight">파트너십 제안</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Hamburger Button (≡) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white bg-white/5 border border-white/15 hover:border-[#FFE600] hover:text-[#FFE600] transition-colors cursor-pointer flex items-center justify-center"
            aria-label="모바일 메뉴 열기/닫기"
            title="카테고리 메뉴"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (클릭 시 펼쳐지는 상단 네비게이션 드로어) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0E0E14]/95 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top-3 duration-200 shadow-2xl">
          <div className="text-[11px] font-bold text-neutral-400 px-3 py-1 uppercase tracking-wider">
            메뉴 이동
          </div>
          <button
            onClick={() => handleSelectCategory('about')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all text-left cursor-pointer ${
              activeCategory === 'about'
                ? 'bg-gradient-to-r from-[#FFE600]/20 to-transparent text-[#FFE600] font-black border border-[#FFE600]/40'
                : 'text-neutral-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>회사소개</span>
            <span className="text-xs text-neutral-400 font-mono">01</span>
          </button>
          <button
            onClick={() => handleSelectCategory('solution')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all text-left cursor-pointer ${
              activeCategory === 'solution'
                ? 'bg-gradient-to-r from-[#FFE600]/20 to-transparent text-[#FFE600] font-black border border-[#FFE600]/40'
                : 'text-neutral-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>비즈니스 & 솔루션</span>
            <span className="text-xs text-neutral-400 font-mono">02</span>
          </button>
          <button
            onClick={() => handleSelectCategory('contact')}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-all text-left cursor-pointer ${
              activeCategory === 'contact'
                ? 'bg-gradient-to-r from-[#FF2E93]/20 via-[#FFE600]/20 to-transparent text-[#FFE600] font-black border border-[#FFE600]/40'
                : 'text-neutral-200 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span>업무협약 & 파트너십 문의</span>
            <span className="text-xs text-neutral-400 font-mono">03</span>
          </button>
        </div>
      )}
    </header>
  );
};
