import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Post,
  ShowcaseItem,
  Testimonial,
  FAQItem,
  InquiryLead,
  SiteTheme,
  SiteContent,
  SeoConfig,
} from '../types';
import {
  initialTheme,
  initialSiteContent,
  initialShowcaseItems,
  initialPosts,
  initialTestimonials,
  initialFaqs,
  initialInquiries,
  initialSeoConfig,
} from '../data/initialData';

interface SiteContextType {
  theme: SiteTheme;
  setTheme: React.Dispatch<React.SetStateAction<SiteTheme>>;
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  showcases: ShowcaseItem[];
  setShowcases: React.Dispatch<React.SetStateAction<ShowcaseItem[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  faqs: FAQItem[];
  setFaqs: React.Dispatch<React.SetStateAction<FAQItem[]>>;
  inquiries: InquiryLead[];
  setInquiries: React.Dispatch<React.SetStateAction<InquiryLead[]>>;
  seo: SeoConfig;
  setSeo: React.Dispatch<React.SetStateAction<SeoConfig>>;

  // UI state
  activeCategory: 'about' | 'solution' | 'contact';
  setActiveCategory: (cat: 'about' | 'solution' | 'contact') => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  activeAdminTab: 'posts' | 'theme' | 'content' | 'seo' | 'leads' | 'backup';
  setActiveAdminTab: (tab: 'posts' | 'theme' | 'content' | 'seo' | 'leads' | 'backup') => void;
  selectedPostForReading: Post | null;
  setSelectedPostForReading: (post: Post | null) => void;
  selectedShowcaseForModal: ShowcaseItem | null;
  setSelectedShowcaseForModal: (item: ShowcaseItem | null) => void;
  isShareModalOpen: boolean;
  setIsShareModalOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;

  // Actions
  addPost: (post: Omit<Post, 'id' | 'views'>) => void;
  updatePost: (id: string, updated: Partial<Post>) => void;
  deletePost: (id: string) => void;
  incrementPostViews: (id: string) => void;

  addShowcase: (item: Omit<ShowcaseItem, 'id'>) => void;
  updateShowcase: (id: string, updated: Partial<ShowcaseItem>) => void;
  deleteShowcase: (id: string) => void;

  addInquiry: (inquiry: Omit<InquiryLead, 'id' | 'createdAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: InquiryLead['status']) => void;
  deleteInquiry: (id: string) => void;

  addFaq: (faq: Omit<FAQItem, 'id'>) => void;
  updateFaq: (id: string, updated: Partial<FAQItem>) => void;
  deleteFaq: (id: string) => void;

  resetToDefaults: () => void;
  exportConfigAsJson: () => void;
  importConfigFromJson: (jsonStr: string) => boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const STORAGE_KEY = '3b_partners_state_v4';

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from local storage or fallback to defaults
  const loadInitialState = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved state from localStorage:', e);
    }
    return null;
  };

  const savedState = loadInitialState();

  const [theme, setTheme] = useState<SiteTheme>(savedState?.theme || initialTheme);
  const [content, setContent] = useState<SiteContent>(savedState?.content || initialSiteContent);
  const [posts, setPosts] = useState<Post[]>(savedState?.posts || initialPosts);
  const [showcases, setShowcases] = useState<ShowcaseItem[]>(savedState?.showcases || initialShowcaseItems);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(savedState?.testimonials || initialTestimonials);
  const [faqs, setFaqs] = useState<FAQItem[]>(savedState?.faqs || initialFaqs);
  const [inquiries, setInquiries] = useState<InquiryLead[]>(savedState?.inquiries || initialInquiries);
  const [seo, setSeo] = useState<SeoConfig>(savedState?.seo || initialSeoConfig);

  // Modals and UI
  const [activeCategory, setActiveCategory] = useState<'about' | 'solution' | 'contact'>('about');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeAdminTab, setActiveAdminTab] = useState<'posts' | 'theme' | 'content' | 'seo' | 'leads' | 'backup'>('posts');
  const [selectedPostForReading, setSelectedPostForReading] = useState<Post | null>(null);
  const [selectedShowcaseForModal, setSelectedShowcaseForModal] = useState<ShowcaseItem | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      const fullState = {
        theme,
        content,
        posts,
        showcases,
        testimonials,
        faqs,
        inquiries,
        seo,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fullState));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [theme, content, posts, showcases, testimonials, faqs, inquiries, seo]);

  // Apply CSS Variables and fonts
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-yellow', theme.primaryYellow);
    root.style.setProperty('--accent-pink', theme.primaryPink);

    let bgHex = '#080808';
    let surfaceHex = '#121215';
    let borderHex = '#222228';
    if (theme.bgStyle === 'charcoal') {
      bgHex = '#111215';
      surfaceHex = '#191A20';
      borderHex = '#2B2D38';
    } else if (theme.bgStyle === 'midnight') {
      bgHex = '#090D16';
      surfaceHex = '#101726';
      borderHex = '#1E293B';
    }

    root.style.setProperty('--bg-dark', bgHex);
    root.style.setProperty('--surface-dark', surfaceHex);
    root.style.setProperty('--border-dark', borderHex);
  }, [theme]);

  // Sync document title and meta description dynamically
  useEffect(() => {
    if (seo.metaTitle) {
      document.title = seo.metaTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && seo.metaDescription) {
      metaDesc.setAttribute('content', seo.metaDescription);
    }
  }, [seo]);

  // Post Actions
  const addPost = (newPostData: Omit<Post, 'id' | 'views'>) => {
    const newPost: Post = {
      ...newPostData,
      id: `post-${Date.now()}`,
      views: 1,
    };
    setPosts((prev) => [newPost, ...prev]);
    showToast('새 게시글이 성공적으로 발행되었습니다.');
  };

  const updatePost = (id: string, updated: Partial<Post>) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
    showToast('게시글이 성공적으로 수정되었습니다.');
  };

  const deletePost = (id: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    showToast('게시글이 삭제되었습니다.');
  };

  const incrementPostViews = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, views: (p.views || 0) + 1 } : p))
    );
  };

  // Showcase Actions
  const addShowcase = (item: Omit<ShowcaseItem, 'id'>) => {
    const newItem: ShowcaseItem = {
      ...item,
      id: `showcase-${Date.now()}`,
    };
    setShowcases((prev) => [newItem, ...prev]);
    showToast('포트폴리오 아이템이 추가되었습니다.');
  };

  const updateShowcase = (id: string, updated: Partial<ShowcaseItem>) => {
    setShowcases((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
    showToast('포트폴리오가 업데이트되었습니다.');
  };

  const deleteShowcase = (id: string) => {
    setShowcases((prev) => prev.filter((s) => s.id !== id));
    showToast('포트폴리오 항목이 삭제되었습니다.');
  };

  // Inquiry Actions
  const addInquiry = (inquiryData: Omit<InquiryLead, 'id' | 'createdAt' | 'status'>) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newInquiry: InquiryLead = {
      ...inquiryData,
      id: `inquiry-${Date.now()}`,
      status: '신규 접수',
      createdAt: formattedDate,
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    showToast('협업 문의가 성공적으로 접수되었습니다. 담당 디렉터가 24시간 내 연락드립니다.');
  };

  const updateInquiryStatus = (id: string, status: InquiryLead['status']) => {
    setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status } : inq)));
    showToast('문의 상태가 변경되었습니다.');
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    showToast('문의 항목이 삭제되었습니다.');
  };

  // FAQ Actions
  const addFaq = (faqData: Omit<FAQItem, 'id'>) => {
    const newFaq: FAQItem = {
      ...faqData,
      id: `faq-${Date.now()}`,
    };
    setFaqs((prev) => [...prev, newFaq]);
    showToast('새 FAQ 항목이 추가되었습니다.');
  };

  const updateFaq = (id: string, updated: Partial<FAQItem>) => {
    setFaqs((prev) => prev.map((f) => (f.id === id ? { ...f, ...updated } : f)));
    showToast('FAQ 항목이 수정되었습니다.');
  };

  const deleteFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
    showToast('FAQ 항목이 삭제되었습니다.');
  };

  // Reset & Backup
  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setTheme(initialTheme);
    setContent(initialSiteContent);
    setPosts(initialPosts);
    setShowcases(initialShowcaseItems);
    setTestimonials(initialTestimonials);
    setFaqs(initialFaqs);
    setInquiries(initialInquiries);
    setSeo(initialSeoConfig);
    showToast('모든 설정과 콘텐츠가 초기 샘플 상태로 리셋되었습니다.');
  };

  const exportConfigAsJson = () => {
    const exportData = {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      theme,
      content,
      posts,
      showcases,
      testimonials,
      faqs,
      inquiries,
      seo,
    };
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `3b-partners-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('전체 웹사이트 설정 파일이 JSON으로 다운로드되었습니다.');
  };

  const importConfigFromJson = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.theme) setTheme(parsed.theme);
      if (parsed.content) setContent(parsed.content);
      if (parsed.posts && Array.isArray(parsed.posts)) setPosts(parsed.posts);
      if (parsed.showcases && Array.isArray(parsed.showcases)) setShowcases(parsed.showcases);
      if (parsed.testimonials && Array.isArray(parsed.testimonials)) setTestimonials(parsed.testimonials);
      if (parsed.faqs && Array.isArray(parsed.faqs)) setFaqs(parsed.faqs);
      if (parsed.inquiries && Array.isArray(parsed.inquiries)) setInquiries(parsed.inquiries);
      if (parsed.seo) setSeo(parsed.seo);

      showToast('백업 파일로부터 웹사이트 데이터를 성공적으로 불러왔습니다.');
      return true;
    } catch (e) {
      console.error('Import parse error:', e);
      showToast('올바르지 않은 JSON 파일 형식입니다.');
      return false;
    }
  };

  return (
    <SiteContext.Provider
      value={{
        theme,
        setTheme,
        content,
        setContent,
        posts,
        setPosts,
        showcases,
        setShowcases,
        testimonials,
        setTestimonials,
        faqs,
        setFaqs,
        inquiries,
        setInquiries,
        seo,
        setSeo,

        activeCategory,
        setActiveCategory,
        isAdminOpen,
        setIsAdminOpen,
        activeAdminTab,
        setActiveAdminTab,
        selectedPostForReading,
        setSelectedPostForReading,
        selectedShowcaseForModal,
        setSelectedShowcaseForModal,
        isShareModalOpen,
        setIsShareModalOpen,
        toastMessage,
        showToast,

        addPost,
        updatePost,
        deletePost,
        incrementPostViews,

        addShowcase,
        updateShowcase,
        deleteShowcase,

        addInquiry,
        updateInquiryStatus,
        deleteInquiry,

        addFaq,
        updateFaq,
        deleteFaq,

        resetToDefaults,
        exportConfigAsJson,
        importConfigFromJson,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
