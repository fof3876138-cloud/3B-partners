export interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: '성공사례' | '제작가이드' | '파트너십' | '인사이트' | '공지사항';
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  isFeatured: boolean;
  views: number;
  tags: string[];
}

export interface ShowcaseItem {
  id: string;
  title: string;
  creator: string;
  category: '테크/데스크' | '사운드/바이닐' | '메탈/스테이셔너리' | '패키지/기프트';
  description: string;
  imageUrl: string;
  highlightMetric: string;
  highlightLabel: string;
  productionCycle: string;
  moq: string;
  tags: string[];
  details: string;
}

export interface Testimonial {
  id: string;
  creatorName: string;
  channelName: string;
  subscribers: string;
  quote: string;
  outcome: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: '제작/MOQ' | '디자인/샘플' | '정산/계약' | '배송/CS';
}

export interface InquiryLead {
  id: string;
  creatorName: string;
  channelUrl: string;
  subscriberCount: string;
  category: string;
  email: string;
  phone: string;
  targetLaunchDate: string;
  message: string;
  status: '신규 접수' | '검토중' | '미팅 완료' | '샘플링 진행' | '보류';
  createdAt: string;
}

export interface SiteTheme {
  primaryYellow: string; // e.g. #FFE600
  primaryPink: string;   // e.g. #FF2E93
  bgStyle: 'obsidian' | 'charcoal' | 'midnight';
  fontStyle: 'modern' | 'geometric' | 'mono-accent';
  heroVisual: string;
}

export interface StatItem {
  label: string;
  value: string;
  unit: string;
}

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface SiteContent {
  brandName: string;
  brandSlogan: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryCtaText: string;
  stats: StatItem[];
  contact: {
    email: string;
    phone: string;
    address: string;
    businessNumber: string;
    operatingHours: string;
  };
  pillars: PillarItem[];
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
  canonicalUrl: string;
  twitterCard: 'summary_large_image' | 'summary';
  author: string;
}
