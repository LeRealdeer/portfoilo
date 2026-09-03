import type { Locale } from "@/lib/i18n";

/** Locale-independent — rendered the same in every language. */
const shared = {
  tagline: "Community & Live Operations · Game Services",
  eyebrow: "COMMUNITY · LIVE OPERATIONS · VOC · GAME SERVICE OPERATIONS",
  heroLines: ["I design around how ", "players play, create, ", "and connect."],
  aboutHeadline: ["Games have always", "been communities", "to me."],
  careerInterests: {
    main: ["Community Management", "Live Operations", "Game Service Operations"],
    also: ["Korean Community & Localization Support"],
  },
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
      "세 개의 게임 라이브 서비스를 직접 기획·운영하며 커뮤니티 관리, VOC 대응, 데이터 기반 의사결정을 경험했습니다. 게임 서비스의 커뮤니티/라이브 운영 직무를 찾고 있습니다.",
    aboutParagraphs: [
      "저에게 게임은 언제나 사람과 사람이 만나는 공간이었습니다. 플레이하면서 커뮤니티를 관찰했고, 반복되는 질문과 불편을 직접 서비스로 만들기 시작했습니다.",
      "Sky, Identity V, Heartopia — 서로 다른 세 게임 커뮤니티에서 서비스를 운영하며 공지·문의 대응, 이벤트 운영, VOC 수집, 커뮤니티 기반 의사결정, 글로벌 창작자 커뮤니케이션을 경험했습니다. 장기적으로는 게임 라이브 서비스에서 유저 커뮤니티를 책임지는 커뮤니티 매니저가 되고 싶습니다.",
    ],
    copyright: "© 2026 서인하",
  },
  en: {
    name: "Inha Seo",
    heroBody:
      "Across three live game services I've planned and run on my own, I've done community management, VOC response, and data-driven decisions. I'm looking for a community / live-operations role on a game service.",
    aboutParagraphs: [
      "Games have always been where people meet people, to me. I watched the communities while I played, and started turning the questions and friction that kept coming up into actual services.",
      "Sky, Identity V, Heartopia — three different game communities where I've run real services: announcements and inquiry response, events, VOC collection, community-driven decisions, and working with global creators. Long term, I want to be the community manager who owns the player community on a game's live service.",
    ],
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

