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
  /** one-line project definition — what it solved */
  cardSubtitle: string;
  /** two intro paragraphs under the one-line definition */
  intro: string[];
  /** MY ROLE — role title + responsibilities */
  myRole: { title: string; items: string[] };
  /**
   * The operations case on the main page: numbered subheadings, each with a
   * paragraph of concrete evidence and its own screenshot. Some carry a
   * small operating-example note (event numbers, operating rules, …).
   */
  sections: { heading: string; body: string; note?: { label: string; lines: string[] } }[];
  /** the key result numbers */
  cardResult: string;
  /** one closing line under the result numbers */
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
      cardSubtitle: "Sky: Children of the Light 플레이어 커뮤니티의 반복적인 불편을 해결한 게임 유틸리티 서비스",
      intro: [
        "Sky 플레이어들이 커뮤니티에서 반복적으로 질문하는 정보 탐색 문제를 발견하고, 이를 해결하기 위한 게임 유틸리티 서비스를 직접 기획·개발·운영했습니다.",
        "단순한 기능 제작을 목표로 하지 않고, 유저가 실제로 어떤 정보를 필요로 하는지 관찰하고, 커뮤니티 VOC와 사용 데이터를 기반으로 지속적으로 개선하는 라이브 서비스 운영 경험을 쌓았습니다.",
      ],
      myRole: {
        title: "Game Service Planner · Community Operator",
        items: [
          "플레이어 니즈 분석 및 기능 기획",
          "VOC 수집 및 개선 우선순위 결정",
          "커뮤니티 이벤트 기획 및 운영",
          "업데이트 공지 작성 및 유저 문의 대응",
          "GA4 기반 사용자 행동 분석",
        ],
      },
      sections: [
        {
          heading: "반복되는 커뮤니티 질문에서 시작된 서비스",
          body: "Sky: Children of the Light 커뮤니티에서는 특정 위치, 아이템, 수집 정보에 대한 질문이 반복적으로 발생했습니다. 유저들이 이미 가지고 있는 정보를 다시 찾느라 시간을 소비하고 있다는 점에 주목했고, 필요한 정보를 한 곳에서 쉽게 확인할 수 있는 서비스를 기획했습니다. 초기 단순 정보 도구에서 시작해, 유저 피드백을 반영하며 총 8개의 기능을 갖춘 서비스로 확장했습니다.",
        },
        {
          heading: "VOC와 데이터를 기반으로 서비스 개선",
          body: "유저 의견을 감에 의존하지 않기 위해 Google 설문조사를 직접 제작하고 배포했습니다. 설문을 통해 사용 만족도, 불편했던 기능, 필요한 신규 기능을 수집했고, 실제 업데이트 우선순위 결정에 활용했습니다. 또한 GA4를 활용해 기능별 이용 데이터를 분석하며, 어떤 기능이 실제 사용자에게 가치가 있는지 확인했습니다.",
        },
        {
          heading: "커뮤니티 이벤트 운영과 유저 소통",
          body: "서비스 이용 활성화를 위해 네이버 공식 카페에서 커뮤니티 이벤트를 직접 기획했습니다. 유저 참여형 이벤트를 통해 서비스 활용을 자연스럽게 유도했고, 신규 기능 출시 및 서비스 장애 발생 시에는 직접 공지를 작성하고 댓글과 쪽지를 통해 개별 문의에 대응하며 유저와 지속적으로 소통했습니다.",
          note: { label: "운영 사례 — 보물찾기 이벤트", lines: ["댓글 143개", "조회 657회"] },
        },
      ],
      cardResult: "누적 사용자 1.5만명 · 최고 MAU 1.7K · 최근 30일 재방문율 49%",
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
      cardSubtitle: "A game utility that solved the recurring friction of the Sky: Children of the Light player community",
      intro: [
        "I noticed the information-lookup questions Sky players kept asking in the community, and I planned, built, and ran a game utility myself to solve them.",
        "The goal wasn't just to build features — I watched what information users actually needed and built live-service operating experience, improving continuously from community VOC and usage data.",
      ],
      myRole: {
        title: "Game Service Planner · Community Operator",
        items: [
          "Player-needs analysis and feature planning",
          "VOC collection and improvement prioritization",
          "Community event planning and operation",
          "Writing update announcements and answering user inquiries",
          "GA4-based user-behavior analysis",
        ],
      },
      sections: [
        {
          heading: "A service that started from repeated community questions",
          body: "In the Sky: Children of the Light community, questions about specific locations, items, and collection info came up over and over. I saw that players were spending time re-finding information they already had, and planned a service where the info they need is easy to check in one place. It started as a simple info tool and grew, from user feedback, into a service with eight features.",
        },
        {
          heading: "Improving the service from VOC and data",
          body: "To avoid relying on gut feel for user opinion, I built and distributed a Google survey myself. Through it I collected satisfaction, painful features, and requested new features, and used that to set real update priorities. I also used GA4 to analyze per-feature usage and confirm which features were actually valuable to users.",
        },
        {
          heading: "Running community events and talking to users",
          body: "To drive usage I planned community events myself on the official Naver café. Participation events pulled people into using the service naturally, and for new features and outages I wrote the announcements myself and answered individual questions by comment and DM, staying in constant contact with users.",
          note: { label: "Operating example — treasure-hunt event", lines: ["143 comments", "657 views"] },
        },
      ],
      cardResult: "15K cumulative users · 1.7K peak MAU · 49% returning in the last 30 days",
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
      cardSubtitle: "제5인격 팬덤 문화를 지원하는 커뮤니티 기반 유저 서비스",
      intro: [
        "제5인격 유저들이 캐릭터, 스킨, 관계성 등 자신만의 취향을 표현하는 팬덤 문화를 관찰하고, 이를 더 편하게 즐길 수 있는 한국어 기반 커뮤니티 도구를 제작했습니다.",
        "유저가 원하는 기능을 직접 정의하고, 커뮤니티 의견을 반영하며 서비스를 성장시켰습니다.",
      ],
      myRole: {
        title: "Community Manager · Service Planner",
        items: [
          "팬덤 문화 분석",
          "신규 기능 기획",
          "유저 피드백 대응",
          "커뮤니티 채널 운영",
          "서비스 홍보 전략 수립",
        ],
      },
      sections: [
        {
          heading: "팬덤 문화를 서비스로 연결하다",
          body: "제5인격 커뮤니티에는 캐릭터 티어, 스킨 평가, CP 관계 표현 등 다양한 팬 문화가 존재했습니다. 하지만 이를 쉽게 활용할 수 있는 한국어 서비스가 부족했고, 유저들이 자신의 취향을 표현하고 공유할 수 있는 도구를 제작했습니다.",
        },
        {
          heading: "유저 의견을 기반으로 기능 우선순위 결정",
          body: "서비스 방향을 혼자 결정하지 않고 커뮤니티 의견을 적극 반영했습니다. 공식 카페 무기명 투표를 통해 신규 기능 선호도를 조사했고, 연애 시뮬레이터 기능이 67.4%의 선택을 받아 개발 방향으로 결정했습니다. 또한 한 유저가 요청한 CP표 관계 유형 수정 기능은 의견 확인 후 빠르게 반영하고 결과를 공유했습니다.",
        },
        {
          heading: "신규 채널 운영과 커뮤니티 확장",
          body: "서비스 초기 인지도를 높이기 위해 X(트위터) 계정을 직접 개설했습니다. 기능 소개 콘텐츠와 서비스 업데이트 내용을 게시하며 새로운 유저 유입 채널을 운영했습니다.",
        },
      ],
      cardResult: "출시 6주 기준 활성 사용자 3,400명 · 평균 참여 시간 6분 13초",
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
      cardSubtitle: "A community-based user service supporting the Identity V fandom's culture",
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
          "Community channel operation",
          "Service promotion strategy",
        ],
      },
      sections: [
        {
          heading: "Connecting fandom culture to a service",
          body: "The Identity V community had all kinds of fan culture — character tiers, skin ratings, CP relationship charts. But there wasn't an easy Korean service for it, so I built a tool where users can express and share their taste.",
        },
        {
          heading: "Setting feature priority from user opinion",
          body: "I didn't decide the direction alone — I actively reflected community opinion. I surveyed preference for new features by anonymous poll on the official café, and the dating-sim feature was chosen by 67.4%, so I set it as the development direction. When a user requested an edit feature for CP-chart relationship types, I shipped it quickly after confirming the feedback and shared the result.",
        },
        {
          heading: "Running a new channel and growing the community",
          body: "To raise early awareness I opened an X (Twitter) account myself, posting feature intros and service updates as a new acquisition channel.",
        },
      ],
      cardResult: "3,400 active users at six weeks post-launch · 6 min 13 sec average engagement",
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
      cardSubtitle: "해외 플랫폼에 흩어진 유저 창작 콘텐츠를 연결하는 허가 기반 UGC 아카이브",
      intro: [
        "두근두근타운 유저 창작 콘텐츠가 여러 플랫폼에 분산되어 있어 한국 유저가 접근하기 어렵다는 문제를 발견했습니다.",
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
      sections: [
        {
          heading: "창작자와 유저를 연결하는 콘텐츠 운영",
          body: "중국 Xiaohongshu에서 활동하는 창작자들에게 직접 연락해 콘텐츠 사용 허락을 요청했습니다. 단순 수집이 아닌, 창작자의 권리를 존중하는 운영 방식을 선택했습니다.",
        },
        {
          heading: "신뢰 기반 운영 정책 구축",
          body: "UGC 서비스 특성상 원작자 보호가 중요하다고 판단했습니다. 비상업 UGC 아카이브인 만큼, 회원가입 정책과 개인정보처리방침·이용약관도 직접 작성해 운영의 법적·신뢰 기반을 마련했습니다.",
          note: { label: "운영 기준", lines: ["허락받은 콘텐츠만 업로드", "원작자명 표시", "원문 링크 제공", "삭제 요청 대응"] },
        },
      ],
      cardResult: "허가 기반 UGC 아카이브 운영 · 크로스보더 커뮤니케이션 경험 확보",
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
      cardSubtitle: "A permission-based UGC archive connecting user-made content scattered across overseas platforms",
      intro: [
        "I found that Heartopia user-made content was spread across several platforms, making it hard for Korean users to reach.",
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
      sections: [
        {
          heading: "Content ops that connect creators and users",
          body: "I contacted creators active on China's Xiaohongshu directly and asked for permission to use their content. Rather than just collecting, I chose an operating approach that respects the creator's rights.",
        },
        {
          heading: "Building a trust-based operating policy",
          body: "Given the nature of a UGC service, I judged that protecting original creators was essential. As a non-commercial archive, I also wrote the sign-up policy, privacy policy, and terms of service myself to give operation a legal and trust foundation.",
          note: {
            label: "Operating rules",
            lines: [
              "Only permitted content is uploaded",
              "Creator name shown",
              "Original link provided",
              "Takedown requests handled",
            ],
          },
        },
      ],
      cardResult: "Running a permission-based UGC archive · cross-border communication experience",
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
