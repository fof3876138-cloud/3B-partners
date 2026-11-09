import React from 'react';
import { useSite } from '../context/SiteContext';
import { X, Calendar, Eye, Share2, Tag, ArrowLeft } from 'lucide-react';

export const PostDetailModal: React.FC = () => {
  const { selectedPostForReading, setSelectedPostForReading, showToast } = useSite();

  if (!selectedPostForReading) return null;

  const post = selectedPostForReading;

  const copyPostUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('게시글 링크가 클립보드에 복사되었습니다.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#111116] border border-white/15 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161620]">
          <button
            onClick={() => setSelectedPostForReading(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FFE600] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span>목록으로 돌아가기</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPostUrl}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="링크 복사"
            >
              <Share2 className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setSelectedPostForReading(null)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs font-bold text-neutral-300 mb-3">
            <span className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[#FFE600]">{post.category}</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="flex items-center gap-1 font-mono text-neutral-400">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              {post.date}
            </span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="flex items-center gap-1 font-mono text-neutral-400">
              <Eye className="w-3.5 h-3.5 text-neutral-400" />
              {post.views}
            </span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-400">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author line */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-8 text-xs text-neutral-300">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black font-black flex items-center justify-center text-xs shadow-sm">
              3B
            </div>
            <div>
              <span className="font-bold text-white">{post.author}</span>
              <span className="mx-2 text-neutral-500">/</span>
              <span className="font-medium text-neutral-400">D2C 커머스 전문 에디터</span>
            </div>
          </div>

          {/* Cover image if available */}
          {post.coverImage && (
            <div className="rounded-xl overflow-hidden mb-8 border border-white/10">
              <img
                src={post.coverImage}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          )}

          {/* Body content with formatted paragraphs */}
          <div className="max-w-none text-sm sm:text-base text-neutral-200 font-normal leading-relaxed space-y-4">
            {post.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3
                    key={idx}
                    className="text-lg sm:text-xl font-black text-white pt-4 pb-1 border-b border-white/10"
                  >
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('- ')) {
                const bulletLines = trimmed.split('\n');
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 text-neutral-300 font-medium">
                    {bulletLines.map((line, lineIdx) => (
                      <li key={lineIdx}>{line.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.match(/^\d+\.\s/)) {
                const numLines = trimmed.split('\n');
                return (
                  <ol key={idx} className="list-decimal pl-5 space-y-2 text-neutral-300 font-medium">
                    {numLines.map((line, lineIdx) => (
                      <li key={lineIdx}>{line.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="leading-relaxed text-neutral-300">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs">
              <Tag className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              {post.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 font-medium border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
