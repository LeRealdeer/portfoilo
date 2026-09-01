import type { Locale } from "@/lib/i18n";

/** Locale-independent — rendered the same in every language. */
const shared = {
  tagline: "Player Behavior · Service Planning",
  eyebrow: "PLAYER BEHAVIOR · SERVICE PLANNING · LIVE OPERATIONS · COMMUNITY",
  heroLines: ["I design around how ", "players play, create, ", "and connect."],
  aboutHeadline: ["Games have always", "been communities", "to me."],
  careerInterests: [
    "Community Management",
    "Live Operations",
    "Game Service Operations",
    "Korean Localization",
    "Global Publishing",
    "Korea Market Operations",
  ],
  contact: {
    email: "i3295h@gmail.com",
    github: "github.com/LeRealdeer",
  },
  liveProjects: [
    { label: "korea-sky-planner.com", href: "https://korea-sky-planner.com" },
    { label: "identity5pick.com", href: "https://identity5pick.com" },
    { label: "heartopia-archive.com", href: "https://heartopia-archive.com" },
  ],
} as const;

const byLocale = {
  ko: {
    name: "서인하",
    heroBody:
      "게임 유저가 실제로 하는 행동 — 반복 관리, 콘텐츠 탐색, 취향 표현 — 을 관찰하고, 그 행동을 더 편하고 즐거운 서비스 경험으로 설계합니다. 세 개의 게임 서비스를 직접 기획하고 운영하며 유저 리서치, 서비스 기획, 라이브 운영, 게임 데이터 구축, 글로벌 커뮤니케이션을 경험했습니다.",
    aboutParagraphs: [
      "저에게 게임은 언제나 사람과 사람이 만나는 공간이었습니다. 플레이하면서 커뮤니티를 관찰했고, 반복되는 질문과 불편을 직접 서비스로 만들기 시작했습니다.",
      "Sky, Identity V, Heartopia — 서로 다른 세 게임 커뮤니티에서 서비스를 운영하며 서비스 기획, 이벤트 운영, 커뮤니티 운영, 데이터 분석, VOC 대응, 콘텐츠 QA, 글로벌 창작자 커뮤니케이션을 경험했습니다. 장기적으로는 게임의 한국 서비스에서 유저와 글로벌 팀을 연결하는 사람이 되고 싶습니다.",
    ],
    aboutMore: "READ MORE ABOUT ME →",
    interestedIn: "CURRENTLY INTERESTED IN",
    copyright: "© 2026 서인하",
  },
  en: {
    name: "Inha Seo",
    heroBody:
      "I watch what players actually do — the repeat management, the hunting for content, the urge to show their taste — and design those behaviors into services that are easier and more fun to use. Across three game services I've planned and run on my own, I've done user research, service planning, live ops, game-data pipelines, and global communication.",
    aboutParagraphs: [
      "Games have always been where people meet people, to me. I watched the communities while I played, and started turning the questions and friction that kept coming up into actual services.",
      "Sky, Identity V, Heartopia — three different game communities where I've run real services: service planning, events, community operation, data analysis, VOC, content QA, and working with global creators. Long term, I want to be the person who connects players and the global team inside a game's Korea operation.",
    ],
    aboutMore: "READ MORE ABOUT ME →",
    interestedIn: "CURRENTLY INTERESTED IN",
    copyright: "© 2026 Inha Seo",
  },
} as const;

export function getProfile(locale: Locale) {
  return { ...shared, ...byLocale[locale] };
}

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

const capabilitiesRaw = [
  {
    number: "01",
    title: "Player Research",
    line: "Observe how players behave and where the friction is.",
    ko: "유저 행동과 커뮤니티 문화를 관찰하고 문제를 발견합니다.",
    en: "I observe player behavior and community culture to find the real problem.",
  },
  {
    number: "02",
    title: "Service Planning",
    line: "Turn user needs into service features.",
    ko: "사용자의 불편과 니즈를 서비스 기능으로 설계합니다.",
    en: "I turn user friction and needs into concrete service features.",
  },
  {
    number: "03",
    title: "Live Operations",
    line: "Analyze VOC and keep improving after launch.",
    ko: "출시 이후 VOC 분석과 지속적인 개선을 이어갑니다.",
    en: "I analyze VOC and keep improving the service after launch.",
  },
  {
    number: "04",
    title: "Community Management",
    line: "Collect community feedback and refine the experience.",
    ko: "커뮤니티 피드백을 수집하고 사용자 경험을 개선합니다.",
    en: "I collect community feedback and refine the user experience.",
  },
  {
    number: "05",
    title: "Global Communication",
    line: "Work with overseas creators and global users.",
    ko: "해외 창작자 및 글로벌 사용자와 직접 커뮤니케이션합니다.",
    en: "I communicate directly with overseas creators and global users.",
  },
  {
    number: "06",
    title: "Data & QA",
    line: "Build game data, design review criteria, manage quality.",
    ko: "게임 데이터 구축, 검수 기준 설계, 품질 관리를 담당합니다.",
    en: "I build game data, design the review criteria, and manage quality.",
  },
] as const;

export function getCapabilities(locale: Locale) {
  return capabilitiesRaw.map((c) => ({
    number: c.number,
    titleEn: c.title,
    lineEn: c.line,
    body: c[locale],
  }));
}
