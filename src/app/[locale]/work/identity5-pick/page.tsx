import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { HERO_SHOT, QA_SHOT, UX_SHOT, ITEM_SHOTS } from "./shots";
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
  "Data QA Pipeline",
  "Content Operations",
  "Constraint-driven Design",
  "Localization QA",
];

const techStack = ["Next.js", "TypeScript", "next-intl", "MediaWiki API", "Cloudinary", "html-to-image", "GA4"];

const COPY = {
  ko: {
    heroSubtitle: "제5인격 팬들이 이미 하고 있던 취향 공유 행동을 더 쉽고 재미있는 경험으로 확장했습니다",
    problem: {
      h2: "팬덤은 이미 취향을 표현하고 있었습니다.",
      lead:
        "제5인격은 캐릭터 87종, 스킨 842종이고 시즌마다 늘어납니다. 팬덤에서는 게임 밖에서 최애 순위, 티어표, CP표 등을 직접 만들어 공유하는 문화가 형성돼 있었고, 유저들은 이미지 편집 앱이나 자유 형식의 게시글로 이를 해결하고 있었습니다.",
      behaviors: [
        { behavior: "캐릭터 취향 공유", friction: "최애 순위를 매기려면 캐릭터 자료를 직접 모아 이미지로 편집해야 합니다." },
        { behavior: "티어표 제작", friction: "캐릭터 아이콘을 하나씩 모으고 크기를 맞춘 뒤 격자를 만들어야 시작할 수 있습니다." },
        { behavior: "관계성(CP) 콘텐츠 제작", friction: "캐릭터를 늘어놓고 선을 긋다가, 하나를 옮기면 선을 전부 다시 그어야 합니다." },
        { behavior: "보유 스킨 정리·인증", friction: "무엇을 갖고 무엇이 없는지, 한국어로 한곳에 정리된 곳이 없습니다." },
        { behavior: "듀오·파티 모집", friction: "자유 형식의 모집글은 티어·시간대·마이크 여부 등 필요한 정보를 한눈에 비교하기 어렵습니다." },
      ],
    },
    solution: {
      h2: "탐색하고, 만들고, 모으고, 공유합니다.",
      lead:
        "팬덤 활동을 네 가지 경험으로 나누고, 각 행동을 더 적은 단계로 끝낼 수 있도록 설계했습니다. 회원가입도 서버 저장도 없이, 산출물 이미지 자체가 콘텐츠가 되도록 했습니다.",
      flow: ["고르기", "배치", "이미지로 저장", "커뮤니티에 공유"],
      principles: [
        "가입 없이 바로 사용",
        "결과 이미지 생성 후 커뮤니티에 공유",
        "검수를 통과한 데이터만 공개",
      ],
      groups: [
        {
          letter: "A",
          en: "Discover",
          line: "흩어진 정보를 한국어로, 한곳에서.",
          items: [
            { name: "Skin Catalog", desc: "842종을 등급·캐릭터·진영 등으로 좁혀 탐색하고, 상세에서 한/영/일 명칭과 획득 방법, 원문 출처를 확인합니다." },
          ],
        },
        {
          letter: "B",
          en: "Create",
          line: "캐릭터 자료를 준비하지 않아도 제작이 시작되게.",
          items: [
            { name: "Tier List", desc: "캐릭터 이미지가 이미 들어 있는 드래그 티어표입니다. 프리셋 주제 24종을 제공하고, 티어 이름·색·개수를 직접 바꿀 수 있습니다." },
            { name: "CP Chart", desc: "캔버스에 캐릭터를 놓고 관계선을 잇습니다. 캐릭터를 옮기면 선이 따라오고, 겹치면 자동으로 우회합니다." },
            { name: "Skin Board", desc: "도감에서 스킨을 골라 위시리스트·복각 요청 표를 만듭니다." },
            { name: "Duo Card", desc: "자기 취향에 맞는 듀오를 구하려고 만드는 듀오 구인표입니다. 모집 조건을 필수 항목이 고정된 카드 형태로 정리합니다." },
          ],
        },
        {
          letter: "C",
          en: "Collect",
          line: "구경에서 수집 관리로.",
          items: [
            { name: "Skin Checklist", desc: "전체 스킨 격자에서 보유를 체크합니다. 체크 상태가 브라우저에 남아, 새 스킨을 얻으면 이어서 갱신할 수 있습니다." },
          ],
        },
        {
          letter: "D",
          en: "Share",
          line: "결과물이 곧 콘텐츠, 유통은 커뮤니티에서.",
          items: [
            { name: "Character Sort", desc: "두 명씩 비교해 최애 순위를 만드는 랭킹 도구입니다. “잘 모르겠어요”는 공동 순위로 묶고, 진행률은 매 선택마다 재계산합니다. 결과는 이미지로 저장해 커뮤니티에 공유합니다." },
            { name: "Visual Novel", desc: "선택지에 따라 이야기가 달라지는 5~8분짜리 웹 비주얼 노벨로, 결과를 이미지로 저장해 커뮤니티에 공유할 수 있습니다." },
          ],
        },
      ],
    },
    data: {
      h2: "공개 데이터를 서비스 데이터로 전환하는 검수 프로세스를 설계했습니다.",
      lead:
        "Fandom Wiki와 MediaWiki API로 초기 데이터를 수집한 뒤, 캐릭터 매칭·이미지·등급을 정제하고 한국어명을 직접 검수해 공개했습니다. 시즌마다 다시 실행해도 흔들리지 않도록 확보 · 정제 · 검수 · 공개 단계를 분리했습니다.",
      steps: [
        { n: "01", label: "데이터 확보", note: "Fandom Wiki의 SS·S·A 등급 의상 카테고리 전량" },
        { n: "02", label: "API 수집", note: "MediaWiki API로 전체 목록을 끝까지 수집 · 857건" },
        { n: "03", label: "정제", note: "캐릭터 매칭·이미지·등급 확정 → 정제 데이터 842건" },
        { n: "04", label: "한국어명 변환·검수", note: "영문명을 한국어로 변환하고 사람이 확인·확정" },
        { n: "05", label: "공개 기준", note: "검수를 통과한 스킨만 서비스에 노출" },
      ],
      layerLabel: "수집 → 정제 → 공개의 3단 분리",
      layers: [
        ["원본 수집", "Raw Data", "위키 스크랩 원본 · 파이프라인 내부"],
        ["정제", "Clean Data · 842건", "캐릭터 매칭 · 이미지 · 등급 확정"],
        ["수동 검토 · 제외", "Manual QA", "메타 항목 · 오프라인 한정판 등"],
        ["운영 DB", "Published Data", "검수를 통과한 스킨만 공개 API 노출"],
      ],
      shot: "정제 리포트 · 이미지 교차검증 화면",
    },
    qa: {
      h2: "자동화를 어디서 멈출지 정했습니다.",
      quote: "데이터를 가져오는 것보다, 신뢰 가능한 데이터를 제공하는 과정이 중요했습니다.",
      whyLabel: "왜 사람 검수가 필요했나",
      why: [
        "팬덤 위키는 영문명만 제공해, 한국어명은 직접 변환해야 합니다",
        "AI 번역만으로는 커뮤니티에서 실제로 쓰는 표기와 어긋납니다",
        "그래서 변환한 이름을 사람이 확인하고 확정하는 단계를 뒀습니다",
        "검수 기준을 정리한 뒤 캐릭터별로 작업을 나눠 함께 확인했습니다",
      ],
      pipeline: ["영문 데이터 수집", "한국어명 변환(초안)", "사람 확인·확정", "공개 판정", "운영 DB 반영"],
      criteria: (
        <>
          수집과 초안 변환까지는 자동이지만, <b className="text-ink-70">공개는 사람이 한국어명을 확인하고 확정한 스킨만</b>{" "}
          통과시킵니다. 자동 변환 결과가 그대로 공개되는 일은 없습니다.
        </>
      ),
      gate: [
        ["수집됨 · 변환 전", false],
        ["초안 변환만 됨", false],
        ["검수 중 · 미확정", false],
        ["검수 완료 · 한국어명 확정", true],
        ["직접 등록 (오프라인 한정판)", true],
      ] as [string, boolean][],
      pub: { yes: "공개", no: "비공개" },
      shot: "로컬 검수 웹 도구 — 스킨별 한국어명 확정",
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
          title: "CP표 라벨 커스터마이징",
          ask: "관계선 라벨을 기본값이 아니라 직접 쓰고 싶다는 요청",
          change: "CP표 라벨을 직접 수정하는 기능 추가",
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
      h2: "저장이 제작형 기능의 완료 지점입니다.",
      lead:
        "결과물 저장을 제작형 기능의 핵심 완료 행동으로 정의하고 GA4 이벤트로 측정했습니다. 생성된 이미지는 사용자가 기존 커뮤니티에 바로 공유할 수 있도록 설계했습니다.",
      metrics: [
        { value: 18356, label: "조회수" },
        { value: 3400, label: "활성 사용자" },
        { value: 0, raw: "6:13", label: "평균 참여 시간" },
        { value: 39661, label: "이벤트" },
      ],
      gaLine: "GA4 · 2026.07.17 ~ 운영 중",
      shot: "GA4 — 기능별 페이지 조회수 · 참여 시간",
      signals: [
        {
          label: "서비스 정체성",
          body: "캐릭터 소트는 “취향을 구조화한다”는 본질을 빠르게 보여줍니다. CP표는 일반적인 이미지 편집기보다 팬덤의 관계성 표현 방식에 맞춰 제작 과정을 단순화한 기능입니다.",
        },
        {
          label: "재방문 장치",
          body: "스킨 체크표(진행 중 상태)와 티어리스트 프리셋 주제(주제 교체)를 반복 이용을 고려해 설계했습니다.",
        },
        {
          label: "바이럴 접점",
          body: "CP표·캐릭터 소트 결과·연애 시뮬레이터 결과를 모두 커뮤니티에서 바로 공유할 수 있는 이미지 형태로 설계했습니다.",
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
          body: "탐색(도감)엔 검색을 넣고 제작 도구엔 넣지 않았습니다. 가입 없이 바로 쓰게 하되 데이터 공개는 사람이 검수한 것만 — 편의와 신뢰가 부딪히는 지점마다 다르게 판단했습니다.",
        },
      ],
      myRole: [
        "서비스 기획 · 정보 구조 설계",
        "팬덤 사용자 행동 관찰 및 기능 정의",
        "무가입 · 무저장 제약을 유통 컨셉으로 전환한 설계",
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
        "Identity V has 87 characters and 842 skins, and it grows every season. Outside the game, the fandom had built a culture of making and sharing favorite rankings, tier lists, and ship charts — done with image editors or free-form posts.",
      behaviors: [
        { behavior: "Sharing character taste", friction: "To rank favorites you have to gather character assets and edit an image yourself." },
        { behavior: "Making a tier list", friction: "You have to gather character icons one by one, size them, and build a grid before you even start." },
        { behavior: "Making relationship (CP) content", friction: "You lay out characters and draw lines — move one and you redraw every line." },
        { behavior: "Tracking and showing owned skins", friction: "There's no single place, in Korean, for what you have and don't." },
        { behavior: "Recruiting for duos and parties", friction: "Free-form recruitment posts make it hard to compare the info that matters — tier, time zone, mic — at a glance." },
      ],
    },
    solution: {
      h2: "Discover, create, collect, share.",
      lead:
        "I split fandom activity into four experiences and designed each so the behavior takes fewer steps to finish. No signup, no server storage — the output image itself is the content.",
      flow: ["Pick", "Arrange", "Save as image", "Share to the community"],
      principles: [
        "Use it right away, no signup",
        "Generate a result image, then share it to the community",
        "Only reviewed data goes public",
      ],
      groups: [
        {
          letter: "A",
          en: "Discover",
          line: "Scattered info, in Korean, in one place.",
          items: [
            { name: "Skin Catalog", desc: "Filter 842 skins by rarity, character, faction, and more; the detail page shows KO/EN/JP names, how to obtain it, and the original source." },
          ],
        },
        {
          letter: "B",
          en: "Create",
          line: "So making starts without prepping character assets.",
          items: [
            { name: "Tier List", desc: "A drag tier chart with character images already loaded. 24 preset themes, and you can change tier names, colors, and count yourself." },
            { name: "CP Chart", desc: "Place characters on a canvas and connect relationship lines. Move a character and the line follows; overlapping lines route around automatically." },
            { name: "Skin Board", desc: "Pick skins from the catalog to build wishlist / re-release-request tables." },
            { name: "Duo Card", desc: "A duo-recruitment card you make to find a duo that fits your taste. It lays out your conditions as a card with the required fields fixed." },
          ],
        },
        {
          letter: "C",
          en: "Collect",
          line: "From browsing to collection tracking.",
          items: [
            { name: "Skin Checklist", desc: "Check off what you own on the full skin grid. The checked state persists in the browser, so you can pick up where you left off when you pull a new skin." },
          ],
        },
        {
          letter: "D",
          en: "Share",
          line: "The output is the content; distribution happens in the community.",
          items: [
            { name: "Character Sort", desc: "A ranking tool that builds your favorites list from pairwise comparisons. “Not sure” groups two characters as a tie, and progress recalculates on every choice. You save the result as an image and post it to the community." },
            { name: "Visual Novel", desc: "A 5–8 minute web visual novel where the story branches on your choices; you save the result as an image and share it to the community." },
          ],
        },
      ],
    },
    data: {
      h2: "I designed a review process that turns public data into service data.",
      lead:
        "I collected initial data through the Fandom wiki and the MediaWiki API, then refined character matching, images, and rarity, and reviewed the Korean names by hand before publishing. The acquire, refine, review, and publish stages are separated so it holds up when re-run each season.",
      steps: [
        { n: "01", label: "Acquisition", note: "Every SS·S·A rarity outfit category on the Fandom wiki" },
        { n: "02", label: "API collection", note: "Walked the full MediaWiki API listing to the end — 857 records" },
        { n: "03", label: "Refinement", note: "Character matching, images, rarity confirmed → clean data, 842 records" },
        { n: "04", label: "Korean name — convert & review", note: "Convert English names to Korean; a human checks and confirms each" },
        { n: "05", label: "Publish criteria", note: "Only reviewed skins are shown in the service" },
      ],
      layerLabel: "A three-layer split: collect → refine → publish",
      layers: [
        ["Raw collection", "Raw Data", "Wiki scrape as-is · pipeline internal"],
        ["Refined", "Clean Data · 842", "Character matching · images · rarity confirmed"],
        ["Manual review · excluded", "Manual QA", "Meta entries · offline-limited, etc."],
        ["Operational DB", "Published Data", "Only reviewed skins exposed via the public API"],
      ],
      shot: "Clean-data report · image cross-check screen",
    },
    qa: {
      h2: "I decided where to stop automating.",
      quote: "Providing data users can trust mattered more than pulling data.",
      whyLabel: "Why human review was needed",
      why: [
        "The fandom wiki only gives English names, so the Korean name has to be converted by hand",
        "AI translation alone drifts from what the community actually uses",
        "So a human confirms and finalizes each converted name before it's published",
        "I wrote up the review criteria, then split the work by character and checked it together",
      ],
      pipeline: ["Collect English data", "Convert Korean name (draft)", "Human check & confirm", "Publish decision", "Push to operational DB"],
      criteria: (
        <>
          Collection and the draft conversion are automatic, but{" "}
          <b className="text-ink-70">only skins whose Korean name a human has checked and confirmed get published</b>. An
          auto-converted name never goes public on its own.
        </>
      ),
      gate: [
        ["Collected · not converted", false],
        ["Draft conversion only", false],
        ["In review · not confirmed", false],
        ["Reviewed · Korean name confirmed", true],
        ["Added by hand (offline limited)", true],
      ] as [string, boolean][],
      pub: { yes: "Public", no: "Private" },
      shot: "Local review web tool — confirming the Korean name per skin",
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
          title: "Custom CP chart labels",
          ask: "A request to write the relationship-line labels instead of using the defaults",
          change: "Added the ability to edit CP chart labels directly",
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
      h2: "Saving is the completion point of a make-style feature.",
      lead:
        "I defined saving the result as the key completion action for make-style features and measured it as a GA4 event. The generated image is designed so users can share it straight to their existing communities.",
      metrics: [
        { value: 18356, label: "Views" },
        { value: 3400, label: "Active users" },
        { value: 0, raw: "6:13", label: "Avg. engagement" },
        { value: 39661, label: "Events" },
      ],
      gaLine: "GA4 · since 2026.07.17",
      shot: "GA4 — page views and engagement by feature",
      signals: [
        {
          label: "Service identity",
          body: "Character Sort shows the essence — “structure your taste” — quickly. CP Chart simplifies the making process to fit how the fandom expresses relationships, more than a generic image editor does.",
        },
        {
          label: "Return hooks",
          body: "Skin Checklist (in-progress state) and Tier List preset themes (theme swap) were designed with repeat use in mind.",
        },
        {
          label: "Viral surface",
          body: "CP Chart, Character Sort, and Visual Novel results are all shaped as images you can post straight to the community.",
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
          body: "Discovery (the catalog) has search; the creation tools don't. No signup for instant use, but only human-reviewed data goes public — I made a different call at each point where convenience and trust collide.",
        },
      ],
      myRole: [
        "Service planning · information architecture",
        "Fandom behavior observation and feature definition",
        "Turning the no-login, no-storage constraint into a distribution concept",
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
      <Header locale={locale} variant="case" serviceUrl={project.liveUrl} />

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
          <div className="grid flex-[1.6] grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-7">
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
          <div className="flex flex-1 gap-5 sm:gap-10">
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
          <Placeholder label={project.screenshotLabel} img={HERO_SHOT} className="mx-auto max-w-[1440px]" />
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
                    <div key={it.name} className="flex flex-col rounded-xl border border-line-2 px-4 py-4">
                      <div className="font-mono text-[12.5px] font-semibold tracking-[.02em]">{it.name}</div>
                      <p className="mt-2 text-[13.5px] leading-[1.5] text-ink-70">{it.desc}</p>
                      {ITEM_SHOTS[it.name] && (
                        <Placeholder
                          variant="alt"
                          label={it.name}
                          img={ITEM_SHOTS[it.name]}
                          className="mt-3.5 h-[clamp(190px,22vw,280px)]"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Data Operation (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>03 / DATA OPERATION</div>
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
          </div>
        </div>
      </section>

      {/* 05 — QA Process */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>04 / QA PROCESS</div>
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
          <Placeholder label={c.qa.shot} img={QA_SHOT} className="mt-8" />
        </Reveal>
      </section>

      {/* 06 — User Feedback */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>05 / USER FEEDBACK &amp; IMPROVEMENT</div>
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
        <div className={EYEBROW}>06 / UX INSIGHT</div>
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
          <Placeholder label={c.ux.shot} img={UX_SHOT} className="mt-8" />
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

      {/* 08 — Learning (dark) */}
      <section id="learning" className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="flex-[1.2]">
              <div className={EYEBROW_DARK}>07 / LEARNING</div>
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
