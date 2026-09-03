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
          heading: "어떻게 시작했나 — 반복되는 질문에서 서비스로",
          body: "커뮤니티에서 '내 캐릭터 키가 몇인지 알고 싶다'는 질문이 반복적으로 올라오는 걸 발견하고, 이를 확인할 수 있는 간단한 도구를 만든 게 시작이었습니다. 이후에도 커뮤니티에서 반복되는 질문·불편을 하나씩 기능으로 만들며 지금의 8개 기능으로 확장했습니다.",
        },
        {
          heading: "Google 설문조사로 데이터 기반 의사결정",
          body: "Google 설문조사를 직접 만들어 정기적으로 배포하고, 설문에서 나온 요청 기능과 불편 사항을 실제 업데이트에 반영했습니다. GA4로도 기능별 사용 데이터를 함께 추적해 우선순위를 검증했습니다 — 양초 계산기가 활성 사용자 1,977명으로 가장 많이 쓰였고, 성향 테스트는 조회 15,624회를 기록하며 SNS를 통한 신규 유입을 이끌었습니다.",
        },
        {
          heading: "네이버 카페 이벤트 운영",
          body: "네이버 공식 카페에서 커뮤니티 이벤트를 직접 기획·운영했습니다. 보물찾기 이벤트(댓글 143 · 조회 656), 매달 진행한 '이달의 모의고사' 콘텐츠 이벤트, 베스트팁 게시물(조회 6,000+) 등으로 유저 참여를 꾸준히 유도했습니다. 신기능 출시와 서버 장애 시에는 공지를 직접 작성하고, 댓글·쪽지로 들어오는 개별 문의에도 대응했습니다.",
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
          heading: "How it started — from a repeated question to a service",
          body: "It started when I noticed the community kept asking 'how tall is my character?' and built a simple tool to check. I kept turning recurring community questions and friction into features one at a time, growing it to the eight features it has now.",
        },
        {
          heading: "Data-driven decisions from a Google survey",
          body: "I built a Google survey myself, distributed it regularly, and fed the requested features and friction points into actual updates. I also tracked per-feature usage in GA4 to validate priorities — the candle calculator was the most used at 1,977 active users, and the personality test drew SNS-driven new visitors with 15,624 views.",
        },
        {
          heading: "Running Naver café events",
          body: "I planned and ran community events on the official Naver café myself — a treasure-hunt event (143 comments, 656 views), the monthly 'Mock Exam of the Month' content event, best-tip posts (6,000+ views) — to keep participation up. For new features and server outages I wrote the announcements myself and answered individual questions by comment and DM.",
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
          heading: "기존 팬덤 문화를 도구로 — 캐릭터 소트·티어리스트·CP표",
          body: "제5인격 팬들은 이미 좋아하는 캐릭터를 순위 매기고, 티어리스트를 만들고, 캐릭터 관계(CP)를 그림으로 표현하는 문화를 갖고 있었습니다. 다만 이걸 쉽게 할 수 있는 한국어 도구가 없었고, 그 문화를 그대로 웹 도구로 옮기는 데 집중했습니다.",
        },
        {
          heading: "쪽지·댓글 피드백으로 기능 개선",
          body: "공식카페 댓글과 쪽지로 들어오는 요청을 빠르게 기능으로 반영했습니다. 한 유저가 '관계 유형을 직접 추가·편집하고 싶다'고 요청하자 다음 날 바로 기능을 구현해 댓글로 안내했고, 자택 전용 스킨이 누락됐다는 제보를 받은 뒤엔 데이터 구조 자체를 확장해 반영했습니다. 다음 기능도 공식카페 무기명 투표로 커뮤니티가 직접 정하게 했습니다(연애 시뮬레이터 67.4% 득표로 개발 확정).",
        },
        {
          heading: "X 계정 개설로 초기 홍보",
          body: "서비스 초기 인지도가 낮은 시점에 X(트위터) 계정을 새로 만들어 GA4 데이터와 기능 소개를 직접 게시하며 신규 유저를 유치했습니다.",
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
          heading: "Existing fandom culture as a tool — character sort, tier list, CP chart",
          body: "Identity V fans already had a culture of ranking favorite characters, making tier lists, and drawing character relationships (CP). There just wasn't an easy Korean tool for it, so I focused on moving that culture straight into web tools.",
        },
        {
          heading: "Improving features from DM and comment feedback",
          body: "I turned requests coming in by official-café comment and DM into features fast. When a user asked to add and edit relationship types themselves, I built it the next day and replied in the comments. After a report that lobby-only skins were missing, I extended the data structure itself. I also let the community set the next feature by anonymous café poll (the dating sim won with 67.4% and was greenlit).",
        },
        {
          heading: "Early promotion via a new X account",
          body: "With low early awareness, I opened a new X (Twitter) account and posted GA4 data and feature intros myself to attract new users.",
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
          heading: "원작자 직접 허락 기반 운영",
          body: "중국 Xiaohongshu 창작자 3인에게 직접 연락해 콘텐츠 사용 및 대리 업로드 허락을 확보했습니다. 원작자명과 원문 링크를 고정 표기하고, 삭제 요청에 대응하는 등 창작자와의 신뢰를 우선하는 방식으로 운영했습니다.",
        },
        {
          heading: "회원가입 정책과 개인정보처리방침·이용약관",
          body: "비상업 UGC 아카이브인 만큼, 회원가입 정책과 개인정보처리방침·이용약관을 직접 작성해 서비스 운영의 법적·신뢰 기반을 마련했습니다.",
        },
        {
          heading: "찜 페이지와 작가 페이지 구성",
          body: "유저가 마음에 드는 콘텐츠를 모아볼 수 있는 찜 페이지와, 창작자별 콘텐츠를 한데 모은 작가 페이지를 구성해 창작자 인지도와 유저 재방문을 함께 고려했습니다.",
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
          heading: "Operating on direct creator permission",
          body: "I contacted three Chinese Xiaohongshu creators directly and secured permission to use and re-upload their content. I pinned the creator name and original link, responded to takedown requests, and operated in a way that put trust with creators first.",
        },
        {
          heading: "Sign-up policy, privacy policy, and terms of service",
          body: "As a non-commercial UGC archive, I wrote the sign-up policy, privacy policy, and terms of service myself to give the service a legal and trust foundation.",
        },
        {
          heading: "Favorites page and creator pages",
          body: "I built a favorites page where users collect content they like, and creator pages that gather each creator's work in one place — considering creator visibility and user return together.",
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
