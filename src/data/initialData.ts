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

export const initialTheme: SiteTheme = {
  primaryYellow: '#FFE600',
  primaryPink: '#FF2E93',
  bgStyle: 'obsidian',
  fontStyle: 'modern',
  heroVisual: '/src/assets/images/hero_tech_packaging_studio_1792997270417.jpg',
};

export const initialSiteContent: SiteContent = {
  brandName: '3B 파트너스',
  brandSlogan: 'D2C Builder & Creator Merchandising Partner',
  heroKicker: 'CREATOR COMMERCE & BESPOKE PRODUCTION',
  heroTitle: '크리에이터의 상상력을 독보적인 실물 브랜드로 빌드업합니다',
  heroSubtitle:
    'You Create, We Build. 당신의 크리에이티비티와 우리의 인프라가 만나 세상에 없던 제품을 만들어냅니다. 복잡한 기획·제조·배송·CS의 벽을 넘어 크리에이터의 눈부신 영향력을 독보적인 브랜드로 입증하겠습니다.',
  heroCtaText: '파트너십 문의하기',
  heroSecondaryCtaText: '비즈니스 솔루션 보기',
  stats: [
    { label: '누적 프로젝트 총액', value: '142억+', unit: 'KRW' },
    { label: '협업 크리에이터', value: '128', unit: '명' },
    { label: '평균 런칭 완판율', value: '94.6', unit: '%' },
    { label: '제작 납기 준수율', value: '99.4', unit: '%' },
  ],
  contact: {
    email: 'kdk3327@naver.com',
    phone: '010 5588 6138',
    address: '서울특별시 강남구 테헤란로 152 강남파이낸스센터 18층 3B 크리에이티브 랩',
    businessNumber: '214-88-93201',
    operatingHours: '24시간 연중무휴 상담',
  },
  pillars: [
    {
      number: '01',
      title: 'BRAND : IP 세계관 큐레이션',
      subtitle: '단순 굿즈가 아닌 크리에이터의 아이덴티티가 담긴 하이엔드 브랜드 구축',
      description:
        '크리에이터의 채널 서사와 팬덤 감성을 면밀히 분석하여 오래 소장하고 싶은 프리미엄 컬렉션 라인업을 기획합니다. 제품 콘셉트 보드부터 3D 렌더링 시안까지 전문 디렉터가 전담합니다.',
      points: [
        '팬덤 코어 타깃 데이터 분석 및 하드웨어/굿즈 카테고리 선정',
        '독창적인 브랜드 네이밍 및 비주얼 아이덴티티(BI) 수립',
        '하이엔드 제품 렌더링 촬영 및 D2C 상세페이지 기획',
      ],
    },
    {
      number: '02',
      title: 'BUILD : 정밀 프로토타이핑 & 유연 제조',
      subtitle: 'MOQ 50개부터 시작하는 고품질 국내외 직영 OEM/ODM 네트워크',
      description:
        'CNC 알루미늄 가공, 아크릴 레이저 금형, 한정판 바이닐 LP 프레스, 리지드 패키징까지 40여 개 전문 제조 공방과 협력하여 타협 없는 퀄리티의 제품을 직접 만듭니다.',
      points: [
        '테크팩(작업지시서) 설계 및 48시간 내 1차 시제품 샘플링',
        '안전성 시험성적서 인증 및 전자기기/공산품 KC 인증 대행',
        '전문 검품팀의 본생산 100% 전수 검수 시스템',
      ],
    },
    {
      number: '03',
      title: 'BOOST : 글로벌 D2C & 풀필먼트',
      subtitle: '재고 부담 없는 예약판매 시스템과 전 세계 직배송 물류 인프라',
      description:
        '트래픽 폭주에도 끄떡없는 고성능 D2C 자사몰을 세팅하고, 선주문(Pre-order) 방식으로 제작 비용과 재고 리스크를 최소화합니다. 해외 팬들을 위한 48개국 직배송까지 지원합니다.',
      points: [
        '독립 D2C 브랜드몰 구축 및 결제/PG 심사 세팅',
        '스마트 재고 관리 및 친환경 완충 포장 패키징',
        '국내 당일 출고 & EMS/DHL 글로벌 배송 대응',
      ],
    },
  ],
};

export const initialShowcaseItems: ShowcaseItem[] = [
  {
    id: 'showcase-1',
    title: '테크 크리에이터 루멘 시그니처 데스크테리어 컬렉션',
    creator: '루멘(Lumen) · IT/테크 85만',
    category: '테크/데스크',
    description:
      '크리에이터의 시그니처 옐로우/네온 컬러웨이를 적용한 반투명 키캡 커스텀 기계식 키보드, 마그네틱 헤드폰 스탠드, 아크릴 데스크 오거나이저 패키지.',
    imageUrl: '/src/assets/images/tech_ip_merchandise_1792995875480.jpg',
    highlightMetric: '48시간 만에',
    highlightLabel: '초도 2,000세트 완판',
    productionCycle: '기획 후 3주 샘플 완성',
    moq: '500 sets',
    tags: ['커스텀 하드웨어', '아크릴 가공', '패키지 커스텀'],
    details:
      '루멘 크리에이터의 책상 위 셋업 감성을 그대로 재현한 테크 굿즈 프로젝트입니다. 독자적인 CNC 아크릴 금형을 파고 내부 RGB 투과율을 정밀 조율하여 팬덤의 뜨거운 호평을 받았습니다. 1차 드롭 오픈 직후 서버 폭주 상황에서도 D2C 솔루션을 통해 안정적으로 48시간 내에 준비된 수량이 모두 소진되었습니다.',
  },
  {
    id: 'showcase-2',
    title: '신스웨이브 에코즈 한정판 컬러 바이닐 LP & 아크릴 슬립케이스 박스셋',
    creator: '사운드웨이브(SoundWave) · 음악/사운드 48만',
    category: '사운드/바이닐',
    description:
      '180g 헤비웨이트 옐로우/핑크 스플래터 바이닐 LP, 네온 아크릴 아웃슬리브, 골드 포일 엠보싱 하드커버 자켓, 전용 헤드폰 거치대로 구성된 럭셔리 사운드 컬렉터블.',
    imageUrl: '/src/assets/images/art_vinyl_sound_merch_1792997270347.jpg',
    highlightMetric: '4.2억원',
    highlightLabel: '선주문 총 매출 달성',
    productionCycle: '마스터 프레스 4주 완성',
    moq: '100 sets',
    tags: ['한정판 바이닐', '스플래터 컬러반', '아크릴 슬립케이스'],
    details:
      '독일 최신식 바이닐 프레싱 팩토리와 연계하여 180g 고음질 오디오파일 프레싱을 진행했습니다. 외부 아크릴 슬립케이스에 옐로우/핑크 네온 엣지 효과를 주어 앨범 재생뿐 아니라 실내 전시용 오브제로서의 소장 가치를 극대화했습니다.',
  },
  {
    id: 'showcase-3',
    title: '프리미엄 CNC 아노다이징 알루미늄 펜 & 황동 문진 데스크 스테이셔너리',
    creator: '포커스 랩(Focus Lab) · 생산성/디자인 36만',
    category: '메탈/스테이셔너리',
    description:
      '항공기 등급 6061 알루미늄 통절삭 가공, 무광 블랙 아노다이징 코팅 펜과 음각 로고 황동 데스크 웨이트, 금박 엣지 프리미엄 저널 노트 세트.',
    imageUrl: '/src/assets/images/metal_stationery_edc_1792997270816.jpg',
    highlightMetric: '평점 4.99점',
    highlightLabel: '서포터 실사용 만족도',
    productionCycle: 'CNC 가공 및 표면처리 2.5주',
    moq: '50 sets',
    tags: ['CNC 정밀가공', '황동 오브제', '골드 엣지 노트'],
    details:
      '1mm의 오차도 허용하지 않는 5축 CNC 밀링 가공으로 제작된 정밀 메탈 스테이셔너리입니다. 손에 쥐었을 때의 무게 중심과 묵직한 필기감을 극대화하기 위해 황동 밸런스 추를 내장했으며, 전용 슬레이트 트레이와 함께 VIP 선물 세트로 구성되었습니다.',
  },
  {
    id: 'showcase-4',
    title: 'AURA 크리에이터 VIP 리지드 기프트 박스 & 언박싱 스위트',
    creator: '3B X 글로벌 인플루언서 연합',
    category: '패키지/기프트',
    description:
      '매트 블랙 싸바리 박스, 옐로우 금박 유광 프레스, 홀로그램 엣지 씰링, 로고 커스텀 유산지까지 언박싱 순간의 감동을 극대화한 패키지 솔루션.',
    imageUrl: '/src/assets/images/luxury_unboxing_package_1792995874930.jpg',
    highlightMetric: 'SNS 바이럴 3,400건+',
    highlightLabel: '인스타그램 언박싱 릴스 생성',
    productionCycle: '인쇄/합지 7일 완성',
    moq: '100 boxes',
    tags: ['싸바리 박스', '금박 후가공', '홀로그램 씰'],
    details:
      '제품을 수령하는 순간 스마트폰을 꺼내 인증샷을 찍게 만드는 감각적인 언박싱 패키지입니다. 배송 중 파손을 방지하는 내부 고밀도 EVA 성형 폼과 지속 가능한 친환경 산림인증(FSC) 지류를 채택했습니다.',
  },
];

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    title: '구독자 85만 테크 크리에이터 루멘 커스텀 데스크 굿즈 48시간 만에 완판된 비결',
    summary:
      '단순히 로고만 박은 기념품은 팬들도 외면합니다. 크리에이터의 영상 속 세계관을 정밀 하드웨어와 결합하여 2,000세트를 이틀 만에 완판시킨 전 과정을 공개합니다.',
    content: `
### 1. 단순 로고 플레이의 시대는 끝났습니다
과거 크리에이터 굿즈는 일반 기성품 티셔츠나 머그컵에 로고를 전사 인쇄하는 형태가 대부분이었습니다. 하지만 성숙해진 팬덤은 제품 자체의 심미성과 실용성을 매우 엄격하게 평가합니다.

### 2. 크리에이터 '루멘' 채널의 핵심 서사 추출
루멘 채널의 구독자들은 '책상 위 미니멀리즘'과 'RGB 조명 연출'에 깊은 애정을 가지고 있었습니다. 우리는 이에 주목하여 책상 위에서 가장 눈에 띄는 기계식 키보드의 키캡과 아크릴 거치대를 첫 번째 시그니처 라인업으로 선정했습니다.

### 3. 기술적 난제 해결과 3B의 제조 솔루션
- 반투명 스모키 블랙 키캡에 루멘의 상징색인 일렉트릭 옐로우와 네온 핑크가 빛을 투과하도록 이중 사출 금형을 별도 제작했습니다.
- 통울림을 줄이기 위해 내부에 고밀도 포론 흡음재를 배치하고 핫스왑 소켓을 채택했습니다.
- 최소 발주 수량(MOQ) 리스크를 줄이기 위해 선주문 D2C 시스템을 가동하여 3일간 사전 예약을 받고 본생산에 돌입했습니다.

### 4. 결과와 시사점
오픈 1시간 만에 트래픽이 평소 대비 12배 폭증하였고, 준비된 2,000개 수량이 48시간 만에 전량 소진되었습니다. 크리에이터는 제작비 선투자의 불안 없이 높은 수익과 팬덤의 열광적인 리액션을 동시에 거머쥐었습니다.
    `.trim(),
    category: '성공사례',
    author: '3B 파트너스 디렉터팀',
    date: '2026. 10. 18',
    readTime: '4분 소요',
    coverImage: '/src/assets/images/tech_ip_merchandise_1792995875480.jpg',
    isFeatured: true,
    views: 1842,
    tags: ['성공사례', '테크굿즈', '완판비결', 'D2C커머스'],
  },
  {
    id: 'post-2',
    title: '소량 제작으로 실현하는 크리에이터 한정판 바이닐 LP 및 사운드 박스셋 기획 가이드',
    summary:
      '음악, 팟캐스트, ASMR 크리에이터를 위한 소장용 바이닐 LP 제작 로드맵. 스플래터 컬러반 프레싱과 아크릴 슬립케이스 제작 노하우를 공개합니다.',
    content: `
### 디지털 음원 시대, 왜 팬들은 실물 바이닐에 열광할까요?
스트리밍으로 언제든 음악을 들을 수 있는 시대에 바이닐(LP)은 단순한 음원 저장 매체가 아니라, 크리에이터의 예술 세계를 손으로 직접 만지고 방 안에 전시하는 '소장용 예술품'으로 재정의되었습니다.

### 3B 파트너스의 한정판 바이닐 솔루션
1. **소량 100장부터 가능한 오디오파일 프레싱**: 최소 발주량의 장벽을 낮춰 180g 헤비웨이트 고음질 바이닐을 합리적인 비용으로 제작합니다.
2. **비주얼 스플래터 컬러웨이**: 크리에이터의 시그니처 컬러(네온 옐로우, 핑크)를 마블링하거나 투명 컬러반으로 가공합니다.
3. **아크릴 슬립케이스 & 골드박 자켓**: 턴테이블 옆에 세워두기만 해도 인테리어 포인트가 되는 프리미엄 패키징을 제공합니다.

### 런칭 4주 완성 타임라인
- **1주차**: 음원 오디오 마스터링 검수 및 자켓 아트워크 3D 시안 확정
- **2주차**: 테스트 프레싱(Test Press) 청음 및 아크릴 패키지 실물 샘플링
- **3주차**: D2C 자사몰 프리오더(예약판매) 오픈 (넘버링 에디션 한정 판매)
- **4주차**: 최종 확정 수량 완제품 검수 및 안전 에어캡 특수 포장 발송
    `.trim(),
    category: '제작가이드',
    author: '사운드 기획팀',
    date: '2026. 10. 12',
    readTime: '5분 소요',
    coverImage: '/src/assets/images/art_vinyl_sound_merch_1792997270347.jpg',
    isFeatured: true,
    views: 2410,
    tags: ['바이닐제작', 'LP박스셋', '사운드굿즈', '소량제작'],
  },
  {
    id: 'post-3',
    title: 'CNC 정밀 가공 알루미늄 & 황동 메탈 스테이셔너리 굿즈 제작 A to Z',
    summary:
      '플라스틱 판촉물이 아닌 대를 물려쓸 수 있는 묵직한 메탈 굿즈. 항공기 알루미늄 6061 아노다이징 및 황동 음각 각인 공정 리포트.',
    content: `
### 지식·생산성·디자인 크리에이터에게 가장 어울리는 머천다이즈
책상 위에서 매일 사용하는 데스크 도구는 사용자의 집중과 몰입을 돕습니다. 플라스틱 사출품이 줄 수 없는 묵직한 금속의 질감과 차가운 촉감은 팬들에게 특별한 브랜드 신뢰를 심어줍니다.

### 3B 파트너스의 금속 정밀 가공 역량
- **초정밀 CNC 선반 밀링**: 0.01mm 공차로 알루미늄 블록을 깎아내어 결합부 흔들림이 전혀 없는 메탈 펜 바디를 만듭니다.
- **하드 아노다이징 표면 처리**: 스크래치에 강한 샌드블라스트 무광 코팅으로 오랫동안 고급스러운 블랙 톤을 유지합니다.
- **황동 레이저 각인**: 크리에이터의 로고나 한정판 시리얼 넘버를 황동 문진에 깊이감 있게 각인합니다.

완성된 금속 도구는 고급 벨벳 트레이와 하드케이스에 담겨 전달됩니다.
    `.trim(),
    category: '인사이트',
    author: '산업디자인 랩',
    date: '2026. 09. 29',
    readTime: '6분 소요',
    coverImage: '/src/assets/images/metal_stationery_edc_1792997270816.jpg',
    isFeatured: false,
    views: 1530,
    tags: ['CNC가공', '메탈굿즈', '스테이셔너리', '황동오브제'],
  },
  {
    id: 'post-4',
    title: '3B 파트너스 2026 하반기 크리에이터 인큐베이팅 파트너십 선발 안내',
    summary:
      '초기 기획비 및 시제품 샘플링 비용 전액 지원! 자신만의 고유한 창작 IP를 가진 크리에이터 10팀을 모십니다.',
    content: `
3B 파트너스가 2026년 하반기, 독보적인 창작 세계관을 실물 D2C 브랜드로 확장하고자 하는 크리에이터 팀을 공식 모집합니다.

### 파트너십 선발 혜택
1. **초기 샘플링 및 3D 렌더링 설계 비용 100% 3B 부담**
2. **전담 브랜드 디렉터 1:1 매칭 (금형 설계, 소재 소싱, 패키징 브랜딩)**
3. **독립 D2C 브랜드몰 무료 구축 및 글로벌 PG 연동 지원**
4. **글로벌 48개국 직배송 풀필먼트 물류비 우대 할인 적용**

### 지원 자격
- 유튜브, 인스타그램, 틱톡, 치지직 등 플랫폼 활성 팔로워 1만 명 이상의 크리에이터
- 본인의 창작 콘텐츠와 결합할 수 있는 상품 콘셉트에 대한 열정이 있으신 분
- 팬들과 진정성 있는 브랜드 스토리를 나누고 싶으신 분

상단의 '협업 프로젝트 문의' 버튼을 통해 간편하게 포트폴리오 또는 채널 링크를 접수해 주시기 바랍니다.
    `.trim(),
    category: '공지사항',
    author: '운영기획실',
    date: '2026. 09. 15',
    readTime: '3분 소요',
    coverImage: '/src/assets/images/hero_tech_packaging_studio_1792997270417.jpg',
    isFeatured: false,
    views: 3120,
    tags: ['파트너십', '공지사항', '제휴모집', '지원사업'],
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    creatorName: '루멘 (Lumen)',
    channelName: '루멘 데스크테리어',
    subscribers: '구독자 85만명',
    quote:
      '타 굿즈 업체들은 기존 기성품에 제 로고만 인쇄하자고 권유했는데, 3B 파트너스는 제가 원하는 아크릴 반투명 키캡과 헤드폰 스탠드 금형을 직접 개발해 주었습니다. 48시간 만에 2천 세트가 완판되었을 때 소름이 돋았습니다.',
    outcome: '+120% 목표 매출 초과 달성 및 반품률 0.1%',
    category: '테크/데스크',
  },
  {
    id: 'test-2',
    creatorName: '사운드웨이브 (SoundWave)',
    channelName: '신스웨이브 사운드 채널',
    subscribers: '구독자 48만명',
    quote:
      '한정판 LP 제작은 최소 수량과 프레싱 불량 리스크가 커서 망설였는데, 3B의 오디오파일 라인을 통해 노이즈 없는 완벽한 스플래터 컬러반을 뽑아주셨습니다. 아크릴 슬립케이스 덕분에 팬들의 실물 소장 만족도가 역대 최고였습니다.',
    outcome: '첫 드롭 4.2억원 전량 완판 & 평점 5.0 만점',
    category: '사운드/바이닐',
  },
  {
    id: 'test-3',
    creatorName: '포커스 랩 (Focus Lab)',
    channelName: '생산성 & 미니멀 데스크',
    subscribers: '구독자 36만명',
    quote:
      '금속 가공은 0.1mm 오차만 생겨도 펜 뚜껑이 헐거워지는데, 3B 엔지니어분들이 5축 CNC로 한 치의 오차 없이 완벽한 손맛을 구현해 주셨습니다. 굿즈가 아니라 하이엔드 공예품이라는 극찬을 받고 있습니다.',
    outcome: '선주문 목표 350% 초과 달성 및 해외 배송 완료',
    category: '메탈/스테이셔너리',
  },
  {
    id: 'test-4',
    creatorName: '모모네 작업실',
    channelName: '모모 캐릭터 일러스트',
    subscribers: '팔로워 24만명',
    quote:
      '소량 제작이라 다른 공장에서는 문전박대당하기 일쑤였는데, MOQ 50개부터 흔쾌히 친절하게 진행해 주셔서 감사했습니다. 싸바리 박스와 금박 패키징 덕분에 프리미엄 럭셔리 굿즈로 거듭났습니다.',
    outcome: '오픈 15분 만에 초도 전량 매진',
    category: '패키지/아트',
  },
];

export const initialFaqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: '제작/MOQ',
    question: '최소 주문 수량(MOQ)은 정확히 몇 개부터 가능한가요?',
    answer:
      '품목에 따라 상이하지만 기본적으로 메탈 스테이셔너리 및 데스크 굿즈 50pcs, 패키지 및 지류 100pcs, 한정판 바이닐 LP 100sets, 금형 사출 하드웨어는 300~500pcs부터 제작이 가능합니다. 3B 파트너스의 특화된 유연 소량 생산 라인을 통해 크리에이터의 재고 부담을 최소화해 드립니다.',
  },
  {
    id: 'faq-2',
    category: '디자인/샘플',
    question: '디자인 파일이나 도면(테크팩)이 없는 상태에서도 시작할 수 있나요?',
    answer:
      '네, 가능합니다! 아이디어 스케치, 참고 레퍼런스 이미지, 또는 원하는 분위기만 전달해 주시면 3B 파트너스 전담 디자인 디렉터가 1:1로 실물 제작이 가능한 테크팩(작업지시서)과 3D 렌더링 시안을 직접 제작해 드립니다.',
  },
  {
    id: 'faq-3',
    category: '정산/계약',
    question: '수익 정산 방식과 크리에이터 마진율은 어떻게 결정되나요?',
    answer:
      '크리에이터의 상황에 맞춰 두 가지 방식 중 선택할 수 있습니다. 1) 고정 제조원가 공급 방식(원가 지불 후 판매 순이익 100% 크리에이터 취득), 2) 올인원 리스크 제로 파트너십 방식(제작비 3B 전액 선부담 후 순수익 분배). 사전 미팅 시 투명하게 원가표를 공개하고 최적의 모델을 제안합니다.',
  },
  {
    id: 'faq-4',
    category: '배송/CS',
    question: '팬들의 배송 처리와 불량 교환 등 고객센터(CS)도 대행해 주나요?',
    answer:
      '물론입니다. 포장부터 택배사 당일 출고, 송장 자동 발송, 배송 중 파손 보험, 불량 교환 및 환불 접수까지 3B 풀필먼트 센터의 전담 CS 매니저가 친절하고 신속하게 대응하여 크리에이터의 업무 부담을 완전히 덜어드립니다.',
  },
  {
    id: 'faq-5',
    category: '디자인/샘플',
    question: '실물 시제품 샘플을 확인하고 본생산을 결정할 수 있나요?',
    answer:
      '네, 3B 파트너스의 모든 프로젝트는 실물 시제품 사전 확인을 원칙으로 합니다. 금형 표면 처리, 조립 단차, 각인 선명도, 패키지 질감 등을 직접 만져보고 확인하신 후 최종 승인이 떨어져야 본생산에 돌입합니다.',
  },
  {
    id: 'faq-6',
    category: '배송/CS',
    question: '해외 거주 팬들을 위한 글로벌 배송도 지원되나요?',
    answer:
      '네, 현재 미국, 일본, 대만, 유럽 등 48개국 이상의 글로벌 특송(DHL/EMS) 파트너십을 맺고 있습니다. 전용 D2C 몰에서 영문/일문 결제(해외 신용카드, PayPal, Alipay)와 통관 번호 수집까지 자동화되어 있습니다.',
  },
];

export const initialInquiries: InquiryLead[] = [
  {
    id: 'inquiry-1',
    creatorName: '김민준 (채널: 민준의 데스크 셋업)',
    channelUrl: 'https://youtube.com/@minjun_desk',
    subscriberCount: '15만명',
    category: '테크/데스크테리어 (마그네틱 거치대 & 아크릴 오브제)',
    email: 'minjun.desk@gmail.com',
    phone: '010-9421-5832',
    targetLaunchDate: '2026년 하반기',
    message: '데스크테리어 구독자들을 위한 알루미늄 마그네틱 폰 거치대와 굿즈 300세트 한정판을 펀딩하고 싶습니다. 샘플링 일정과 견적 상담 요청드립니다.',
    status: '검토중',
    createdAt: '2026-10-24 14:20',
  },
  {
    id: 'inquiry-2',
    creatorName: '이나래 (사운드/음악 채널)',
    channelUrl: 'https://youtube.com/@narae_sound',
    subscriberCount: '8.4만명',
    category: '사운드/바이닐 LP (한정판 180g 컬러 바이닐 박스셋)',
    email: 'narae.music@naver.com',
    phone: '010-3312-8890',
    targetLaunchDate: '2026년 12월 연말 홀리데이',
    message: '연말 정규 앨범 릴리즈와 함께 판매할 옐로우/핑크 스플래터 바이닐 200장과 아크릴 슬립케이스 제작을 희망합니다.',
    status: '미팅 완료',
    createdAt: '2026-10-22 10:15',
  },
];

export const initialSeoConfig: SeoConfig = {
  metaTitle: '3B 파트너스 - D2C 빌더 & 크리에이터 협력 상품제작',
  metaDescription:
    '3B 파트너스는 크리에이터의 아이디어와 IP를 프리미엄 상품과 글로벌 D2C 브랜드로 빌드업하는 크리에이터 상품제작·브랜딩 솔루션 파트너입니다. MOQ 50개부터 시작하는 고품질 맞춤 제작.',
  keywords: '3B 파트너스, 크리에이터 굿즈, D2C 브랜드 빌더, 상품제작, 하드웨어 굿즈, 바이닐 LP 제작, 메탈 스테이셔너리, 소량제작, 패키지디자인, 풀필먼트',
  ogImage: '/src/assets/images/hero_tech_packaging_studio_1792997270417.jpg',
  canonicalUrl: 'https://3bpartners.kr',
  twitterCard: 'summary_large_image',
  author: '3B Partners Inc.',
};
