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
  CASE_CARD_EYEBROW as CARD_EYEBROW,
  CASE_CARD_H3 as CARD_H3,
  CASE_CARD_BODY as CARD_BODY,
} from "@/lib/caseStudy";

export const metadata: Metadata = {
  title: "Heartopia Archive — 서인하",
  description:
    "창작자 기반 커뮤니티를 위한 허락 기반 UGC 아카이브. 흩어진 글로벌 콘텐츠를 연결하고 원작자와 사용자를 잇는 운영 구조를 설계한 케이스 스터디.",
};

const discoveryFlow = ["해외 플랫폼 검색", "회원가입", "번역", "이미지 저장", "다시 찾기"];

const problems = [
  { n: "01", title: "Discovery", body: "좋은 콘텐츠가 분명히 존재하지만, 원하는 도안을 원하는 순간에 찾을 수 없습니다." },
  { n: "02", title: "Accessibility", body: "공유가 해외 플랫폼과 외국어 중심으로 이뤄져, 국내 유저의 접근 자체가 어렵습니다." },
  { n: "03", title: "Trust", body: "원작자와 출처가 보장되지 않으면, 콘텐츠 공유는 지속 가능한 방식이 될 수 없습니다." },
];

const serviceFlow = ["Creator", "콘텐츠 발견", "허락 확인", "출처 관리", "Archive 등록", "User"];

const permissionSteps = [
  { n: "01", label: "창작자 확인", note: "원작자와 원본 게시물을 특정" },
  { n: "02", label: "운영 목적 설명", note: "비상업 · 광고 없음을 직접 안내" },
  { n: "03", label: "사용 허락 확보", note: "사용 범위를 합의" },
  { n: "04", label: "원작자 · 원본 링크 표시", note: "콘텐츠마다 출처를 고정 노출" },
  { n: "05", label: "콘텐츠 등록", note: "허락받은 대리 게시로 공개" },
];

const outreachRows = [
  { label: "PROBLEM", body: "Xiaohongshu 지역 제한으로 원작자에게 직접 DM·댓글을 보낼 수 없었습니다.", accent: false },
  {
    label: "ACTION",
    body: "중국인 친구를 통해 창작자와 연결하고, 서비스의 운영 목적과 출처 표기 방식을 설명한 뒤 사용 허락을 요청했습니다.",
    accent: false,
  },
  { label: "RESULT", body: "세 명 이상의 Xiaohongshu 작가에게 실제 사용 허락을 확보해 콘텐츠를 게시 중입니다.", accent: true },
];

const serviceValues = [
  {
    en: "Finding",
    ko: "콘텐츠 탐색",
    body: "여러 플랫폼에 흩어진 도안을 한곳에서 찾게 합니다. 카테고리·검색·분류를 설계해 콘텐츠가 늘어도 탐색 비용이 늘지 않도록 했습니다.",
    shot: "탐색 · 검색 화면",
  },
  {
    en: "Organizing",
    ko: "콘텐츠 관리",
    body: "의상·가구를 같은 구조로 정리하고, 모든 콘텐츠에 원작자·원본 링크·플랫폼을 고정해 출처가 사라지지 않게 했습니다.",
    shot: "콘텐츠 상세 · 출처 표기",
  },
  {
    en: "Respecting",
    ko: "창작자 관계",
    body: "허락받은 콘텐츠만 게시하고, 창작자가 요청하면 내립니다. 아카이브의 통제권은 원작자에게 있습니다.",
    shot: "크리에이터 페이지",
  },
];

const editorBefore = ["직접 촬영", "이미지 편집 앱 실행", "수동 배치"];

const opsCases = [
  {
    tag: "CASE 01 — RELIABILITY",
    title: "이미지가 로드되지 않는 오류",
    rows: [
      ["Problem", "일부 환경에서 콘텐츠 이미지가 표시되지 않았습니다."],
      ["Action", "이미지 처리 구조를 점검하고 로딩 흐름을 수정했습니다."],
      ["Result", "재현 · 수정 · 배포 후 재확인 사이클로 표시 문제를 해결했습니다."],
    ],
  },
  {
    tag: "CASE 02 — FEEDBACK",
    title: "도안 활용에 추가 편집이 필요",
    rows: [
      ["Problem", "“도안을 실제 사진과 합성할 수 있으면 좋겠다”는 요청이 반복됐습니다."],
      ["Action", "웹 기반 사진 편집 기능을 서비스 안에 직접 제작했습니다."],
      ["Result", "촬영 후 별도 앱을 오가던 과정을 서비스 내 편집으로 대체했습니다."],
    ],
  },
];

const serviceMetrics = [
  { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
  { value: 3, accentSuffix: "+", label: "VERIFIED CREATORS" },
  { value: 50, accentSuffix: "+", label: "DAILY VISITORS" },
  { value: 0, raw: "2026.07~", label: "OPERATING SERVICE" },
];

const demonstratedSkills = [
  "Global Creator Relations",
  "UGC Policy Design",
  "Content Operations",
  "Community Trust",
  "Cross-platform Communication",
  "Korean Accessibility",
  "Live Operations",
];

const techStack = ["Next.js", "React", "TypeScript", "Spring Boot", "JPA", "PostgreSQL", "Railway", "AWS"];

export default async function HeartopiaArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const project = getProject("heartopia-archive");

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" serviceUrl={project.liveUrl} resumeHref="#learning" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-9 sm:px-9 sm:pt-24 sm:pb-14">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
        <h1 className="mt-4 font-archivo text-[clamp(28px,6.2vw,84px)] leading-[1.05] font-extrabold tracking-[-.04em]">
          {project.h1Lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < project.h1Lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <div className="mt-8 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-13">
          <div className="max-w-[560px] flex-[1.2]">
            <p className="text-[15.5px] leading-[1.55] text-ink-70 text-pretty sm:text-[17px] sm:leading-[1.6]">
              Heartopia 유저가 만든 의상·가구 도안은 여러 플랫폼에 흩어져 있었습니다. <b>Heartopia Archive</b>는
              콘텐츠를 모으는 서비스가 아니라, 창작자 기반 커뮤니티를 위해 원작자 허락을 받은 콘텐츠만 출처를
              고정해 게시하는 허락 기반 운영 구조입니다.
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
          </div>
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5">
            {project.meta.map((m) => (
              <div key={m.label}>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                  {m.label}
                </div>
                <div
                  className={`mt-1.5 whitespace-pre-line text-[15px] leading-[1.55] ${
                    m.accent ? "font-bold text-accent" : "text-ink-70"
                  }`}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-5 sm:px-9">
        <Reveal>
          <Placeholder
            label={project.screenshotLabel}
            className="mx-auto h-[clamp(240px,42vw,560px)] max-w-[1440px]"
          />
        </Reveal>
      </div>

      {/* 01 — Context */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / CONTEXT</div>
        <Reveal>
          <h2 className={`mt-5 ${H2}`}>
            좋은 콘텐츠는 많았지만, 찾을 수가 없었습니다.
          </h2>
        </Reveal>
        <p className={LEAD}>
          Heartopia는 유저 제작 콘텐츠가 활발한 게임입니다. 하지만 좋은 도안은 Xiaohongshu, Discord, 개인 SNS에
          흩어져 있었고, 한국 유저가 원하는 콘텐츠를 찾으려면 매번 같은 과정을 반복해야 했습니다.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-2 font-archivo text-[12.5px] font-semibold sm:mt-12">
          {discoveryFlow.map((step, i, arr) => (
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
        <p className="mt-4 max-w-[520px] text-[15px] leading-[1.55] text-muted">
          &ldquo;다시 찾기&rdquo;가 매번 처음부터였습니다 — 저장해둔 이미지에는 출처가 남지 않았기 때문입니다.
        </p>

        <Reveal delay={0.1}>
          <Placeholder
            variant="alt"
            label={"기존 Xiaohongshu 검색 화면 / 흩어진 콘텐츠 예시"}
            className="mt-9 h-[clamp(180px,22vw,300px)]"
          />
        </Reveal>
      </section>

      {/* 02 — Problem */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / PROBLEM</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            문제를 세 가지로 좁혔습니다.
          </h2>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05} className="rounded-xl border border-line-2 px-5 py-5">
                <div className={CARD_EYEBROW}>{p.n}</div>
                <h3 className={CARD_H3}>{p.title}</h3>
                <p className={CARD_BODY}>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Solution */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className={EYEBROW}>03 / SOLUTION</div>
        <div className="mt-5 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
          <Reveal className="flex-1">
            <h2 className={H2}>
              이미지 모음이 아니라,
              <br />
              신뢰 가능한 라이브러리.
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.55] text-ink-70 sm:text-[16px]">
              서비스 방향을 세 가지로 정했습니다.
            </p>
            <div className="mt-5 border-t border-line-4">
              {["콘텐츠 탐색 경험 개선", "원작자 출처 관리", "한국 유저 접근성 개선"].map((item, i, arr) => (
                <div
                  key={item}
                  className={`py-3 text-[16px] text-ink-70 ${
                    i === arr.length - 1 ? "border-b border-line-4" : "border-b border-line-3"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex-1">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              SERVICE STRUCTURE
            </div>
            <div className="mt-4 flex flex-col">
              {serviceFlow.map((step, i) => (
                <div key={step}>
                  <div
                    className={
                      i === 0 || i === serviceFlow.length - 1
                        ? "border border-ink bg-ink px-4.5 py-3.5 text-[15px] font-bold text-ink-on-dark"
                        : "rounded-lg border border-line-2 px-4.5 py-3.5 text-[15px]"
                    }
                  >
                    {step}
                  </div>
                  {i < serviceFlow.length - 1 && <div className="px-4.5 py-1 text-accent">↓</div>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — Creator Rights (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>04 / CREATOR RIGHTS</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            Not a collection. A permission-based archive.
          </h2>
          </Reveal>
          <p className={LEAD_DARK}>
            해외 창작물을 단순히 모으지 않았습니다. 한 장이라도 원작자의 허락 없이 올리지 않는다는 원칙을 먼저
            정하고, 그 원칙이 지켜지도록 운영 절차를 설계했습니다. 이 프로젝트에서 가장 오래 걸린 일은 개발이
            아니라 해외 원작자를 찾아 연락하고 허락을 받는 일이었습니다.
          </p>

          <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-14">
            <Reveal className="flex-[1.1]">
              <div className="border-t border-line-dark-2">
                {outreachRows.map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex gap-5 py-4 ${
                      i === arr.length - 1 ? "border-b border-line-dark-2" : "border-b border-line-dark"
                    }`}
                  >
                    <div
                      className={`w-[78px] flex-none font-archivo text-[10.5px] font-semibold tracking-[.13em] ${
                        row.accent ? "text-accent-on-dark" : "text-[rgba(244,241,234,.5)]"
                      }`}
                    >
                      {row.label}
                    </div>
                    <div className="flex-1 text-[16px] leading-[1.55] text-[rgba(244,241,234,.85)]">{row.body}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-accent-on-dark pl-5 font-archivo text-[19px] font-bold leading-[1.4] tracking-[-.02em]">
                허가는 기능이 아니라 관계의 결과였습니다.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-1 flex-col gap-4">
              <Placeholder
                variant="dark"
                label={"CREATOR PERMISSION DM\n(개인정보 제거 후 삽입)"}
                className="h-[clamp(200px,24vw,320px)]"
              />
              <Placeholder variant="dark" label={"콘텐츠 출처 표기 UI"} className="h-[clamp(130px,16vw,200px)]" />
            </Reveal>
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]">
              PERMISSION PROCESS
            </div>
            <div className="mt-6 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:grid-cols-5">
              {permissionSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.04} className="bg-ink px-5 pt-6 pb-7">
                  <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                    STEP {step.n}
                  </div>
                  <div className="mt-3 text-[16px] font-semibold leading-[1.4]">{step.label}</div>
                  <div className="mt-2 text-[13.5px] leading-[1.55] text-[rgba(244,241,234,.6)]">{step.note}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Service Value */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className={EYEBROW}>05 / SERVICE VALUE</div>
        <Reveal>
          <h2 className={`mt-5 ${H2}`}>
            기능이 아니라 태도로 설계했습니다.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
          {serviceValues.map((v, i) => (
            <Reveal key={v.en} delay={i * 0.05} className="rounded-xl border border-line-2 px-5 py-5">
              <h3 className="font-archivo text-[18px] font-bold tracking-[-.02em]">{v.en}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.55] text-ink-70">{v.body}</p>
              <Placeholder label={v.shot} className="mt-4 h-[clamp(100px,12vw,150px)] text-[11px]" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 — Archive to Creation (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>06 / ARCHIVE → CREATION</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            탐색에서 창작으로.
          </h2>
          </Reveal>
          <p className={LEAD_DARK}>
            유저는 도안을 보기만 하지 않았습니다. &ldquo;내 방 사진에 이 도안을 얹어보고 싶다&rdquo;는 요청이
            반복됐고, 아카이브가 탐색을 넘어 창작의 시작점이 될 수 있다고 봤습니다. 그래서 촬영 → 외부 편집 앱 →
            수동 배치로 이어지던 과정을, 서비스 안 웹 편집 기능 하나로 합쳤습니다.
          </p>

          <div className="mt-10 flex gap-5 max-[560px]:flex-col sm:mt-14">
            <div className="flex-1">
              <div className="mb-3 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]">
                BEFORE
              </div>
              <div className="flex flex-wrap items-center gap-2 font-archivo text-[12.5px] font-semibold">
                {editorBefore.map((step, i, arr) => (
                  <span key={step} className="contents">
                    <span className="border border-line-dark-2 px-3 py-2">{step}</span>
                    {i < arr.length - 1 && <span className="text-[rgba(244,241,234,.4)]">→</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-3 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                AFTER
              </div>
              <span className="inline-block border border-accent-on-dark px-3 py-2 font-archivo text-[12.5px] font-semibold">
                서비스 안에서 바로 편집
              </span>
            </div>
          </div>

          <div className="mt-7 flex max-[560px]:flex-col gap-4">
            <Placeholder variant="dark" label={"사진 편집기 — BEFORE (외부 앱 합성)"} className="h-[clamp(160px,20vw,240px)] flex-1" />
            <Placeholder variant="dark" label={"사진 편집기 — AFTER (서비스 내 편집)"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          </div>
        </div>
      </section>

      {/* 07 — Operation & Improvement */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className={EYEBROW}>07 / OPERATION &amp; IMPROVEMENT</div>
        <Reveal>
          <h2 className={`mt-5 ${H2}`}>
            출시가 끝이 아니라 시작이었습니다.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2">
          {opsCases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.05} className="rounded-xl border border-line-2 px-5 py-5">
              <div className={CARD_EYEBROW}>{c.tag}</div>
              <h3 className={CARD_H3}>{c.title}</h3>
              <div className="mt-3 flex flex-col gap-2 text-[14px] leading-[1.5] text-ink-70">
                {c.rows.map(([label, body]) => (
                  <div key={label}>
                    <b>{label}</b> — {body}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 — Service Metrics */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>08 / SERVICE METRICS</div>
          <Reveal>
            <h2 className={`mt-5 ${H2}`}>
            규모가 아니라 신뢰의 신호입니다.
          </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-7 gap-y-9 sm:mt-14 sm:grid-cols-4">
            {serviceMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <Stat
                  metric={m}
                  numberClassName="font-archivo text-[clamp(30px,3.6vw,52px)] leading-[1] font-extrabold tracking-[-.045em]"
                  labelClassName="mt-2.5 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[14px] leading-[1.55] text-muted-light">
            Daily Visitors는 업로드가 활발한 시기 기준 추정치이며, GA 재확인 후 교체 예정입니다.
          </p>
        </div>
      </section>

      {/* 09 — Learning (dark) */}
      <section id="learning" className="border-t border-line bg-ink px-5 py-16 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="flex-[1.2]">
              <div className={EYEBROW_DARK}>09 / LEARNING</div>
              <h2 className={`mt-5 ${H2}`}>
            콘텐츠의 양보다 신뢰가 중요했습니다.
          </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[15.5px] leading-[1.58] text-[rgba(244,241,234,.78)] text-pretty sm:text-[16.5px]">
              좋은 콘텐츠를 모으는 것만으로는 아카이브가 지속되지 않았습니다. 창작자 권리 보호, 출처 관리, 사용자
              경험, 운영 정책이 함께 있어야 커뮤니티가 유지된다는 것을 배웠습니다. 허락을 받는 데 드는 시간은
              개발보다 훨씬 길었지만, 그 절차가 곧 서비스의 정체성이 됐습니다.
            </Reveal>
          </div>

          <p className="mt-9 max-w-[720px] border-l-2 border-accent-on-dark pl-5 font-archivo text-[20px] font-bold leading-[1.45] tracking-[-.02em] sm:mt-14">
            UGC 서비스에서 가장 중요한 것은 콘텐츠의 양이 아니라, 콘텐츠가 만들어지고 공유되는 과정에 대한
            신뢰였습니다.
          </p>

          <div className="mt-11 border-t border-line-dark pt-8 sm:mt-16">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              DEMONSTRATED SKILLS
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {demonstratedSkills.map((s) => (
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
              href={`/${locale}/work/identity5-pick`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← IDENTITY5 PICK
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              BACK TO WORK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
