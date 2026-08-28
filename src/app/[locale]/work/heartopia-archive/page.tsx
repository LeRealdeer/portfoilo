import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { getProject } from "@/data/projects";
import { toLocale } from "@/lib/i18n";
import {
  CASE_EYEBROW as EYEBROW,
  CASE_EYEBROW_DARK as EYEBROW_DARK,
  CASE_H2 as H2,
  CASE_LEAD as LEAD,
  CASE_LEAD_DARK as LEAD_DARK,
} from "@/lib/caseStudy";

export const metadata: Metadata = {
  title: "Heartopia Archive — 서인하",
  description:
    "여러 플랫폼에 흩어진 두근두근타운 유저 제작 콘텐츠를, 해외 원작자 허락과 출처 정책을 기반으로 연결한 글로벌 팬 아카이브 케이스 스터디.",
};

const heroMetrics = [
  { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
  { value: 3, label: "VERIFIED CREATORS" },
  { value: 45, accentSuffix: "+", label: "MEMBERS" },
];

const discoveryFlow = ["커뮤니티 검색", "해외 플랫폼 이동 · 회원가입", "번역", "이미지 저장", "다시 찾기"];

const problems = [
  { n: "01", title: "Discovery", body: "좋은 콘텐츠는 분명히 있지만, 원하는 의상·가구를 원하는 순간에 찾을 수 없습니다." },
  { n: "02", title: "Accessibility", body: "공유가 해외 플랫폼과 외국어 중심으로 이뤄져, 국내 유저는 접근 자체가 어렵습니다." },
  { n: "03", title: "Trust", body: "원작자와 출처가 보장되지 않으면, 콘텐츠 공유는 지속 가능한 방식이 될 수 없습니다." },
];

const directions = ["콘텐츠 탐색 경험 개선", "원작자 출처 관리", "한국 유저 접근성 개선"];

const serviceFlow = ["Creator", "콘텐츠 발견", "허락 확인", "출처 관리", "Archive 등록", "User"];

const outreach = [
  {
    label: "PROBLEM",
    body: "Xiaohongshu 지역 제한으로 원작자에게 직접 DM·댓글을 보낼 수 없었습니다.",
    solution: false,
  },
  {
    label: "ACTION",
    body: "중국인 친구를 통해 창작자와 연결하고, 서비스의 운영 목적과 출처 표기 방식을 설명한 뒤 사용 허락을 요청했습니다.",
    solution: false,
  },
  {
    label: "RESULT",
    body: "Xiaohongshu 작가 세 명에게 실제 사용 허락을 확보해, 원작자·원본 링크를 고정한 채 콘텐츠를 게시 중입니다.",
    solution: true,
  },
];

const permissionSteps = [
  { n: "01", label: "창작자 확인", note: "원작자와 원본 게시물을 특정" },
  { n: "02", label: "연락 · 목적 설명", note: "비상업 · 광고 없음을 직접 안내" },
  { n: "03", label: "사용 허락 확보", note: "사용 범위를 합의" },
  { n: "04", label: "출처 표시", note: "원작자 · 원본 링크를 콘텐츠에 고정" },
  { n: "05", label: "콘텐츠 등록", note: "허락받은 대리 게시로 공개" },
];

const features = [
  {
    name: "의상 아카이브",
    problem: "유저 제작 의상 콘텐츠가 여러 플랫폼에 흩어져, 원하는 스타일을 비교하기 어려웠습니다.",
    solution: "카테고리·태그·상세 페이지를 갖춘 아카이브로 옮겨, 한곳에서 탐색·비교하도록 했습니다.",
    shot: "의상 아카이브 목록 · 상세",
  },
  {
    name: "가구 아카이브",
    problem: "꾸미기 콘텐츠는 참고 수요가 크지만 정리된 곳이 없었습니다.",
    solution: "의상과 같은 구조로 가구 콘텐츠를 정리해 탐색 경험을 통일했습니다.",
    shot: "가구 아카이브 화면",
  },
  {
    name: "검색 · 분류 · 상세",
    problem: "콘텐츠가 늘수록 원하는 것을 찾는 비용이 커집니다.",
    solution: "검색과 분류, 원작자·출처가 고정된 상세 페이지로 탐색 비용이 늘지 않게 설계했습니다.",
    shot: "검색 · 필터 UI",
  },
];

const editorBefore = ["직접 촬영", "외부 편집 앱 실행", "수동 배치"];

const operationCases = [
  {
    label: "COMMUNITY",
    title: "게임 커뮤니티 기반 홍보",
    body: "게임 커뮤니티에서 서비스를 공유하고, 원작자 허락 기반으로 확보한 콘텐츠로 신뢰도를 쌓았습니다.",
  },
  {
    label: "TRUST DECISION",
    title: "오픈채팅 등록은 하지 않았습니다",
    body: "회원가입이 네이버·카카오·디스코드 OAuth 방식이라, 출처가 분명하지 않은 채널에서 유입되면 개인정보 신뢰 문제가 생길 수 있다고 봤습니다. Sky Planner와 달리 오픈채팅 홍보를 의도적으로 하지 않았고, 회원 수는 그만큼 천천히 늘고 있습니다.",
  },
  {
    label: "BUG FIX",
    title: "이미지가 로드되지 않는 오류",
    body: "일부 환경에서 콘텐츠 이미지가 표시되지 않아, 이미지 처리·로딩 흐름을 점검하고 재현·수정·배포 후 재확인 사이클로 해결했습니다.",
  },
];

const serviceMetrics = [
  { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
  { value: 45, accentSuffix: "+", label: "MEMBERS" },
  { value: 0, raw: "50–60", label: "DAILY VISITORS" },
  { value: 3, label: "VERIFIED CREATORS" },
];

const takeaways = [
  {
    n: "01",
    title: "허락은 기능이 아니라 관계의 결과였습니다",
    body: "가장 오래 걸린 일은 개발이 아니라 해외 원작자를 찾아 연락하고 허락을 받는 일이었고, 그 절차가 곧 서비스의 정체성이 됐습니다.",
  },
  {
    n: "02",
    title: "신뢰가 접근성보다 우선일 때가 있었습니다",
    body: "더 빠르게 키울 수 있는 오픈채팅 홍보를 포기했습니다. 개인정보를 받는 서비스에서는 유입 경로의 신뢰가 성장 속도보다 중요하다고 판단했습니다.",
  },
  {
    n: "03",
    title: "아카이브는 탐색에서 창작으로 확장됩니다",
    body: "“도안을 실제 사진에 얹어보고 싶다”는 요청에서, 아카이브가 보는 곳을 넘어 만드는 시작점이 될 수 있다는 것을 확인했습니다.",
  },
];

const demonstratedSkills = [
  "Global Community Insight",
  "Creator Relationship",
  "UGC Policy Design",
  "Content Operations",
  "Cross-cultural Communication",
  "Korean Accessibility",
  "Live Operations",
];

const techStack = ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Cloudinary", "OAuth · 네이버 · 카카오 · 디스코드", "Vercel · Railway"];

export default async function HeartopiaArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = toLocale(rawLocale);
  const project = getProject("heartopia-archive", locale);

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" serviceUrl={project.liveUrl} resumeHref="#learning" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-10 sm:px-9 sm:pt-24 sm:pb-16">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
        <h1 className="mt-4 font-archivo text-[clamp(32px,7vw,92px)] leading-[1.02] font-extrabold tracking-[-.042em]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[680px] font-archivo text-[clamp(16.5px,2.2vw,26px)] font-bold leading-[1.4] tracking-[-.02em] text-ink-70">
          여러 플랫폼에 흩어진 유저 제작 콘텐츠를, 원작자 허락과 출처 정책을 기반으로 연결한 글로벌 팬 아카이브
        </p>
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]">
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
            className="mx-auto h-[clamp(220px,42vw,560px)] max-w-[1440px]"
          />
        </Reveal>
      </div>

      {/* 01 — Context */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / CONTEXT</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>좋은 콘텐츠는 많았지만 찾을 수가 없었습니다.</h2>
        </Reveal>
        <p className={LEAD}>
          두근두근타운은 유저가 직접 만든 의상·가구 같은 커스터마이징 콘텐츠 공유가 활발한 게임입니다. 하지만
          그 콘텐츠는 Xiaohongshu, Discord, 개인 SNS에 흩어져 있어, 한국 유저가 원하는 것을 찾으려면 매번 같은
          과정을 반복해야 했습니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold sm:mt-12">
          {discoveryFlow.map((step, i, arr) => (
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
        <p className="mt-4 max-w-[520px] text-[15px] leading-[1.55] text-muted">
          &ldquo;다시 찾기&rdquo;가 매번 처음부터였습니다 &mdash; 저장해둔 이미지에는 출처가 남지 않았기
          때문입니다.
        </p>

        <Reveal delay={0.1}>
          <Placeholder
            variant="alt"
            label={"Xiaohongshu 검색 화면 / 흩어진 콘텐츠 예시"}
            className="mt-8 h-[clamp(160px,20vw,280px)]"
          />
        </Reveal>
      </section>

      {/* 02 — Problem */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / PROBLEM</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>문제를 세 가지로 좁혔습니다.</h2>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05} className="rounded-xl border border-line-2 bg-paper px-5 py-5">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{p.n}</div>
                <h3 className="mt-3 font-archivo text-[18px] font-bold tracking-[-.02em]">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-[1.55] text-ink-70">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Solution */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>03 / SOLUTION</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>이미지 모음이 아니라, 신뢰 가능한 UGC 라이브러리.</h2>
        </Reveal>
        <p className={LEAD}>
          원작자의 권리를 지키면서 유저가 쉽게 탐색하는 플랫폼을 목표로, 서비스 방향을 세 가지로 정했습니다.
          콘텐츠 양이 많고 수요가 낮은 그림 도안은 초기 범위에서 제외하고 의상·가구에 집중했습니다.
        </p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
          {directions.map((d) => (
            <div key={d} className="rounded-lg border border-line-2 px-4.5 py-3.5 text-[14.5px] text-ink-70">
              {d}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
            SERVICE STRUCTURE
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold">
            {serviceFlow.map((step, i, arr) => (
              <span key={step} className="contents">
                <span
                  className={
                    i === 0 || i === arr.length - 1
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
        </div>

        <Reveal delay={0.1}>
          <Placeholder label={"아카이브 홈 · 카테고리 구조"} className="mt-8 h-[clamp(160px,20vw,280px)]" />
        </Reveal>
      </section>

      {/* 04 — Creator Rights (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>04 / CREATOR RIGHTS</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>Not a collection. A permission-based archive.</h2>
          </Reveal>
          <p className={LEAD_DARK}>
            해외 창작물을 단순히 모으지 않았습니다. 한 장이라도 원작자의 허락 없이 올리지 않는다는 원칙을 먼저
            정하고, 그 원칙이 지켜지도록 운영 절차를 설계했습니다.
          </p>

          <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-14">
            <Reveal className="flex-[1.1] flex flex-col gap-3">
              {outreach.map((row) => (
                <div
                  key={row.label}
                  className={`rounded-xl border px-5 py-4 ${
                    row.solution ? "border-accent-on-dark/40 bg-accent-on-dark/10" : "border-line-dark-2"
                  }`}
                >
                  <div
                    className={`font-archivo text-[10px] font-semibold tracking-[.14em] ${
                      row.solution ? "text-accent-on-dark" : "text-[rgba(244,241,234,.5)]"
                    }`}
                  >
                    {row.label}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-[1.55] text-[rgba(244,241,234,.85)]">{row.body}</p>
                </div>
              ))}
              <p className="mt-3 border-l-2 border-accent-on-dark pl-5 font-archivo text-[18px] font-bold leading-[1.4] tracking-[-.02em]">
                허가는 기능이 아니라 관계의 결과였습니다.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-1 flex-col gap-4">
              <Placeholder
                variant="dark"
                label={"CREATOR PERMISSION DM (개인정보 제거 후 삽입)"}
                className="h-[clamp(190px,24vw,320px)]"
              />
              <Placeholder variant="dark" label={"콘텐츠 출처 표기 UI"} className="h-[clamp(120px,15vw,190px)]" />
            </Reveal>
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]">
              PERMISSION PROCESS
            </div>
            <div className="mt-6 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:grid-cols-5">
              {permissionSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.04} className="bg-ink px-5 pt-6 pb-7">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent-on-dark">
                    STEP {step.n}
                  </div>
                  <div className="mt-3 text-[15px] font-semibold leading-[1.4]">{step.label}</div>
                  <div className="mt-2 text-[12.5px] leading-[1.5] text-[rgba(244,241,234,.6)]">{step.note}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Service Features */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>05 / SERVICE FEATURES</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>기능은 탐색 비용을 줄이는 방향으로.</h2>
          </Reveal>
          <p className={LEAD}>
            의상과 가구를 같은 구조로 정리하고, 모든 콘텐츠에 원작자·원본 링크·플랫폼을 고정했습니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-12">
            {features.map((f, i) => (
              <Reveal
                key={f.name}
                delay={i * 0.04}
                className="rounded-xl border border-line-2 bg-paper px-5 py-5"
              >
                <h3 className="font-archivo text-[17px] font-bold tracking-[-.02em]">{f.name}</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-line-2 px-4 py-3">
                    <div className="font-archivo text-[9.5px] font-semibold tracking-[.13em] text-muted-light">
                      PROBLEM
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-[1.5] text-ink-70">{f.problem}</p>
                  </div>
                  <div className="rounded-lg border border-accent/25 bg-accent/10 px-4 py-3">
                    <div className="font-archivo text-[9.5px] font-semibold tracking-[.13em] text-accent">
                      SOLUTION
                    </div>
                    <p className="mt-1.5 text-[13.5px] leading-[1.5] text-ink-70">{f.solution}</p>
                  </div>
                </div>
                <Placeholder label={f.shot} className="mt-3 h-[clamp(110px,13vw,170px)] text-[11px]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Photo Editor */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>06 / ARCHIVE → CREATION</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>탐색에서 창작으로.</h2>
        </Reveal>
        <p className={LEAD}>
          유저는 도안을 보기만 하지 않았습니다. &ldquo;내 방 사진에 이 도안을 얹어보고 싶다&rdquo;는 요청이
          반복됐는데, 그러려면 일일이 촬영하고 외부 앱에서 수동으로 배치해야 했습니다. 이 과정을 서비스 안 웹
          사진 편집 기능 하나로 합쳤습니다.
        </p>

        <div className="mt-8 flex gap-4 max-[560px]:flex-col sm:mt-12">
          <div className="flex-1">
            <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-muted-light">BEFORE</div>
            <div className="flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold">
              {editorBefore.map((step, i, arr) => (
                <span key={step} className="contents">
                  <span className="rounded-md border border-line-2 bg-paper px-3 py-1.5">{step}</span>
                  {i < arr.length - 1 && <span className="text-muted-light">→</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-accent">AFTER</div>
            <span className="inline-block rounded-md border border-accent/25 bg-accent/10 px-3 py-1.5 font-archivo text-[12px] font-semibold text-accent">
              서비스 안에서 바로 편집
            </span>
          </div>
        </div>

        <div className="mt-6 flex max-[560px]:flex-col gap-4">
          <Placeholder label={"사진 편집기 — BEFORE (외부 앱 합성)"} className="h-[clamp(150px,18vw,230px)] flex-1" />
          <Placeholder label={"사진 편집기 — AFTER (서비스 내 편집)"} className="h-[clamp(150px,18vw,230px)] flex-1" />
        </div>
      </section>

      {/* 07 — Operation & Growth */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>07 / OPERATION &amp; GROWTH</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>성장보다 신뢰를 먼저 골랐습니다.</h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-3 sm:mt-12">
            {operationCases.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.04}
                className="rounded-xl border border-line-2 bg-paper px-5 py-5 sm:flex sm:gap-10"
              >
                <div className="flex-none sm:w-[150px]">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{c.label}</div>
                  <div className="mt-2 font-archivo text-[15.5px] font-bold leading-[1.3] tracking-[-.02em]">
                    {c.title}
                  </div>
                </div>
                <p className="mt-3 flex-1 text-[14px] leading-[1.55] text-ink-70 sm:mt-0">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Placeholder variant="alt" label={"커뮤니티 홍보 글 · OAuth 로그인 화면"} className="mt-8 h-[clamp(150px,18vw,240px)]" />
          </Reveal>
        </div>
      </section>

      {/* 08 — Service Metrics */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>08 / SERVICE METRICS</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>규모가 아니라 신뢰의 신호입니다.</h2>
        </Reveal>
        <div className="mt-4 font-mono text-[12px] text-muted">2026.07.15 ~ 운영 중 · 콘텐츠는 하루 1개씩 증가</div>

        <div className="mt-9 grid grid-cols-2 gap-x-7 gap-y-9 sm:mt-12 sm:grid-cols-4">
          {serviceMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <Stat
                metric={m}
                numberClassName="font-archivo text-[clamp(26px,3.2vw,46px)] leading-[1] font-extrabold tracking-[-.045em]"
                labelClassName="mt-2.5 font-archivo text-[10px] font-semibold tracking-[.13em] text-muted"
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[13.5px] leading-[1.55] text-muted-light">
          Daily Visitors는 최근 확인 기준 추정치이며, 누적 방문자·다운로드 등은 GA 재확인 후 반영합니다.
        </p>
      </section>

      {/* 09 — Learning (dark) */}
      <section id="learning" className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="flex-[1.2]">
              <div className={EYEBROW_DARK}>09 / LEARNING</div>
              <h2 className={`mt-4 ${H2}`}>콘텐츠의 양보다 신뢰가 중요했습니다.</h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[15.5px] leading-[1.58] text-[rgba(244,241,234,.78)] text-pretty sm:text-[16.5px]">
              좋은 콘텐츠를 모으는 것만으로는 아카이브가 지속되지 않았습니다. 창작자 권리 보호, 출처 관리, 사용자
              경험, 운영 정책이 함께 있어야 커뮤니티가 유지된다는 것을 배웠습니다.
            </Reveal>
          </div>

          <p className="mt-9 max-w-[720px] border-l-2 border-accent-on-dark pl-5 font-archivo text-[clamp(17px,1.9vw,20px)] font-bold leading-[1.45] tracking-[-.02em] sm:mt-14">
            UGC 서비스에서 가장 중요한 것은 콘텐츠의 양이 아니라, 콘텐츠가 만들어지고 공유되는 과정에 대한
            신뢰였습니다.
          </p>

          <div className="mt-11 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-16 sm:grid-cols-3">
            {takeaways.map((t, i) => (
              <Reveal key={t.n} delay={i * 0.04} className="bg-ink px-6 pt-6 pb-7">
                <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {t.n}
                </div>
                <h3 className="mt-3 font-archivo text-[16px] font-bold leading-[1.35] tracking-[-.02em]">
                  {t.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[rgba(244,241,234,.7)]">{t.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
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

          <div className="mt-11 flex flex-wrap items-center gap-4 border-t border-line-dark-2 pt-6 sm:mt-16">
            <Link
              href={`/${locale}/work/identity5-pick`}
              className="font-archivo text-[12px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← IDENTITY5 PICK
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}`}
              className="font-archivo text-[12px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              BACK TO WORK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
