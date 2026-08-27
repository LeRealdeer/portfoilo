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
};

export const projects: Project[] = [
  {
    slug: "sky-planner",
    index: "01",
    eyebrow: "01 / LIVE SERVICE",
    title: "Sky Planner",
    cardSubtitleKo:
      "게임 플레이 과정에서 반복되던 불편을 관찰하고, 데이터로 검증하며 8개 기능으로 확장한 게임 유틸리티 서비스. GA4 분석과 VOC로 우선순위를 정하고, 온라인 서비스를 오프라인 O2O 행사까지 연결했습니다.",
    tags: ["PROBLEM DISCOVERY", "LIVE OPERATIONS", "DATA ANALYSIS", "COMMUNITY", "O2O"],
    cardMetrics: [
      { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "PEAK MAU" },
      { value: 335, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
      { value: 15, suffix: "K", accentSuffix: "+", label: "USERS" },
      { value: 393, label: "PEAK DAU" },
    ],
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
    eyebrow: "02 / COMMUNITY PRODUCT",
    title: "Identity5 Pick",
    cardSubtitleKo:
      "제5인격 팬덤이 이미 하고 있던 취향 표현과 커뮤니티 문화를 인터랙티브 도구로 옮긴 서비스. 실제 VOC를 버그·UX·기능 요청으로 나눠 개선하고, 한국어 콘텐츠는 검수를 거친 것만 공개했습니다.",
    tags: ["PLAYER INSIGHT", "VOC", "UGC TOOLS", "QA", "LOCALIZATION"],
    cardMetrics: [
      { value: 80, accentSuffix: "+", label: "CHARACTERS" },
      { value: 800, accentSuffix: "+", label: "SKIN RECORDS" },
      { value: 0, label: "MONTHLY USERS", tbd: true },
    ],
    h1Lines: ["What are players", "already doing", "without a product?"],
    heroBodyKo:
      "제5인격 팬덤에는 이미 최애 순위를 매기고, 캐릭터를 평가하고, CP를 이야기하고, 보유 스킨을 공유하고, 듀오를 구하는 문화가 있었습니다. Identity5 Pick은 없던 행동을 만든 게 아니라, 이미 일어나던 행동에 도구를 붙인 서비스입니다.",
    meta: [
      { label: "ROLE", value: "1인 기획 / 개발\n콘텐츠 검수 / 운영" },
      { label: "STATUS", value: "Live", accent: true },
      { label: "GAME", value: "Identity V / 제5인격" },
      { label: "PLATFORM", value: "Web · identity5pick.com" },
    ],
    screenshotLabel: "IDENTITY5 PICK — SERVICE SCREENSHOT (HOME)",
    thumbLabels: ["CP MAP", "SKIN ARCHIVE", "DUO CARD"],
  },
  {
    slug: "heartopia-archive",
    index: "03",
    eyebrow: "03 / GLOBAL COMMUNITY",
    title: "Heartopia Archive",
    cardSubtitleKo:
      "해외 원작자의 허락과 출처 정책을 기반으로 운영하는 Heartopia 도안 아카이브. 중국 Xiaohongshu 크리에이터를 직접 발굴해 연락하고, 사용 허가를 받은 콘텐츠만 대리 업로드합니다.",
    tags: ["CREATOR RELATIONS", "GLOBAL COMMUNITY", "CONTENT OPERATIONS", "TRUST"],
    cardMetrics: [
      { value: 26, label: "TEMPLATES" },
      { value: 54, label: "CONTENT PARTS" },
      { value: 0, label: "DAILY VISITORS", tbd: true },
    ],
    h1Lines: ["How do you build", "an archive around content", "you don't own?"],
    heroBodyKo:
      "Heartopia 도안 아카이브는 기술 문제로 시작하지 않았습니다. 이 콘텐츠를 올려도 되는가라는 질문에서 시작했습니다. 그래서 이 프로젝트에서 가장 오래 걸린 일은 개발이 아니라, 해외 원작자를 찾아 연락하고 허락을 받는 일이었습니다.",
    meta: [
      { label: "ROLE", value: "1인 기획 / 개발\n크리에이터 컨택 / 콘텐츠 운영" },
      { label: "STATUS", value: "Live", accent: true },
      { label: "GAME", value: "Heartopia / 두근두근타운" },
      { label: "OPERATION", value: "비상업 · 광고 없음" },
    ],
    screenshotLabel: "HEARTOPIA ARCHIVE — SERVICE SCREENSHOT (ARCHIVE HOME)",
    thumbLabels: ["CREATOR PAGE", "CREATOR PERMISSION DM\n(개인정보 제거)"],
  },
];

export const getProject = (slug: Project["slug"]) =>
  projects.find((p) => p.slug === slug)!;
