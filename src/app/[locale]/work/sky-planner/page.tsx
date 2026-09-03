import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder, type Shot } from "@/components/Placeholder";
import { CaseSummary } from "@/components/CaseSummary";
import { HERO_SHOT, SHOTS, FEATURE_SHOTS, PT_VIRAL } from "./shots";
import { getProject } from "@/data/projects";
import { toLocale, type Locale } from "@/lib/i18n";
import {
  CASE_EYEBROW as EYEBROW,
  CASE_EYEBROW_DARK as EYEBROW_DARK,
  CASE_H2 as H2,
  CASE_LEAD as LEAD,
} from "@/lib/caseStudy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  return {
    title: "Sky Planner — Inha Seo",
    description:
      locale === "en"
        ? "A data-driven game utility for Sky: Children of the Light — the repeat play friction I found, built into eight features, and run with GA4 and VOC."
        : "Sky: Children of the Light 유저의 반복적인 플레이 불편을 발견해 8개 기능으로 확장하고, GA4와 VOC로 운영한 데이터 기반 게임 유틸리티 서비스 케이스 스터디.",
  };
}

// wider than the shared CASE_LEAD (560px) — this page pairs section intros with a
// full-width image row below, so the lead text can afford to run longer per line
const LEAD_WIDE = LEAD.replace("max-w-[560px]", "max-w-[820px]");

const heroMetrics = [
  { value: 340, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 393, label: "PEAK DAU" },
  { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "PEAK MAU" },
];

const performanceMetrics = [
  { value: 340, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 15, suffix: "K", accentSuffix: "+", label: "CUMULATIVE USERS" },
  { value: 393, label: "PEAK DAU" },
  { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "PEAK MAU" },
  { value: 33, suffix: "%", label: "RETURNING" },
];

const demonstratedSkills = [
  "User Problem Discovery",
  "Service Planning",
  "Feature Design",
  "GA4 Data Analysis",
  "Community Operation",
  "Event Planning",
  "VOC Management",
  "Global Communication",
  "MVP → Iteration",
];

const techStack = ["Next.js", "Spring Boot", "MySQL", "Railway · Vercel", "GA4", "Figma"];

type Feature = {
  n: string;
  name: string;
  tag: string;
  problem: string;
  solution: string;
  iteration: string;
  impact: string;
  shot: string;
};

type Copy = {
  heroSubtitle: string;
  summary: { problem: string; action: string; result: string };
  ctx: { h2: string; lead: string; quote: string; note: string; flow: string[]; uses: string[] };
  evo: { h2: string; lead: string; count: string; list: { tag: string; name: string; line: string }[]; shot: string };
  feat: { h2: string; lead: string; items: Feature[]; ptViralLabel: string; ptViral: string[] };
  ops: { h2: string; migration: string; qa: string; shot: string };
  data: { h2: string; gaLine: string; insightLabel: string; insights: { n: string; title: string; detail: string }[]; shot: string };
  fb: { h2: string; lead: string; reflected: string[]; notReflected: { req: string; why: string }[]; shot: string };
  growth: { h2: string; lead: string; channels: { title: string; body: string }[]; shot1: string; shot2: string; shot3: string };
  events: { h2: string; lead: string; list: { title: string; body: string }[]; shot1: string; shot2: string };
  o2o: { h2: string; lead: string; flow: string[]; onSite: string; dayUsers: string; shot1: string; shot2: string };
  learn: { h2: string; musicLabel: string; music: string; shot: string; quote: string };
  final: { h2: string; body: string };
};

const COPY: Record<Locale, Copy> = {
  ko: {
    heroSubtitle: "게임 플레이 과정에서 반복되던 관리·계산·정보 탐색을 하나로 정리한 게임 유틸리티 서비스",
    summary: {
      problem: "Sky 플레이어들이 반복적으로 같은 질문·불편을 커뮤니티에 올렸습니다.",
      action:
        "8개 기능으로 직접 해결했습니다. GA4와 자체 Google 설문조사로 VOC를 정식 수집해 우선순위를 검증하고 기능 개선·추가에 반영했습니다. 신기능 출시·서버 점검 시 커뮤니티에 직접 공지를 작성하고, 댓글·쪽지로 들어오는 개별 문의에 대응했으며, 월간 커뮤니티 이벤트(이달의 모의고사)를 운영했습니다.",
      result:
        "누적 1.5만 명, 최근 30일 재방문율 49%. AWS 서버 장애도 인프라 이전으로 직접 복구했습니다.",
    },
    ctx: {
      h2: "“제 키가 몇 단인가요?” 반복되는 질문에서 첫 기능이 나왔습니다.",
      lead:
        "네이버 Sky 카페를 이용하면서, 하나의 질문이 반복해서 올라오는 것을 발견했습니다.",
      quote: "제 캐릭터 키가 몇 단인가요? 이 키가 맞나요?",
      note:
        "Sky에는 캐릭터 키를 바꾸는 키 물약이 있지만 인게임에는 키를 재는 방법이 없습니다. 커뮤니티가 스스로 만든 규칙을, 유저들은 외부 앱으로 일일이 해결하고 있었습니다.",
      flow: ["캐릭터 스크린샷 촬영", "외부 편집 앱(이비스) 실행", "가이드라인 PNG 합성", "직접 비교"],
      uses: ["키재기 사용 예시 1", "키재기 사용 예시 2", "키재기 사용 예시 3"],
    },
    evo: {
      h2: "하나의 기능에서 반복 사용되는 게임 유틸리티로.",
      lead:
        "키재기 하나로 시작해, 플레이 과정에서 반복되는 계산·탐색·정리 문제를 하나씩 기능으로 확장했습니다.",
      count: "게임 플레이 보조 기능 운영 중",
      list: [
        { tag: "01", name: "키재기", line: "커뮤니티의 '키 몇 단?' 질문을 도구화한 첫 기능" },
        { tag: "02", name: "양초 계산기", line: "시즌 재화로 목표 아이템을 얻을 수 있는지 계산" },
        { tag: "03", name: "유랑대백과", line: "2주마다 도는 유랑 영혼·아이템 아카이브" },
        { tag: "04", name: "성향 테스트", line: "홍보용 공유 콘텐츠 — Sky 크리쳐 성향 진단" },
        { tag: "05", name: "오래된 유랑", line: "영혼별 마지막 유랑 시점으로 '다음 유랑' 예측" },
        { tag: "06", name: "버스 노선표", line: "양초 파밍 모집용 노선표 — 터치·입력만으로 완성" },
        { tag: "07", name: "악보 만들기", line: "Sky 악기 연주자용 악보 편집" },
        { tag: "08", name: "시즌 대백과", line: "전 시즌 영혼·미복각까지 통합한 최대 조회수 기능" },
      ],
      shot: "홈 화면 — 8개 기능 카드",
    },
    feat: {
      h2: "반복 질문을 기능으로, 기능을 데이터로 검증.",
      lead:
        "8개 중 기획·운영 판단이 뚜렷한 5개를 정리했습니다. 모두 같은 순서를 거쳤습니다 — 반복 질문을 정의하고, 웹에서 한 번에 끝내는 도구로 만들고, 사용 데이터로 개선했습니다.",
      items: [
        {
          n: "01",
          name: "키재기",
          tag: "커뮤니티 반복 질문에서 시작한 첫 기능",
          problem:
            "Sky의 키 물약을 마시면 캐릭터 키가 랜덤으로 바뀝니다. 바뀐 키를 재려면 투명 PNG 가이드라인을 캐릭터 사진에 직접 합성해야 했고, 유저들은 외부 앱(이비스)으로 이 작업을 반복했습니다.",
          solution:
            "가이드라인을 제공하고, 유저는 사진을 올려 이동·확대/축소만으로 키를 확인합니다. 네이버 카페의 '제 키가 몇 단인가요?' 질문을 그대로 도구로 옮겼습니다.",
          iteration:
            "초기에는 커뮤니티에서 공유되던 가이드라인을 활용했고, 이후 서비스에 맞는 가이드라인과 사용 가이드를 직접 제작했습니다. '사진 위치 조정이 불편하다'는 피드백을 받고 스케일 조정 UX를 개선했습니다.",
          impact: "카페 인기글에 올랐고, 유저들이 키 잰 결과물을 카페에 공유하며 자연스럽게 확산됐습니다.",
          shot: "키재기 UI — 가이드라인 위 사진 조정",
        },
        {
          n: "02",
          name: "양초 계산기",
          tag: "가장 많이 쓰이는 기능 · 자산 사용 허락부터",
          problem:
            "Sky 시즌은 약 75일. 시즌 패스 여부, 영혼별 템 트리, 아이템별 재화 가격이 모두 달라 '내 양초로 원하는 아이템을 얻을 수 있을까'를 유저가 매번 직접 계산해야 했습니다.",
          solution:
            "보유 재화와 목표 아이템을 입력하면 필요한 양초·예상 획득량·소요 일수를 계산합니다. 아이콘과 자료는 해외 Sky 팬덤 관리자와 카페 유저에게 직접 사용 허락을 받아 확보했습니다.",
          iteration:
            "결과만 보여주던 방식에서, 앞으로 얻을 재화·아이템 총합·소요 일수까지 계산 과정을 상세히 보여주도록 개선했습니다. 게임 시스템 변경으로 기존 계산 방식의 유효성이 낮아졌지만, 지속적인 이용이 확인되어 새로운 시즌 구조에 맞게 계산 방식과 UI를 전면 재설계했습니다.",
          impact: "출시 이후 지금까지 사이트의 대표 기능. GA4 기준 활성 사용자 1,977명으로 전 기능 중 최다입니다.",
          shot: "양초 계산기 — 계산 과정 시각화 (리뉴얼 전·후)",
        },
        {
          n: "03",
          name: "유랑대백과",
          tag: "흩어진 정보를 하나의 경험으로 정리한 기능",
          problem:
            "Sky에서는 주기적으로 과거 시즌 아이템을 판매하는 유랑 영혼이 등장합니다. 하지만 유저가 원하는 아이템의 등장 시점을 확인하려면 여러 커뮤니티 글과 자료를 직접 찾아봐야 했고, 기록 형식도 통일되어 있지 않았습니다.",
          solution:
            "흩어진 유랑 정보를 아이템, 등장 시기, 위치, 필요 재화 기준으로 구조화하고 검색과 시즌별 필터를 추가했습니다. 사용자가 원하는 정보를 빠르게 찾을 수 있도록 탐색 경험을 개선했습니다.",
          iteration:
            "초기에는 100개가 넘는 유랑 데이터를 카드와 페이지네이션으로 제공했지만, 사용자가 원하는 기록 위치를 다시 찾기 어려웠습니다. 이후 한 줄에 하나의 유랑 정보를 확인하는 스크롤 방식으로 변경해 탐색 흐름을 개선했습니다.",
          impact: "커뮤니티 베스트 팁 게시판에 공유되며 신규 사용자가 유입되었고, 이후 반복적으로 활용되는 정보 페이지로 자리 잡았습니다.",
          shot: "유랑대백과 — 스크롤 리스트 · 시즌 색 구분",
        },
        {
          n: "04",
          name: "성향 테스트",
          tag: "정보 서비스에 참여 경험을 추가한 콘텐츠",
          problem:
            "Sky Planner는 일정과 정보를 확인하는 기능 중심의 서비스였고, 사용자가 가볍게 참여하거나 자신의 결과를 확인할 수 있는 콘텐츠 경험은 부족했습니다.",
          solution:
            "15개의 질문을 기반으로 8가지 성향 결과를 제공하고, 각 결과에 특징·장단점·다른 성향과의 관계 정보를 추가해 단순한 테스트 결과가 아닌 탐색 가능한 콘텐츠로 설계했습니다.",
          iteration:
            "초기 결과 화면은 정보 전달 중심이었지만, 사용자가 자신의 결과를 하나의 콘텐츠처럼 확인할 수 있도록 이미지 중심의 결과 화면과 캐릭터 기반 표현으로 개선했습니다.",
          impact:
            "GA4 기준 조회수 15,624회, 활성 사용자 822명을 기록하며 정보 제공뿐 아니라 참여형 콘텐츠가 서비스 방문 경험을 확장할 수 있음을 확인했습니다.",
          shot: "성향 테스트 — 결과 카드 (Sky 크리쳐 8종)",
        },
        {
          n: "05",
          name: "시즌 대백과",
          tag: "유저 요청에서 출발한 최대 조회수 기능",
          problem:
            "만족도 조사에서 '시즌별로 영혼을 정리해 보고 싶다'는 요청이 반복적으로 확인됐습니다. 기존 데이터 구조를 재정비하는 시점에 이를 함께 반영해, 시즌 단위로 탐색할 수 있는 대백과를 새로 설계했습니다.",
          solution:
            "Railway·Vercel로 이전하며 엔티티 구조를 새로 설계하고, 모든 시즌 영혼과 미복각 영혼까지 등록한 시즌 대백과를 만들었습니다.",
          iteration:
            "영혼마다 키워드를 일일이 넣을 수 없어, 유저가 자유롭게 편집·추가하는 키워드 검색으로 열었습니다. 영혼 자료는 게임 친구들과 가이드라인·Google Sheet로 작업을 체계화해 인게임 착용샷을 모았고, 최근에는 보유 영혼·위시 유랑 체크표를 배포했습니다.",
          impact: "시즌 대백과가 전 페이지 중 조회수 1위를 기록했습니다.",
          shot: "시즌 대백과 — 시즌별 영혼 그리드 · 유저 편집 키워드",
        },
      ],
      ptViralLabel: "성향 테스트 — 커뮤니티 확산",
      ptViral: [
        "유저 반응 (모자이크 처리)",
        "커뮤니티 확산 1",
        "커뮤니티 확산 2",
      ],
    },
    ops: {
      h2: "운영하며 서비스 구조를 재정비했습니다.",
      migration:
        "'시즌별로 영혼을 정리해 보고 싶다'는 요청이 꾸준해, 데이터 구조를 재정비하는 시점에 Railway·Vercel로 인프라를 이전하고 엔티티 구조를 새로 설계해 시즌 대백과를 만들었습니다.",
      qa:
        "주요 사용자 플로우를 직접 검수하고 외부 사용자 피드백을 함께 확인했습니다. 운영 중 발견된 오류는 재현 → 수정 → 배포 → 재검증 과정을 거쳐 처리했습니다.",
      shot: "서버 이전 · 영혼 등록 관리자 화면",
    },
    data: {
      h2: "실제 사용 데이터로 개선 방향을 정했습니다.",
      gaLine: "Google Analytics 4 · 2025.02 — 2026.08 · 최근 30일 재방문율 49%",
      insightLabel: "USER BEHAVIOR INSIGHT",
      insights: [
        {
          n: "INSIGHT 1",
          title: "목적이 명확한 플레이 보조 기능에 사용자가 집중됩니다",
          detail: "양초 계산기 활성 1,977 · 키재기 활성 1,009 — 목적이 명확한 계산·비교 기능의 사용성이 높음",
        },
        {
          n: "INSIGHT 2",
          title: "정보 탐색 기능에서 상대적으로 긴 참여 시간이 나타납니다",
          detail: "시즌 대백과 평균 참여 4분 39초 · 유랑대백과 4분 16초 — 탐색 가능한 정보 구조가 핵심",
        },
        {
          n: "INSIGHT 3",
          title: "공유형 콘텐츠는 신규 유입 접점이 됩니다",
          detail: "성향 테스트 조회 15,624 · 활성 822 — 취향을 표현·공유하는 참여형 콘텐츠의 확장 가치 확인",
        },
      ],
      shot: "GA4 대시보드 — 기능별 사용자·조회수",
    },
    fb: {
      h2: "설문으로 모으고, 반영과 보류를 나눴습니다.",
      lead:
        "Google 만족도 조사를 카페에 배포하고 사이트 상단에 링크를 걸어 일정 기간 진행했습니다. 요청을 가치와 비용으로 나눠 처리했습니다.",
      reflected: [
        "시즌 이름 오타 수정",
        "버스 노선표 색감 조정",
        "키재기 사진 스케일 조정",
        "오래된 유랑에 총 유랑 수 표시",
        "미복각 영혼 탭 추가",
        "시즌 대백과(영혼 백과) 신설",
      ],
      notReflected: [
        { req: "시즌 유료 아이템 · 영혼 위치 데이터", why: "매 시즌 수작업 등록 부담이 큼" },
        { req: "보유 옷 룰렛 랜덤 뽑기 기능", why: "저장 구조 대비 구현 공수가 큼" },
      ],
      shot: "Google 만족도 조사 결과 · 개선 전후",
    },
    growth: {
      h2: "직접 홍보에서 커뮤니티 내 자연 확산으로.",
      lead:
        "초기에는 직접 서비스를 알렸고, 이후에는 사용자 공유와 커뮤니티 추천을 통해 유입 경로가 확장됐습니다. 자연 확산의 시작점은 성향 테스트였습니다.",
      channels: [
        {
          title: "네이버 카페",
          body: "첫 홍보 채널. 베스트 팁 게시판에 올랐고, 지금은 홍보하지 않아도 유저들이 질문글에 링크를 달아줍니다.",
        },
        {
          title: "오픈채팅",
          body: "대형 오픈채팅 관리자가 봇 등록을 문의해와 허락했고, 이후 다른 방에도 직접 링크 등록을 요청했습니다. 이 시점부터 사용자가 늘기 시작했습니다.",
        },
        {
          title: "해외 팬사이트",
          body: "영문 양초 계산기를 만들어 두고, 대형 해외 Sky 팬사이트에 GitHub로 문의해 사이트 링크를 등재했습니다. 외국인 유입이 생겼습니다.",
        },
      ],
      shot1: "네이버 카페 베스트 팁 게시판 등극",
      shot2: "오픈채팅 봇 등록",
      shot3: "대형 해외 Sky 팬사이트에 등재된 사이트 링크",
    },
    events: {
      h2: "서비스 밖에서도 커뮤니티를 움직였습니다.",
      lead: "네이버 카페를 중심으로 참여형 이벤트를 직접 기획하고 진행했습니다. 반응이 좋은 이벤트는 여러 차례 이어서 열었습니다.",
      list: [
        { title: "킹받는 플러팅 대회", body: "웃긴 옷과 느끼한 대사로 플러팅하는 참가자를 모집해 투표. 반응이 좋아 4탄까지 진행." },
        { title: "종이배를 찾아라!", body: "맵 곳곳에 띄운 종이배를 찾아 문제를 푸는 팀전. 기획 단독, 문제는 친구와 공동 제작." },
        { title: "보물찾기", body: "사진 속 특징을 보고 장소를 찾아 인증샷. 참여가 많아 2탄까지 진행." },
        { title: "스개팅 (Sky 소개팅)", body: "참가자에게 미션을 주고 스파이 1명을 선정해 이상한 미션을 부여하는 참여형 이벤트." },
      ],
      shot1: "네이버 카페 이벤트 — 킹받는 플러팅 대회",
      shot2: "네이버 카페 이벤트 — 보물찾기",
    },
    o2o: {
      h2: "온라인 서비스를 오프라인 현장으로.",
      lead:
        "Sky 공식 오프라인 행사에서 웹 기반 참여 이벤트를 진행하기 위해, 기획안을 작성해 댓게임 코리아에 사전 승인을 요청하고 확보했습니다.",
      flow: ["QR 스캔", "비행 자격 테스트", "점수 통과", "명함형 비행 자격증 출력"],
      onSite:
        "점수를 통과하면 명함형 비행 자격증을 뽑아 갈 수 있게 했습니다. 성향 테스트 스티커(사이트 QR 포함)와 크리쳐 띠부실을 함께 배포했습니다.",
      dayUsers: "행사 당일 사이트 접속자",
      shot1: "행사 현장 사진",
      shot2: "비행 자격 테스트 결과 화면",
    },
    learn: {
      h2: "필요한 기능과 사용하는 기능은 달랐습니다.",
      musicLabel: "악보 만들기",
      music:
        "커뮤니티에서 이미 많이 사용하던 악보 변환 도구가 있었고, 사용자의 불편을 줄이기 위해 해당 기능을 서비스 안으로 가져오려 했습니다. 하지만 기존 도구를 계속 사용하는 사용자에게 새로운 기능을 사용할 충분한 이유를 만들지는 못했습니다.",
      shot: "악보 만들기 화면 — 사이트 최하단",
      quote:
        "기능을 추가하기 전에 ‘사용자가 기존 방식을 바꾸면서까지 사용할 이유가 있는가’를 먼저 고민하게 되었습니다. 서비스의 완성도보다 중요한 것은 사용자가 실제로 찾는 이유를 만드는 것임을 배웠습니다.",
    },
    final: {
      h2: "Sky 유저들의 반복적인 플레이 불편을 해결하기 위해 설계하고 운영한 데이터 기반 게임 유틸리티 서비스.",
      body:
        "게임 유저의 실제 플레이 행동을 관찰해 반복되는 불편을 발견하고, 출시 이후 GA4 데이터와 사용자 반응을 기반으로 어떤 기능이 실제로 쓰이는지 분석하며 지속적으로 개선했습니다.",
    },
  },
  en: {
    heroSubtitle: "A game utility that folds the repeat management, calculation, and lookup of Sky play into one place.",
    summary: {
      problem: "Sky players kept posting the same questions and friction to the community.",
      action:
        "I solved them directly with eight features. I collected VOC formally through GA4 and my own Google survey, used it to validate priorities, and fed it into feature fixes and additions. I wrote the community announcements for new features and server maintenance myself, answered individual questions coming in by comment and DM, and ran a monthly community event (Mock Exam of the Month).",
      result:
        "15K cumulative users, 49% returning in the last 30 days. I also recovered the AWS outage myself by migrating the infrastructure.",
    },
    ctx: {
      h2: "“How tall is my character?” — the first feature came from one repeated question.",
      lead:
        "While using the Korean Sky community, I noticed one question coming up again and again.",
      quote: "How tall is my character? Is this reading right?",
      note:
        "Sky has a potion that changes your character's height, but no in-game way to measure it. Players were solving a community-invented rule one screenshot at a time, in an external app.",
      flow: ["Screenshot the character", "Open an external editor (ibis)", "Overlay the guideline PNG", "Eyeball the result"],
      uses: ["Height-checker in use 1", "Height-checker in use 2", "Height-checker in use 3"],
    },
    evo: {
      h2: "From one feature to a game utility people use again and again.",
      lead:
        "It started as just the height checker, then grew as I turned each recurring calculation, lookup, and tracking problem in play into its own feature.",
      count: "play-assist features live",
      list: [
        { tag: "01", name: "Height Checker", line: "The community's 'how tall am I?' question, turned into a tool" },
        { tag: "02", name: "Candle Calculator", line: "Can your season currency reach the item you want?" },
        { tag: "03", name: "Traveling Spirits Archive", line: "The spirits and items that cycle back every two weeks" },
        { tag: "04", name: "Personality Test", line: "Shareable content for reach — a Sky-creature personality quiz" },
        { tag: "05", name: "Overdue Spirits", line: "Predicts the 'next return' from each spirit's last visit" },
        { tag: "06", name: "Bus Route Chart", line: "Route charts for candle-run groups — done with taps and typing" },
        { tag: "07", name: "Sheet Music Maker", line: "Score editing for Sky instrument players" },
        { tag: "08", name: "Season Encyclopedia", line: "Every season's spirits, un-returned ones included — the most-viewed feature" },
      ],
      shot: "Home screen — eight feature cards",
    },
    feat: {
      h2: "Recurring questions into features; features validated by data.",
      lead:
        "Here are the five of eight where the planning and operating calls are clearest. Each went through the same order — define the recurring question, build a tool that finishes it in one place on the web, improve it from usage data.",
      items: [
        {
          n: "01",
          name: "Height Checker",
          tag: "The first feature — born from a repeat community question",
          problem:
            "In Sky, drinking a height potion randomizes your character's height. To measure the new height you had to overlay a transparent guideline PNG on your screenshot by hand, and players did this over and over in an external app (ibis).",
          solution:
            "I provide the guideline; the player uploads a photo and checks their height with just move and zoom. It's the community's 'how tall am I?' question ported straight into a tool.",
          iteration:
            "Early on I used a guideline that was already circulating in the community, then made my own guideline and how-to fitted to the service. After feedback that 'positioning the photo is fiddly,' I improved the scaling UX.",
          impact: "It hit the community's popular posts, and players spread it themselves by sharing their measured results there.",
          shot: "Height-checker UI — adjusting a photo over the guideline",
        },
        {
          n: "02",
          name: "Candle Calculator",
          tag: "The most-used feature — starting with asset permission",
          problem:
            "A Sky season runs about 75 days. Season pass, per-spirit item trees, per-item prices — all different, so players had to work out 'can my candles reach the item I want?' by hand every time.",
          solution:
            "Enter your currency and target item and it calculates the candles needed, expected earnings, and days required. The icons and data came from asking overseas Sky-fandom admins and community members for permission directly.",
          iteration:
            "From just showing a result, I improved it to show the whole calculation — future earnings, item totals, days required. When the season item system changed, the old calculation lost its footing, but continued use showed in the data, so I fully redesigned the calculation and UI around the new season structure.",
          impact: "It's been the site's flagship feature since launch. GA4 shows 1,977 active users — the most of any feature.",
          shot: "Candle calculator — calculation walkthrough (before / after redesign)",
        },
        {
          n: "03",
          name: "Traveling Spirits Archive",
          tag: "Turned scattered information into one experience",
          problem:
            "Sky periodically sends a 'traveling spirit' that sells past-season items. To check when an item they wanted would show up, players had to dig through scattered community posts, and the record format wasn't consistent from one post to the next.",
          solution:
            "I structured the scattered travel records by item, timing, location, and currency needed, then added search and per-season filters — improving the browsing experience so players could find what they wanted faster.",
          iteration:
            "At first I presented 100+ records as cards with pagination, but players had trouble finding their way back to a specific record. I switched to a scroll list — one spirit per row — to improve the browsing flow.",
          impact: "It was shared on the community's best-tips board, bringing in new users, and it became a page people kept coming back to.",
          shot: "Traveling Spirits Archive — scroll list, season colors",
        },
        {
          n: "04",
          name: "Personality Test",
          tag: "Content that added a participatory layer to an info service",
          problem:
            "Sky Planner was built around checking schedules and information. It had no lightweight, participatory content where users could get involved or see a personal result.",
          solution:
            "15 questions map to 8 personality results, each with its own traits, pros and cons, and compatible / incompatible types — designed to read as browsable content, not just a quiz result.",
          iteration:
            "The result screen started out information-first. I redesigned it around imagery and character-based visuals so a result reads like a piece of content, not a report.",
          impact:
            "GA4 shows 15,624 views and 822 active users — confirming that participatory content, not just information, can expand how people engage with the service.",
          shot: "Personality test — result card (8 Sky creatures)",
        },
        {
          n: "05",
          name: "Season Encyclopedia",
          tag: "Started from a user request — the most-viewed feature",
          problem:
            "The satisfaction survey repeatedly surfaced one request — 'let me see the spirits organized by season.' While reorganizing the underlying data structure, I folded this in and designed a new encyclopedia you can browse by season.",
          solution:
            "Moving to Railway and Vercel, I redesigned the entity structure and built the Season Encyclopedia, registering every season's spirits including the ones never re-released.",
          iteration:
            "I couldn't tag every spirit by hand, so I opened keyword search to free user editing. For the spirit data I organized the work with game friends using a guideline and a Google Sheet to collect in-game outfit shots, and recently shipped owned-spirit / wishlist checklists.",
          impact: "The Season Encyclopedia is the single most-viewed page on the site.",
          shot: "Season Encyclopedia — per-season spirit grid, user-edited keywords",
        },
      ],
      ptViralLabel: "Personality test — community spread",
      ptViral: ["Player reactions (redacted)", "Community spread 1", "Community spread 2"],
    },
    ops: {
      h2: "Reorganizing the service structure while operating it.",
      migration:
        "The request to 'see the spirits organized by season' kept coming, so while reorganizing the data structure I moved the infrastructure to Railway and Vercel, redesigned the entity structure, and built the Season Encyclopedia.",
      qa:
        "I reviewed the main user flows myself and checked external user feedback alongside. Errors found in operation went through reproduce → fix → deploy → reverify.",
      shot: "Server migration · spirit-registration admin screen",
    },
    data: {
      h2: "Real usage data set the direction for improvements.",
      gaLine: "Google Analytics 4 · 2025.02 — 2026.08 · 49% returning in the last 30 days",
      insightLabel: "USER BEHAVIOR INSIGHT",
      insights: [
        {
          n: "INSIGHT 1",
          title: "Users concentrate on play-assist features with a clear purpose",
          detail: "Candle Calculator 1,977 active · Height Checker 1,009 — features with a clear purpose get high usage",
        },
        {
          n: "INSIGHT 2",
          title: "Info-lookup features show relatively long engagement time",
          detail: "Season Encyclopedia 4m 39s avg · Traveling Spirits Archive 4m 16s — a browsable info structure is the key",
        },
        {
          n: "INSIGHT 3",
          title: "Shareable content becomes an acquisition surface",
          detail: "Personality Test 15,624 views · 822 active — confirms the value of participatory content for expressing and sharing taste",
        },
      ],
      shot: "GA4 dashboard — users and views by feature",
    },
    fb: {
      h2: "Gathered by survey; split into shipped and held.",
      lead:
        "I ran a Google satisfaction survey for a set period, posting it in the community and linking it at the top of the site. I sorted requests by value versus cost.",
      reflected: [
        "Fixed a season-name typo",
        "Adjusted the bus-route-chart colors",
        "Adjusted photo scaling in the height checker",
        "Added a total-spirit count to Overdue Spirits",
        "Added an un-returned spirits tab",
        "Built the Season Encyclopedia",
      ],
      notReflected: [
        { req: "Paid season items · spirit-location data", why: "Heavy manual entry every season" },
        { req: "A roulette to randomly pick from owned outfits", why: "Build cost too high for the storage structure" },
      ],
      shot: "Google survey results · before / after",
    },
    growth: {
      h2: "From direct promotion to organic spread in the community.",
      lead:
        "At first I promoted the service directly; after that, user sharing and community recommendations expanded how people found it. Organic spread began with the personality test.",
      channels: [
        {
          title: "Naver Café",
          body: "The first channel. It made the best-tips board, and now users drop the link into question threads without me promoting it.",
        },
        {
          title: "Open Chat",
          body: "A large open-chat admin asked to register it as a bot, and I said yes; then I asked other rooms to add the link directly. Users started growing from that point.",
        },
        {
          title: "Overseas fan sites",
          body: "I'd made an English candle calculator, then asked a large overseas Sky fan site via GitHub to list the link. Overseas traffic followed.",
        },
      ],
      shot1: "Made the Naver café best-tips board",
      shot2: "Open-chat bot registration",
      shot3: "Site link listed on a large overseas Sky fan site",
    },
    events: {
      h2: "I moved the community outside the service too.",
      lead: "I planned and hosted participatory events myself, centered on the Naver community. The ones that landed, I ran again and again.",
      list: [
        { title: "Cheesiest Flirt Contest", body: "Recruited players to flirt in ridiculous outfits with cheesy lines, then put it to a vote. It went well enough to run four times." },
        { title: "Find the Paper Boats!", body: "A team event — find paper boats scattered across the map and solve puzzles. Planned solo, questions co-written with a friend." },
        { title: "Treasure Hunt", body: "Match a spot from a photo's details, go there, and post a proof shot. Popular enough for a second round." },
        { title: "Sky Blind Date", body: "A participatory event: give players missions and pick one 'spy' to hand a strange one." },
      ],
      shot1: "Naver café event — the flirting contest",
      shot2: "Naver café event — the treasure hunt",
    },
    o2o: {
      h2: "The online service, taken to an offline venue.",
      lead:
        "To run a web-based participation event at Sky's official offline event, I wrote a plan doc and requested and secured advance approval from thatgamecompany Korea.",
      flow: ["Scan the QR", "Flight aptitude test", "Pass the score", "Print a business-card flight license"],
      onSite:
        "Passing the score let you print a business-card flight license to take home. I also handed out personality-test stickers (with the site QR) and creature keyring charms.",
      dayUsers: "site visitors on the event day",
      shot1: "Event venue photo",
      shot2: "Flight aptitude test — result screen",
    },
    learn: {
      h2: "The feature I thought was needed wasn't the one people used.",
      musicLabel: "Sheet Music Maker",
      music:
        "There was already a tool many in the community used for sheet-music conversion, and I tried to bring that into the service to cut the friction. But I couldn't give players who already used that tool a strong enough reason to switch.",
      shot: "Sheet Music Maker screen — bottom of the site",
      quote:
        "Before adding a feature, I now ask first: is there a reason for users to change how they already do things? I learned that what matters more than polish is giving users an actual reason to reach for it.",
    },
    final: {
      h2: "A data-driven game utility I designed and ran to solve the repeat play friction Sky players faced.",
      body:
        "I found the recurring friction by watching how players actually play, then kept improving after launch by analyzing GA4 data and user response to see which features people really use.",
    },
  },
};

function FeatureBlock({
  f,
  alt,
  shot,
  gallery,
  galleryLabel,
  galleryCaptions,
}: {
  f: Feature;
  alt: boolean;
  shot?: Shot;
  gallery?: Shot[];
  galleryLabel?: string;
  galleryCaptions?: string[];
}) {
  return (
    <section className={`px-5 py-10 sm:px-9 sm:py-16 ${alt ? "bg-bg-alt" : ""}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className={EYEBROW}>FEATURE {f.n}</span>
          <span className="text-[12px] text-muted">{f.tag}</span>
        </div>
        <h3 className="mt-3 font-archivo text-[clamp(20px,2.6vw,32px)] leading-[1.15] font-extrabold tracking-[-.03em]">
          {f.name}
        </h3>

        <div className="mt-6 flex max-[900px]:flex-col gap-8 sm:gap-14 items-start">
          {/* left — write-up */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-3">
              <div className="rounded-xl border border-line-2 px-5 py-4">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">PROBLEM</div>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-70">{f.problem}</p>
              </div>
              <div className="rounded-xl border border-accent/25 bg-accent/10 px-5 py-4">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">SOLUTION</div>
                <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-70">{f.solution}</p>
              </div>
              <div className="rounded-xl border border-line-2 px-5 py-4">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">ITERATION</div>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{f.iteration}</p>
              </div>
            </div>

            <p className="mt-4 border-l-2 border-accent pl-4 text-[13.5px] leading-[1.55] text-ink-70">
              <b className="font-archivo tracking-[.02em]">IMPACT</b> — {f.impact}
            </p>
          </div>

          {/* right — image */}
          <div className="w-full flex-1">
            <Placeholder
              variant={alt ? "alt" : "light"}
              label={f.shot}
              img={shot}
              className=""
            />
          </div>
        </div>

        {gallery && gallery.length > 0 && (
          <div className="mt-8">
            {galleryLabel && (
              <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-muted-light">
                {galleryLabel}
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {gallery.map((g, i) => (
                <Placeholder
                  key={g.src}
                  variant={alt ? "alt" : "light"}
                  label={galleryCaptions?.[i] ?? ""}
                  img={g}
                  className=""
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FlowChips({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold">
      {steps.map((step, i, arr) => (
        <span key={step} className="contents">
          <span
            className={
              i === arr.length - 1
                ? "rounded-md bg-ink px-3 py-1.5 text-ink-on-dark"
                : "rounded-md border border-line-2 bg-paper px-3 py-1.5"
            }
          >
            {step}
          </span>
          {i < arr.length - 1 && <span className="text-accent">→</span>}
        </span>
      ))}
    </div>
  );
}

export default async function SkyPlannerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const project = getProject("sky-planner", locale);
  const c = COPY[locale];

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" serviceUrl={project.liveUrl} />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-10 sm:px-9 sm:pt-24 sm:pb-16">
        <div className="flex max-[900px]:flex-col gap-8 sm:gap-14 items-start">
          {/* left — write-up */}
          <div className="min-w-0 flex-1">
            <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
            <h1 className="mt-4 font-archivo text-[clamp(34px,5.4vw,80px)] leading-[1] font-extrabold tracking-[-.042em]">
              {project.title}
            </h1>
            <p className="mt-5 font-archivo text-[clamp(17px,2vw,24px)] font-bold leading-[1.4] tracking-[-.02em] text-ink-70">
              {c.heroSubtitle}
            </p>
            <p className="mt-4 text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]">
              {project.heroBody}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 border-b border-accent pb-0.5 font-archivo text-[13px] font-bold tracking-[.04em] text-accent transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                {project.liveUrl.replace(/^https?:\/\//, "")} ↗
              </a>
            )}
          </div>

          {/* right — image */}
          <Reveal delay={0.1} className="w-full flex-1">
            <Placeholder label={project.screenshotLabel} img={HERO_SHOT} className="w-full" />
          </Reveal>
        </div>

        {/* meta + stats — full width beneath the title/image row */}
        <div className="mt-9 flex max-[860px]:flex-col gap-7 sm:gap-16 items-start border-t border-line-2 pt-6 sm:mt-14">
          <div className="grid flex-[1.6] grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-7">
            {project.meta.map((m) => (
              <div key={m.label}>
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
                  {m.label}
                </div>
                <div
                  className={`mt-1.5 whitespace-pre-line text-[14px] leading-[1.55] ${
                    m.accent ? "font-bold text-accent" : "text-ink-70"
                  }`}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-5 sm:gap-10">
            {heroMetrics.map((m) => (
              <Stat
                key={m.label}
                metric={m}
                numberClassName="font-archivo text-[clamp(23px,2.8vw,38px)] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-2 font-archivo text-[10px] font-semibold tracking-[.13em] text-muted"
              />
            ))}
          </div>
        </div>
      </section>

      <CaseSummary
        items={[
          { k: "PROBLEM", v: c.summary.problem },
          { k: "ACTION", v: c.summary.action },
          { k: "RESULT", v: c.summary.result },
        ]}
        tags={project.tags}
      />

      {/* 01 — Context */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / CONTEXT</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.ctx.h2}</h2>
        </Reveal>
        <p className={LEAD_WIDE}>{c.ctx.lead}</p>
        <p className="mt-5 max-w-[760px] border-l-2 border-accent pl-5 font-archivo text-[clamp(18px,2vw,22px)] font-bold leading-[1.35] tracking-[-.02em]">
          &ldquo;{c.ctx.quote}&rdquo;
        </p>
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.55] text-muted sm:text-[15.5px]">{c.ctx.note}</p>

        <div className="mt-8">
          <FlowChips steps={c.ctx.flow} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[SHOTS.use1, SHOTS.use2, SHOTS.use3].map((s, i) => (
            <Placeholder key={s.src} variant="alt" label={c.ctx.uses[i]} img={s} className="" />
          ))}
        </div>
      </section>

      {/* 02 — Service Evolution */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / SERVICE EVOLUTION</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.evo.h2}</h2>
          </Reveal>
          <p className={LEAD_WIDE}>{c.evo.lead}</p>

          <div className="mt-8 flex items-end gap-3">
            <div className="font-archivo text-[clamp(38px,5vw,64px)] leading-[1] font-extrabold tracking-[-.045em]">8</div>
            <div className="pb-2 font-archivo text-[11px] font-semibold tracking-[.13em] text-muted">{c.evo.count}</div>
          </div>

          <div className="mt-6 flex max-[900px]:flex-col gap-8 sm:gap-14 items-start">
            {/* left — 8 features */}
            <div className="min-w-0 flex-1 grid content-start gap-2.5 sm:grid-cols-2">
              {c.evo.list.map((e) => (
                <div key={e.name} className="rounded-lg border border-line-2 px-4 py-3.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[11px] text-muted-light">{e.tag}</span>
                    <span className="font-archivo text-[15px] font-bold tracking-[-.02em]">{e.name}</span>
                  </div>
                  <p className="mt-1 text-[13px] leading-[1.5] text-muted">{e.line}</p>
                </div>
              ))}
            </div>

            {/* right — image */}
            <Reveal delay={0.1} className="w-full flex-1">
              <Placeholder variant="alt" label={c.evo.shot} img={SHOTS.evo} className="" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 — Data Analysis (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>03 / DATA ANALYSIS</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.data.h2}</h2>
          </Reveal>
          <div className="mt-3 font-mono text-[12px] text-[rgba(244,241,234,.5)]">{c.data.gaLine}</div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:mt-12 sm:grid-cols-5">
            {performanceMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.04}>
                <Stat
                  metric={m}
                  numberClassName="font-archivo text-[clamp(24px,3.2vw,44px)] leading-[1] font-extrabold tracking-[-.045em]"
                  labelClassName="mt-2 font-archivo text-[10px] font-semibold tracking-[.13em] text-[rgba(244,241,234,.5)]"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className={EYEBROW_DARK}>{c.data.insightLabel}</div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {c.data.insights.map((ins, i) => (
                <Reveal key={ins.n} delay={i * 0.06} className="rounded-xl border border-line-dark px-5 py-5">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent-on-dark">
                    {ins.n}
                  </div>
                  <p className="mt-3 font-archivo text-[15.5px] font-bold leading-[1.35] tracking-[-.015em]">
                    {ins.title}
                  </p>
                  <p className="mt-3 text-[13px] leading-[1.55] text-[rgba(244,241,234,.7)]">{ins.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — User Feedback */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>04 / USER FEEDBACK</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.fb.h2}</h2>
        </Reveal>
        <p className={LEAD_WIDE}>{c.fb.lead}</p>

        <div className="mt-8 flex max-[900px]:flex-col gap-8 sm:mt-12 sm:gap-14 items-start">
          {/* left — write-up */}
          <div className="min-w-0 flex-1 flex flex-col gap-3">
            <div className="rounded-xl border border-line-2 px-5 py-5">
              <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">REFLECTED</div>
              <ul className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[1.5] text-ink-70">
                {c.fb.reflected.map((r) => (
                  <li key={r}>· {r}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-line-2 px-5 py-5">
              <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
                NOT REFLECTED
              </div>
              <ul className="mt-3 flex flex-col gap-2.5 text-[14px] leading-[1.5] text-ink-70">
                {c.fb.notReflected.map((r) => (
                  <li key={r.req}>
                    · {r.req}
                    <span className="mt-0.5 block text-[12.5px] text-muted">— {r.why}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right — image */}
          <Reveal delay={0.1} className="w-full flex-1">
            <Placeholder label={c.fb.shot} img={SHOTS.fb} className="" />
          </Reveal>
        </div>
      </section>

      {/* 05 — Growth */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>05 / GROWTH</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.growth.h2}</h2>
          </Reveal>
          <p className={LEAD_WIDE}>{c.growth.lead}</p>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
            {c.growth.channels.map((ch) => (
              <div key={ch.title} className="rounded-xl border border-line-2 px-5 py-5">
                <h3 className="font-archivo text-[16px] font-bold tracking-[-.02em]">{ch.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-70">{ch.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Placeholder variant="alt" label={c.growth.shot1} img={SHOTS.growth1} className="" />
            <Placeholder variant="alt" label={c.growth.shot2} img={SHOTS.growth2} className="" />
            <Placeholder variant="alt" label={c.growth.shot3} img={SHOTS.growth3} className="" />
          </div>
        </div>
      </section>

      {/* 06 — Community & Events */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>06 / COMMUNITY &amp; EVENTS</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.events.h2}</h2>
        </Reveal>
        <p className={LEAD_WIDE}>{c.events.lead}</p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2">
          {c.events.list.map((e) => (
            <div key={e.title} className="rounded-xl border border-line-2 px-5 py-5">
              <h3 className="font-archivo text-[16px] font-bold tracking-[-.02em]">{e.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-70">{e.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Placeholder label={c.events.shot1} img={SHOTS.events1} className="" />
          <Placeholder label={c.events.shot2} img={SHOTS.events2} className="" />
        </div>
      </section>

      {/* 07 — O2O Event */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>07 / O2O EVENT</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.o2o.h2}</h2>
          </Reveal>
          <p className={LEAD_WIDE}>{c.o2o.lead}</p>

          <div className="mt-8 sm:mt-12">
            <FlowChips steps={c.o2o.flow} />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-line-2 px-5 py-5">
              <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">ON SITE</div>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{c.o2o.onSite}</p>
            </div>
            <div className="rounded-xl border border-line-2 px-5 py-5 sm:flex sm:flex-col sm:justify-center">
              <div className="font-archivo text-[clamp(30px,4vw,52px)] leading-[1] font-extrabold tracking-[-.045em]">
                <Stat metric={{ value: 117, label: "" }} numberClassName="" labelClassName="hidden" />
              </div>
              <div className="mt-1.5 font-archivo text-[10px] font-semibold tracking-[.13em] text-muted">
                {c.o2o.dayUsers}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Placeholder variant="alt" label={c.o2o.shot1} img={SHOTS.o2o1} className="" />
            <Placeholder variant="alt" label={c.o2o.shot2} img={SHOTS.o2o2} className="" />
          </div>
        </div>
      </section>

      {/* 08 — Key Features */}
      <section className="border-t border-line px-5 pt-14 sm:px-9 sm:pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>08 / KEY FEATURES</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.feat.h2}</h2>
          </Reveal>
          <p className={LEAD_WIDE}>{c.feat.lead}</p>
        </div>
      </section>

      {c.feat.items.map((f, i) => (
        <FeatureBlock
          key={f.n}
          f={f}
          alt={i % 2 === 1}
          shot={FEATURE_SHOTS[i]}
          gallery={i === 3 ? PT_VIRAL : undefined}
          galleryLabel={i === 3 ? c.feat.ptViralLabel : undefined}
          galleryCaptions={i === 3 ? c.feat.ptViral : undefined}
        />
      ))}

      {/* 09 — Operation & Infrastructure */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>09 / OPERATION &amp; INFRASTRUCTURE</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.ops.h2}</h2>
          </Reveal>

          <div className="mt-8 flex max-[900px]:flex-col gap-8 sm:mt-12 sm:gap-14 items-start">
            {/* left — write-up */}
            <div className="min-w-0 flex-1 flex flex-col gap-3">
              {(
                [
                  ["MIGRATION", c.ops.migration],
                  ["QA", c.ops.qa],
                ] as const
              ).map(([label, body]) => (
                <div key={label} className="rounded-xl border border-line-2 px-5 py-5">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{label}</div>
                  <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{body}</p>
                </div>
              ))}
            </div>

            {/* right — image */}
            <Reveal delay={0.1} className="w-full flex-1">
              <Placeholder variant="alt" label={c.ops.shot} img={SHOTS.ops} className="" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10 — Learning */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>10 / LEARNING</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.learn.h2}</h2>
        </Reveal>

        <div className="mt-8 flex max-[900px]:flex-col gap-8 sm:mt-12 sm:gap-14 items-start">
          {/* left — write-up */}
          <div className="min-w-0 flex-1 flex flex-col gap-3">
            <div className="rounded-xl border border-line-2 px-5 py-5">
              <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
                {c.learn.musicLabel}
              </div>
              <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{c.learn.music}</p>
            </div>
            <p className="mt-3 border-l-2 border-accent pl-5 font-archivo text-[clamp(16px,1.8vw,19px)] font-bold leading-[1.5] tracking-[-.02em]">
              {c.learn.quote}
            </p>
          </div>

          {/* right — image */}
          <Reveal delay={0.1} className="w-full flex-1">
            <Placeholder label={c.learn.shot} img={SHOTS.learn} className="" />
          </Reveal>
        </div>
      </section>

      {/* Final Message */}
      <section id="final" className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>SKY PLANNER</div>
          <Reveal>
            <h2 className="mt-4 max-w-[44rem] font-archivo text-[clamp(21px,3vw,42px)] leading-[1.28] font-extrabold tracking-[-.035em] text-balance">
              {c.final.h2}
            </h2>
          </Reveal>
          <p className="mt-5 max-w-[600px] text-[15px] leading-[1.55] text-[rgba(244,241,234,.75)] text-pretty sm:text-[16px]">
            {c.final.body}
          </p>

          <div className="mt-10 border-t border-line-dark-2 pt-8 sm:mt-14">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              DEMONSTRATED SKILLS
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {demonstratedSkills.map((s) => (
                <span
                  key={s}
                  className="border border-line-dark px-3.5 py-2 font-archivo text-[12px] font-semibold tracking-[.05em] text-[rgba(244,241,234,.85)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 border-t border-line-dark pt-6">
            <div className="font-archivo text-[10px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.4)]">
              BUILT WITH
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11.5px] text-[rgba(244,241,234,.5)]">
              {techStack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line-dark-2 pt-6 sm:mt-14">
            <Link
              href={`/${locale}`}
              className="font-archivo text-[12px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← BACK TO WORK
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}/work/identity5-pick`}
              className="font-archivo text-[12px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              NEXT — IDENTITY5 PICK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
