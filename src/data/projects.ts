import type { Locale } from "@/lib/i18n";

export type MetricSpec = {
  value: number;
  decimals?: number;
  suffix?: string;
  accentSuffix?: string;
  label: string;
  tbd?: boolean;
  /** Render this literal string instead of animating `value` (e.g. "03", "Permission-based"). */
  raw?: string;
};

export type ProjectMeta = { label: string; value: string; accent?: boolean };

export type ProjectSlug = "sky-planner" | "identity5-pick" | "heartopia-archive";

export const PROJECT_SLUGS: ProjectSlug[] = ["sky-planner", "identity5-pick", "heartopia-archive"];

type ProjectBase = {
  slug: ProjectSlug;
  index: string;
  eyebrow: string;
  title: string;
  tags: string[];
  cardMetrics: MetricSpec[];
  screenshotLabel: string;
  thumbLabels: string[];
  liveUrl?: string;
};

type ProjectContent = {
  /** one-line identity, community/comms framing — the section headline */
  cardSubtitle: string;
  /**
   * The CM case on the main page itself: data-driven needs research /
   * community events & channels / player communication. Three subheadings,
   * each with a paragraph of concrete evidence.
   */
  sections: { heading: string; body: string }[];
  /** the outcome line under the sections — the key numbers */
  cardResult: string;
  heroBody: string;
  meta: ProjectMeta[];
};

const base: Record<ProjectSlug, ProjectBase> = {
  "sky-planner": {
    slug: "sky-planner",
    index: "01",
    eyebrow: "01 / LIVE SERVICE",
    title: "Sky Planner",
    tags: ["VOC-Driven Improvement", "Community Events", "Live Incident Response"],
    cardMetrics: [
      { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "MAU" },
      { value: 340, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
      { value: 15, suffix: "K", accentSuffix: "+", label: "USERS" },
      { value: 393, label: "PEAK DAU" },
    ],
    screenshotLabel: "SKY PLANNER — FULL HOME SCREEN",
    thumbLabels: [],
    liveUrl: "https://korea-sky-planner.com",
  },
  "identity5-pick": {
    slug: "identity5-pick",
    index: "02",
    eyebrow: "02 / COMMUNITY CREATION TOOL",
    title: "Identity5 Pick",
    tags: ["User Feedback Response", "Data-Driven Prioritization", "Fandom Community"],
    cardMetrics: [
      { value: 3.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "ACTIVE USERS" },
      { value: 18.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "VIEWS" },
      { value: 842, label: "SKIN DATA" },
    ],
    screenshotLabel: "IDENTITY5 PICK — SERVICE SCREENSHOT (HOME)",
    thumbLabels: ["CP MAP", "SKIN ARCHIVE", "DUO CARD"],
    liveUrl: "https://identity5pick.com",
  },
  "heartopia-archive": {
    slug: "heartopia-archive",
    index: "03",
    eyebrow: "03 / GLOBAL COMMUNITY",
    title: "Heartopia Archive",
    tags: ["Creator Communication", "Cross-border Coordination", "Permission-Based Operation"],
    cardMetrics: [
      { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
      { value: 0, raw: "Permission-based", label: "CREATOR CONTENT" },
      { value: 50, accentSuffix: "+", label: "DAILY VISITORS" },
    ],
    screenshotLabel: "HEARTOPIA ARCHIVE — SERVICE SCREENSHOT (ARCHIVE HOME)",
    thumbLabels: ["CREATOR PAGE", "CREATOR PERMISSION DM"],
    liveUrl: "https://heartopia-archive.com",
  },
};

const content: Record<ProjectSlug, Record<Locale, ProjectContent>> = {
  "sky-planner": {
    ko: {
      cardSubtitle:
        "Sky: Children of the Light 플레이어 커뮤니티를 1인으로 기획·개발·운영하는 게임 유틸리티 서비스",
      sections: [
        {
          heading: "데이터 기반 유저 니즈 파악",
          body: "GA4로 기능별 사용 데이터를 추적해 우선순위를 판단했습니다. 양초 계산기가 활성 사용자 1,977명으로 가장 많이 쓰였고, 성향 테스트는 조회 15,624회를 기록하며 SNS를 통한 신규 유입을 이끌었습니다. 여기에 더해 Google 설문조사를 직접 만들어 정기적으로 배포하고, 설문에서 나온 요청 기능과 불편 사항을 실제 업데이트에 반영했습니다.",
        },
        {
          heading: "커뮤니티 이벤트 기획",
          body: "매달 '이달의 모의고사'라는 콘텐츠 이벤트를 반복 운영했고, 별도로 만족도 조사 캠페인도 진행해 유저 참여를 유도했습니다.",
        },
        {
          heading: "유저 소통",
          body: "신기능 출시와 서버 장애 발생 시 커뮤니티에 직접 공지를 작성했습니다. AWS 서버 장애로 데이터가 유실됐을 때도 상황을 투명하게 공지하고, 댓글과 쪽지로 들어오는 개별 문의에 직접 응답하며 서비스를 복구했습니다.",
        },
      ],
      cardResult: "누적 사용자 1.5만 명 · 최고 MAU 1.7K · 최근 30일 재방문율 49%",
      heroBody:
        "Sky: Children of the Light 유저들이 커뮤니티에서 반복적으로 겪던 정보 탐색과 계산 문제를 발견하고, 직접 설계·개발·운영한 게임 플레이 보조 플랫폼입니다.",
      meta: [
        {
          label: "ROLE",
          value: "Product Planning\nUX/UI Design\nFrontend & Backend Dev\nData Analysis\nCommunity Operation",
        },
        { label: "PERIOD", value: "2025.02.08 — Present" },
        { label: "SERVICE", value: "Sky: Children of the Light\n게임 유틸리티 플랫폼" },
        { label: "STATUS", value: "Live", accent: true },
      ],
    },
    en: {
      cardSubtitle:
        "A game utility I plan, build, and run solo for the Sky: Children of the Light player community",
      sections: [
        {
          heading: "Data-driven user-needs research",
          body: "I tracked per-feature usage in GA4 to set priorities. The candle calculator was the most used at 1,977 active users, and the personality test drew SNS-driven new visitors with 15,624 views. On top of that I built a Google survey, distributed it regularly, and fed the requested features and friction points from it into actual updates.",
        },
        {
          heading: "Community event planning",
          body: "I ran a recurring monthly content event ('Mock Exam of the Month') and a separate satisfaction-survey campaign to drive participation.",
        },
        {
          heading: "Player communication",
          body: "I wrote community announcements myself for new features and server outages. When an AWS outage lost data, I announced the situation transparently, answered individual questions by comment and DM, and recovered the service.",
        },
      ],
      cardResult: "15K cumulative users · 1.7K peak MAU · 49% returning in the last 30 days",
      heroBody:
        "Sky: Children of the Light players kept hitting the same information-lookup and calculation problems in the community. I found them, then designed, built, and ran a play-assist platform to solve them.",
      meta: [
        {
          label: "ROLE",
          value: "Product Planning\nUX/UI Design\nFrontend & Backend Dev\nData Analysis\nCommunity Operation",
        },
        { label: "PERIOD", value: "2025.02.08 — Present" },
        { label: "SERVICE", value: "Sky: Children of the Light\nGame utility platform" },
        { label: "STATUS", value: "Live", accent: true },
      ],
    },
  },
  "identity5-pick": {
    ko: {
      cardSubtitle: "제5인격 팬덤의 취향 표현 문화를 지원하는 커뮤니티 도구 — 1인 기획·개발·데이터 구축",
      sections: [
        {
          heading: "데이터 기반 유저 니즈 파악",
          body: "다음에 만들 기능을 감으로 정하지 않았습니다. 공식카페에 무기명 투표를 올려 '스킨 티어리스트'와 '연애 시뮬레이터' 중 커뮤니티가 직접 선택하게 했고, 67.4%의 지지를 받은 연애 시뮬레이터를 실제로 개발했습니다. GA4로 페이지별 참여 시간도 함께 분석해 콘텐츠 우선순위를 검증했습니다.",
        },
        {
          heading: "커뮤니티 이벤트 기획",
          body: "서비스 초기 인지도가 낮은 시점에 X(트위터) 계정을 직접 새로 개설해, GA4 스크린샷과 기능 소개를 게시하며 신규 유저를 유치하는 홍보 캠페인을 운영했습니다.",
        },
        {
          heading: "유저 소통",
          body: "신기능을 출시할 때마다 공식카페에 사용법 공지를 작성했고, 댓글과 쪽지로 들어오는 개별 문의에 대응했습니다. 한 유저가 CP표 기능에 '관계 유형을 직접 추가·편집하고 싶다'는 요청을 남기자 다음 날 바로 기능을 구현해 스크린샷과 함께 댓글로 안내했습니다.",
        },
      ],
      cardResult: "출시 6주 만에 활성 사용자 3,400명 · 평균 참여 시간 6분 13초",
      heroBody:
        "제5인격 팬덤에는 이미 최애 순위를 매기고, 캐릭터를 평가하고, CP를 이야기하고, 보유 스킨을 공유하고, 듀오를 구하는 문화가 있었습니다. 팬덤에서 이미 일어나고 있던 이 행동들을 전용 도구로 옮기고, 이를 안정적으로 사용할 수 있도록 게임 데이터까지 직접 구축했습니다.",
      meta: [
        { label: "ROLE", value: "1인 기획 · 개발 · 데이터 구축 · 콘텐츠 검수" },
        { label: "CATEGORY", value: "Community Creation Tool" },
        { label: "PERIOD", value: "2026.07.17 — Present" },
        { label: "GAME", value: "Identity V / 제5인격" },
        { label: "STATUS", value: "Live", accent: true },
        { label: "PLATFORM", value: "Web · 로그인 없음" },
      ],
    },
    en: {
      cardSubtitle:
        "A community tool supporting the Identity V fandom's taste-expression culture — solo planning, dev, and data",
      sections: [
        {
          heading: "Data-driven user-needs research",
          body: "I didn't set the next feature by gut. I posted an anonymous poll on the official café letting the community choose between a skin tier list and a dating sim, and I built the dating sim that won with 67.4%. I also analyzed per-page engagement time in GA4 to validate content priorities.",
        },
        {
          heading: "Community event planning",
          body: "With low early awareness, I opened a new X (Twitter) account myself and ran a promotion campaign — posting GA4 screenshots and feature intros to attract new users.",
        },
        {
          heading: "Player communication",
          body: "For every new feature I wrote a how-to notice on the official café and handled individual questions by comment and DM. When a user asked to add and edit relationship types on the CP chart, I built it the next day and replied in the comments with a screenshot.",
        },
      ],
      cardResult: "3,400 active users within six weeks of launch · 6 min 13 sec average engagement",
      heroBody:
        "The Identity V fandom was already ranking favorites, rating characters, talking ships, sharing owned skins, and looking for duo partners. I moved those existing behaviors into dedicated tools, and built the game data by hand so the tools would hold up.",
      meta: [
        { label: "ROLE", value: "Solo planning · dev · data pipeline · content review" },
        { label: "CATEGORY", value: "Community Creation Tool" },
        { label: "PERIOD", value: "2026.07.17 — Present" },
        { label: "GAME", value: "Identity V" },
        { label: "STATUS", value: "Live", accent: true },
        { label: "PLATFORM", value: "Web · no login" },
      ],
    },
  },
  "heartopia-archive": {
    ko: {
      cardSubtitle:
        "해외 플랫폼에 흩어진 유저 제작 콘텐츠를 연결하는 신뢰 기반 UGC 아카이브 — 1인 기획·개발·콘텐츠 운영",
      sections: [
        {
          heading: "데이터 기반 유저 니즈 파악",
          body: "두근두근타운 유저 제작 콘텐츠가 국내에서 소비되지 못하는 이유를 직접 조사했습니다. 중국 Xiaohongshu 등 해외 플랫폼에 흩어진 콘텐츠를 추적하며, 한국 유저가 접근하지 못하는 구조적 문제를 파악해 아카이브 서비스로 설계했습니다.",
        },
        {
          heading: "커뮤니티 이벤트 기획 / 관계 구축",
          body: "정기 이벤트보다는 창작자 컨택 자체가 핵심 활동이었습니다. 중국 창작자를 직접 찾아 콘텐츠 사용 허락을 요청하는 아웃리치를 지속적으로 진행했습니다.",
        },
        {
          heading: "유저 소통",
          body: "중국 창작자 3인에게 직접 연락해 콘텐츠 사용 및 대리 업로드 허락을 확보했습니다. 원작자명과 원문 링크를 고정 표기하고, 삭제 요청에 대응하는 등 창작자와 신뢰를 쌓는 방식으로 커뮤니케이션했습니다.",
        },
      ],
      cardResult: "비상업·허락 기반 UGC 아카이브 운영 · 크로스보더 창작자 커뮤니케이션 경험",
      heroBody:
        "해외 플랫폼에 흩어진 두근두근타운 도안을 한국 유저가 쉽게 찾도록 모으고 싶었습니다. 하지만 아카이브를 만들기 전에 먼저 풀어야 할 질문이 있었습니다 — 이 콘텐츠를 원작자의 허락 없이 옮겨도 되는가. 그래서 이 프로젝트에서 가장 오래 걸린 일은 개발이 아니라, 해외 원작자를 찾아 연락하고 허락을 받는 일이었습니다.",
      meta: [
        { label: "ROLE", value: "1인 기획 / 개발\n콘텐츠 운영 / 커뮤니티 운영" },
        { label: "PERIOD", value: "2026.07.15 — Present" },
        { label: "GAME", value: "Heartopia / 두근두근타운" },
        { label: "STATUS", value: "Live", accent: true },
        { label: "OPERATION", value: "비상업 · 광고 없음" },
      ],
    },
    en: {
      cardSubtitle:
        "A trust-based UGC archive connecting user-made content scattered across overseas platforms — solo planning, dev, and content ops",
      sections: [
        {
          heading: "Data-driven user-needs research",
          body: "I investigated why Heartopia user-made content wasn't reaching Korean players. Tracing content scattered across overseas platforms like China's Xiaohongshu, I identified the structural access barrier for Korean users and designed an archive service around it.",
        },
        {
          heading: "Community outreach & relationships",
          body: "The core activity was creator contact rather than recurring events. I ran continuous outreach — finding Chinese creators directly and asking for permission to use their content.",
        },
        {
          heading: "Player communication",
          body: "I contacted three Chinese creators directly and secured permission to use and re-upload their content. I pinned the creator name and original link, responded to takedown requests, and communicated in a way that built trust with creators.",
        },
      ],
      cardResult: "Running a non-commercial, permission-based UGC archive · cross-border creator communication experience",
      heroBody:
        "I wanted to gather the Heartopia patterns scattered across overseas platforms so Korean players could find them easily. But before building the archive there was a question to settle first — is it okay to move this content without the creator's permission? So the longest part of the project wasn't development; it was finding overseas creators, reaching them, and getting permission.",
      meta: [
        { label: "ROLE", value: "Solo planning / dev\nContent ops / community ops" },
        { label: "PERIOD", value: "2026.07.15 — Present" },
        { label: "GAME", value: "Heartopia" },
        { label: "STATUS", value: "Live", accent: true },
        { label: "OPERATION", value: "Non-commercial · no ads" },
      ],
    },
  },
};

export type Project = ProjectBase & ProjectContent;

export function getProject(slug: ProjectSlug, locale: Locale): Project {
  return { ...base[slug], ...content[slug][locale] };
}

export function getProjects(locale: Locale): Project[] {
  return PROJECT_SLUGS.map((slug) => getProject(slug, locale));
}
