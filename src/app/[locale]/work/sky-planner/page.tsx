import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
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

const heroMetrics = [
  { value: 335, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 393, label: "PEAK DAU" },
  { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "PEAK MAU" },
];

const performanceMetrics = [
  { value: 335, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
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

const techStack = ["Next.js", "Spring Boot", "MySQL", "AWS EC2 → Railway · Vercel", "GA4", "Figma"];

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
  ctx: { h2: string; lead: string; quote: string; note: string; flow: string[]; before: string; after: string };
  evo: { h2: string; lead: string; count: string; list: { tag: string; name: string; line: string }[]; shot: string };
  feat: { h2: string; lead: string; items: Feature[] };
  ops: { h2: string; migration: string; qa: string; sunset: string; shot: string };
  data: { h2: string; gaLine: string; insightLabel: string; insights: { n: string; title: string; detail: string }[]; shot: string };
  fb: { h2: string; lead: string; reflected: string[]; notReflected: { req: string; why: string }[]; shot: string };
  growth: { h2: string; lead: string; channels: { title: string; body: string }[]; shot1: string; shot2: string };
  events: { h2: string; lead: string; list: { title: string; body: string }[]; shot1: string; shot2: string; shot3: string };
  o2o: { h2: string; lead: string; flow: string[]; onSite: string; dayUsers: string; shot1: string; shot2: string; shot3: string };
  learn: { h2: string; musicLabel: string; music: string; examLabel: string; exam: string; shot: string; quote: string };
  final: { h2: string; body: string };
};

const COPY: Record<Locale, Copy> = {
  ko: {
    heroSubtitle: "게임 플레이 과정에서 반복되던 관리·계산·정보 탐색을 하나로 정리한 게임 유틸리티 서비스",
    ctx: {
      h2: "유저가 계속 묻는 질문에는 반복되는 문제가 있습니다.",
      lead:
        "부트캠프에서 서비스를 만들고 배포하는 법을 배운 뒤, 내가 만들 수 있으니 유저에게 실제로 도움이 되는 것을 만들고 싶었습니다. 네이버 Sky 카페에는 하나의 질문이 계속 올라오고 있었습니다.",
      quote: "제 캐릭터 키가 몇 단인가요? 이 키가 맞나요?",
      note:
        "Sky에는 캐릭터 키를 바꾸는 키 물약이 있지만 인게임에는 키를 재는 방법이 없습니다. 커뮤니티가 스스로 만든 규칙을, 유저들은 외부 앱으로 일일이 해결하고 있었습니다.",
      flow: ["캐릭터 스크린샷 촬영", "외부 편집 앱(이비스) 실행", "가이드라인 PNG 합성", "직접 비교"],
      before: "외부 앱으로 직접 합성",
      after: "Sky Planner 키재기 UI",
    },
    evo: {
      h2: "기능 하나에서 플레이 플랫폼으로.",
      lead:
        "키재기 하나로 시작해, 커뮤니티에서 반복되는 질문을 하나씩 기능으로 옮겨 8개까지 확장했습니다. 유랑대백과에서 방문자가 본격적으로 늘었고, 성향 테스트가 첫 바이럴을 만들었습니다.",
      count: "게임 플레이 보조 기능 운영 중",
      list: [
        { tag: "01", name: "키재기", line: "커뮤니티의 '키 몇 단?' 질문을 도구화한 첫 기능" },
        { tag: "02", name: "양초 계산기", line: "시즌 재화로 목표 아이템을 얻을 수 있는지 계산" },
        { tag: "03", name: "유랑대백과", line: "2주마다 도는 유랑 영혼·아이템 아카이브" },
        { tag: "04", name: "성향 테스트", line: "홍보용 공유 콘텐츠 — Sky 크리쳐 성향 진단" },
        { tag: "05", name: "오래된 유랑", line: "영혼별 마지막 유랑 시점으로 '다음 유랑' 예측" },
        { tag: "06", name: "버스 노선표", line: "양초 파밍 모집용 노선표 — 터치·입력만으로 완성" },
        { tag: "07", name: "악보 만들기", line: "Sky 악기 연주자용 악보 편집 (아쉬운 기능)" },
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
            "처음엔 카페에 배포된 다른 유저의 가이드라인 파일을 썼지만, 이후 가이드라인과 키재기 가이드를 직접 제작했습니다. '사진 위치 조정이 불편하다'는 피드백을 받고 스케일 조정 UX를 개선했습니다.",
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
            "결과만 보여주던 방식에서, 앞으로 얻을 재화·아이템 총합·소요 일수까지 계산 과정을 상세히 보여주도록 개선했습니다. 시즌 아이템 획득 방식이 완전히 바뀌어 종료를 고려했지만, 계속 쓰는 유저가 있어 완전히 다른 방식·디자인으로 리뉴얼했습니다.",
          impact: "출시 이후 지금까지 사이트의 대표 기능. GA4 기준 활성 사용자 1,977명으로 전 기능 중 최다입니다.",
          shot: "양초 계산기 — 계산 과정 시각화 (리뉴얼 전·후)",
        },
        {
          n: "03",
          name: "유랑대백과",
          tag: "방문자가 본격적으로 늘기 시작한 지점",
          problem:
            "Sky는 2주마다 과거 시즌 아이템을 파는 '유랑 영혼'을 보냅니다. 유저들은 '내 위시 유랑이 언제 올까'를 궁금해했지만, 커뮤니티 정리글은 업데이트가 멈추고 잘못된 정보와 오래된 레퍼런스가 섞여 있었습니다.",
          solution:
            "모든 유랑 기록·아이템·재화 가격·위치를 데이터베이스로 만들고 검색과 시즌별 분류를 넣었습니다. 시즌마다 색을 달리해 한눈에 구분되게 했습니다.",
          iteration:
            "100개가 넘는 유랑을 카드 + 페이지네이션으로 보기 어려워('내가 보던 게 몇 페이지였더라'), 한 줄에 영혼 하나씩 스크롤 방식으로 바꿨습니다.",
          impact: "카페 베스트 팁 게시판에 등극했고, 이 시점부터 방문자가 본격적으로 늘었습니다.",
          shot: "유랑대백과 — 스크롤 리스트 · 시즌 색 구분",
        },
        {
          n: "04",
          name: "성향 테스트",
          tag: "홍보를 위해 만든 공유형 콘텐츠",
          problem:
            "핵심 도구가 자리잡은 뒤, 사이트를 알릴 방법이 필요했습니다. 유저의 자기표현 욕구를 활용하기로 했습니다.",
          solution:
            "15개 질문으로 8가지 결과를 Sky 크리쳐에 연결하고, 결과지에 각 성향의 특징·장단점과 잘 맞는/안 맞는 성향까지 넣어 친구에게 권유하고 싶게 만들었습니다.",
          iteration: "MBTI처럼 결과를 공유하는 구조에 집중해, 결과 이미지가 그대로 SNS에 올라가도록 설계했습니다.",
          impact: "SNS에서 바이럴을 타 일일 방문자 최고치를 기록했습니다. GA4 기준 조회 15,624·활성 822명.",
          shot: "성향 테스트 — 결과 카드 (Sky 크리쳐 8종)",
        },
        {
          n: "05",
          name: "시즌 대백과",
          tag: "서버 장애를 계기로 재설계한 최대 조회수 기능",
          problem:
            "서버로 쓰던 AWS가 암호화폐 채굴 목적으로 해킹당했고, 서버를 내리는 과정에서 유랑대백과 데이터가 사라졌습니다. 한편 Google 만족도 조사에서는 '시즌별로 영혼을 모아 보고 싶다'는 요청이 많았습니다.",
          solution:
            "Railway·Vercel로 이전하며 엔티티 구조를 새로 설계하고, 모든 시즌 영혼과 미복각 영혼까지 등록한 시즌 대백과를 만들었습니다.",
          iteration:
            "영혼마다 키워드를 일일이 넣을 수 없어, 유저가 자유롭게 편집·추가하는 키워드 검색으로 열었습니다. 영혼 자료는 게임 친구들과 가이드라인·Google Sheet로 작업을 체계화해 인게임 착용샷을 모았고, 최근에는 보유 영혼·위시 유랑 체크표를 배포했습니다.",
          impact: "시즌 대백과가 전 페이지 중 조회수 1위를 기록했습니다.",
          shot: "시즌 대백과 — 시즌별 영혼 그리드 · 유저 편집 키워드",
        },
      ],
    },
    ops: {
      h2: "장애를 구조 개선의 기회로.",
      migration:
        "서버로 쓰던 AWS EC2가 암호화폐 채굴 목적으로 해킹당해 서버를 내리며 데이터가 유실됐습니다. 이를 계기로 Railway·Vercel로 이전하고 엔티티 구조를 재설계했습니다.",
      qa:
        "자동 테스트 없이 직접 돌려보며 QA하고, 친구에게 어색한 부분을 짚어달라고 부탁했습니다. 영혼 등록 오류 등 운영 중 버그는 재현·수정·배포를 반복하며 처리했습니다.",
      sunset:
        "모의고사 시스템은 매달 문제를 만들어야 해 운영 부담이 커 폐기했습니다 — 만드는 비용보다 유지하는 비용을 기준으로 판단했습니다.",
      shot: "서버 이전 · 영혼 등록 관리자 화면",
    },
    data: {
      h2: "실제 사용 데이터로 개선 방향을 정했습니다.",
      gaLine: "Google Analytics 4 · 2025.02 — 2026.08 · 최근 30일 재방문율 49%",
      insightLabel: "USER BEHAVIOR INSIGHT",
      insights: [
        {
          n: "INSIGHT 1",
          title: "유저는 정보보다 플레이 보조 도구를 반복 사용합니다",
          detail: "양초 계산기 활성 1,977 · 키재기 활성 1,009 — 목적이 명확한 계산·비교 기능의 사용성이 높음",
        },
        {
          n: "INSIGHT 2",
          title: "정보형 콘텐츠는 긴 체류 시간을 만듭니다",
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
      h2: "유저가 자연스럽게 확산하는 구조.",
      lead:
        "직접 홍보로 시작하되, 이후에는 유저와 커뮤니티가 서로 공유하며 퍼지도록 채널을 설계했습니다. 자연 확산의 시작점은 성향 테스트였습니다.",
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
      shot1: "카페 베스트 팁 게시글",
      shot2: "해외 팬사이트 링크 등재",
    },
    events: {
      h2: "서비스 밖에서도 커뮤니티를 움직였습니다.",
      lead: "약 20명 규모의 디스코드 서버를 운영하고, 네이버 카페에서 참여형 이벤트를 직접 기획·진행했습니다.",
      list: [
        { title: "킹받는 플러팅 대회", body: "웃긴 옷과 느끼한 대사로 플러팅하는 참가자를 모집해 투표. 반응이 좋아 4탄까지 진행." },
        { title: "종이배를 찾아라!", body: "맵 곳곳에 띄운 종이배를 찾아 문제를 푸는 팀전. 기획 단독, 문제는 친구와 공동 제작." },
        { title: "보물찾기", body: "사진 속 특징을 보고 장소를 찾아 인증샷. 참여가 많아 2탄까지 진행." },
        { title: "스개팅 (Sky 소개팅)", body: "참가자에게 미션을 주고 스파이 1명을 선정해 이상한 미션을 부여하는 참여형 이벤트." },
      ],
      shot1: "이벤트 기획안 · 진행 컷 1",
      shot2: "이벤트 진행 컷 2",
      shot3: "디스코드 서버 · 공지",
    },
    o2o: {
      h2: "온라인 서비스를 오프라인 현장으로.",
      lead:
        "Sky 공식 오프라인 행사에서 사이트를 활용한 이벤트를 진행했습니다. 현장 진행이 불발될 수 있어, 기획 문서를 만들어 댓게임 코리아에 메일로 허락을 받았습니다.",
      flow: ["QR 스캔", "비행 자격 테스트", "점수 통과", "명함형 비행 자격증 출력"],
      onSite:
        "점수를 통과하면 명함형 비행 자격증을 뽑아 갈 수 있게 했습니다. 성향 테스트 스티커(사이트 QR 포함)와 크리쳐 띠부실을 함께 배포했습니다.",
      dayUsers: "행사 당일 사이트 접속자",
      shot1: "행사 현장 사진",
      shot2: "QR · 비행 자격 테스트 화면",
      shot3: "명함형 비행 자격증 · 스티커",
    },
    learn: {
      h2: "채택은 완성도가 아니라 전환 이유가 결정합니다.",
      musicLabel: "악보 만들기",
      music:
        "이미 커뮤니티가 표준으로 쓰는 앱이 있었고, 그 앱 개발자에게 직접 컨택해 악보 변환 키까지 받아 연동했습니다. 하지만 유저가 익숙한 도구를 두고 옮겨올 만큼의 이유는 만들지 못했고, 채택으로 이어지지 않았습니다.",
      examLabel: "모의고사 시스템",
      exam: "매달 문제를 만들어야 했고, 몇 달간 친구들에게 부탁하다 운영 부담으로 폐기했습니다.",
      shot: "악보 만들기 화면 — 사이트 최하단",
      quote:
        "기능을 만들기 전에 ‘유저가 지금 쓰는 것을 두고 옮겨올 이유가 있는가’를 먼저 확인합니다. 완성도보다 전환할 이유가 채택을 결정한다는 것을 배웠습니다.",
    },
    final: {
      h2: "Sky 유저들의 반복적인 플레이 불편을 해결하기 위해 설계하고 운영한 데이터 기반 게임 유틸리티 서비스.",
      body:
        "게임 유저의 실제 플레이 행동을 관찰해 반복되는 불편을 발견하고, 출시 이후 GA4 데이터와 사용자 반응을 기반으로 어떤 기능이 실제로 쓰이는지 분석하며 지속적으로 개선했습니다.",
    },
  },
  en: {
    heroSubtitle: "A game utility that folds the repeat management, calculation, and lookup of Sky play into one place.",
    ctx: {
      h2: "A question people keep asking hides a recurring problem.",
      lead:
        "After a bootcamp taught me how to build and ship a service, I wanted to make something that actually helped players — because now I could. One question kept coming up in the Korean Sky community.",
      quote: "How tall is my character? Is this reading right?",
      note:
        "Sky has a potion that changes your character's height, but no in-game way to measure it. Players were solving a community-invented rule one screenshot at a time, in an external app.",
      flow: ["Screenshot the character", "Open an external editor (ibis)", "Overlay the guideline PNG", "Eyeball the result"],
      before: "Overlaying by hand in an external app",
      after: "Sky Planner height-checker UI",
    },
    evo: {
      h2: "From one feature to a play platform.",
      lead:
        "It started as just the height checker, then grew to eight — each feature a recurring community question turned into a tool. Traffic really began climbing with the Traveling Spirits Archive, and the personality test drove the first viral spike.",
      count: "play-assist features live",
      list: [
        { tag: "01", name: "Height Checker", line: "The community's 'how tall am I?' question, turned into a tool" },
        { tag: "02", name: "Candle Calculator", line: "Can your season currency reach the item you want?" },
        { tag: "03", name: "Traveling Spirits Archive", line: "The spirits and items that cycle back every two weeks" },
        { tag: "04", name: "Personality Test", line: "Shareable content for reach — a Sky-creature personality quiz" },
        { tag: "05", name: "Overdue Spirits", line: "Predicts the 'next return' from each spirit's last visit" },
        { tag: "06", name: "Bus Route Chart", line: "Route charts for candle-run groups — done with taps and typing" },
        { tag: "07", name: "Sheet Music Maker", line: "Score editing for Sky instrument players (the one that didn't land)" },
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
            "At first I used another player's guideline file that was circulating, then made my own guideline and how-to. After feedback that 'positioning the photo is fiddly,' I improved the scaling UX.",
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
            "From just showing a result, I improved it to show the whole calculation — future earnings, item totals, days required. When the season item system changed completely I considered shutting it down, but players kept using it, so I rebuilt it with a completely different approach and design.",
          impact: "It's been the site's flagship feature since launch. GA4 shows 1,977 active users — the most of any feature.",
          shot: "Candle calculator — calculation walkthrough (before / after redesign)",
        },
        {
          n: "03",
          name: "Traveling Spirits Archive",
          tag: "Where visitor numbers really started to climb",
          problem:
            "Every two weeks Sky sends a 'traveling spirit' that sells past-season items. Players wanted to know 'when is my wishlist spirit coming?' — but the community summary posts had stopped updating and were mixed with wrong info and stale references.",
          solution:
            "I put every travel record, item, price, and location into a database with search and per-season filtering, giving each season its own color so it reads at a glance.",
          iteration:
            "Over 100 records were hard to browse as cards + pagination ('which page was that on again?'), so I switched to a scroll list with one spirit per row.",
          impact: "It made the community's best-tips board, and visitor numbers started climbing in earnest from that point.",
          shot: "Traveling Spirits Archive — scroll list, season colors",
        },
        {
          n: "04",
          name: "Personality Test",
          tag: "Shareable content, built for reach",
          problem:
            "Once the core tools were in place, I needed a way to get the site known. I decided to lean on people's urge to express themselves.",
          solution:
            "15 questions map to 8 results tied to Sky creatures. The result page includes each type's traits, pros and cons, and compatible / incompatible types, so people want to send it to a friend.",
          iteration: "I focused on an MBTI-style shareable structure, designing the result image to post straight to social media.",
          impact: "It went viral on social and set the daily-visitor record. GA4: 15,624 views, 822 active users.",
          shot: "Personality test — result card (8 Sky creatures)",
        },
        {
          n: "05",
          name: "Season Encyclopedia",
          tag: "Redesigned off a server incident — the most-viewed feature",
          problem:
            "The AWS server was hacked for crypto mining, and taking it down lost the Traveling Spirits Archive data. Meanwhile the Google satisfaction survey had lots of requests to 'see all spirits grouped by season.'",
          solution:
            "Moving to Railway and Vercel, I redesigned the entity structure and built the Season Encyclopedia, registering every season's spirits including the ones never re-released.",
          iteration:
            "I couldn't tag every spirit by hand, so I opened keyword search to free user editing. For the spirit data I organized the work with game friends using a guideline and a Google Sheet to collect in-game outfit shots, and recently shipped owned-spirit / wishlist checklists.",
          impact: "The Season Encyclopedia is the single most-viewed page on the site.",
          shot: "Season Encyclopedia — per-season spirit grid, user-edited keywords",
        },
      ],
    },
    ops: {
      h2: "An incident, used as a chance to improve the structure.",
      migration:
        "The AWS EC2 server was hacked for crypto mining; taking it down lost data. I used that as the moment to move to Railway and Vercel and redesign the entity structure.",
      qa:
        "No automated tests — I QA'd by running through it myself and asking friends to point out anything awkward. I handled live bugs like spirit-registration errors with a repeat cycle of reproduce, fix, deploy, recheck.",
      sunset:
        "I retired the mock-exam system — it needed new questions every month, and I judged the upkeep cost above the value of making them.",
      shot: "Server migration · spirit-registration admin screen",
    },
    data: {
      h2: "Real usage data set the direction for improvements.",
      gaLine: "Google Analytics 4 · 2025.02 — 2026.08 · 49% returning in the last 30 days",
      insightLabel: "USER BEHAVIOR INSIGHT",
      insights: [
        {
          n: "INSIGHT 1",
          title: "Players reach for play-assist tools repeatedly, not for information",
          detail: "Candle Calculator 1,977 active · Height Checker 1,009 — features with a clear purpose get high usage",
        },
        {
          n: "INSIGHT 2",
          title: "Informational content builds long dwell time",
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
      h2: "A structure where users spread it on their own.",
      lead:
        "I started with direct promotion, then designed the channels so users and the community would share it around themselves. The personality test was where organic spread began.",
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
      shot1: "Café best-tips post",
      shot2: "Link listed on an overseas fan site",
    },
    events: {
      h2: "I moved the community outside the service too.",
      lead: "I ran a Discord server of about 20 people and planned and hosted participatory events in the Naver community myself.",
      list: [
        { title: "Cheesiest Flirt Contest", body: "Recruited players to flirt in ridiculous outfits with cheesy lines, then put it to a vote. It went well enough to run four times." },
        { title: "Find the Paper Boats!", body: "A team event — find paper boats scattered across the map and solve puzzles. Planned solo, questions co-written with a friend." },
        { title: "Treasure Hunt", body: "Match a spot from a photo's details, go there, and post a proof shot. Popular enough for a second round." },
        { title: "Sky Blind Date", body: "A participatory event: give players missions and pick one 'spy' to hand a strange one." },
      ],
      shot1: "Event plan · action shot 1",
      shot2: "Event action shot 2",
      shot3: "Discord server · announcements",
    },
    o2o: {
      h2: "The online service, taken to an offline venue.",
      lead:
        "I ran a site-based event at Sky's official offline event. Since on-site execution could fall through, I wrote a plan doc and got permission from thatgamecompany Korea by email.",
      flow: ["Scan the QR", "Flight aptitude test", "Pass the score", "Print a business-card flight license"],
      onSite:
        "Passing the score let you print a business-card flight license to take home. I also handed out personality-test stickers (with the site QR) and creature keyring charms.",
      dayUsers: "site visitors on the event day",
      shot1: "Event venue photo",
      shot2: "QR · flight aptitude test screen",
      shot3: "Business-card flight license · stickers",
    },
    learn: {
      h2: "Adoption is decided by a reason to switch, not by polish.",
      musicLabel: "Sheet Music Maker",
      music:
        "The community already had a standard app for this. I even contacted its developer and got a conversion key to integrate. But I never gave players enough reason to leave a tool they knew, and it didn't turn into adoption.",
      examLabel: "Mock Exam System",
      exam: "It needed new questions every month; after a few months of leaning on friends, I retired it under the operating load.",
      shot: "Sheet Music Maker screen — bottom of the site",
      quote:
        "Before building a feature I now check first: is there a reason for users to leave what they already use? I learned that a reason to switch, not polish, decides adoption.",
    },
    final: {
      h2: "A data-driven game utility I designed and ran to solve the repeat play friction Sky players faced.",
      body:
        "I found the recurring friction by watching how players actually play, then kept improving after launch by analyzing GA4 data and user response to see which features people really use.",
    },
  },
};

function FeatureBlock({ f, alt }: { f: Feature; alt: boolean }) {
  return (
    <section className={`px-5 py-9 sm:px-9 sm:py-12 ${alt ? "bg-bg-alt" : ""}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className={EYEBROW}>FEATURE {f.n}</span>
          <span className="text-[12px] text-muted">{f.tag}</span>
        </div>
        <h3 className="mt-3 font-archivo text-[clamp(20px,2.6vw,32px)] leading-[1.15] font-extrabold tracking-[-.03em]">
          {f.name}
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line-2 px-5 py-4">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">PROBLEM</div>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-70">{f.problem}</p>
          </div>
          <div className="rounded-xl border border-accent/25 bg-accent/10 px-5 py-4">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">SOLUTION</div>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-ink-70">{f.solution}</p>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-line-2 px-5 py-4">
          <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">ITERATION</div>
          <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{f.iteration}</p>
        </div>

        <p className="mt-4 border-l-2 border-accent pl-4 text-[13.5px] leading-[1.55] text-ink-70">
          <b className="font-archivo tracking-[.02em]">IMPACT</b> — {f.impact}
        </p>

        <Placeholder variant={alt ? "alt" : "light"} label={f.shot} className="mt-5 h-[clamp(130px,16vw,190px)]" />
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
      <Header locale={locale} variant="case" serviceUrl={project.liveUrl} resumeHref="#final" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-10 sm:px-9 sm:pt-24 sm:pb-16">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
        <h1 className="mt-4 font-archivo text-[clamp(34px,7vw,92px)] leading-[1] font-extrabold tracking-[-.042em]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[680px] font-archivo text-[clamp(17px,2.2vw,26px)] font-bold leading-[1.4] tracking-[-.02em] text-ink-70">
          {c.heroSubtitle}
        </p>
        <p className="mt-4 max-w-[600px] text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]">
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

        <div className="mt-9 flex max-[860px]:flex-col gap-7 sm:gap-16 items-start border-t border-line-2 pt-6 sm:mt-14">
          <div className="grid flex-[1.6] grid-cols-2 gap-x-7 gap-y-5">
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
          <div className="flex flex-1 gap-8 sm:gap-10">
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

      <div className="px-5 sm:px-9">
        <Reveal>
          <Placeholder label={project.screenshotLabel} className="mx-auto h-[clamp(220px,42vw,560px)] max-w-[1440px]" />
        </Reveal>
      </div>

      {/* 01 — Context */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / CONTEXT</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.ctx.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.ctx.lead}</p>
        <p className="mt-5 max-w-[560px] border-l-2 border-accent pl-5 font-archivo text-[clamp(18px,2vw,22px)] font-bold leading-[1.35] tracking-[-.02em]">
          &ldquo;{c.ctx.quote}&rdquo;
        </p>
        <p className="mt-5 max-w-[600px] text-[15px] leading-[1.55] text-muted sm:text-[15.5px]">{c.ctx.note}</p>

        <div className="mt-8">
          <FlowChips steps={c.ctx.flow} />
        </div>

        <div className="mt-8 flex gap-4 max-[560px]:flex-col">
          <div className="flex-1">
            <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-muted-light">BEFORE</div>
            <Placeholder variant="alt" label={c.ctx.before} className="h-[clamp(140px,18vw,220px)]" />
          </div>
          <div className="flex-1">
            <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-accent">AFTER</div>
            <Placeholder variant="alt" label={c.ctx.after} className="h-[clamp(140px,18vw,220px)]" />
          </div>
        </div>
      </section>

      {/* 02 — Service Evolution */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / SERVICE EVOLUTION</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.evo.h2}</h2>
          </Reveal>
          <p className={LEAD}>{c.evo.lead}</p>

          <div className="mt-8 flex items-end gap-3">
            <div className="font-archivo text-[clamp(38px,5vw,64px)] leading-[1] font-extrabold tracking-[-.045em]">8</div>
            <div className="pb-2 font-archivo text-[11px] font-semibold tracking-[.13em] text-muted">{c.evo.count}</div>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
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

          <Reveal delay={0.1}>
            <Placeholder variant="alt" label={c.evo.shot} className="mt-8 h-[clamp(160px,20vw,260px)]" />
          </Reveal>
        </div>
      </section>

      {/* 03 — Key Features */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 sm:px-9 sm:pt-24">
        <div className={EYEBROW}>03 / KEY FEATURES</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.feat.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.feat.lead}</p>
      </section>

      {c.feat.items.map((f, i) => (
        <FeatureBlock key={f.n} f={f} alt={i % 2 === 1} />
      ))}

      {/* 04 — Operation & Infrastructure */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>04 / OPERATION &amp; INFRASTRUCTURE</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.ops.h2}</h2>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
            {(
              [
                ["MIGRATION", c.ops.migration],
                ["QA", c.ops.qa],
                ["SUNSET", c.ops.sunset],
              ] as const
            ).map(([label, body]) => (
              <div key={label} className="rounded-xl border border-line-2 px-5 py-5">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{label}</div>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{body}</p>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Placeholder variant="alt" label={c.ops.shot} className="mt-8 h-[clamp(150px,18vw,240px)]" />
          </Reveal>
        </div>
      </section>

      {/* 05 — Data Analysis (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>05 / DATA ANALYSIS</div>
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

            <Reveal delay={0.1}>
              <Placeholder variant="dark" label={c.data.shot} className="mt-8 h-[clamp(160px,22vw,300px)]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — User Feedback */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>06 / USER FEEDBACK</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.fb.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.fb.lead}</p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2">
          <div className="rounded-xl border border-line-2 px-5 py-5">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">REFLECTED</div>
            <ul className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[1.5] text-ink-70">
              {c.fb.reflected.map((r) => (
                <li key={r}>· {r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line-2 px-5 py-5">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">NOT REFLECTED</div>
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

        <Reveal delay={0.1}>
          <Placeholder label={c.fb.shot} className="mt-6 h-[clamp(150px,18vw,240px)]" />
        </Reveal>
      </section>

      {/* 07 — Growth */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>07 / GROWTH</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.growth.h2}</h2>
          </Reveal>
          <p className={LEAD}>{c.growth.lead}</p>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
            {c.growth.channels.map((ch) => (
              <div key={ch.title} className="rounded-xl border border-line-2 px-5 py-5">
                <h3 className="font-archivo text-[16px] font-bold tracking-[-.02em]">{ch.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-70">{ch.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3 max-[560px]:flex-col">
            <Placeholder variant="alt" label={c.growth.shot1} className="h-[clamp(130px,16vw,200px)] flex-1" />
            <Placeholder variant="alt" label={c.growth.shot2} className="h-[clamp(130px,16vw,200px)] flex-1" />
          </div>
        </div>
      </section>

      {/* 08 — Community & Events */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>08 / COMMUNITY &amp; EVENTS</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.events.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.events.lead}</p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2">
          {c.events.list.map((e) => (
            <div key={e.title} className="rounded-xl border border-line-2 px-5 py-5">
              <h3 className="font-archivo text-[16px] font-bold tracking-[-.02em]">{e.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-70">{e.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Placeholder label={c.events.shot1} className="h-[clamp(130px,15vw,190px)]" />
          <Placeholder label={c.events.shot2} className="h-[clamp(130px,15vw,190px)]" />
          <Placeholder label={c.events.shot3} className="h-[clamp(130px,15vw,190px)]" />
        </div>
      </section>

      {/* 09 — O2O Event */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>09 / O2O EVENT</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.o2o.h2}</h2>
          </Reveal>
          <p className={LEAD}>{c.o2o.lead}</p>

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

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Placeholder variant="alt" label={c.o2o.shot1} className="h-[clamp(130px,15vw,190px)]" />
            <Placeholder variant="alt" label={c.o2o.shot2} className="h-[clamp(130px,15vw,190px)]" />
            <Placeholder variant="alt" label={c.o2o.shot3} className="h-[clamp(130px,15vw,190px)]" />
          </div>
        </div>
      </section>

      {/* 10 — Learning */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>10 / LEARNING</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.learn.h2}</h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2">
          <div className="rounded-xl border border-line-2 px-5 py-5">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
              {c.learn.musicLabel}
            </div>
            <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{c.learn.music}</p>
          </div>
          <div className="rounded-xl border border-line-2 px-5 py-5">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
              {c.learn.examLabel}
            </div>
            <p className="mt-2 text-[14px] leading-[1.55] text-ink-70">{c.learn.exam}</p>
          </div>
        </div>

        <Reveal delay={0.1}>
          <Placeholder label={c.learn.shot} className="mt-6 h-[clamp(130px,15vw,200px)]" />
        </Reveal>

        <p className="mt-8 max-w-[640px] border-l-2 border-accent pl-5 font-archivo text-[clamp(17px,1.9vw,20px)] font-bold leading-[1.5] tracking-[-.02em]">
          {c.learn.quote}
        </p>
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
