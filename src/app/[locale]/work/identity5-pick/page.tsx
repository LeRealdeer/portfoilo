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
  CASE_LEAD_DARK as LEAD_DARK,
} from "@/lib/caseStudy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  return {
    title: "Identity5 Pick — Inha Seo",
    description:
      locale === "en"
        ? "How the Identity V fandom's existing taste-sharing and content-making moved into eight tools, run on an 842-skin data pipeline with a human review gate."
        : "제5인격 팬덤이 이미 하던 취향 공유·제작 행동을 8개 도구로 옮기고, 스킨 842종 데이터 파이프라인과 사람 검수 게이트로 운영한 게임 서비스 기획 케이스 스터디.",
  };
}

const heroMetrics = [
  { value: 3.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "ACTIVE USERS" },
  { value: 18.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 842, label: "SKIN RECORDS" },
];

const skills = [
  "Player Behavior Observation",
  "Community Content Tool Design",
  "Large-scale Data Operations",
  "Data QA Pipeline",
  "Cross-cutting System Design",
  "Localization Quality",
  "Retention & Viral Loop Design",
];

const techStack = ["Next.js", "TypeScript", "next-intl", "MediaWiki API", "Cloudinary", "html-to-image", "GA4"];

const COPY = {
  ko: {
    heroSubtitle: "제5인격 팬들이 이미 하고 있던 취향 공유 행동을 더 쉽고 재미있는 경험으로 확장했습니다",
    problem: {
      h2: "팬덤은 이미 취향을 표현하고 있었습니다.",
      lead:
        "제5인격은 캐릭터 87종, 스킨 842종이고 시즌마다 늘어납니다. 그런데 공식은 “내 취향을 구조화해서 남에게 보여주는” 수단을 주지 않습니다. 중견~고인물, 듀오를 구하는 유저, 뉴비 — 거의 전부 모바일에서 접속하는 이들이 각자 손으로 문제를 해결하고 있었습니다.",
      behaviors: [
        { behavior: "캐릭터 취향 공유", friction: "최애 순위를 매기려면 캐릭터 자료를 직접 모아 이미지로 편집해야 합니다." },
        { behavior: "티어표 제작", friction: "아이콘 90여 개를 모으고 크기를 맞추고 격자를 그려야 시작할 수 있습니다." },
        { behavior: "관계성(CP) 콘텐츠 제작", friction: "캐릭터를 늘어놓고 선을 긋다가, 하나를 옮기면 선을 전부 다시 그어야 합니다." },
        { behavior: "보유 스킨 정리·인증", friction: "무엇을 갖고 무엇이 없는지, 한국어로 한곳에 정리된 곳이 없습니다." },
        { behavior: "듀오·파티 모집", friction: "모집글이 자유 서술이라 조건이 누락되고 댓글로 되묻게 됩니다." },
      ],
      quote:
        "경쟁 상대는 다른 팬 사이트가 아니라 “포토샵으로 직접 만들기”와 “그냥 안 만들고 말기”였습니다. 모든 판단 기준을 제작 비용을 0에 가깝게 만드는 데 맞췄습니다.",
      shot1: "커뮤니티 게시글 — 손으로 만든 순위표·티어표",
      shot2: "흩어진 스킨 정리글 · 듀오 모집글",
    },
    solution: {
      h2: "탐색하고, 만들고, 모으고, 공유합니다.",
      lead:
        "팬덤 활동을 네 가지 경험으로 나누고, 각 경험의 제작 비용을 줄이는 것을 목표로 삼았습니다. 회원가입도 서버 저장도 없이, 산출물 이미지 자체가 콘텐츠가 되도록 설계했습니다.",
      flow: ["고르기", "배치", "이미지로 저장", "커뮤니티에 공유"],
      principles: [
        "무가입 · 모바일 브라우저 · 즉시 사용",
        "서버에 결과물을 저장하지 않음",
        "모든 기능이 동일한 워터마크 · 비율의 이미지를 산출",
        "검수를 통과한 데이터만 공개",
      ],
      groups: [
        {
          letter: "A",
          en: "Discover",
          line: "흩어진 정보를 한국어로, 한곳에서.",
          items: [
            { name: "Skin Catalog", desc: "842종을 등급·캐릭터·진영·성별·한정·콜라보로 좁혀 탐색합니다. 상세에 한/영/일 명칭·출시일·시즌·획득 방법·원문 출처를 정리했습니다." },
            { name: "Search & Filter", desc: "필터는 삭제가 아니라 보이는 범위만 조절합니다. 제작 도구에는 검색을 의도적으로 넣지 않았습니다." },
          ],
        },
        {
          letter: "B",
          en: "Create",
          line: "캐릭터 자료를 준비하지 않아도 제작이 시작되게.",
          items: [
            { name: "Character Sort", desc: "두 명씩 비교해 최애 순위를 만드는 랭킹 도구입니다. “잘 모르겠어요”는 공동 순위로 묶고, 진행률은 매 선택마다 재계산합니다." },
            { name: "Tier List", desc: "캐릭터 이미지가 이미 들어 있는 드래그 티어표입니다. 프리셋 주제 24종을 제공하고, 티어 이름·색·개수를 직접 바꿀 수 있습니다." },
            { name: "CP Chart", desc: "캔버스에 캐릭터를 놓고 관계선을 잇습니다. 캐릭터를 옮기면 선이 따라오고, 겹치면 자동으로 우회합니다." },
            { name: "Skin Board", desc: "도감에서 스킨을 골라 위시리스트·복각 요청 표를 만듭니다. 유저의 위시리스트가 곧 커뮤니티 여론 데이터가 됩니다." },
          ],
        },
        {
          letter: "C",
          en: "Collect",
          line: "구경에서 수집 관리로.",
          items: [
            { name: "Skin Checklist", desc: "전체 스킨 격자에서 보유를 체크합니다. “진행 중인 상태”가 남아 스킨을 뽑을 때마다 다시 오는, 재방문 주기가 가장 짧은 기능입니다." },
          ],
        },
        {
          letter: "D",
          en: "Share",
          line: "결과물이 곧 콘텐츠, 유통은 커뮤니티에서.",
          items: [
            { name: "PNG Export", desc: "8개 화면이 같은 워터마크·비율로 이미지를 산출합니다. 모바일에서 만들어도 비율이 일정하게 나옵니다." },
            { name: "Duo Card", desc: "모집 조건을 필수 항목이 고정된 카드로 만듭니다. 개인정보가 섞이는 폼이라 진행 상황을 저장하지 않는 유일한 기능입니다." },
          ],
        },
      ],
      vn:
        "도구가 아닌 콘텐츠도 있습니다 — 연애 시뮬레이터(5~8분 웹 비주얼 노벨)는 도구를 쓰러 오지 않은 유저의 체류·재방문을 만듭니다. 엔진과 콘텐츠를 분리하고 세 언어의 판정 로직을 한 곳에 고정해, 비개발자가 새 편을 계속 추가할 수 있는 구조로 만들었습니다.",
      shot: "홈 화면 — 기능 카드 8종",
    },
    systems: {
      h2: "보이지 않지만 전 기능을 결정한 설계.",
      lead:
        "8개 기능은 세 개의 공통 시스템 위에서 돌아갑니다. 사용자에게 메뉴로 보이지 않지만, 이 설계가 개발 속도와 일관성, 그리고 서비스의 유통 방식을 결정했습니다.",
      list: [
        {
          en: "Character Domain",
          tag: "CORE DATASET",
          body: "8개 기능이 참조하는 캐릭터 원본 87종. 세력+성별 9분류를 컬럼으로 저장하지 않고 조건 조합으로 계산하고, 정렬 순서에 10단위 간격을 둬 신규 캐릭터를 중간에 넣어도 재정렬이 필요 없습니다. 미출시·자택 전용 캐릭터는 characterType 한 줄로 모든 소비처에서 차단됩니다.",
          point: "확장을 전제로 한 데이터 모델링 — “저장할까 계산할까”가 이후 모든 기능의 개발 속도를 좌우했습니다.",
        },
        {
          en: "PNG Output Engine",
          tag: "SHARE PRIMITIVE",
          body: "보이는 화면이 아니라 화면 밖(-9999px)에 고정 PC폭으로 렌더한 클론을 캡처해, 모바일에서 만들어도 결과 비율이 일정합니다. GA 이벤트는 버튼 클릭이 아니라 캡처 성공 후에만 발화합니다.",
          point: "서버 저장이 없는 서비스에서 이미지가 유일한 유통 채널이고, 워터마크가 곧 유입 경로입니다 — 제약을 유통 컨셉으로 전환.",
        },
        {
          en: "Localization",
          tag: "ko / en / ja",
          body: "IP·국가가 아니라 사용자 선택 → 브라우저 언어 → 영어 순으로 판단하고, 캐릭터명·UI·PNG 텍스트까지 전부 언어에 대응합니다. 단 내부 밈 기반 콘텐츠는 번역 대상이 아니라고 보고 예외로 뒀습니다.",
          point: "번역 대상과 비대상을 콘텐츠 성격으로 구분한 판단.",
        },
      ],
      shot: "PNG 출력 — 화면 밖 클론 캡처 구조 / 다국어 결과물",
    },
    data: {
      h2: "확보가 아니라 운영을 설계했습니다.",
      lead:
        "“공개 데이터를 가져왔다”가 아닙니다. 사용자가 신뢰할 수 있는 게임 데이터 경험을 만들기 위해, 확보 · 정제 · 검수 · 공개로 이어지는 재현 가능한 프로세스를 직접 설계했습니다.",
      steps: [
        { n: "01", label: "데이터 확보", note: "Fandom Wiki의 SS·S·A 등급 의상 카테고리 전량" },
        { n: "02", label: "API 수집", note: "MediaWiki API로 continuation 끝까지 순회 · 857건 확보" },
        { n: "03", label: "정제", note: "캐릭터 매칭·이미지·등급 확정 → canonical JSON 842건" },
        { n: "04", label: "한국어 검수", note: "사람이 확정한 명칭·근거·신뢰도 상태" },
        { n: "05", label: "공개 기준", note: "검수를 통과한 스킨만 서비스에 노출" },
      ],
      layerLabel: "수집 → 정제 → 공개의 3단 분리",
      layers: [
        ["원본 수집", "matched.json", "위키 스크랩 그대로 · 파이프라인 내부"],
        ["정제 (canonical)", "canonical.json · 842건", "캐릭터 매칭 · 이미지 · 등급 확정"],
        ["수동 검토 · 제외", "manual-review 10 · excluded 5", "이미지 불일치 · 메타/오프라인 한정판"],
        ["운영 DB", "skins 테이블", "is_active AND is_published만 공개 API 노출"],
      ],
      layerNote:
        "등급별 정제 결과 SS 5 / S 257 / A 580. canonical JSON은 손으로 고치지 않습니다 — 문제가 있으면 override 파일을 고치고 스크립트를 다시 돌려, 다음 시즌 동기화 때도 결과가 일관되도록 합니다.",
      shot: "canonical 리포트 · 이미지 교차검증 화면",
    },
    qa: {
      h2: "자동화를 어디서 멈출지 정했습니다.",
      quote: "데이터를 가져오는 것보다, 신뢰 가능한 데이터를 제공하는 과정이 중요했습니다.",
      whyLabel: "왜 한국어명이 문제인가",
      why: [
        "Fandom은 사용자 편집 위키라 한국어 필드가 있어도 그대로 신뢰할 수 없습니다",
        "공식 한국어명은 출시 후 한참 뒤에 나오거나 안 나옵니다",
        "캐릭터명·등급명(“희대의”)이 스킨명으로 잘못 들어가는 오염 패턴이 있습니다",
      ],
      pipeline: ["자동 후보 수집", "의심 후보 자동 플래그", "사람 검수", "공개 판정", "운영 DB 반영"],
      criteria: (
        <>
          수집 · 정제 · 의심 탐지까지는 기계가 하되, 공개 여부는 딱 하나의 함수가 결정합니다 —
          <b className="text-ink-70"> reviewedByUser = true, 한국어명이 비어있지 않음, 상태 ≠ UNRESOLVED</b>.
          자동 후보는 이 판정에 영향을 주지 못하고, 자동 수집기는 사람이 입력한 필드를 절대 덮어쓰지 않습니다.
        </>
      ),
      gate: [
        ["수집됨 · 미검수", false],
        ["자동 후보만 있음", false],
        ["검수 완료 · UNRESOLVED", false],
        ["검수 완료 + 한국어명 있음", true],
        ["수동 직접 등록 (오프라인 한정판)", true],
      ] as [string, boolean][],
      pub: { yes: "공개", no: "비공개" },
      shot: "로컬 검수 웹 도구 — 스킨별 한국어명·근거·상태",
    },
    fb: {
      h2: "출시 이후 사용자 의견을 반영하며 개선했습니다.",
      cases: [
        {
          tag: "REQUEST",
          title: "자택 스킨 추가",
          ask: "스킨 리스트에 자택 스킨이 누락돼 있다는 사용자 요청",
          change: "Character Type 구조를 확장하고 누락 콘텐츠를 추가",
        },
        {
          tag: "REQUEST",
          title: "티어 라벨 커스터마이징",
          ask: "기본 티어명이 아니라 개인 기준으로 쓰고 싶다는 요청",
          change: "티어 이름을 직접 수정하는 기능 추가",
        },
        {
          tag: "ISSUE",
          title: "스킨 리스트 모바일 UX",
          ask: "좌우 탐색 과정에서 스크롤과 클릭이 충돌해 오작동",
          change: "포인터 이동 임계값 가드로 스크롤·탭 분리",
        },
      ],
      askLabel: "REQUEST",
      problemLabel: "PROBLEM",
      improvementLabel: "IMPROVEMENT",
    },
    ux: {
      h2: "저장하는 순간이 전환이었습니다.",
      lead:
        "가장 중요한 사용자 행동은 “결과물을 PNG로 저장한다”입니다. 저장이 곧 전환이고 GA 이벤트도 이 순간에 발화합니다. 저장이 없으면 커뮤니티에 아무것도 유통되지 않고, 유통이 없으면 신규 유입도 없습니다.",
      metrics: [
        { value: 18356, label: "조회수" },
        { value: 3400, label: "활성 사용자" },
        { value: 0, raw: "6:13", label: "평균 참여 시간" },
        { value: 39661, label: "이벤트" },
      ],
      gaLine: "GA4 · 2026.07.17 ~ 운영 중",
      shot: "GA4 대시보드 — 기능별 사용자·조회수·참여 시간",
      signals: [
        {
          label: "서비스 정체성",
          body: "캐릭터 소트는 “취향을 구조화한다”는 본질을 30초 안에 이해시킵니다. CP표는 범용 툴로는 못 만드는, 팬덤 문화에 정확히 밀착한 기능입니다.",
        },
        {
          label: "재방문 장치",
          body: "스킨 체크표(진행 중 상태) · 연애 시뮬레이터(편 추가·엔딩 컴플리트) · 티어리스트 프리셋 주제(주제 교체)가 각각 다른 방식으로 다시 오게 만듭니다.",
        },
        {
          label: "바이럴 접점",
          body: "CP표와 캐릭터 소트 결과 PNG가 “내 결과 vs 너” 비교로 커뮤니티 게시글의 소재가 됩니다.",
        },
      ],
    },
    priority: {
      h2: "무엇을 강조할지 나눴습니다.",
      lead:
        "사용자 가치 · 기획 난이도 · 운영 경험 · 게임 CM 직무 연관성을 기준으로, 각 기능을 다룰 깊이를 나눴습니다.",
      tiers: [
        {
          tier: "TIER A",
          note: "기획·운영 판단이 드러나는 기능",
          items: ["스킨 데이터 & QA 파이프라인", "캐릭터 소트", "CP표 메이커", "PNG 출력 엔진", "듀오표", "연애 시뮬레이터"],
        },
        {
          tier: "TIER B",
          note: "확장·재활용 설계를 보여줌",
          items: ["스킨 체크표", "티어리스트", "스킨 도감", "캐릭터 데이터 모델"],
        },
        {
          tier: "TIER C",
          note: "표준 구현 · 언급만",
          items: ["스킨리스트 만들기", "캐릭터 목록 페이지", "다국어 라우팅", "GA4 이벤트"],
        },
      ],
    },
    learn: {
      h2: "이미 하고 있는 행동을 발견하는 것.",
      lead:
        "좋은 팬덤 서비스는 사용자가 이미 하고 있는 행동을 발견하고, 더 나은 경험으로 확장하는 것이라고 생각했습니다. 팬덤 서비스는 정보를 제공하는 데서 끝나지 않고, 사용자가 직접 경험을 만들어가는 과정까지 설계해야 한다고 봤습니다.",
      takeaways: [
        {
          n: "01",
          title: "커뮤니티 문화를 기능 사양으로 번역했습니다",
          body: "최애 정하기·티어표·CP표·위시리스트·보유 인증 — 커뮤니티에서 이미 벌어지던 놀이를 관찰하고 각각을 전용 기능으로 구조화했습니다. 없던 니즈를 만든 게 아닙니다.",
        },
        {
          n: "02",
          title: "데이터는 확보보다 운영이었습니다",
          body: "842종을 모으는 것보다, 무엇을 언제 공개할지의 품질 기준과 시즌마다 재실행해도 흔들리지 않는 파이프라인, 자동화와 사람 검수의 경계를 코드로 못 박은 것이 중요했습니다.",
        },
        {
          n: "03",
          title: "제약을 유통 컨셉으로 전환했습니다",
          body: "“로그인 없음 · 서버 저장 없음 · 공유 링크 없음”을 단점이 아니라, “결과물 이미지가 곧 콘텐츠, 유통은 커뮤니티에서”라는 컨셉으로 재정의해 8개 화면에 일관 적용했습니다.",
        },
        {
          n: "04",
          title: "맥락마다 다른 결정을 내렸습니다",
          body: "대부분 기능은 진행 상황을 저장하지만 듀오표는 프라이버시 때문에 저장하지 않고, 대부분 다국어지만 내부 밈 콘텐츠는 한국어 고정, 탐색엔 검색을 제작 도구엔 검색을 넣지 않았습니다.",
        },
        {
          n: "05",
          title: "운영 실수를 구조로 막았습니다",
          body: "테스트로 캐릭터 총원·3개 언어명 존재를 강제하고, 자택 전용 캐릭터를 단일 쿼리로 전 기능에서 차단하고, PNG 이벤트는 캡처 성공 후에만 발화하게 했습니다 — 조심해서가 아니라 시스템이 강제합니다.",
        },
        {
          n: "06",
          title: "재방문·공유 루프를 의도적으로 배치했습니다",
          body: "스킨 체크표(습관적 재방문) · 티어리스트 프리셋(반복 놀이) · 연애 시뮬레이터(엔딩 컴플리트) · CP표·소트 결과(바이럴) · 워터마크(유입) — 각 기능이 루프의 어느 지점을 담당하는지 명확합니다.",
        },
      ],
      myRole: [
        "서비스 기획 · 정보 구조 설계",
        "팬덤 사용자 행동 관찰 및 기능 정의",
        "공통 시스템(캐릭터 도메인 · PNG 엔진 · 다국어) 설계",
        "스킨 842종 데이터 파이프라인 · 한국어 검수 게이트 구축",
        "GA4 분석 · 사용자 의견 수집 및 개선",
      ],
    },
  },
  en: {
    heroSubtitle: "I took the taste-sharing that Identity V fans were already doing and made it easier and more fun.",
    problem: {
      h2: "The fandom was already expressing its taste.",
      lead:
        "Identity V has 87 characters and 842 skins, and it grows every season. But the game gives you no way to structure your taste and show it to someone. Veterans, players looking for a duo, newbies — nearly all on mobile — were each solving that by hand.",
      behaviors: [
        { behavior: "Sharing character taste", friction: "To rank favorites you have to gather character assets and edit an image yourself." },
        { behavior: "Making a tier list", friction: "You have to collect ~90 icons, size them, and draw a grid before you even start." },
        { behavior: "Making relationship (CP) content", friction: "You lay out characters and draw lines — move one and you redraw every line." },
        { behavior: "Tracking and showing owned skins", friction: "There's no single place, in Korean, for what you have and don't." },
        { behavior: "Recruiting for duos and parties", friction: "Recruitment posts are free-form, so conditions get dropped and people ask again in the comments." },
      ],
      quote:
        "The competition wasn't other fan sites — it was “make it yourself in Photoshop” and “just don't bother.” Every call was tuned to push the cost of making it close to zero.",
      shot1: "Community posts — hand-made rankings and tier lists",
      shot2: "Scattered skin-summary posts · duo recruitment posts",
    },
    solution: {
      h2: "Discover, create, collect, share.",
      lead:
        "I split fandom activity into four experiences and set out to cut the making cost of each. No signup, no server storage — the output image itself is the content.",
      flow: ["Pick", "Arrange", "Save as image", "Share to the community"],
      principles: [
        "No signup · mobile browser · use it right away",
        "The server doesn't store the output",
        "Every feature outputs an image with the same watermark and ratio",
        "Only reviewed data goes public",
      ],
      groups: [
        {
          letter: "A",
          en: "Discover",
          line: "Scattered info, in Korean, in one place.",
          items: [
            { name: "Skin Catalog", desc: "Filter 842 skins by rarity, character, faction, gender, limited, and collab. The detail page has KO/EN/JP names, release date, season, how to obtain it, and the original source." },
            { name: "Search & Filter", desc: "Filters narrow what's shown, not the data. I deliberately left search out of the creation tools." },
          ],
        },
        {
          letter: "B",
          en: "Create",
          line: "So making starts without prepping character assets.",
          items: [
            { name: "Character Sort", desc: "A ranking tool that builds your favorites list from pairwise comparisons. “Not sure” groups two characters as a tie, and progress recalculates on every choice." },
            { name: "Tier List", desc: "A drag tier chart with character images already loaded. 24 preset themes, and you can change tier names, colors, and count yourself." },
            { name: "CP Chart", desc: "Place characters on a canvas and connect relationship lines. Move a character and the line follows; overlapping lines route around automatically." },
            { name: "Skin Board", desc: "Pick skins from the catalog to build wishlist / re-release-request tables. A user's wishlist becomes community sentiment data." },
          ],
        },
        {
          letter: "C",
          en: "Collect",
          line: "From browsing to collection tracking.",
          items: [
            { name: "Skin Checklist", desc: "Check off what you own on the full skin grid. The “in-progress state” persists, so people come back every time they pull a skin — the shortest return cycle of any feature." },
          ],
        },
        {
          letter: "D",
          en: "Share",
          line: "The output is the content; distribution happens in the community.",
          items: [
            { name: "PNG Export", desc: "Eight screens output an image with the same watermark and ratio. The ratio stays consistent even when made on mobile." },
            { name: "Duo Card", desc: "Turns recruitment conditions into a card with required fields fixed. It's the only feature that doesn't save progress — because the form mixes in personal info." },
          ],
        },
      ],
      vn:
        "There's content that isn't a tool, too — the Visual Novel (a 5–8 minute web visual novel) keeps players who didn't come for a tool. I separated the engine from the content and pinned the branching logic across all three languages in one place, so a non-developer can keep adding episodes.",
      shot: "Home screen — eight feature cards",
    },
    systems: {
      h2: "The design that decided every feature — unseen.",
      lead:
        "The eight features run on three common systems. Users never see them as a menu, but this design decided development speed, consistency, and how the service distributes.",
      list: [
        {
          en: "Character Domain",
          tag: "CORE DATASET",
          body: "The character source all eight features reference — 87 characters. The 9 faction+gender groups aren't stored as columns but computed from conditions, and sort order uses gaps of 10 so a new character slots into the middle with no reordering. Unreleased and lobby-only characters are blocked across every feature by one line: characterType.",
          point: "Data modeling built for growth — “store it or compute it” set the development speed of every feature after it.",
        },
        {
          en: "PNG Output Engine",
          tag: "SHARE PRIMITIVE",
          body: "It captures a clone rendered off-screen (-9999px) at a fixed desktop width, not the visible screen, so the result ratio stays consistent even when made on mobile. The GA event fires only after a successful capture, not on the button click.",
          point: "In a service with no server storage, the image is the only distribution channel and the watermark is the acquisition path — a constraint turned into a distribution concept.",
        },
        {
          en: "Localization",
          tag: "ko / en / ja",
          body: "It decides by user choice → browser language → English, not IP or country, and covers character names, UI, and PNG text. But meme-based internal content is treated as not for translation and kept as an exception.",
          point: "A call about what is and isn't a translation target, by the nature of the content.",
        },
      ],
      shot: "PNG output — off-screen clone-capture structure / localized output",
    },
    data: {
      h2: "I designed the operation, not just the acquisition.",
      lead:
        "This isn't “I pulled public data.” To make a game-data experience users can trust, I designed a repeatable process — acquire, refine, review, publish — myself.",
      steps: [
        { n: "01", label: "Acquisition", note: "Every SS·S·A rarity outfit category on the Fandom wiki" },
        { n: "02", label: "API collection", note: "Walked MediaWiki API continuation to the end — 857 records" },
        { n: "03", label: "Refinement", note: "Character matching, images, rarity confirmed → canonical JSON, 842 records" },
        { n: "04", label: "Korean review", note: "Human-confirmed name, evidence, and confidence status" },
        { n: "05", label: "Publish criteria", note: "Only reviewed skins are shown in the service" },
      ],
      layerLabel: "A three-layer split: collect → refine → publish",
      layers: [
        ["Raw collection", "matched.json", "Wiki scrape as-is · pipeline internal"],
        ["Refined (canonical)", "canonical.json · 842", "Character matching · images · rarity confirmed"],
        ["Manual review · excluded", "manual-review 10 · excluded 5", "Image mismatch · meta / offline limited"],
        ["Operational DB", "skins table", "Only is_active AND is_published exposed via the public API"],
      ],
      layerNote:
        "Refined by rarity: SS 5 / S 257 / A 580. The canonical JSON is never hand-edited — if there's a problem I fix the override file and re-run the script, so the next season's sync stays consistent.",
      shot: "Canonical report · image cross-check screen",
    },
    qa: {
      h2: "I decided where to stop automating.",
      quote: "Providing data users can trust mattered more than pulling data.",
      whyLabel: "Why the Korean name is the hard part",
      why: [
        "Fandom is a user-edited wiki, so even when a Korean field exists you can't trust it as-is",
        "The official Korean name shows up long after release, or not at all",
        "There's a contamination pattern where a character name or rarity name (“Distinguished”) ends up as the skin name",
      ],
      pipeline: ["Auto candidate collection", "Auto-flag suspicious candidates", "Human review", "Publish decision", "Push to operational DB"],
      criteria: (
        <>
          Machines do collection, refinement, and suspicion detection — but one function alone decides whether
          something goes public:
          <b className="text-ink-70"> reviewedByUser = true, Korean name not empty, status ≠ UNRESOLVED</b>. Auto
          candidates can&apos;t affect that decision, and the auto-collector never overwrites a field a human entered.
        </>
      ),
      gate: [
        ["Collected · not reviewed", false],
        ["Auto candidate only", false],
        ["Reviewed · UNRESOLVED", false],
        ["Reviewed + Korean name present", true],
        ["Manually added (offline limited)", true],
      ] as [string, boolean][],
      pub: { yes: "Public", no: "Private" },
      shot: "Local review web tool — Korean name, evidence, and status per skin",
    },
    fb: {
      h2: "I improved from user feedback after launch.",
      cases: [
        {
          tag: "REQUEST",
          title: "Add lobby-only skins",
          ask: "Users reported that lobby-only skins were missing from the skin list",
          change: "Extended the Character Type structure and added the missing content",
        },
        {
          tag: "REQUEST",
          title: "Custom tier labels",
          ask: "A request to use personal criteria instead of the default tier names",
          change: "Added the ability to edit tier names directly",
        },
        {
          tag: "ISSUE",
          title: "Skin list mobile UX",
          ask: "Scroll and tap collided during left–right browsing, causing misfires",
          change: "Separated scroll and tap with a pointer-movement threshold guard",
        },
      ],
      askLabel: "REQUEST",
      problemLabel: "PROBLEM",
      improvementLabel: "IMPROVEMENT",
    },
    ux: {
      h2: "The moment of saving was the conversion.",
      lead:
        "The most important user action is “save the result as a PNG.” Saving is the conversion, and the GA event fires at that moment. No save, nothing goes to the community; no distribution, no new visitors.",
      metrics: [
        { value: 18356, label: "Views" },
        { value: 3400, label: "Active users" },
        { value: 0, raw: "6:13", label: "Avg. engagement" },
        { value: 39661, label: "Events" },
      ],
      gaLine: "GA4 · since 2026.07.17",
      shot: "GA4 dashboard — users, views, and engagement time by feature",
      signals: [
        {
          label: "Service identity",
          body: "Character Sort gets the essence — “structure your taste” — across in 30 seconds. CP Chart is something a generic tool can't make; it sits exactly on fandom culture.",
        },
        {
          label: "Return hooks",
          body: "Skin Checklist (in-progress state), Visual Novel (new episodes, ending completion), and Tier List preset themes (theme swap) each pull people back a different way.",
        },
        {
          label: "Viral surface",
          body: "CP Chart and Character Sort result PNGs become the material for community posts — “my result vs yours.”",
        },
      ],
    },
    priority: {
      h2: "I split what to emphasize.",
      lead:
        "By user value, planning difficulty, operating experience, and relevance to a game CM role, I sorted how deeply to cover each feature.",
      tiers: [
        {
          tier: "TIER A",
          note: "Where planning and operating calls show",
          items: ["Skin data & QA pipeline", "Character Sort", "CP Chart Maker", "PNG Output Engine", "Duo Card", "Visual Novel"],
        },
        {
          tier: "TIER B",
          note: "Shows extension and reuse design",
          items: ["Skin Checklist", "Tier List", "Skin Catalog", "Character data model"],
        },
        {
          tier: "TIER C",
          note: "Standard implementation · mention only",
          items: ["Skin Board", "Character list page", "Locale routing", "GA4 events"],
        },
      ],
    },
    learn: {
      h2: "Finding what people are already doing.",
      lead:
        "A good fandom service, I think, finds what users are already doing and extends it into a better experience. It doesn't stop at providing information — it has to design the process where the user makes the experience themselves.",
      takeaways: [
        {
          n: "01",
          title: "I translated community culture into feature specs",
          body: "Picking favorites, tier lists, CP charts, wishlists, ownership proof — I watched the play already happening in the community and structured each into a dedicated feature. I didn't invent a need.",
        },
        {
          n: "02",
          title: "Data was about operating, not acquiring",
          body: "More than collecting 842 skins, what mattered was the quality bar for what to publish when, a pipeline that doesn't wobble when re-run each season, and pinning the line between automation and human review in code.",
        },
        {
          n: "03",
          title: "I turned a constraint into a distribution concept",
          body: "“No login, no server storage, no share links” isn't a weakness — I redefined it as “the result image is the content, distribution happens in the community” and applied it consistently across eight screens.",
        },
        {
          n: "04",
          title: "I made different calls per context",
          body: "Most features save progress, but the duo card doesn't, for privacy; most are multilingual, but the internal meme content is Korean-only; discovery has search, the creation tools don't.",
        },
        {
          n: "05",
          title: "I blocked operational mistakes with structure",
          body: "Tests enforce the character count and all three language names, one query blocks lobby-only characters across every feature, and the PNG event fires only after a successful capture — the system enforces it, not care.",
        },
        {
          n: "06",
          title: "I placed the return and viral loops on purpose",
          body: "Skin Checklist (habitual return), Tier List presets (repeat play), Visual Novel (ending completion), CP Chart / Sort results (viral), watermark (acquisition) — it's clear which point of the loop each feature owns.",
        },
      ],
      myRole: [
        "Service planning · information architecture",
        "Fandom behavior observation and feature definition",
        "Common systems (character domain · PNG engine · localization) design",
        "842-skin data pipeline · Korean review gate",
        "GA4 analysis · collecting user feedback and improving",
      ],
    },
  },
} satisfies Record<Locale, unknown>;

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

export default async function Identity5PickPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const project = getProject("identity5-pick", locale);
  const c = COPY[locale];

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" serviceUrl={project.liveUrl} resumeHref="#learning" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-10 sm:px-9 sm:pt-24 sm:pb-16">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
        <h1 className="mt-4 font-archivo text-[clamp(32px,7vw,92px)] leading-[1.02] font-extrabold tracking-[-.042em]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[680px] font-archivo text-[clamp(16.5px,2.2vw,26px)] font-bold leading-[1.4] tracking-[-.02em] text-ink-70">
          {c.heroSubtitle}
        </p>
        <p className="mt-5 max-w-[620px] text-[15.5px] leading-[1.55] text-ink-70 text-pretty sm:text-[16.5px] sm:leading-[1.6]">
          {project.heroBody}
        </p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 border-b border-accent pb-0.5 font-archivo text-[13.5px] font-bold tracking-[.04em] text-accent transition-colors duration-300 hover:border-ink hover:text-ink"
          >
            {project.liveUrl.replace(/^https?:\/\//, "")} ↗
          </a>
        )}

        <div className="mt-10 flex max-[860px]:flex-col gap-8 sm:gap-16 items-start border-t border-line-2 pt-7 sm:mt-16">
          <div className="grid flex-[1.6] grid-cols-2 gap-x-7 gap-y-6">
            {project.meta.map((m) => (
              <div key={m.label}>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                  {m.label}
                </div>
                <div
                  className={`mt-1.5 whitespace-pre-line text-[15px] leading-[1.6] ${
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
                numberClassName="font-archivo text-[clamp(22px,2.8vw,38px)] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-2 font-archivo text-[10px] font-semibold tracking-[.13em] text-muted"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="px-5 sm:px-9">
        <Reveal>
          <Placeholder label={project.screenshotLabel} className="mx-auto h-[clamp(220px,44vw,600px)] max-w-[1440px]" />
        </Reveal>
      </div>

      {/* 01 — User Problem */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / USER PROBLEM</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.problem.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.problem.lead}</p>

        <div className="mt-10 border-t border-line-2 sm:mt-14">
          {c.problem.behaviors.map((p, i) => (
            <Reveal
              key={p.behavior}
              delay={i * 0.04}
              className={`flex max-[760px]:flex-col gap-3 py-5 sm:gap-12 ${
                i === c.problem.behaviors.length - 1 ? "border-b border-line-2" : "border-b border-line-3"
              }`}
            >
              <div className="flex-[1.1] text-[16px] leading-[1.45] font-medium text-ink-70">{p.behavior}</div>
              <div className="flex-[1.4] text-[14.5px] leading-[1.5] text-muted">{p.friction}</div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-[640px] border-l-2 border-accent pl-5 font-archivo text-[clamp(16px,1.9vw,19px)] font-bold leading-[1.45] tracking-[-.02em]">
          {c.problem.quote}
        </p>

        <div className="mt-8 flex gap-3 max-[560px]:flex-col">
          <Placeholder label={c.problem.shot1} className="h-[clamp(140px,17vw,220px)] flex-1" />
          <Placeholder label={c.problem.shot2} className="h-[clamp(140px,17vw,220px)] flex-1" />
        </div>
      </section>

      {/* 02 — Solution */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / SOLUTION</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.solution.h2}</h2>
          </Reveal>
          <p className={LEAD}>{c.solution.lead}</p>

          <div className="mt-9 sm:mt-12">
            <FlowChips steps={c.solution.flow} />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {c.solution.principles.map((p) => (
              <div key={p} className="rounded-lg border border-line-2 px-4.5 py-3.5 text-[14px] text-ink-70">
                {p}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-9 sm:mt-14 sm:gap-12">
            {c.solution.groups.map((g, gi) => (
              <Reveal key={g.en} delay={gi * 0.05}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-archivo text-[13px] font-bold tracking-[.12em] text-accent">{g.letter}</span>
                  <span className="font-archivo text-[21px] font-extrabold tracking-[-.03em]">{g.en}</span>
                  <span className="text-[13px] text-muted">{g.line}</span>
                </div>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {g.items.map((it) => (
                    <div key={it.name} className="rounded-xl border border-line-2 px-4 py-4">
                      <div className="font-mono text-[12.5px] font-semibold tracking-[.02em]">{it.name}</div>
                      <p className="mt-2 text-[13.5px] leading-[1.5] text-ink-70">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-9 max-w-[640px] text-[14px] leading-[1.55] text-muted">{c.solution.vn}</p>

          <Reveal delay={0.1}>
            <Placeholder variant="alt" label={c.solution.shot} className="mt-8 h-[clamp(160px,20vw,260px)]" />
          </Reveal>
        </div>
      </section>

      {/* 03 — Common Systems */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>03 / COMMON SYSTEMS</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.systems.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.systems.lead}</p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
          {c.systems.list.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.05} className="rounded-xl border border-line-2 px-5 py-5">
              <span className="font-archivo text-[10px] font-semibold tracking-[.13em] text-accent">{s.tag}</span>
              <h3 className="mt-2 font-archivo text-[19px] font-bold tracking-[-.02em]">{s.en}</h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-70">{s.body}</p>
              <p className="mt-3 border-l-2 border-accent pl-3 text-[13px] leading-[1.5] text-muted">{s.point}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Placeholder label={c.systems.shot} className="mt-8 h-[clamp(150px,18vw,240px)]" />
        </Reveal>
      </section>

      {/* 04 — Data Operation (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>04 / DATA OPERATION</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.data.h2}</h2>
          </Reveal>
          <p className={LEAD_DARK}>{c.data.lead}</p>

          <div className="mt-10 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-14 sm:grid-cols-5">
            {c.data.steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04} className="bg-ink px-5 pt-6 pb-7">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {step.n}
                </div>
                <div className="mt-3 text-[15px] font-semibold leading-[1.4]">{step.label}</div>
                <div className="mt-2 text-[12.5px] leading-[1.5] text-[rgba(244,241,234,.6)]">{step.note}</div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 border-t border-line-dark-2 pt-8">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]">
              {c.data.layerLabel}
            </div>
            <div className="mt-4 border-t border-line-dark">
              {c.data.layers.map(([layer, file, role], i, arr) => (
                <div
                  key={layer}
                  className={`flex max-[640px]:flex-col gap-1.5 py-3 sm:gap-8 ${
                    i === arr.length - 1 ? "border-b border-line-dark-2" : "border-b border-line-dark"
                  }`}
                >
                  <div className="font-archivo text-[13.5px] font-bold sm:w-[170px] flex-none">{layer}</div>
                  <div className="font-mono text-[12px] text-[rgba(244,241,234,.7)] sm:w-[240px] flex-none">
                    {file}
                  </div>
                  <div className="flex-1 text-[13px] leading-[1.5] text-[rgba(244,241,234,.7)]">{role}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] leading-[1.55] text-[rgba(244,241,234,.55)]">{c.data.layerNote}</p>
          </div>

          <Reveal delay={0.1}>
            <Placeholder variant="dark" label={c.data.shot} className="mt-8 h-[clamp(150px,18vw,240px)]" />
          </Reveal>
        </div>
      </section>

      {/* 05 — QA Process */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>05 / QA PROCESS</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.qa.h2}</h2>
        </Reveal>
        <p className="mt-6 max-w-[600px] border-l-2 border-accent pl-5 font-archivo text-[clamp(17px,1.9vw,20px)] font-bold leading-[1.45] tracking-[-.02em]">
          {c.qa.quote}
        </p>

        <div className="mt-8 rounded-xl border border-line-2 px-5 py-5">
          <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
            {c.qa.whyLabel}
          </div>
          <ul className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[1.5] text-ink-70">
            {c.qa.why.map((w) => (
              <li key={w}>· {w}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <FlowChips steps={c.qa.pipeline} />
        </div>
        <p className="mt-4 max-w-[620px] text-[14px] leading-[1.55] text-muted">{c.qa.criteria}</p>

        <div className="mt-8 border-t border-line-4">
          {c.qa.gate.map(([state, isPublic], i, arr) => (
            <div
              key={state}
              className={`flex items-center gap-4 py-3 ${
                i === arr.length - 1 ? "border-b border-line-4" : "border-b border-line-3"
              }`}
            >
              <div className="flex-1 text-[14px] text-ink-70">{state}</div>
              <div
                className={`font-archivo text-[11px] font-bold tracking-[.1em] ${
                  isPublic ? "text-accent" : "text-muted-light"
                }`}
              >
                {isPublic ? c.qa.pub.yes : c.qa.pub.no}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Placeholder label={c.qa.shot} className="mt-8 h-[clamp(150px,18vw,240px)]" />
        </Reveal>
      </section>

      {/* 06 — User Feedback */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>06 / USER FEEDBACK &amp; IMPROVEMENT</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.fb.h2}</h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3 sm:mt-12">
            {c.fb.cases.map((fc, i) => (
              <Reveal
                key={fc.title}
                delay={i * 0.04}
                className="rounded-xl border border-line-2 bg-paper px-5 py-5 sm:flex sm:gap-12"
              >
                <div className="flex-none sm:w-[210px]">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{fc.tag}</div>
                  <div className="mt-2 font-archivo text-[16px] font-bold tracking-[-.02em]">{fc.title}</div>
                </div>
                <div className="mt-4 grid flex-1 gap-x-10 gap-y-3 sm:mt-0 sm:grid-cols-2">
                  <div>
                    <div className="font-archivo text-[10px] font-semibold tracking-[.13em] text-muted-light">
                      {fc.tag === "ISSUE" ? c.fb.problemLabel : c.fb.askLabel}
                    </div>
                    <p className="mt-1 text-[14px] leading-[1.5] text-ink-70">{fc.ask}</p>
                  </div>
                  <div>
                    <div className="font-archivo text-[10px] font-semibold tracking-[.13em] text-accent">
                      {c.fb.improvementLabel}
                    </div>
                    <p className="mt-1 text-[14px] leading-[1.5] text-ink-70">{fc.change}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — UX Insight */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>07 / UX INSIGHT</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.ux.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.ux.lead}</p>

        <div className="mt-9 flex flex-wrap gap-x-12 gap-y-6 border-t border-line-3 pt-7 sm:mt-12">
          {c.ux.metrics.map((m) => (
            <Stat
              key={m.label}
              metric={m}
              numberClassName="font-archivo text-[clamp(24px,2.6vw,36px)] leading-[1] font-extrabold tracking-[-.04em]"
              labelClassName="mt-2 text-[12px] text-muted"
            />
          ))}
        </div>
        <div className="mt-4 font-mono text-[12px] text-muted-light">{c.ux.gaLine}</div>

        <Reveal delay={0.1}>
          <Placeholder label={c.ux.shot} className="mt-8 h-[clamp(160px,22vw,300px)]" />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3">
          {c.ux.signals.map((s) => (
            <div key={s.label} className="rounded-xl border border-line-2 px-5 py-5">
              <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{s.label}</div>
              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-ink-70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — Feature Priority */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>08 / FEATURE PRIORITY</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.priority.h2}</h2>
          </Reveal>
          <p className={LEAD}>{c.priority.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-12">
            {c.priority.tiers.map((t) => (
              <Reveal key={t.tier} className="rounded-xl border border-line-2 bg-paper px-5 py-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-archivo text-[13px] font-bold tracking-[.12em] text-accent">{t.tier}</span>
                  <span className="text-[13px] text-muted">{t.note}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span key={it} className="rounded-md border border-line-2 px-3 py-1.5 text-[13px] text-ink-70">
                      {it}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Learning (dark) */}
      <section id="learning" className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="flex-[1.2]">
              <div className={EYEBROW_DARK}>09 / LEARNING</div>
              <h2 className={`mt-4 ${H2}`}>{c.learn.h2}</h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[15.5px] leading-[1.58] text-[rgba(244,241,234,.78)] text-pretty sm:text-[16.5px]">
              {c.learn.lead}
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-16 sm:grid-cols-2">
            {c.learn.takeaways.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.04} className="bg-ink px-6 pt-6 pb-7">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {t.n}
                </div>
                <h3 className="mt-3 font-archivo text-[17px] font-bold leading-[1.35] tracking-[-.02em]">
                  {t.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[rgba(244,241,234,.7)]">{t.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              MY ROLE
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {c.learn.myRole.map((r) => (
                <div key={r} className="text-[14.5px] leading-[1.55] text-[rgba(244,241,234,.82)]">
                  · {r}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-line-dark pt-8">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              SKILLS
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
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

          <div className="mt-11 flex flex-wrap items-center gap-4 border-t border-line-dark-2 pt-6 sm:mt-16">
            <Link
              href={`/${locale}/work/sky-planner`}
              className="font-archivo text-[12px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← SKY PLANNER
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}/work/heartopia-archive`}
              className="font-archivo text-[12px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              NEXT — HEARTOPIA ARCHIVE →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
