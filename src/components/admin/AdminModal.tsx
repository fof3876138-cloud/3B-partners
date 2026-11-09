import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Post, InquiryLead, FAQItem, ShowcaseItem, SiteTheme, SiteContent, SeoConfig, StatItem } from '../../types';
import {
  X,
  Sliders,
  FileText,
  Palette,
  LayoutTemplate,
  Search,
  Globe,
  Users,
  Download,
  Upload,
  RotateCcw,
  Plus,
  Trash2,
  Edit,
  Save,
  ExternalLink,
} from 'lucide-react';

export const AdminModal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    activeAdminTab,
    setActiveAdminTab,
    theme,
    setTheme,
    content,
    setContent,
    posts,
    addPost,
    updatePost,
    deletePost,
    inquiries,
    updateInquiryStatus,
    deleteInquiry,
    seo,
    setSeo,
    resetToDefaults,
    exportConfigAsJson,
    importConfigFromJson,
    showToast,
  } = useSite();

  // Post Editing Sub-modal
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [postForm, setPostForm] = useState({
    title: '',
    summary: '',
    content: '',
    category: '성공사례' as Post['category'],
    author: '3B 파트너스',
    date: new Date().toISOString().slice(0, 10).replace(/-/g, '. '),
    readTime: '4분 소요',
    coverImage: '/src/assets/images/tech_ip_merchandise_1792995875480.jpg',
    isFeatured: true,
    tagsStr: '크리에이터, 굿즈제작, D2C',
  });

  // Search in admin
  const [postSearch, setPostSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');

  if (!isAdminOpen) return null;

  const handleOpenCreatePost = () => {
    setIsCreatingPost(true);
    setEditingPost(null);
    setPostForm({
      title: '',
      summary: '',
      content: '### 프로젝트 개요\n여기에 본문 내용을 작성하세요.\n\n- 주요 성과 1\n- 주요 성과 2',
      category: '성공사례',
      author: '3B 브랜드팀',
      date: new Date().toISOString().slice(0, 10).replace(/-/g, '. '),
      readTime: '3분 소요',
      coverImage: '/src/assets/images/metal_stationery_edc_1792997270816.jpg',
      isFeatured: false,
      tagsStr: '소량제작, 신규런칭',
    });
  };

  const handleOpenEditPost = (post: Post) => {
    setEditingPost(post);
    setIsCreatingPost(false);
    setPostForm({
      title: post.title,
      summary: post.summary,
      content: post.content,
      category: post.category,
      author: post.author,
      date: post.date,
      readTime: post.readTime,
      coverImage: post.coverImage,
      isFeatured: post.isFeatured,
      tagsStr: post.tags ? post.tags.join(', ') : '',
    });
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postForm.title.trim()) {
      showToast('게시글 제목을 입력해 주세요.');
      return;
    }

    const tags = postForm.tagsStr
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (isCreatingPost) {
      addPost({
        title: postForm.title,
        summary: postForm.summary,
        content: postForm.content,
        category: postForm.category,
        author: postForm.author,
        date: postForm.date,
        readTime: postForm.readTime,
        coverImage: postForm.coverImage,
        isFeatured: postForm.isFeatured,
        tags,
      });
    } else if (editingPost) {
      updatePost(editingPost.id, {
        title: postForm.title,
        summary: postForm.summary,
        content: postForm.content,
        category: postForm.category,
        author: postForm.author,
        date: postForm.date,
        readTime: postForm.readTime,
        coverImage: postForm.coverImage,
        isFeatured: postForm.isFeatured,
        tags,
      });
    }

    setIsCreatingPost(false);
    setEditingPost(null);
  };

  const handleJsonFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const contentStr = event.target?.result as string;
      if (contentStr) {
        importConfigFromJson(contentStr);
      }
    };
    reader.readAsText(file);
  };

  const exportLeadsToCsv = () => {
    const headers = ['ID,크리에이터명,채널URL,구독자수,카테고리,이메일,연락처,희망시기,상태,접수일시,메모'];
    const rows = inquiries.map((inq: InquiryLead) =>
      [
        inq.id,
        `"${inq.creatorName.replace(/"/g, '""')}"`,
        `"${inq.channelUrl}"`,
        `"${inq.subscriberCount}"`,
        `"${inq.category.replace(/"/g, '""')}"`,
        `"${inq.email}"`,
        `"${inq.phone}"`,
        `"${inq.targetLaunchDate}"`,
        `"${inq.status}"`,
        `"${inq.createdAt}"`,
        `"${inq.message.replace(/"/g, '""')}"`,
      ].join(',')
    );
    const csvContent = '\uFEFF' + [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `3b-partners-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('접수된 문의 목록이 CSV로 다운로드되었습니다.');
  };

  // Color preset options
  const yellowPresets = ['#FFE600', '#FACC15', '#F59E0B', '#EAB308', '#A3E635'];
  const pinkPresets = ['#FF2E93', '#EC4899', '#F43F5E', '#FB7185', '#E11D48'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-6xl h-[92vh] bg-[#0E0E14] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in duration-200 text-white">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14141E]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-[#FFE600] to-[#FF2E93] text-black font-black">
              <Sliders className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-black text-white">3B 파트너스 관리자 대시보드</h2>
                <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#FFE600] font-bold border border-[#FFE600]/30">
                  LIVE CMS & CUSTOMIZER
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-medium">
                게시글 작성·관리, 색상·테마 커스터마이징, SEO 최적화, 제휴 문의 관리
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#0A0A0D] border-b border-[#1E1E28] overflow-x-auto">
          <button
            onClick={() => setActiveAdminTab('posts')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeAdminTab === 'posts'
                ? 'bg-accent-yellow text-black'
                : 'text-neutral-400 hover:text-white hover:bg-[#15151D]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>게시글 관리 ({posts.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('theme')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeAdminTab === 'theme'
                ? 'bg-accent-pink text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#15151D]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>디자인 & 테마</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('content')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeAdminTab === 'content'
                ? 'bg-accent-yellow text-black'
                : 'text-neutral-400 hover:text-white hover:bg-[#15151D]'
            }`}
          >
            <LayoutTemplate className="w-4 h-4" />
            <span>콘텐츠 편집</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('seo')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeAdminTab === 'seo'
                ? 'bg-accent-pink text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#15151D]'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>SEO & 소셜 연동</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('leads')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeAdminTab === 'leads'
                ? 'bg-accent-yellow text-black'
                : 'text-neutral-400 hover:text-white hover:bg-[#15151D]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>접수 문의 ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('backup')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeAdminTab === 'backup'
                ? 'bg-accent-pink text-white'
                : 'text-neutral-400 hover:text-white hover:bg-[#15151D]'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>백업 & 리셋</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#0E0E12]">
          {/* TAB 1: POSTS CMS */}
          {activeAdminTab === 'posts' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">매거진 & 제작가이드 게시글 관리</h3>
                  <p className="text-xs text-neutral-400">
                    크리에이터 성공 사례, 신제품 드롭 뉴스, 제작 팁을 실시간으로 작성 및 편집합니다.
                  </p>
                </div>
                <button
                  onClick={handleOpenCreatePost}
                  className="px-4 py-2 text-xs font-bold text-black bg-accent-yellow hover:bg-[#FFE600]/90 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>새 게시글 작성</span>
                </button>
              </div>

              {/* Search */}
              <div className="relative max-w-sm">
                <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={postSearch}
                  onChange={(e) => setPostSearch(e.target.value)}
                  placeholder="게시글 제목 검색..."
                  className="w-full bg-[#14141A] border border-[#23232E] rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-accent-yellow"
                />
              </div>

              {/* Posts Table */}
              <div className="rounded-xl border border-[#20202A] overflow-hidden bg-[#111116]">
                <table className="w-full text-left text-xs text-neutral-300">
                  <thead className="bg-[#181822] text-neutral-400 uppercase text-[11px] font-semibold border-b border-[#20202A]">
                    <tr>
                      <th className="py-3 px-4">분류</th>
                      <th className="py-3 px-4">제목</th>
                      <th className="py-3 px-4">작성자</th>
                      <th className="py-3 px-4">등록일</th>
                      <th className="py-3 px-4">조회수</th>
                      <th className="py-3 px-4 text-right">관리</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1D1D26]">
                    {posts
                      .filter((p: Post) => p.title.toLowerCase().includes(postSearch.toLowerCase()))
                      .map((post: Post) => (
                        <tr key={post.id} className="hover:bg-[#15151D] transition-colors">
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className="font-semibold text-accent-pink">{post.category}</span>
                          </td>
                          <td className="py-3 px-4 font-medium text-white max-w-xs truncate">
                            {post.title}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap text-neutral-400">
                            {post.author}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap font-mono text-neutral-400">
                            {post.date}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap font-mono text-neutral-400">
                            {post.views}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap text-right space-x-2">
                            <button
                              onClick={() => handleOpenEditPost(post)}
                              className="p-1.5 rounded bg-[#1C1C26] hover:bg-[#282836] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                              title="수정"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deletePost(post.id)}
                              className="p-1.5 rounded bg-[#1C1C26] hover:bg-red-950 text-neutral-400 hover:text-red-300 transition-colors cursor-pointer"
                              title="삭제"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: THEME & DESIGN */}
          {activeAdminTab === 'theme' && (
            <div className="space-y-8 max-w-3xl">
              <div>
                <h3 className="text-lg font-bold text-white">디자인 테마 & 컬러 커스터마이저</h3>
                <p className="text-xs text-neutral-400">
                  3B 파트너스의 핵심 포인트 컬러(노란색, 분홍색)와 배경 무드를 실시간으로 변경합니다.
                </p>
              </div>

              {/* Point Color 1: Yellow */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">포인트 컬러 1 (메인 옐로우)</div>
                    <div className="text-xs text-neutral-400">
                      CTA 버튼, 핵심 강조 텍스트, 메트릭 수치에 적용됩니다.
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl border border-white/20 shadow-md"
                    style={{ backgroundColor: theme.primaryYellow }}
                  />
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {yellowPresets.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => setTheme((prev: SiteTheme) => ({ ...prev, primaryYellow: hex }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2B2B38] text-xs font-mono text-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer"
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hex }} />
                      <span>{hex}</span>
                    </button>
                  ))}
                  <input
                    type="color"
                    value={theme.primaryYellow}
                    onChange={(e) =>
                      setTheme((prev: SiteTheme) => ({ ...prev, primaryYellow: e.target.value }))
                    }
                    className="w-8 h-8 rounded border border-[#2B2B38] bg-transparent cursor-pointer"
                    title="커스텀 컬러 선택"
                  />
                </div>
              </div>

              {/* Point Color 2: Pink */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">포인트 컬러 2 (서브 핑크/마젠타)</div>
                    <div className="text-xs text-neutral-400">
                      카테고리 라벨, 서브 타이틀, 크리에이터 뱃지에 적용됩니다.
                    </div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl border border-white/20 shadow-md"
                    style={{ backgroundColor: theme.primaryPink }}
                  />
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {pinkPresets.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => setTheme((prev: SiteTheme) => ({ ...prev, primaryPink: hex }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2B2B38] text-xs font-mono text-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer"
                    >
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hex }} />
                      <span>{hex}</span>
                    </button>
                  ))}
                  <input
                    type="color"
                    value={theme.primaryPink}
                    onChange={(e) =>
                      setTheme((prev: SiteTheme) => ({ ...prev, primaryPink: e.target.value }))
                    }
                    className="w-8 h-8 rounded border border-[#2B2B38] bg-transparent cursor-pointer"
                    title="커스텀 컬러 선택"
                  />
                </div>
              </div>

              {/* Background Style */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div>
                  <div className="text-sm font-bold text-white">어두운 배경 톤 설정</div>
                  <div className="text-xs text-neutral-400">고급스러운 블랙 베이스 톤을 선택하세요.</div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'obsidian', label: '딥 옵시디언 (#080808)', desc: '순수 칠흑색 최고급 다크' },
                    { id: 'charcoal', label: '모던 차콜 (#111215)', desc: '은은한 그래파이트 질감' },
                    { id: 'midnight', label: '미드나잇 네이비 (#090D16)', desc: '깊은 밤하늘 틴트' },
                  ].map((bg) => (
                    <button
                      key={bg.id}
                      onClick={() =>
                        setTheme((prev: SiteTheme) => ({ ...prev, bgStyle: bg.id as any }))
                      }
                      className={`p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                        theme.bgStyle === bg.id
                          ? 'border-accent-yellow bg-[#191924]'
                          : 'border-[#22222E] bg-[#101015] hover:border-neutral-500'
                      }`}
                    >
                      <div className="text-xs font-bold text-white mb-1">{bg.label}</div>
                      <div className="text-[11px] text-neutral-400">{bg.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hero Image Selection */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div>
                  <div className="text-sm font-bold text-white">히어로 메인 비주얼 이미지</div>
                  <div className="text-xs text-neutral-400">
                    스튜디오 샷 중 메인 헤더에 노출할 이미지를 지정합니다.
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: '메인 스튜디오', path: '/src/assets/images/hero_tech_packaging_studio_1792997270417.jpg' },
                    { label: '사운드 바이닐', path: '/src/assets/images/art_vinyl_sound_merch_1792997270347.jpg' },
                    { label: '메탈 스테이셔너리', path: '/src/assets/images/metal_stationery_edc_1792997270816.jpg' },
                    { label: '테크 하드웨어', path: '/src/assets/images/tech_ip_merchandise_1792995875480.jpg' },
                  ].map((asset, aIdx) => (
                    <div
                      key={aIdx}
                      onClick={() => setTheme((prev: SiteTheme) => ({ ...prev, heroVisual: asset.path }))}
                      className={`rounded-xl overflow-hidden border cursor-pointer group relative aspect-[4/3] ${
                        theme.heroVisual === asset.path
                          ? 'border-accent-yellow ring-2 ring-yellow-400/30'
                          : 'border-[#242432]'
                      }`}
                    >
                      <img src={asset.path} alt={asset.label} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-xs font-bold text-white">
                        {asset.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONTENT EDITOR */}
          {activeAdminTab === 'content' && (
            <div className="space-y-8 max-w-3xl">
              <div>
                <h3 className="text-lg font-bold text-white">사이트 콘텐츠 실시간 편집</h3>
                <p className="text-xs text-neutral-400">
                  히어로 카피, 브랜드 설명, 연락처, 통계 수치를 직접 수정하세요.
                </p>
              </div>

              {/* Hero Copy */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div className="text-sm font-bold text-white">히어로 섹션 문구</div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">상단 키커(Kicker)</label>
                  <input
                    type="text"
                    value={content.heroKicker}
                    onChange={(e) =>
                      setContent((prev: SiteContent) => ({ ...prev, heroKicker: e.target.value }))
                    }
                    className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">메인 헤드라인</label>
                  <input
                    type="text"
                    value={content.heroTitle}
                    onChange={(e) =>
                      setContent((prev: SiteContent) => ({ ...prev, heroTitle: e.target.value }))
                    }
                    className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">서브 헤드라인 설명</label>
                  <textarea
                    rows={3}
                    value={content.heroSubtitle}
                    onChange={(e) =>
                      setContent((prev: SiteContent) => ({ ...prev, heroSubtitle: e.target.value }))
                    }
                    className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">CTA 버튼 문구</label>
                    <input
                      type="text"
                      value={content.heroCtaText}
                      onChange={(e) =>
                        setContent((prev: SiteContent) => ({ ...prev, heroCtaText: e.target.value }))
                      }
                      className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">보조 CTA 문구</label>
                    <input
                      type="text"
                      value={content.heroSecondaryCtaText}
                      onChange={(e) =>
                        setContent((prev: SiteContent) => ({ ...prev, heroSecondaryCtaText: e.target.value }))
                      }
                      className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div className="text-sm font-bold text-white">공식 연락처 및 회사 정보</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">대표 유선전화</label>
                    <input
                      type="text"
                      value={content.contact.phone}
                      onChange={(e) =>
                        setContent((prev: SiteContent) => ({
                          ...prev,
                          contact: { ...prev.contact, phone: e.target.value },
                        }))
                      }
                      className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">대표 이메일</label>
                    <input
                      type="text"
                      value={content.contact.email}
                      onChange={(e) =>
                        setContent((prev: SiteContent) => ({
                          ...prev,
                          contact: { ...prev.contact, email: e.target.value },
                        }))
                      }
                      className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">스튜디오 본사 주소</label>
                  <input
                    type="text"
                    value={content.contact.address}
                    onChange={(e) =>
                      setContent((prev: SiteContent) => ({
                        ...prev,
                        contact: { ...prev.contact, address: e.target.value },
                      }))
                    }
                    className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">사업자등록번호</label>
                    <input
                      type="text"
                      value={content.contact.businessNumber}
                      onChange={(e) =>
                        setContent((prev: SiteContent) => ({
                          ...prev,
                          contact: { ...prev.contact, businessNumber: e.target.value },
                        }))
                      }
                      className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">운영 시간 안내</label>
                    <input
                      type="text"
                      value={content.contact.operatingHours}
                      onChange={(e) =>
                        setContent((prev: SiteContent) => ({
                          ...prev,
                          contact: { ...prev.contact, operatingHours: e.target.value },
                        }))
                      }
                      className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Stats Strip */}
              <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
                <div className="text-sm font-bold text-white">4대 핵심 성과 지표(KPI)</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.stats.map((st: StatItem, sIdx: number) => (
                    <div key={sIdx} className="p-3 rounded-lg bg-[#181822] border border-[#242432]">
                      <div className="text-xs text-neutral-400 mb-2">지표 #{sIdx + 1}</div>
                      <input
                        type="text"
                        value={st.label}
                        onChange={(e) => {
                          const val = e.target.value;
                          setContent((prev: SiteContent) => ({
                            ...prev,
                            stats: prev.stats.map((item: StatItem, idx: number) =>
                              idx === sIdx ? { ...item, label: val } : item
                            ),
                          }));
                        }}
                        className="w-full bg-[#121216] border border-[#2A2A38] rounded px-2.5 py-1 text-xs text-white mb-2"
                        placeholder="라벨"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={st.value}
                          onChange={(e) => {
                            const val = e.target.value;
                            setContent((prev: SiteContent) => ({
                              ...prev,
                              stats: prev.stats.map((item: StatItem, idx: number) =>
                              idx === sIdx ? { ...item, value: val } : item
                            ),
                          }));
                        }}
                        className="flex-1 bg-[#121216] border border-[#2A2A38] rounded px-2.5 py-1 text-xs text-white font-mono"
                        placeholder="수치"
                      />
                      <input
                        type="text"
                        value={st.unit}
                        onChange={(e) => {
                          const val = e.target.value;
                          setContent((prev: SiteContent) => ({
                            ...prev,
                            stats: prev.stats.map((item: StatItem, idx: number) =>
                              idx === sIdx ? { ...item, unit: val } : item
                            ),
                          }));
                        }}
                        className="w-16 bg-[#121216] border border-[#2A2A38] rounded px-2.5 py-1 text-xs text-white text-center"
                        placeholder="단위"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SEO & SOCIAL SIMULATOR */}
        {activeAdminTab === 'seo' && (
          <div className="space-y-8 max-w-3xl">
            <div>
              <h3 className="text-lg font-bold text-white">SEO 검색 엔진 최적화 & 소셜 메타 도구</h3>
              <p className="text-xs text-neutral-400">
                구글, 네이버 검색 노출 및 카카오톡/SNS 공유 시 나타나는 미리보기 카드를 설정합니다.
              </p>
            </div>

            {/* Meta Inputs */}
            <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  메타 타이틀 (Title Tag)
                </label>
                <input
                  type="text"
                  value={seo.metaTitle}
                  onChange={(e) => setSeo((prev: SeoConfig) => ({ ...prev, metaTitle: e.target.value }))}
                  className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                />
                <div className="text-[11px] text-neutral-500 mt-1">
                  권장 길이: 30~60자 (현재 {seo.metaTitle.length}자)
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  메타 설명 (Meta Description)
                </label>
                <textarea
                  rows={3}
                  value={seo.metaDescription}
                  onChange={(e) =>
                    setSeo((prev: SeoConfig) => ({ ...prev, metaDescription: e.target.value }))
                  }
                  className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                />
                <div className="text-[11px] text-neutral-500 mt-1">
                  권장 길이: 80~160자 (현재 {seo.metaDescription.length}자)
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  검색 키워드 (쉼표 구분)
                </label>
                <input
                  type="text"
                  value={seo.keywords}
                  onChange={(e) => setSeo((prev: SeoConfig) => ({ ...prev, keywords: e.target.value }))}
                  className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  OpenGraph 대표 공유 이미지 URL
                </label>
                <input
                  type="text"
                  value={seo.ogImage}
                  onChange={(e) => setSeo((prev: SeoConfig) => ({ ...prev, ogImage: e.target.value }))}
                  className="w-full bg-[#181822] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white font-mono"
                />
              </div>
            </div>

            {/* Google Search Simulator */}
            <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-3">
              <div className="text-xs font-bold text-accent-yellow uppercase tracking-wider">
                구글 검색 결과 시뮬레이션
              </div>
              <div className="p-4 rounded-xl bg-white text-black font-sans shadow-sm">
                <div className="flex items-center gap-2 text-xs text-neutral-600 mb-1">
                  <span className="w-4 h-4 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-bold">
                    3B
                  </span>
                  <span>3bpartners.kr</span>
                  <span className="text-neutral-400">›</span>
                </div>
                <div className="text-base text-[#1a0dab] font-medium hover:underline cursor-pointer leading-tight mb-1">
                  {seo.metaTitle}
                </div>
                <div className="text-xs text-[#4d5156] leading-relaxed line-clamp-2">
                  {seo.metaDescription}
                </div>
              </div>
            </div>

            {/* Social Media Card Simulator */}
            <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] space-y-3">
              <div className="text-xs font-bold text-accent-pink uppercase tracking-wider">
                카카오톡 & SNS 공유 카드 미리보기
              </div>
              <div className="max-w-md rounded-xl overflow-hidden bg-[#1E1E26] border border-[#2D2D3A]">
                <div className="aspect-[1.91/1] overflow-hidden bg-neutral-900">
                  <img
                    src={seo.ogImage || '/src/assets/images/hero_tech_packaging_studio_1792997270417.jpg'}
                    alt="OG Card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-[#181820]">
                  <div className="text-[11px] text-neutral-400 font-mono mb-0.5">3bpartners.kr</div>
                  <div className="text-xs font-bold text-white truncate mb-1">{seo.metaTitle}</div>
                  <div className="text-[11px] text-neutral-300 line-clamp-2">{seo.metaDescription}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: LEADS & INQUIRIES */}
        {activeAdminTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">크리에이터 협업 문의 접수함</h3>
                <p className="text-xs text-neutral-400">
                  웹사이트 상담 폼을 통해 접수된 크리에이터들의 제휴 신청 목록입니다.
                </p>
              </div>
              <button
                onClick={exportLeadsToCsv}
                className="px-3.5 py-2 text-xs font-bold text-black bg-accent-yellow hover:bg-[#FFE600]/90 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
              >
                <Download className="w-4 h-4" />
                <span>CSV 파일로 내보내기</span>
              </button>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {['all', '신규 접수', '검토중', '미팅 완료', '샘플링 진행', '보류'].map((st) => (
                <button
                  key={st}
                  onClick={() => setLeadStatusFilter(st)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    leadStatusFilter === st
                      ? 'bg-accent-yellow text-black'
                      : 'bg-[#14141A] text-neutral-400 hover:text-white border border-[#22222E]'
                  }`}
                >
                  {st === 'all' ? '전체 보기' : st}
                </button>
              ))}
            </div>

            {/* Inquiries Table */}
            <div className="rounded-xl border border-[#20202A] overflow-hidden bg-[#111116]">
              <table className="w-full text-left text-xs text-neutral-300">
                <thead className="bg-[#181822] text-neutral-400 uppercase text-[11px] font-semibold border-b border-[#20202A]">
                  <tr>
                    <th className="py-3 px-4">접수일시</th>
                    <th className="py-3 px-4">크리에이터/채널</th>
                    <th className="py-3 px-4">구독자수</th>
                    <th className="py-3 px-4">희망 카테고리</th>
                    <th className="py-3 px-4">연락처/이메일</th>
                    <th className="py-3 px-4">상태</th>
                    <th className="py-3 px-4 text-right">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1D1D26]">
                  {inquiries
                    .filter((inq: InquiryLead) =>
                      leadStatusFilter === 'all' ? true : inq.status === leadStatusFilter
                    )
                    .map((lead: InquiryLead) => (
                      <tr key={lead.id} className="hover:bg-[#15151D] transition-colors">
                        <td className="py-3 px-4 font-mono text-neutral-400 whitespace-nowrap">
                          {lead.createdAt}
                        </td>
                        <td className="py-3 px-4 font-bold text-white">
                          <div>{lead.creatorName}</div>
                          {lead.channelUrl && lead.channelUrl !== '미기재' && (
                            <a
                              href={lead.channelUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] text-accent-pink hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <span>채널 바로가기</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </td>
                        <td className="py-3 px-4 text-neutral-300 whitespace-nowrap">
                          {lead.subscriberCount}
                        </td>
                        <td className="py-3 px-4 text-neutral-300">{lead.category}</td>
                        <td className="py-3 px-4 text-neutral-300 whitespace-nowrap">
                          <div>{lead.phone}</div>
                          <div className="text-neutral-500 text-[11px]">{lead.email}</div>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              updateInquiryStatus(lead.id, e.target.value as any)
                            }
                            className="bg-[#181822] border border-[#2B2B38] text-xs text-white rounded px-2 py-1 focus:outline-none focus:border-accent-yellow cursor-pointer"
                          >
                            <option value="신규 접수">신규 접수</option>
                            <option value="검토중">검토중</option>
                            <option value="미팅 완료">미팅 완료</option>
                            <option value="샘플링 진행">샘플링 진행</option>
                            <option value="보류">보류</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <button
                            onClick={() => deleteInquiry(lead.id)}
                            className="p-1.5 rounded bg-[#1C1C26] hover:bg-red-950 text-neutral-400 hover:text-red-300 transition-colors cursor-pointer"
                            title="삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 6: BACKUP & FACTORY RESET */}
        {activeAdminTab === 'backup' && (
          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="text-lg font-bold text-white">데이터 백업 & 전체 리셋</h3>
              <p className="text-xs text-neutral-400">
                작성하신 모든 콘텐츠와 디자인 설정을 JSON 파일로 백업하거나 초기 상태로 복구할 수 있습니다.
              </p>
            </div>

            {/* JSON Export */}
            <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white mb-1">웹사이트 구성 JSON 다운로드</div>
                <div className="text-xs text-neutral-400">
                  게시글, 테마, 포트폴리오, 문의 목록 전체를 안전하게 파일로 저장합니다.
                </div>
              </div>
              <button
                onClick={exportConfigAsJson}
                className="px-4 py-2 text-xs font-bold text-black bg-accent-yellow hover:bg-[#FFE600]/90 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>JSON 내보내기</span>
              </button>
            </div>

            {/* JSON Import */}
            <div className="p-6 rounded-xl bg-[#121217] border border-[#22222E] flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white mb-1">백업 파일 불러오기</div>
                <div className="text-xs text-neutral-400">
                  이전에 내보낸 JSON 백업 파일을 업로드하여 설정을 즉시 복원합니다.
                </div>
              </div>
              <label className="px-4 py-2 text-xs font-semibold text-white bg-[#1A1A22] border border-[#2C2C3A] hover:border-neutral-400 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0">
                <Upload className="w-4 h-4" />
                <span>파일 선택</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleJsonFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Factory Reset */}
            <div className="p-6 rounded-xl bg-red-950/20 border border-red-900/40 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-red-300 mb-1">샘플 데이터로 초기화 (Reset)</div>
                <div className="text-xs text-red-400/80">
                  모든 수정 사항을 지우고 3B 파트너스의 기본 사전 탑재된 샘플 콘텐츠로 리셋합니다.
                </div>
              </div>
              <button
                onClick={() => {
                  if (
                    window.confirm(
                      '정말로 모든 수정을 초기화하고 기본 샘플 콘텐츠로 되돌리시겠습니까?'
                    )
                  ) {
                    resetToDefaults();
                  }
                }}
                className="px-4 py-2 text-xs font-semibold text-red-300 bg-red-950/60 border border-red-800 hover:bg-red-900/80 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <RotateCcw className="w-4 h-4" />
                <span>초기화 실행</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* POST CREATE / EDIT SUBMODAL */}
      {(isCreatingPost || editingPost) && (
        <div className="absolute inset-0 z-50 bg-[#0C0C10] flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1E1E28] bg-[#121217]">
            <div className="text-sm font-bold text-white">
              {isCreatingPost ? '새 게시글 작성' : '게시글 수정'}
            </div>
            <button
              onClick={() => {
                setIsCreatingPost(false);
                setEditingPost(null);
              }}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSavePost} className="flex-1 overflow-y-auto p-6 space-y-4 max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  게시글 제목 <span className="text-accent-pink">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  placeholder="제목을 입력하세요"
                  className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-accent-yellow"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">카테고리</label>
                <select
                  value={postForm.category}
                  onChange={(e) =>
                    setPostForm({ ...postForm, category: e.target.value as any })
                  }
                  className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-accent-yellow cursor-pointer"
                >
                  <option value="성공사례">성공사례</option>
                  <option value="제작가이드">제작가이드</option>
                  <option value="인사이트">인사이트</option>
                  <option value="공지사항">공지사항</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">요약 설명 (Summary)</label>
              <input
                type="text"
                value={postForm.summary}
                onChange={(e) => setPostForm({ ...postForm, summary: e.target.value })}
                placeholder="목록에 노출될 1~2줄 요약 설명"
                className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-accent-yellow"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">작성자</label>
                <input
                  type="text"
                  value={postForm.author}
                  onChange={(e) => setPostForm({ ...postForm, author: e.target.value })}
                  className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">게시일</label>
                <input
                  type="text"
                  value={postForm.date}
                  onChange={(e) => setPostForm({ ...postForm, date: e.target.value })}
                  className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">소요 시간</label>
                <input
                  type="text"
                  value={postForm.readTime}
                  onChange={(e) => setPostForm({ ...postForm, readTime: e.target.value })}
                  className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">커버 이미지 경로</label>
              <input
                type="text"
                value={postForm.coverImage}
                onChange={(e) => setPostForm({ ...postForm, coverImage: e.target.value })}
                placeholder="/src/assets/images/... 또는 이미지 URL"
                className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">태그 (쉼표 구분)</label>
              <input
                type="text"
                value={postForm.tagsStr}
                onChange={(e) => setPostForm({ ...postForm, tagsStr: e.target.value })}
                placeholder="예: 성공사례, 테크굿즈, D2C"
                className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                본문 내용 (마크다운 지원)
              </label>
              <textarea
                rows={9}
                required
                value={postForm.content}
                onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                className="w-full bg-[#16161D] border border-[#282836] rounded-lg px-3 py-2 text-xs text-white font-mono leading-relaxed resize-none focus:outline-none focus:border-accent-yellow"
              />
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#1E1E28]">
              <button
                type="button"
                onClick={() => {
                  setIsCreatingPost(false);
                  setEditingPost(null);
                }}
                className="px-4 py-2 text-xs font-semibold text-neutral-300 bg-[#16161E] border border-[#282836] rounded-lg hover:border-neutral-500 cursor-pointer"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-black bg-accent-yellow hover:bg-[#FFE600]/90 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-lg shadow-yellow-500/10"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isCreatingPost ? '게시글 발행하기' : '변경사항 저장'}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  </div>
);
};
