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
      "Sky 유저의 반복 질문을 실제 기능과 이벤트로 해결한 1인 라이브 서비스. 커뮤니티에서 반복되는 질문을 관찰해 도구로 만들고, GA 데이터와 유저 인터뷰로 UX를 다시 판단했습니다.",
    tags: ["LIVE OPERATIONS", "COMMUNITY", "GROWTH", "DATA", "EVENT PLANNING"],
    cardMetrics: [
      { value: 1700, accentSuffix: "+", label: "PEAK MAU" },
      { value: 220, suffix: "K", accentSuffix: "+", label: "PAGEVIEWS" },
      { value: 10, suffix: "K", accentSuffix: "+", label: "CUMULATIVE USERS" },
      { value: 4.84, decimals: 2, label: "SATISFACTION / 5.0" },
    ],
    h1Lines: ["Sky Planner"],
    heroBodyKo:
      "Sky 유저의 반복 질문을 실제 기능과 이벤트로 해결한 1인 라이브 서비스. 기획·개발·배포·운영·데이터 분석·커뮤니티 운영·이벤트를 혼자 맡아 2025년 2월부터 지금까지 운영 중입니다.",
    meta: [
      { label: "ROLE", value: "1인 기획 / 개발\n운영 / 분석 / 커뮤니티" },
      { label: "PERIOD", value: "2025.02 — Present" },
      { label: "PLATFORM", value: "Web" },
      { label: "STATUS", value: "Live", accent: true },
      { label: "GAME", value: "Sky: Children of the Light" },
    ],
    heroStat: { value: 1.7, decimals: 1, suffix: "K", label: "PEAK MAU" },
    screenshotLabel: "SKY PLANNER — SERVICE SCREENSHOT (HOME)",
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
