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
  /** one-line identity, community/comms framing — the card headline */
  cardSubtitle: string;
  /** what I did, on the card itself — 2-3 community/ops bullets */
  cardActions: string[];
  /** the outcome line under the bullets — one or two numbers */
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
      cardSubtitle: "Sky 플레이어 커뮤니티를 직접 운영하는 게임 유틸리티 서비스",
      cardActions: [
        "업데이트·장애 발생 시 커뮤니티 공지 작성, 댓글·쪽지 문의 대응",
        "Google 설문조사로 VOC를 수집해 기능 개선에 반영",
        "월간 커뮤니티 이벤트(이달의 모의고사) 운영",
      ],
      cardResult: "누적 사용자 1.5만 명 · 재방문율 49%",
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
      cardSubtitle: "A game utility where I run the Sky player community directly",
      cardActions: [
        "Wrote community announcements for updates and outages; handled comment and DM inquiries",
        "Collected VOC through a Google survey and fed it into feature improvements",
        "Ran a monthly community event (Mock Exam of the Month)",
      ],
      cardResult: "15K cumulative users · 49% returning",
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
      cardSubtitle: "제5인격 팬덤과 직접 소통하며 운영하는 커뮤니티 도구",
      cardActions: [
        "신기능마다 공식카페 공지 작성, 댓글·쪽지 문의 대응",
        "무기명 투표로 다음 기능을 커뮤니티가 직접 결정(연애 시뮬레이터 67.4% 득표로 개발 확정)",
        "유저 요청을 다음날 기능으로 반영, X 계정 개설해 홍보 채널 직접 운영",
      ],
      cardResult: "활성 사용자 3,400명(출시 6주) · 평균 참여 6분+",
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
      cardSubtitle: "A community tool I run in direct contact with the Identity V fandom",
      cardActions: [
        "Wrote an official-café notice for every new feature; handled comment and DM inquiries",
        "Let the community decide the next feature by anonymous poll (dating sim greenlit with 67.4%)",
        "Shipped a user request as a feature the next day; opened and ran an X promotion channel",
      ],
      cardResult: "3,400 active users (6 weeks post-launch) · 6+ min avg. engagement",
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
      cardSubtitle: "해외 창작자와 직접 소통하며 만든 신뢰 기반 UGC 아카이브",
      cardActions: [
        "중국 창작자 3인에게 직접 연락해 콘텐츠 사용 허락 확보",
        "원작자명·원문 링크 표기 등 창작자와의 신뢰 기반 운영 정책 수립",
      ],
      cardResult: "비상업·허락 기반 UGC 아카이브 운영",
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
      cardSubtitle: "A trust-based UGC archive built in direct contact with overseas creators",
      cardActions: [
        "Contacted three Chinese creators directly to secure content-use permission",
        "Set a trust-based operating policy — creator name and original link on every piece",
      ],
      cardResult: "Running a non-commercial, permission-based UGC archive",
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
