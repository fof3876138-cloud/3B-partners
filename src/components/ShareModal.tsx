import React from 'react';
import { useSite } from '../context/SiteContext';
import { X, Copy, Check, MessageSquare, Twitter, Facebook, Instagram } from 'lucide-react';

export const ShareModal: React.FC = () => {
  const { isShareModalOpen, setIsShareModalOpen, seo, showToast } = useSite();
  const [copied, setCopied] = React.useState(false);

  if (!isShareModalOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://3bpartners.kr';
  const shareTitle = seo.metaTitle || '3B 파트너스 - D2C 빌더 & 크리에이터 협력 상품제작';

  const copyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    showToast('사이트 URL 링크가 복사되었습니다.');
    setTimeout(() => setCopied(false), 2500);
  };

  const shareToInstagram = () => {
    navigator.clipboard.writeText(currentUrl);
    showToast('인스타그램에 공유하실 수 있도록 사이트 링크가 복사되었습니다!');
    window.open('https://www.instagram.com', '_blank', 'noopener,noreferrer');
  };

  const shareToThreads = () => {
    const text = encodeURIComponent(`${shareTitle}\n${currentUrl}`);
    window.open(`https://www.threads.net/intent/post?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`${shareTitle}\n${currentUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(currentUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
  };

  const shareToKakao = () => {
    copyUrl();
    showToast('카카오톡 및 모바일 메신저에 붙여넣기 하실 수 있도록 링크가 복사되었습니다!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#111116] border border-white/15 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-white">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="text-base font-black text-white">소셜 미디어 공유하기</div>
          <button
            onClick={() => setIsShareModalOpen(false)}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Share Buttons (5 channels: Kakao, Instagram, Threads, X, Facebook) */}
        <div className="grid grid-cols-5 gap-2 sm:gap-2.5 mb-6">
          {/* Kakao */}
          <button
            onClick={shareToKakao}
            className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-amber-500/15 border border-amber-400/30 hover:bg-amber-500/25 text-[#FFE600] font-black transition-all cursor-pointer group"
          >
            <MessageSquare className="w-5 h-5 text-[#FFE600] group-hover:scale-110 transition-transform" />
            <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">카카오톡</span>
          </button>

          {/* Instagram */}
          <button
            onClick={shareToInstagram}
            className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-amber-500/15 border border-pink-400/30 hover:bg-pink-500/25 text-pink-400 font-black transition-all cursor-pointer group"
          >
            <Instagram className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">인스타그램</span>
          </button>

          {/* Threads */}
          <button
            onClick={shareToThreads}
            className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-black transition-all cursor-pointer group"
          >
            <svg
              className="w-5 h-5 text-white fill-current group-hover:scale-110 transition-transform"
              viewBox="0 0 192 192"
            >
              <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4124 44.7441 97.2629 44.7441 97.1134 44.745C72.6322 44.745 54.8966 61.4284 54.8966 88.9482C54.8966 116.468 72.6322 133.151 97.1134 133.151C115.111 133.151 129.414 122.95 136.007 107.606L122.185 101.444C117.844 111.968 108.57 117.971 97.1134 117.971C81.2584 117.971 69.8966 106.136 69.8966 88.9482C69.8966 71.7607 81.2584 59.925 97.1134 59.925C113.111 59.925 122.518 70.4721 123.856 88.5919C115.42 86.8183 105.748 86.6437 96.0822 88.0851C77.4111 90.8715 65.5255 102.502 65.5255 117.069C65.5255 131.637 77.4111 143.267 96.0822 143.267C114.753 143.267 127.351 132.898 131.332 119.537C137.939 126.837 146.436 131.547 156.444 131.547C172.937 131.547 185 119.484 185 102.991C185 86.4984 172.937 74.4355 156.444 74.4355C151.782 74.4355 147.387 75.5215 143.473 77.511C143.203 76.0125 142.825 74.536 142.342 73.0847L154.55 68.6186C163.633 65.2891 169.571 56.6206 169.571 46.9037C169.571 34.2541 159.317 24 146.667 24C137.667 24 129.589 29.2319 125.864 37.3828L112.164 31.1352C118.067 18.2173 131.111 10 146.667 10C167.098 10 183.571 26.4731 183.571 46.9037C183.571 61.2727 175.257 74.072 162.775 79.4007C166.425 84.819 168.667 91.3193 168.667 98.3333C168.667 110.871 159.204 121 146.667 121C139.73 121 133.568 117.898 129.351 112.966C122.955 125.753 110.985 134 97.1134 134C69.4184 134 49 113.882 49 88.9482C49 64.0145 69.4184 43.8965 97.1134 43.8965C97.2629 43.8965 97.4124 43.8965 97.5619 43.8974C125.772 44.0772 143.284 62.062 144.919 92.4286L141.537 88.9883ZM123.636 102.775C121.737 112.924 113.842 120.301 104.14 120.301C90.2657 120.301 81.332 110.601 81.332 97.8016C81.332 85.0022 90.2657 75.3025 104.14 75.3025C112.872 75.3025 120.218 81.6587 122.846 90.5843C123.239 94.5772 123.504 98.6365 123.636 102.775Z" />
            </svg>
            <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">스레드</span>
          </button>

          {/* X (Twitter) */}
          <button
            onClick={shareToTwitter}
            className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-pink-500/15 border border-pink-400/30 hover:bg-pink-500/25 text-pink-400 font-black transition-all cursor-pointer group"
          >
            <Twitter className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">X (트위터)</span>
          </button>

          {/* Facebook */}
          <button
            onClick={shareToFacebook}
            className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/15 hover:bg-white/10 text-white font-black transition-all cursor-pointer group"
          >
            <Facebook className="w-5 h-5 text-neutral-300 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">페이스북</span>
          </button>
        </div>

        {/* URL Copy field */}
        <div>
          <label className="block text-xs font-bold text-white mb-1.5">
            웹사이트 주소 복사
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-[#181822] border border-white/15 rounded-xl px-3 py-2 text-xs text-white font-mono select-all focus:outline-none"
            />
            <button
              onClick={copyUrl}
              className="px-3.5 py-2 text-xs font-black text-black bg-gradient-to-r from-[#FFE600] to-[#FF2E93] rounded-xl transition-all shadow-md hover:opacity-95 flex items-center gap-1 cursor-pointer shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5 text-black" />}
              <span>{copied ? '복사됨' : '복사'}</span>
            </button>
          </div>
        </div>

        {/* OpenGraph Preview Snippet */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="text-[11px] font-bold text-neutral-400 mb-2">공유 시 표시되는 미리보기 카드</div>
          <div className="p-3 rounded-xl bg-[#181822] border border-white/10 flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-neutral-800 shrink-0 overflow-hidden">
              <img
                src={seo.ogImage || '/src/assets/images/hero_tech_packaging_studio_1792997270417.jpg'}
                alt="OG Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-white truncate">{seo.metaTitle}</div>
              <div className="text-[11px] text-neutral-400 font-medium truncate">{seo.metaDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
