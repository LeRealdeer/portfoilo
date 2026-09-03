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
  /** one-line project definition — leads with the operating experience */
  cardSubtitle: string;
  /** short capability keywords shown as chips next to the eyebrow */
  keywords: string[];
  /** two short lead paragraphs under the one-line definition */
  intro: string[];
  /** MY ROLE — role title + responsibilities */
  myRole: { title: string; items: string[] };
  /** the RESULT card — three big animated numbers, shown up top */
  resultStats: MetricSpec[];
  /** Problem / Action / Result, compressed into three cards */
  par: { problem: string; action: string[]; result: string };
  /** operating-case cards: a category label, a short title, 2–3 lines, one screenshot */
  cases: { category: string; title: string; body: string; tag: string }[];
  /** highlight boxes — the moments worth calling out (a quote, a metric, an event) */
  callouts: { tag: string; title: string; lines: string[] }[];
  /** one closing line in the result banner */
  resultNote: string;
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
      cardSubtitle: "Sky: Children of the Light 플레이어 커뮤니티의 반복 질문과 정보 탐색 문제를 해결한 라이브 서비스",
      keywords: ["LIVE SERVICE", "VOC", "DATA"],
      intro: [
        "Sky 플레이어들이 커뮤니티에서 반복적으로 질문하는 정보 탐색 문제를 발견하고, 이를 해결하기 위한 게임 유틸리티 서비스를 직접 기획·개발·운영했습니다.",
        "유저가 실제로 어떤 정보를 필요로 하는지 관찰하고, 커뮤니티 VOC와 사용 데이터를 기반으로 지속적으로 개선하는 라이브 서비스 운영 경험을 쌓았습니다.",
      ],
      myRole: {
        title: "Game Service Planner · Community Operator",
        items: [
          "플레이어 니즈 분석",
          "VOC 수집 및 개선 우선순위 결정",
          "커뮤니티 이벤트 운영",
          "업데이트 공지 작성",
          "유저 문의 대응",
          "데이터 기반 개선",
        ],
      },
      resultStats: [
        { value: 15000, accentSuffix: "+", label: "누적 사용자" },
        { value: 1700, label: "최고 MAU" },
        { value: 49, suffix: "%", label: "최근 30일 재방문율" },
      ],
      par: {
        problem:
          "Sky 커뮤니티에서는 특정 위치, 아이템, 수집 정보에 대한 질문이 지속적으로 반복되었습니다. 유저들이 이미 존재하는 정보를 찾기 위해 여러 게시글을 검색해야 했고, 필요한 정보를 빠르게 확인하기 어려운 문제가 있었습니다.",
        action: [
          "커뮤니티 반복 질문 분석",
          "Google 설문조사 제작·배포",
          "GA4 사용자 행동 데이터 분석",
          "신규 기능 우선순위 결정",
          "업데이트 반영 및 공지 작성",
        ],
        result:
          "커뮤니티 VOC와 사용 데이터를 기반으로 기능을 지속 개선하며 8개 기능을 갖춘 서비스로 확장했습니다. 누적 사용자 1.5만 명, 최고 MAU 1.7K, 최근 30일 재방문율 49%를 기록하며 장기간 운영되는 게임 유틸리티 서비스로 성장시켰습니다.",
      },
      cases: [
        {
          category: "COMMUNITY INSIGHT",
          title: "반복되는 질문에서 서비스 기회 발견",
          body: "커뮤니티에서 반복되는 질문을 분석하고, 유저가 필요로 하는 정보를 서비스 기능으로 연결했습니다. 초기 단순 도구에서 8개 기능으로 확장했습니다.",
          tag: "기능 8개로 확장",
        },
        {
          category: "DATA DRIVEN",
          title: "설문과 GA4 기반 개선",
          body: "사용자 만족도 조사와 행동 데이터를 기반으로 업데이트 우선순위를 결정했습니다. 양초 계산기 활성 1,977명, 성향 테스트 조회 15,624회 등 실제 사용 데이터로 기능 가치를 검증했습니다.",
          tag: "만족도 4.84 / 5",
        },
        {
          category: "COMMUNITY EVENT",
          title: "유저 참여형 이벤트 운영",
          body: "네이버 공식 카페 이벤트를 직접 기획하고 참여 데이터를 확인하며 커뮤니티 활성화를 유도했습니다. 신규 기능·장애 발생 시 공지 작성과 댓글·쪽지 문의 대응도 직접 했습니다.",
          tag: "댓글 143 · 조회 657",
        },
      ],
      callouts: [
        { tag: "COMMUNITY EVENT", title: "보물찾기 이벤트", lines: ["댓글 143개", "조회 657회"] },
        { tag: "DATA INSIGHT", title: "사용자 만족도 조사", lines: ["Average Rating", "4.84 / 5"] },
      ],
      resultNote: "장기간 운영하며 유저 행동과 피드백을 기반으로 서비스를 개선하는 라이브 운영 경험을 확보했습니다.",
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
      cardSubtitle: "A live service that solved the recurring questions and information-lookup friction of the Sky: Children of the Light player community",
      keywords: ["LIVE SERVICE", "VOC", "DATA"],
      intro: [
        "I noticed the information-lookup questions Sky players kept asking in the community, and I planned, built, and ran a game utility myself to solve them.",
        "I watched what information users actually needed and built live-service operating experience, improving continuously from community VOC and usage data.",
      ],
      myRole: {
        title: "Game Service Planner · Community Operator",
        items: [
          "Player-needs analysis",
          "VOC collection and improvement prioritization",
          "Community event operation",
          "Writing update announcements",
          "Answering user inquiries",
          "Data-driven improvement",
        ],
      },
      resultStats: [
        { value: 15000, accentSuffix: "+", label: "cumulative users" },
        { value: 1700, label: "peak MAU" },
        { value: 49, suffix: "%", label: "returning, last 30 days" },
      ],
      par: {
        problem:
          "Questions about specific locations, items, and collection info came up continuously in the Sky community. Users had to search through many posts to find information that already existed, with no fast way to check what they needed.",
        action: [
          "Analyzed recurring community questions",
          "Built and distributed a Google survey",
          "Analyzed GA4 user-behavior data",
          "Set new-feature priorities",
          "Shipped updates and wrote the announcements",
        ],
        result:
          "Improving features continuously from community VOC and usage data, I grew it into a service with eight features. It reached 15,000 cumulative users, a 1.7K peak MAU, and 49% returning users over the last 30 days — a long-running game utility service.",
      },
      cases: [
        {
          category: "COMMUNITY INSIGHT",
          title: "Finding service opportunities in repeated questions",
          body: "I analyzed the questions the community kept asking and connected the information users needed to service features. It grew from a simple tool to eight features.",
          tag: "Grew to 8 features",
        },
        {
          category: "DATA DRIVEN",
          title: "Improving from a survey and GA4",
          body: "I set update priorities from a satisfaction survey and behavior data. Real usage — 1,977 active users on the candle calculator, 15,624 views on the personality test — validated each feature's value.",
          tag: "Rating 4.84 / 5",
        },
        {
          category: "COMMUNITY EVENT",
          title: "Running player-participation events",
          body: "I planned the official Naver café events myself, watched the participation data, and drove community activity. For new features and outages I wrote the announcements and answered comment and DM inquiries directly.",
          tag: "143 comments · 657 views",
        },
      ],
      callouts: [
        { tag: "COMMUNITY EVENT", title: "Treasure-hunt event", lines: ["143 comments", "657 views"] },
        { tag: "DATA INSIGHT", title: "User satisfaction survey", lines: ["Average rating", "4.84 / 5"] },
      ],
      resultNote: "Through long-term operation I built experience improving a service from user behavior and feedback.",
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
      cardSubtitle: "제5인격 팬덤 문화를 분석하고 유저 피드백으로 성장시킨 커뮤니티 서비스",
      keywords: ["COMMUNITY", "FAN CULTURE", "USER FEEDBACK"],
      intro: [
        "제5인격 유저들이 캐릭터·스킨·관계성 등 자신만의 취향을 표현하는 팬덤 문화를 관찰하고, 이를 더 편하게 즐길 수 있는 한국어 기반 커뮤니티 도구를 제작했습니다.",
        "유저가 원하는 기능을 직접 정의하고, 커뮤니티 의견을 반영하며 서비스를 성장시켰습니다.",
      ],
      myRole: {
        title: "Community Manager · Service Planner",
        items: [
          "팬덤 문화 분석",
          "신규 기능 기획",
          "유저 피드백 대응",
          "커뮤니티 투표 운영",
          "X 채널 운영",
          "데이터 기반 우선순위 결정",
        ],
      },
      resultStats: [
        { value: 3400, label: "출시 6주 활성 사용자" },
        { value: 0, raw: "6:13", label: "평균 참여 시간" },
        { value: 18000, accentSuffix: "+", label: "페이지뷰" },
      ],
      par: {
        problem:
          "제5인격 커뮤니티에는 캐릭터 티어, 스킨 평가, CP 관계 표현 등 다양한 팬덤 문화가 존재했습니다. 하지만 이러한 취향을 표현하고 공유할 수 있는 한국어 기반 도구가 부족해 유저들은 직접 제작하거나 여러 플랫폼을 활용해야 했습니다.",
        action: [
          "팬덤 문화 관찰 및 기능 정의",
          "공식카페 댓글·쪽지 VOC 대응",
          "커뮤니티 무기명 투표로 기능 우선순위 결정",
          "유저 요청 익일 반영",
          "X 계정 개설·운영",
        ],
        result:
          "커뮤니티 투표와 VOC를 기반으로 기능 방향을 결정하고, 유저 요청을 실제 업데이트에 반영했습니다. 출시 6주 만에 활성 사용자 3,400명, 평균 참여 시간 6분 13초를 기록하며 팬덤 기반 서비스로 성장했습니다.",
      },
      cases: [
        {
          category: "FAN CULTURE",
          title: "팬덤 문화를 서비스로 연결",
          body: "캐릭터 소트·티어리스트·CP표 등 이미 존재하던 팬 문화를 한국어 웹 도구로 옮겨, 유저가 취향을 쉽게 표현하고 공유하도록 했습니다.",
          tag: "소트 · 티어 · CP표",
        },
        {
          category: "USER FEEDBACK",
          title: "유저 의견으로 로드맵 결정",
          body: "공식카페 무기명 투표로 연애 시뮬레이터가 67.4% 득표해 개발이 확정됐고, CP표 관계 유형 수정 요청은 익일 반영 후 결과를 댓글로 공유했습니다.",
          tag: "67.4% Vote · 익일 반영",
        },
        {
          category: "COMMUNITY CHANNEL",
          title: "X 채널로 초기 커뮤니티 확장",
          body: "서비스 초기 인지도를 높이기 위해 X 계정을 직접 개설해 기능 소개와 업데이트를 게시하며 신규 유입 채널을 운영했습니다.",
          tag: "신규 유입 채널",
        },
      ],
      callouts: [
        { tag: "USER FEEDBACK", title: "“관계 유형을 직접 추가하고 싶어요”", lines: ["→ 다음 업데이트에서 기능 반영"] },
        { tag: "COMMUNITY VOTE", title: "다음 기능 무기명 투표", lines: ["연애 시뮬레이터 67.4% 득표", "→ 개발 확정"] },
      ],
      resultNote: "팬덤 커뮤니티의 니즈를 발견하고, 유저와 함께 서비스를 발전시키는 운영 경험을 쌓았습니다.",
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
      cardSubtitle: "A community service built by analyzing Identity V fandom culture and grown from user feedback",
      keywords: ["COMMUNITY", "FAN CULTURE", "USER FEEDBACK"],
      intro: [
        "I watched the Identity V fandom's culture of expressing personal taste — characters, skins, relationships — and built a Korean-language community tool to enjoy it more easily.",
        "I defined the features users wanted directly and grew the service by reflecting community opinion.",
      ],
      myRole: {
        title: "Community Manager · Service Planner",
        items: [
          "Fandom-culture analysis",
          "New-feature planning",
          "User-feedback response",
          "Running community votes",
          "X channel operation",
          "Data-driven prioritization",
        ],
      },
      resultStats: [
        { value: 3400, label: "active users, 6 weeks in" },
        { value: 0, raw: "6:13", label: "avg. engagement time" },
        { value: 18000, accentSuffix: "+", label: "pageviews" },
      ],
      par: {
        problem:
          "The Identity V community had a rich fandom culture — character tiers, skin ratings, CP relationships — but few Korean-language tools to express and share that taste, so users had to build their own or work across several platforms.",
        action: [
          "Observed fandom culture and defined features",
          "Handled official-café comment and DM VOC",
          "Set feature priority by anonymous community poll",
          "Shipped user requests the next day",
          "Opened and ran an X account",
        ],
        result:
          "I set feature direction from community votes and VOC and shipped user requests into real updates. Within six weeks of launch it reached 3,400 active users and a 6:13 average engagement time, growing into a fandom-based service.",
      },
      cases: [
        {
          category: "FAN CULTURE",
          title: "Connecting fandom culture to a service",
          body: "I moved existing fan culture — character sort, tier lists, CP charts — into Korean web tools so users could express and share their taste easily.",
          tag: "Sort · Tier · CP chart",
        },
        {
          category: "USER FEEDBACK",
          title: "Deciding the roadmap from user opinion",
          body: "An anonymous café poll gave the dating sim 67.4% and greenlit it, and a request to edit CP-chart relationship types shipped the next day with the result shared in the comments.",
          tag: "67.4% Vote · next-day ship",
        },
        {
          category: "COMMUNITY CHANNEL",
          title: "Growing the early community on X",
          body: "To raise early awareness I opened an X account myself, posting feature intros and updates as a new acquisition channel.",
          tag: "New acquisition channel",
        },
      ],
      callouts: [
        { tag: "USER FEEDBACK", title: "“I want to add relationship types myself”", lines: ["→ shipped in the next update"] },
        { tag: "COMMUNITY VOTE", title: "Anonymous poll for the next feature", lines: ["Dating sim: 67.4%", "→ greenlit"] },
      ],
      resultNote: "I built operating experience discovering a fandom community's needs and growing a service together with its users.",
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
      cardSubtitle: "해외 창작자와 직접 소통하며 권리 보호 정책을 운영한 글로벌 UGC 아카이브",
      keywords: ["GLOBAL COMMUNITY", "CREATOR RELATION"],
      intro: [
        "두근두근타운 유저 창작 콘텐츠가 여러 해외 플랫폼에 분산되어 있어 한국 유저가 접근하기 어렵다는 문제를 발견했습니다.",
        "창작자의 권리를 보호하면서 유저가 쉽게 콘텐츠를 찾을 수 있도록 허가 기반 아카이브 서비스를 운영했습니다.",
      ],
      myRole: {
        title: "Community Operator · Content Manager",
        items: [
          "콘텐츠 운영 정책 수립",
          "해외 창작자 커뮤니케이션",
          "UGC 검수 및 관리",
          "원작자 권리 보호 기준 마련",
        ],
      },
      resultStats: [
        { value: 3, label: "협업 창작자" },
        { value: 100, suffix: "%", label: "허락 기반 콘텐츠 운영" },
        { value: 119, accentSuffix: "+", label: "아카이브 콘텐츠" },
      ],
      par: {
        problem:
          "두근두근타운 유저 창작 콘텐츠가 Xiaohongshu 등 여러 해외 플랫폼에 흩어져 있어 한국 유저가 원하는 콘텐츠를 찾기 어려웠습니다. 또한 UGC 서비스 특성상 원작자의 권리를 보호하면서 콘텐츠를 운영할 기준이 필요했습니다.",
        action: [
          "중국 Xiaohongshu 창작자 직접 커뮤니케이션",
          "콘텐츠 사용·대리 업로드 허락 확보",
          "원작자명·원문 링크 표기 정책 수립",
          "삭제 요청 대응 기준 마련",
          "회원가입·개인정보·이용약관 직접 작성",
        ],
        result:
          "중국 창작자와 직접 커뮤니케이션하며 콘텐츠 사용 허락 체계를 구축하고, 원작자 표기·삭제 요청 대응 등 운영 기준을 마련했습니다. 허가 기반 UGC 아카이브를 운영하며 글로벌 창작자와 유저를 연결하는 커뮤니티 운영 경험을 확보했습니다.",
      },
      cases: [
        {
          category: "CREATOR RELATION",
          title: "창작자와 유저를 연결하는 콘텐츠 운영",
          body: "중국 Xiaohongshu 창작자에게 직접 연락해 사용 허락을 요청했습니다. 단순 수집이 아니라 창작자의 권리를 존중하는 운영 방식을 선택했습니다.",
          tag: "창작자 3인 직접 협업",
        },
        {
          category: "OPERATING POLICY",
          title: "신뢰 기반 운영 정책 구축",
          body: "허락받은 콘텐츠만 업로드하고 원작자명·원문 링크를 표기했으며, 삭제 요청에 대응했습니다. 비상업 아카이브로서 개인정보처리방침·이용약관도 직접 작성했습니다.",
          tag: "100% 허락 기반 운영",
        },
      ],
      callouts: [
        { tag: "CREATOR POLICY", title: "창작자 보호 기준", lines: ["허락받은 콘텐츠만 업로드", "원작자명 및 원문 링크 표시", "삭제 요청 대응", "창작자 권리 우선 운영"] },
        { tag: "CONTENT DISCOVERY", title: "콘텐츠 탐색 경험 설계", lines: ["카테고리·태그 기반 탐색 구조 설계", "작가별 콘텐츠 페이지 구성", "찜 기능을 통한 개인 저장 경험 제공", "인기순·최신순 기반 콘텐츠 발견 구조 구축"] },
      ],
      resultNote: "글로벌 유저 콘텐츠를 관리하고, 창작자와 이용자 사이의 신뢰를 구축하는 커뮤니티 운영 경험을 얻었습니다.",
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
      cardSubtitle: "A global UGC archive run on a rights-protection policy, in direct contact with overseas creators",
      keywords: ["GLOBAL COMMUNITY", "CREATOR RELATION"],
      intro: [
        "I found that Heartopia user-made content was spread across several overseas platforms, making it hard for Korean users to reach.",
        "I ran a permission-based archive so users could find content easily while creators' rights stayed protected.",
      ],
      myRole: {
        title: "Community Operator · Content Manager",
        items: [
          "Content operating policy",
          "Overseas creator communication",
          "UGC review and management",
          "Creator-rights protection standards",
        ],
      },
      resultStats: [
        { value: 3, label: "creators partnered" },
        { value: 100, suffix: "%", label: "permission-based content" },
        { value: 119, accentSuffix: "+", label: "archived items" },
      ],
      par: {
        problem:
          "Heartopia user-made content was spread across several overseas platforms, so Korean access was low, and creator-rights management was needed.",
        action: [
          "Direct communication with Chinese Xiaohongshu creators",
          "Secured permission to use and re-upload content",
          "Set a creator-name and original-link policy",
          "Defined a takedown-response standard",
          "Wrote the sign-up policy, privacy policy, and terms myself",
        ],
        result:
          "Communicating directly with Chinese creators, I built a content-permission system and set operating standards — creator credit, takedown response. Running a permission-based UGC archive, I gained community-operating experience connecting global creators with users.",
      },
      cases: [
        {
          category: "CREATOR RELATION",
          title: "Content ops that connect creators and users",
          body: "I contacted Chinese Xiaohongshu creators directly to ask for permission. Rather than just collecting, I chose an operating approach that respects creators' rights.",
          tag: "3 creators contacted",
        },
        {
          category: "OPERATING POLICY",
          title: "Building a trust-based operating policy",
          body: "Only permitted content is uploaded, with the creator name and original link shown, and takedown requests are handled. As a non-commercial archive I also wrote the privacy policy and terms of service myself.",
          tag: "100% permission-based",
        },
      ],
      callouts: [
        { tag: "CREATOR POLICY", title: "Creator-protection standard", lines: ["Only permitted content is uploaded", "Creator name and original link shown", "Takedown requests handled", "Creator rights come first"] },
        { tag: "CONTENT DISCOVERY", title: "Designing the discovery experience", lines: ["Category- and tag-based browsing structure", "Per-creator content pages", "Personal saves via a bookmark feature", "Popular / latest discovery ordering"] },
      ],
      resultNote: "I gained community-operating experience managing global user content and building trust between creators and users.",
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
