import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { getProject } from "@/data/projects";
import {
  CASE_EYEBROW as EYEBROW,
  CASE_EYEBROW_DARK as EYEBROW_DARK,
  CASE_H2 as H2,
  CASE_LEAD as LEAD,
  CASE_LEAD_DARK as LEAD_DARK,
} from "@/lib/caseStudy";

export const metadata: Metadata = {
  title: "Identity5 Pick — 서인하",
  description:
    "제5인격 팬들이 이미 하고 있던 취향 공유 행동을 더 쉽고 재미있는 경험으로 확장한 참여형 콘텐츠 플랫폼. 스킨 842종 데이터 정제와 검수 프로세스 설계를 중심으로 한 게임 서비스 기획 케이스 스터디.",
};

const heroMetrics = [
  { value: 3.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "ACTIVE USERS" },
  { value: 18.4, decimals: 1, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 842, label: "SKIN RECORDS" },
];

const userBehaviors = [
  {
    behavior: "캐릭터 취향을 공유한다",
    friction: "최애 순위를 매기려면 캐릭터 자료를 직접 모아 이미지로 편집해야 한다.",
  },
  {
    behavior: "티어표를 만든다",
    friction: "아이콘을 모으고 크기를 맞추고 격자를 그려야 시작할 수 있다.",
  },
  {
    behavior: "관계성(CP) 콘텐츠를 만든다",
    friction: "캐릭터를 늘어놓고 선을 긋다가, 하나를 옮기면 선을 전부 다시 그어야 한다.",
  },
  {
    behavior: "스킨을 수집하고 관리한다",
    friction: "무엇을 갖고 무엇이 없는지, 한국어로 한곳에 정리된 곳이 없다.",
  },
];

const coreFlow = ["고른다", "배치한다", "이미지로 저장한다", "커뮤니티에 공유한다"];

const principles = [
  "무가입 · 모바일 브라우저 · 즉시 사용",
  "서버는 결과물을 저장하지 않는다",
  "모든 기능이 동일한 워터마크 · 비율의 이미지를 산출",
  "검수를 통과한 데이터만 공개",
];

const experienceGroups = [
  {
    letter: "A",
    en: "Discover",
    ko: "정보 탐색 경험",
    line: "흩어진 정보를 한국어로, 한곳에서 찾게 한다.",
    items: [
      { name: "Skin Catalog", desc: "842종을 등급 · 캐릭터 · 진영 · 성별 · 한정 · 콜라보로 좁혀 탐색한다." },
      { name: "Search & Filter", desc: "한/영 검색과 다축 필터. 필터는 삭제가 아니라 보이는 범위만 조절한다." },
    ],
  },
  {
    letter: "B",
    en: "Create",
    ko: "콘텐츠 제작 경험",
    line: "캐릭터 자료를 준비하지 않아도 제작이 시작되게 한다.",
    items: [
      {
        name: "Character Sort",
        desc: "캐릭터 선호 순위를 만들고 PNG로 저장하는 랭킹 도구. 두 명씩 비교하고, “잘 모르겠어요”는 공동 순위로 묶는다.",
      },
      {
        name: "Tier List",
        desc: "캐릭터 이미지가 이미 들어 있는 드래그 앤 드롭 티어표. 티어 이름 · 색 · 개수를 직접 바꾼다.",
      },
      {
        name: "CP Chart",
        desc: "캔버스에 캐릭터를 놓고 관계선을 잇는다. 캐릭터를 옮기면 선이 따라오고, 겹치면 자동으로 비켜 그린다.",
      },
    ],
  },
  {
    letter: "C",
    en: "Share",
    ko: "결과 공유 경험",
    line: "결과물이 곧 콘텐츠, 유통은 커뮤니티에서 일어난다.",
    items: [
      {
        name: "PNG Export",
        desc: "여러 화면이 같은 워터마크 · 비율로 이미지를 산출한다. 모바일에서 만들어도 비율이 일정하게 나온다.",
      },
      {
        name: "Duo Chart",
        desc: "듀오 모집 조건을 필수 항목이 고정된 카드로. 개인정보가 섞이는 폼이라 저장하지 않는 유일한 기능이다.",
      },
    ],
  },
];

const dataSteps = [
  { n: "01", label: "데이터 확보", note: "Fandom Wiki의 등급별 의상 카테고리 전량" },
  { n: "02", label: "API 수집", note: "MediaWiki API로 누락 없이 857건 순회 수집" },
  { n: "03", label: "정제", note: "캐릭터 매칭 · 이미지 · 등급 확정 → canonical 842건" },
  { n: "04", label: "한국어 검수", note: "사람이 확정한 명칭 · 근거 · 신뢰도 상태" },
  { n: "05", label: "공개 기준", note: "검수를 통과한 스킨만 서비스에 노출" },
];

const qaPipeline = ["자동 후보 수집", "의심 데이터 분류", "사람 검수", "공개 판정", "운영 반영"];

const publishConditions = [
  "사람이 검수 완료로 표시했을 것",
  "한국어 명칭이 확정돼 있을 것",
  "명칭 신뢰도 상태가 미해결이 아닐 것",
];

const feedbackCases = [
  {
    tag: "REQUEST",
    title: "자택 스킨 추가",
    ask: "스킨 리스트에 자택 스킨이 누락돼 있다는 사용자 요청",
    change: "데이터 구조를 확장하고 누락 콘텐츠를 추가",
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
    ask: "좌우 탐색 과정에서 클릭 오작동 발생",
    change: "모바일 탐색 경험 개선",
  },
];

const metrics = [
  { value: 18356, label: "조회수" },
  { value: 3400, label: "활성 사용자" },
  { value: 0, raw: "6:13", label: "평균 참여 시간" },
  { value: 39661, label: "이벤트" },
];

const takeaways = [
  {
    n: "01",
    title: "이미 하던 행동을 발견했다",
    body: "최애 정하기 · 티어표 · CP표 · 스킨 정리 — 커뮤니티에서 이미 벌어지던 행동을 관찰하고, 각각을 더 쉬운 경험으로 옮겼습니다. 없던 니즈를 만든 게 아닙니다.",
  },
  {
    n: "02",
    title: "데이터는 확보보다 운영이었다",
    body: "842종을 모으는 것보다, 무엇을 언제 공개할지의 품질 기준과 시즌마다 재실행해도 흔들리지 않는 검수 프로세스가 중요했습니다.",
  },
  {
    n: "03",
    title: "제약을 경험 컨셉으로 바꿨다",
    body: "“로그인 없음 · 서버 저장 없음”을 단점이 아니라, “결과물 이미지가 곧 콘텐츠, 유통은 커뮤니티에서”라는 경험으로 재정의했습니다.",
  },
  {
    n: "04",
    title: "맥락마다 다른 결정을 내렸다",
    body: "대부분 기능은 진행 상황을 저장하지만 듀오표는 프라이버시 때문에 저장하지 않습니다. 탐색 도감엔 검색을, 제작 도구엔 검색을 넣지 않았습니다.",
  },
];

const myRole = [
  "서비스 기획 · 정보 구조 설계",
  "팬덤 사용자 행동 관찰 및 기능 정의",
  "스킨 842종 데이터 구축 · 한국어 검수 프로세스 설계",
  "GA4 분석 · 사용자 의견 수집 및 개선",
];

const skills = [
  "Player Behavior Observation",
  "Community Content Tool Design",
  "Game Data Operations",
  "Data QA Pipeline",
  "Constraint-driven Decisions",
  "Iterative Improvement from Feedback",
];

const techStack = ["Next.js", "TypeScript", "MediaWiki API", "Cloudinary", "GA4"];

export default async function Identity5PickPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const project = getProject("identity5-pick");

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
          제5인격 팬들이 이미 하고 있던 취향 공유 행동을 더 쉽고 재미있는 경험으로 확장했습니다
        </p>
        <p className="mt-5 max-w-[620px] text-[15.5px] leading-[1.55] text-ink-70 text-pretty sm:text-[16.5px] sm:leading-[1.6]">
          {project.heroBodyKo}
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
          <Placeholder
            label={project.screenshotLabel}
            className="mx-auto h-[clamp(240px,44vw,600px)] max-w-[1440px]"
          />
        </Reveal>
      </div>

      {/* 01 — User Problem */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / USER PROBLEM</div>
        <Reveal>
          <h2 className={`mt-5 ${H2}`}>
            팬덤은 이미 취향을 표현하고 있었습니다.
          </h2>
        </Reveal>
        <p className={LEAD}>
          제5인격 커뮤니티에서는 캐릭터 취향을 공유하고, 티어표와 관계성 콘텐츠를 만들고, 보유 스킨을 정리하는
          활동이 이미 일어나고 있었습니다. 하지만 그 제작 과정이 번거로웠습니다.
        </p>

        <div className="mt-10 border-t border-line-2 sm:mt-14">
          {userBehaviors.map((p, i) => (
            <Reveal
              key={p.behavior}
              delay={i * 0.04}
              className={`flex max-[760px]:flex-col gap-3 py-5 sm:gap-12 ${
                i === userBehaviors.length - 1 ? "border-b border-line-2" : "border-b border-line-3"
              }`}
            >
              <div className="flex-[1.1] text-[17px] leading-[1.5] font-medium text-ink-70">{p.behavior}</div>
              <div className="flex-[1.4] text-[15px] leading-[1.5] text-muted">{p.friction}</div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-[640px] border-l-2 border-accent pl-5 font-archivo text-[19px] font-bold leading-[1.45] tracking-[-.02em]">
          경쟁 상대는 다른 팬 사이트가 아니라 &ldquo;포토샵으로 직접 만들기&rdquo;와 &ldquo;그냥 안 만들고
          말기&rdquo;였습니다.
        </p>
      </section>

      {/* 02 — Solution */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / SOLUTION</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            탐색하고, 만들고, 공유한다.
          </h2>
          </Reveal>
          <p className={LEAD}>
            팬덤 활동을 세 가지 경험으로 나누고, 각 경험의 제작 비용을 줄이는 것을 목표로 삼았습니다. 회원가입도
            서버 저장도 없이, 산출물 이미지 자체가 콘텐츠가 되도록 설계했습니다.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-2 font-archivo text-[12.5px] font-semibold sm:mt-12">
            {coreFlow.map((step, i, arr) => (
              <span key={step} className="contents">
                <span
                  className={
                    i === arr.length - 1
                      ? "rounded-md bg-ink px-3.5 py-2 text-ink-on-dark"
                      : "rounded-md bg-paper border border-line-2 px-3.5 py-2"
                  }
                >
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-accent">→</span>}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p} className="rounded-lg border border-line-2 px-4.5 py-3.5 text-[14.5px] text-ink-70">
                {p}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-10 sm:mt-14 sm:gap-14">
            {experienceGroups.map((g, gi) => (
              <Reveal key={g.en} delay={gi * 0.05}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-archivo text-[13px] font-bold tracking-[.12em] text-accent">
                    {g.letter}
                  </span>
                  <span className="font-archivo text-[22px] font-extrabold tracking-[-.03em]">{g.en}</span>
                </div>
                <p className="mt-2 max-w-[520px] text-[14px] leading-[1.5] text-muted">{g.line}</p>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
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

          <p className="mt-9 max-w-[640px] text-[14.5px] leading-[1.55] text-muted">
            기능 추가만큼 <b className="text-ink-70">기능을 넣지 않는 결정</b>도 기획입니다. 제작 도구에 검색창을
            만들었다가 의도적으로 뺐습니다 &mdash; 고르는 과정 자체가 이 서비스의 경험이기 때문입니다.
          </p>
        </div>
      </section>

      {/* 03 — Data Operation (dark, primary emphasis) */}
      <section className="border-t border-line bg-ink px-5 py-16 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>03 / DATA OPERATION</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            842개의 게임 데이터를 서비스 가능한 형태로 정제했습니다.
          </h2>
          </Reveal>
          <p className={LEAD_DARK}>
            &ldquo;공개 데이터를 가져왔다&rdquo;가 아닙니다. 사용자가 신뢰할 수 있는 게임 데이터 경험을 만들기
            위해, 확보 · 정제 · 검수 · 공개로 이어지는 운영 프로세스를 직접 설계했습니다. 이 서비스에서 가장
            오래 걸린 일입니다.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-14 sm:grid-cols-5">
            {dataSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04} className="bg-ink px-5 pt-6 pb-7">
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {step.n}
                </div>
                <div className="mt-3 text-[15.5px] font-semibold leading-[1.4]">{step.label}</div>
                <div className="mt-2 text-[13px] leading-[1.55] text-[rgba(244,241,234,.6)]">{step.note}</div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-[14.5px] leading-[1.55] text-[rgba(244,241,234,.6)]">
            수집 스크립트의 산출물은 전부 JSON과 리포트 파일입니다. 정제본을 손으로 고치지 않고, 문제가 있으면
            규칙을 고쳐 스크립트를 다시 돌립니다 &mdash; 다음 시즌 동기화 때도 결과가 일관되도록.
          </p>

          <div className="mt-14 border-t border-line-dark-2 pt-9 sm:mt-20">
            <div className="font-archivo text-[13px] font-bold tracking-[.06em] text-accent-on-dark">
              QA — 데이터를 가져오는 것보다, 신뢰 가능한 데이터를 제공하는 과정
            </div>
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.55] text-[rgba(244,241,234,.78)] sm:text-[16px]">
              Fandom은 사용자 편집 위키라 한국어 필드를 그대로 신뢰할 수 없습니다. 수집 · 정제 · 의심 탐지까지는
              기계가 하되, 공개 여부는 반드시 사람 손을 거치게 했습니다.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold">
              {qaPipeline.map((step, i, arr) => (
                <span key={step} className="contents">
                  <span className="rounded-md border border-line-dark-2 px-3 py-1.5">{step}</span>
                  {i < arr.length - 1 && <span className="text-accent-on-dark">→</span>}
                </span>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-accent-on-dark pl-5">
              <div className="text-[13px] font-semibold text-[rgba(244,241,234,.6)]">
                공개 판정 — 세 조건을 모두 만족할 때만 공개
              </div>
              <ul className="mt-2.5 flex flex-col gap-1.5 text-[14px] text-[rgba(244,241,234,.85)]">
                {publishConditions.map((c) => (
                  <li key={c}>· {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — User Feedback & Improvement */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className={EYEBROW}>04 / USER FEEDBACK &amp; IMPROVEMENT</div>
        <Reveal>
          <h2 className={`mt-5 ${H2}`}>
            출시 이후 사용자 의견을 반영하며 개선했습니다.
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 sm:mt-12">
          {feedbackCases.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.04}
              className="rounded-xl border border-line-2 px-5 py-5 sm:flex sm:gap-12"
            >
              <div className="flex-none sm:w-[200px]">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{c.tag}</div>
                <div className="mt-2 font-archivo text-[16px] font-bold tracking-[-.02em]">{c.title}</div>
              </div>
              <div className="mt-4 grid flex-1 gap-x-10 gap-y-3 sm:mt-0 sm:grid-cols-2">
                <div>
                  <div className="font-archivo text-[10px] font-semibold tracking-[.13em] text-muted-light">
                    {c.tag === "ISSUE" ? "PROBLEM" : "REQUEST"}
                  </div>
                  <p className="mt-1 text-[14px] leading-[1.5] text-ink-70">{c.ask}</p>
                </div>
                <div>
                  <div className="font-archivo text-[10px] font-semibold tracking-[.13em] text-accent">
                    IMPROVEMENT
                  </div>
                  <p className="mt-1 text-[14px] leading-[1.5] text-ink-70">{c.change}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 05 — Result */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>05 / RESULT</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            만드는 경험에서 참여가 나왔습니다.
          </h2>
          </Reveal>
          <p className={LEAD}>
            스킨 도감은 정보 탐색 목적으로, 티어리스트와 CP표는 사용자가 직접 제작하는 참여형 콘텐츠로 더 긴
            체류를 보였습니다. 결과물을 저장하는 순간이 이 서비스의 전환입니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-12 gap-y-6 border-t border-line-3 pt-7 sm:mt-12">
            {metrics.map((m) => (
              <Stat
                key={m.label}
                metric={m}
                numberClassName="font-archivo text-[clamp(24px,2.6vw,36px)] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-2 text-[12px] text-muted"
              />
            ))}
          </div>
          <div className="mt-5 font-mono text-[12px] text-muted-light">GA4 · 2026.07.17 ~ 운영 중</div>
        </div>
      </section>

      {/* 06 — Learning (dark) */}
      <section id="learning" className="border-t border-line bg-ink px-5 py-16 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="flex-[1.2]">
              <div className={EYEBROW_DARK}>06 / LEARNING</div>
              <h2 className={`mt-5 ${H2}`}>
            이미 하고 있는 행동을 발견하는 것.
          </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[15.5px] leading-[1.58] text-[rgba(244,241,234,.78)] text-pretty sm:text-[16.5px]">
              좋은 팬덤 서비스는 사용자가 이미 하고 있는 행동을 발견하고, 더 나은 경험으로 확장하는 것이라고
              생각했습니다. 팬덤 서비스는 정보를 제공하는 데서 끝나지 않고, 사용자가 직접 경험을 만들어가는
              과정까지 설계해야 한다고 봤습니다.
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-16 sm:grid-cols-2">
            {takeaways.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.04} className="bg-ink px-6 pt-6 pb-7">
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {t.n}
                </div>
                <h3 className="mt-3 font-archivo text-[18px] font-bold leading-[1.35] tracking-[-.02em]">
                  {t.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.5] text-[rgba(244,241,234,.7)]">{t.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              MY ROLE
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {myRole.map((r) => (
                <div key={r} className="text-[15px] leading-[1.6] text-[rgba(244,241,234,.82)]">
                  · {r}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-line-dark pt-8">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              SKILLS
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="border border-line-dark px-3.5 py-2 font-archivo text-[12.5px] font-semibold tracking-[.05em] text-[rgba(244,241,234,.85)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 border-t border-line-dark pt-6">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.4)]">
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
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← SKY PLANNER
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}/work/heartopia-archive`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              NEXT — HEARTOPIA ARCHIVE →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
