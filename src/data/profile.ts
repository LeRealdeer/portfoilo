export const profile = {
  name: "서인하",
  tagline: "Game Community · Live Operations",
  eyebrow: "GAME COMMUNITY · LIVE OPERATIONS · SERVICE PLANNING · GLOBAL",
  heroLines: ["I turn player needs", "into community", "experiences."],
  heroBody:
    "게임 커뮤니티에서 반복되는 질문과 행동을 관찰하고, 이를 실제 서비스·이벤트·운영 정책으로 만들어왔습니다. 세 개의 게임 팬 서비스를 직접 기획하고 개발하고 운영하며 유저 데이터, VOC, QA, 콘텐츠 운영, 글로벌 크리에이터 커뮤니케이션까지 경험했습니다.",
  aboutHeadline: ["Games have always", "been communities", "to me."],
  aboutParagraphs: [
    "저에게 게임은 언제나 사람과 사람이 만나는 공간이었습니다. 플레이하면서 커뮤니티를 관찰했고, 반복되는 질문과 불편을 직접 서비스로 만들기 시작했습니다.",
    "Sky, Identity V, Heartopia — 서로 다른 세 게임 커뮤니티에서 실제 서비스를 운영하며 Product · Event · Community · Analytics · VOC · QA · Creator Relations · Localization 전 영역을 경험했습니다. 장기적으로는 게임의 한국 서비스에서 유저와 글로벌 팀을 연결하는 사람이 되고 싶습니다.",
  ],
  careerInterests: [
    "Community Management",
    "Live Operations",
    "Game Service Operations",
    "Korean Localization",
    "Global Publishing",
    "Korea Market Operations",
  ],
  language: "LANGUAGE — KOREAN (NATIVE) · ENGLISH OPIC IM2, 학습 중",
  contact: {
    email: "TBD@email.com",
    github: "github.com/",
    linkedin: "linkedin.com/in/",
  },
  liveProjects: [
    { label: "korea-sky-planner.com", href: "#" },
    { label: "identity5pick.com", href: "#" },
    { label: "Heartopia Archive", href: "#" },
  ],
  footerNote: "TBD 표기 수치는 실제 Analytics 확인 후 교체 예정",
  copyright: "© 2026 서인하",
} as const;

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Spring Boot",
  "JPA",
  "Django",
  "PostgreSQL",
  "MySQL",
  "Vercel",
  "Railway",
  "AWS",
  "Docker",
  "GA4",
  "Figma",
  "Notion",
] as const;

export const capabilities = [
  {
    number: "01",
    titleEn: "Community & Player Insight",
    lineEn: "Observe what players repeatedly ask, share, complain about, and enjoy.",
    bodyKo: "커뮤니티의 반복 질문과 유저 행동에서 아직 해결되지 않은 니즈를 발견합니다.",
  },
  {
    number: "02",
    titleEn: "Live Operations",
    lineEn: "Launch, monitor, update, fix, and continuously improve live services.",
    bodyKo: "출시 이후의 콘텐츠·기능·운영·QA를 반복하며 서비스를 유지합니다.",
  },
  {
    number: "03",
    titleEn: "Event Planning",
    lineEn: "Design online and offline participation loops.",
    bodyKo: "참여형 커뮤니티 이벤트, 투표형 콘텐츠, 오프라인 O2O 행사를 기획·운영했습니다.",
  },
  {
    number: "04",
    titleEn: "VOC & QA",
    lineEn: "Turn player feedback into actionable improvements.",
    bodyKo: "유저 피드백을 버그·UX·기능 요청으로 구분하고 우선순위를 정해 개선합니다.",
  },
  {
    number: "05",
    titleEn: "Global Community",
    lineEn: "Communicate with overseas creators and communities.",
    bodyKo: "중국 크리에이터 허가 요청, 해외 운영자 컨택 등 외국 커뮤니티와 직접 소통합니다.",
  },
  {
    number: "06",
    titleEn: "Localization & Content QA",
    lineEn: "Manage names, content quality, publishing states, and exceptions.",
    bodyKo: "한국어 콘텐츠 검수와 공개 상태 관리 workflow를 설계했습니다.",
  },
] as const;
