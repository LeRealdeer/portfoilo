export type MetricSpec = {
  value: number;
  decimals?: number;
  suffix?: string;
  accentSuffix?: string;
  label: string;
  tbd?: boolean;
  /** Render this literal string instead of animating `value` (e.g. zero-padded index numbers like "03"). */
  raw?: string;
};

export type ProjectMeta = { label: string; value: string; accent?: boolean };

export type Project = {
  slug: "sky-planner" | "identity5-pick" | "heartopia-archive";
  index: string;
  eyebrow: string;
  title: string;
  cardSubtitleKo: string;
  tags: string[];
  cardMetrics: MetricSpec[];
  h1Lines: string[];
  heroBodyKo: string;
  meta: ProjectMeta[];
  heroStat?: MetricSpec;
  screenshotLabel: string;
  thumbLabels: string[];
  /** Live service URL. Omitted when the service is not publicly linked. */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "sky-planner",
    index: "01",
    eyebrow: "01 / LIVE SERVICE",
    title: "Sky Planner",
    cardSubtitleKo: "반복적인 게임 플레이 관리와 성장 계획을 돕는 게임 유틸리티 서비스",
    tags: ["Player Management", "Game Utility", "Repeat Experience"],
    cardMetrics: [
      { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "MAU" },
      { value: 335, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
      { value: 15, suffix: "K", accentSuffix: "+", label: "USERS" },
      { value: 393, label: "PEAK DAU" },
    ],
    liveUrl: "https://korea-sky-planner.com",
    h1Lines: ["Sky Planner"],
    heroBodyKo:
      "Sky: Children of the Light 유저들이 커뮤니티에서 반복적으로 겪던 정보 탐색과 계산 문제를 발견하고, 직접 설계·개발·운영한 게임 플레이 보조 플랫폼입니다.",
    meta: [
      {
        label: "ROLE",
        value: "Product Planning\nUX/UI Design\nFrontend & Backend Dev\nData Analysis\nCommunity Operation",
      },
      { label: "PERIOD", value: "2025.02 — Present" },
      { label: "SERVICE", value: "Sky: Children of the Light\nFan Utility Platform" },
      { label: "STATUS", value: "Live", accent: true },
    ],
    screenshotLabel: "SKY PLANNER — 메인 화면 전체 캡처",
    thumbLabels: [],
  },
  {
    slug: "identity5-pick",
    index: "02",
    eyebrow: "02 / COMMUNITY CREATION TOOL",
    title: "Identity5 Pick",
    cardSubtitleKo: "팬덤에서 발생하는 취향 공유 행동을 콘텐츠 제작 경험으로 확장한 커뮤니티 도구",
    tags: ["Fan Expression", "Community Tool", "User Generated Content"],
    cardMetrics: [
      { value: 3.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "ACTIVE USERS" },
      { value: 18.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "VIEWS" },
      { value: 842, label: "SKIN DATA" },
    ],
    liveUrl: "https://identity5pick.com",
    h1Lines: ["What are players", "already doing", "without a product?"],
    heroBodyKo:
      "제5인격 팬덤에는 이미 최애 순위를 매기고, 캐릭터를 평가하고, CP를 이야기하고, 보유 스킨을 공유하고, 듀오를 구하는 문화가 있었습니다. Identity5 Pick은 없던 행동을 만든 게 아니라, 이미 일어나던 행동에 도구를 붙이고 그 도구가 쓸 수 있는 데이터를 직접 정제한 서비스입니다.",
    meta: [
      { label: "ROLE", value: "1인 기획 / 개발\n데이터 구축 / 콘텐츠 검수" },
      { label: "CATEGORY", value: "Community Creation Tool" },
      { label: "PERIOD", value: "2026.07.17 — Present" },
      { label: "GAME", value: "Identity V / 제5인격" },
      { label: "STATUS", value: "Live", accent: true },
      { label: "PLATFORM", value: "Web · 로그인 없음" },
    ],
    screenshotLabel: "IDENTITY5 PICK — SERVICE SCREENSHOT (HOME)",
    thumbLabels: ["CP MAP", "SKIN ARCHIVE", "DUO CARD"],
  },
  {
    slug: "heartopia-archive",
    index: "03",
    eyebrow: "03 / GLOBAL COMMUNITY",
    title: "Heartopia Archive",
    cardSubtitleKo: "흩어진 유저 제작 콘텐츠를 연결하는 신뢰 기반 UGC 아카이브",
    tags: ["UGC Archive", "Creator Relationship", "Content Operation"],
    cardMetrics: [
      { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
      { value: 0, raw: "Permission-based", label: "CREATOR CONTENT" },
      { value: 50, accentSuffix: "+", label: "DAILY VISITORS" },
    ],
    h1Lines: ["How do you build", "a trusted archive?"],
    heroBodyKo:
      "Heartopia 도안 아카이브는 기술 문제로 시작하지 않았습니다. 이 콘텐츠를 올려도 되는가라는 질문에서 시작했습니다. 그래서 이 프로젝트에서 가장 오래 걸린 일은 개발이 아니라, 해외 원작자를 찾아 연락하고 허락을 받는 일이었습니다.",
    meta: [
      { label: "ROLE", value: "1인 기획 / 개발\n크리에이터 컨택 / 콘텐츠 운영" },
      { label: "PERIOD", value: "2026.07.15 — Present" },
      { label: "GAME", value: "Heartopia / 두근두근타운" },
      { label: "STATUS", value: "Live", accent: true },
      { label: "OPERATION", value: "비상업 · 광고 없음" },
    ],
    screenshotLabel: "HEARTOPIA ARCHIVE — SERVICE SCREENSHOT (ARCHIVE HOME)",
    thumbLabels: ["CREATOR PAGE", "CREATOR PERMISSION DM\n(개인정보 제거)"],
    liveUrl: "https://heartopia-archive.com",
  },
];

export const getProject = (slug: Project["slug"]) =>
  projects.find((p) => p.slug === slug)!;
