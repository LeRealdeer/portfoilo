import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { HERO_SHOT, SHOTS } from "./shots";
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
    title: "Heartopia Archive — Inha Seo",
    description:
      locale === "en"
        ? "A global fan archive that connects user-made Heartopia content scattered across platforms, built on original-creator permission and a source-attribution policy."
        : "여러 플랫폼에 흩어진 두근두근타운 유저 제작 콘텐츠를, 해외 원작자 허락과 출처 정책을 기반으로 연결한 글로벌 팬 아카이브 케이스 스터디.",
  };
}

const heroMetrics = [
  { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
  { value: 3, label: "VERIFIED CREATORS" },
  { value: 45, accentSuffix: "+", label: "MEMBERS" },
];

const serviceMetrics = [
  { value: 119, accentSuffix: "+", label: "ARCHIVED CONTENTS" },
  { value: 45, accentSuffix: "+", label: "MEMBERS" },
  { value: 0, raw: "50–60", label: "DAILY VISITORS" },
  { value: 3, label: "VERIFIED CREATORS" },
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

const COPY = {
  ko: {
    heroSubtitle:
      "여러 플랫폼에 흩어진 유저 제작 콘텐츠를, 원작자 허락과 출처 정책을 기반으로 연결한 글로벌 팬 아카이브",
    discoveryFlow: ["커뮤니티 검색", "해외 플랫폼 이동 · 회원가입", "번역", "이미지 저장", "다시 찾기"],
    ctx: {
      h2: "좋은 콘텐츠는 많았지만, 다시 찾고 비교하기 어려웠습니다.",
      lead:
        "두근두근타운은 유저가 직접 만든 의상·가구 같은 커스터마이징 콘텐츠 공유가 활발한 게임입니다. 하지만 그 콘텐츠는 Xiaohongshu, Discord, 개인 SNS에 흩어져 있어, 한국 유저가 원하는 것을 찾으려면 매번 같은 과정을 반복해야 했습니다.",
      note: "“다시 찾기”가 매번 처음부터였습니다 — 이미지만 따로 저장하면 원작자와 원본 게시물을 다시 확인하기 어려운 경우가 많았기 때문입니다.",
      shot: "커뮤니티에 흩어져 있던 유저 제작 콘텐츠",
    },
    problem: {
      h2: "문제를 세 가지로 좁혔습니다.",
      items: [
        { n: "01", title: "Discovery", body: "좋은 콘텐츠는 분명히 있지만, 원하는 의상·가구를 원하는 순간에 찾을 수 없습니다." },
        { n: "02", title: "Accessibility", body: "공유가 해외 플랫폼과 외국어 중심으로 이뤄져, 가입과 번역 과정을 거쳐야 탐색할 수 있었습니다." },
        { n: "03", title: "Trust", body: "원작자와 출처가 유지되지 않으면 아카이브의 신뢰를 만들기 어렵다고 판단했습니다." },
      ],
    },
    solution: {
      h2: "이미지 모음이 아니라, 신뢰 가능한 UGC 라이브러리.",
      lead:
        "원작자의 권리를 지키면서 유저가 쉽게 탐색하는 플랫폼을 목표로, 서비스 방향을 세 가지로 정했습니다. 초기에는 탐색 요구가 명확했던 의상·가구를 중심으로 범위를 좁혀 시작했습니다.",
      directions: ["콘텐츠 탐색 경험 개선", "원작자 출처 관리", "한국 유저 접근성 개선"],
      serviceFlow: ["Creator", "콘텐츠 발견", "허락 확인", "출처 관리", "Archive 등록", "User"],
      shot: "도안 훑어보기 — 카테고리 · 태그 필터",
      shot2: "찜한 도안 — 개인 컬렉션",
    },
    rights: {
      h2: "단순 수집이 아니라, 허락 기반 아카이브입니다.",
      lead:
        "해외 창작물을 단순히 모으지 않았습니다. 한 장이라도 원작자의 허락 없이 올리지 않는다는 원칙을 먼저 정하고, 그 원칙이 지켜지도록 운영 절차를 설계했습니다.",
      outreach: [
        { label: "PROBLEM", solution: false, body: "해외 플랫폼의 메시지 제한으로 원작자에게 직접 연락하기 어려운 경우가 있었습니다." },
        { label: "ACTION", solution: false, body: "현지 커뮤니케이션 지원을 받아 창작자와 연결하고, 비상업 운영 목적과 출처 표기 방식을 설명한 뒤 사용 허락을 요청했습니다." },
        { label: "RESULT", solution: true, body: "원작자에게 직접 사용 허락을 확보하고, 원작자·원본 링크를 고정한 채 대리 게시 형태로 콘텐츠를 운영하고 있습니다." },
      ],
      quote: "허가는 기능이 아니라 관계의 결과였습니다.",
      shotAttr: "커뮤니티 게시글의 원작자 출처 표기",
      steps: [
        { n: "01", label: "창작자 확인", note: "원작자와 원본 게시물을 특정" },
        { n: "02", label: "연락 · 목적 설명", note: "비상업 · 광고 없음을 직접 안내" },
        { n: "03", label: "사용 허락 확보", note: "사용 범위를 합의" },
        { n: "04", label: "출처 표시", note: "원작자 · 원본 링크를 콘텐츠에 고정" },
        { n: "05", label: "콘텐츠 등록", note: "허락받은 대리 게시로 공개" },
      ],
    },
    features: {
      h2: "기능은 탐색 비용을 줄이는 방향으로.",
      lead: "의상과 가구를 같은 구조로 정리하고, 모든 콘텐츠에 원작자·원본 링크·플랫폼을 고정했습니다.",
      items: [
        {
          name: "의상 / 가구 아카이브",
          problem: "유저 제작 의상·가구 콘텐츠가 여러 플랫폼에 흩어져, 원하는 스타일을 비교하기 어려웠습니다.",
          solution: "의상과 가구를 같은 구조의 아카이브(카테고리·태그·상세)로 옮겨, 한곳에서 탐색·비교하도록 했습니다.",
          shot: "의상 아카이브 — 인기순 정렬",
        },
        {
          name: "검색 · 분류 · 상세",
          problem: "콘텐츠가 늘수록 원하는 것을 찾는 비용이 커집니다.",
          solution: "검색과 분류, 원작자·출처가 고정된 상세 페이지로 탐색 비용이 늘지 않게 설계했습니다.",
          shot: "콘텐츠 상세 — 원작자 · 원본 링크 고정",
        },
      ],
    },
    editor: {
      h2: "탐색에서 창작으로.",
      lead:
        "유저는 도안을 보기만 하지 않았습니다. 사용자 의견에서 “내 방 사진에 이 도안을 미리 배치해보고 싶다”는 니즈를 발견했는데, 그러려면 일일이 촬영하고 외부 앱에서 수동으로 배치해야 했습니다. 이 과정을 서비스 안 웹 사진 편집 기능 하나로 합쳤습니다.",
      before: ["직접 촬영", "외부 편집 앱 실행", "수동 배치"],
      afterLabel: "서비스 안에서 바로 편집",
      shotBefore: "사진 편집기 — BEFORE (외부 앱 합성)",
      shotAfter: "사진 편집기 — AFTER (서비스 내 편집)",
    },
    ops: {
      h2: "출시 이후 커뮤니티 반응을 확인하며 운영했습니다.",
      cases: [
        {
          label: "COMMUNITY",
          title: "게임 커뮤니티 기반 소개",
          body: "게임 커뮤니티에 서비스를 소개하면서, 원작자 허락과 출처 표기 방식을 함께 안내했습니다.",
        },
        {
          label: "BUG FIX",
          title: "이미지가 로드되지 않는 오류",
          body: "일부 환경에서 콘텐츠 이미지가 표시되지 않아, 이미지 처리·로딩 흐름을 점검하고 재현·수정·배포 후 재확인 사이클로 해결했습니다.",
        },
      ],
      shot: "게임 커뮤니티에 올린 아카이브 홍보 글",
    },
    metrics: {
      h2: "초기 운영 지표.",
      dateline: "2026.07.15 ~ 운영 중",
    },
    learn: {
      h2: "콘텐츠의 양보다 신뢰가 중요했습니다.",
      lead:
        "좋은 콘텐츠를 모으는 것만으로는 아카이브가 지속되지 않았습니다.",
      quote:
        "UGC 아카이브의 품질은 콘텐츠 수뿐 아니라, 누가 만들었는지와 어떤 방식으로 공유되는지를 함께 보존할 때 만들어진다는 것을 배웠습니다.",
      takeaways: [
        {
          n: "01",
          title: "콘텐츠 운영 정책이 곧 제품 구조가 됐습니다",
          body: "허락 확인 → 출처 합의 → 대리 게시라는 운영 절차를 먼저 세우고, 서비스 기능과 콘텐츠 등록 흐름을 그 절차에 맞춰 설계했습니다.",
        },
        {
          n: "02",
          title: "출처 표기를 정책이 아니라 구조로 만들었습니다",
          body: "모든 콘텐츠에 원작자·원본 링크·플랫폼을 필수 항목으로 고정해, 출처 없는 콘텐츠는 등록 자체가 되지 않게 했습니다. 신뢰는 약속이 아니라 시스템이 지켜야 한다고 봤습니다.",
        },
        {
          n: "03",
          title: "아카이브는 탐색에서 창작으로 확장됩니다",
          body: "“도안을 실제 사진에 얹어보고 싶다”는 요청에서, 아카이브가 보는 곳을 넘어 만드는 시작점이 될 수 있다는 것을 확인했습니다.",
        },
      ],
    },
  },
  en: {
    heroSubtitle:
      "A global fan archive that connects user-made content scattered across platforms — built on creator permission and a source policy.",
    discoveryFlow: ["Search the community", "Go to an overseas platform · sign up", "Translate", "Save the image", "Search again"],
    ctx: {
      h2: "There was plenty of good content — it was just hard to find again and compare.",
      lead:
        "Heartopia has an active culture of sharing user-made customization content like outfits and furniture. But that content lives scattered across Xiaohongshu, Discord, and personal social media, so a Korean player had to repeat the same process every time they wanted to find something.",
      note: "“Search again” started from scratch every time — saving just the image often left no easy way back to the creator or the original post.",
      shot: "User-made content scattered across the community",
    },
    problem: {
      h2: "I narrowed it to three problems.",
      items: [
        { n: "01", title: "Discovery", body: "The good content is there, but you can't find the outfit or furniture you want when you want it." },
        { n: "02", title: "Accessibility", body: "Sharing happens on overseas platforms in other languages, so browsing meant signing up and translating first." },
        { n: "03", title: "Trust", body: "I judged that without the creator and source kept intact, the archive couldn't build trust." },
      ],
    },
    solution: {
      h2: "Not an image dump — a UGC library you can trust.",
      lead:
        "Aiming for a platform where users browse easily while creators' rights are protected, I set three directions for the service. I started by narrowing the scope to outfits and furniture, where the discovery need was clearest.",
      directions: ["Improve the content discovery experience", "Manage creator attribution", "Improve access for Korean users"],
      serviceFlow: ["Creator", "Content found", "Permission confirmed", "Attribution managed", "Added to Archive", "User"],
      shot: "Browsing patterns — category and tag filters",
      shot2: "Favorited patterns — a personal collection",
    },
    rights: {
      h2: "Not a collection. A permission-based archive.",
      lead:
        "I didn't just gather overseas creations. I set the principle first — not a single image goes up without the creator's permission — and designed the operating process so that principle holds.",
      outreach: [
        { label: "PROBLEM", solution: false, body: "Platform messaging restrictions sometimes made it hard to contact creators directly." },
        { label: "ACTION", solution: false, body: "I connected with creators through local communication support, explained the non-commercial purpose and how attribution works, and asked for permission to use their work." },
        { label: "RESULT", solution: true, body: "I secured permission directly from the creators and run the content as attributed proxy posts, with the creator and original link pinned." },
      ],
      quote: "Permission wasn't a feature — it was the result of a relationship.",
      shotAttr: "Source credit shown in the community post",
      steps: [
        { n: "01", label: "Identify the creator", note: "Pin down the original creator and post" },
        { n: "02", label: "Contact · explain purpose", note: "State non-commercial · no ads directly" },
        { n: "03", label: "Secure permission", note: "Agree on the scope of use" },
        { n: "04", label: "Show attribution", note: "Pin creator · original link to the content" },
        { n: "05", label: "Register content", note: "Publish as permitted proxy posting" },
      ],
    },
    features: {
      h2: "Features aimed at cutting the cost of finding things.",
      lead: "Outfits and furniture are organized in the same structure, and every piece of content has the creator, original link, and platform pinned to it.",
      items: [
        {
          name: "Outfit / Furniture Archive",
          problem: "User-made outfit and furniture content was scattered across platforms, making styles hard to compare.",
          solution: "Moved outfits and furniture into one archive of the same shape (categories, tags, detail pages) so you can browse and compare in one place.",
          shot: "Outfit archive — sorted by popularity",
        },
        {
          name: "Search · Sort · Detail",
          problem: "The more content there is, the more it costs to find what you want.",
          solution: "Designed search, sorting, and detail pages with creator and source pinned so the cost of finding doesn't grow.",
          shot: "Content detail — creator and original link pinned",
        },
      ],
    },
    editor: {
      h2: "From browsing to making.",
      lead:
        "Users didn't just look at the patterns. From user feedback I found the need — “I want to preview this pattern placed over a photo of my room” — and doing that meant shooting each photo and placing things by hand in an external app. I folded that whole process into one in-service web photo editor.",
      before: ["Shoot it yourself", "Open an external editing app", "Place it by hand"],
      afterLabel: "Edit right inside the service",
      shotBefore: "Photo editor — BEFORE (composited in an external app)",
      shotAfter: "Photo editor — AFTER (edited in-service)",
    },
    ops: {
      h2: "Operating after launch while watching community response.",
      cases: [
        {
          label: "COMMUNITY",
          title: "Introducing it through game communities",
          body: "I introduced the service in game communities, together with how creator permission and source attribution work.",
        },
        {
          label: "BUG FIX",
          title: "Images failing to load",
          body: "Content images weren't showing in some environments, so I traced the image processing and loading flow and fixed it with a reproduce–fix–deploy–reverify cycle.",
        },
      ],
      shot: "Archive promo posts in the game community",
    },
    metrics: {
      h2: "Early operating metrics.",
      dateline: "Since 2026.07.15",
    },
    learn: {
      h2: "Trust mattered more than the amount of content.",
      lead:
        "Collecting good content alone didn't keep the archive going.",
      quote:
        "I learned that the quality of a UGC archive comes not just from the number of items, but from preserving who made each one and how it's shared.",
      takeaways: [
        {
          n: "01",
          title: "The content operating policy became the product structure",
          body: "I set the operating process first — confirm permission → agree on attribution → post as a proxy — and designed the features and the content-registration flow to fit it.",
        },
        {
          n: "02",
          title: "I made attribution structural, not a policy",
          body: "Every piece of content carries the creator, original link, and platform as required fields, so nothing without a source can even be registered. Trust has to be enforced by the system, not promised.",
        },
        {
          n: "03",
          title: "An archive extends from browsing into making",
          body: "From the request “I want to lay a pattern over a real photo,” I saw that an archive can be more than a place to look — it can be a starting point for making.",
        },
      ],
    },
  },
} satisfies Record<Locale, unknown>;

function ArrowFlow({
  steps,
  emphasizeEnds = false,
  arrowClass = "text-accent",
}: {
  steps: string[];
  emphasizeEnds?: boolean;
  arrowClass?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold">
      {steps.map((step, i, arr) => {
        const filled = emphasizeEnds ? i === 0 || i === arr.length - 1 : i === arr.length - 1;
        return (
          <span key={step} className="contents">
            <span
              className={
                filled
                  ? "rounded-md bg-ink px-3 py-1.5 text-ink-on-dark"
                  : "rounded-md border border-line-2 bg-paper px-3 py-1.5"
              }
            >
              {step}
            </span>
            {i < arr.length - 1 && <span className={arrowClass}>→</span>}
          </span>
        );
      })}
    </div>
  );
}

export default async function HeartopiaArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const project = getProject("heartopia-archive", locale);
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
            <h1 className="mt-4 font-archivo text-[clamp(32px,5.4vw,80px)] leading-[1.02] font-extrabold tracking-[-.042em]">
              {project.title}
            </h1>
            <p className="mt-5 font-archivo text-[clamp(16.5px,2vw,24px)] font-bold leading-[1.4] tracking-[-.02em] text-ink-70">
              {c.heroSubtitle}
            </p>
            <p className="mt-5 text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]">
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
                numberClassName="font-archivo text-[clamp(22px,2.8vw,38px)] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-2 font-archivo text-[10px] font-semibold tracking-[.13em] text-muted"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 01 — Context */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>01 / CONTEXT</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.ctx.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.ctx.lead}</p>

        <div className="mt-8 sm:mt-12">
          <ArrowFlow steps={c.discoveryFlow} />
        </div>
        <p className="mt-4 max-w-[520px] text-[15px] leading-[1.55] text-muted">{c.ctx.note}</p>
      </section>

      {/* 02 — Problem */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>02 / PROBLEM</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.problem.h2}</h2>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
            {c.problem.items.map((p, i) => (
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
          <h2 className={`mt-4 ${H2}`}>{c.solution.h2}</h2>
        </Reveal>
        <p className={LEAD}>{c.solution.lead}</p>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-3">
          {c.solution.directions.map((d) => (
            <div key={d} className="rounded-lg border border-line-2 px-4.5 py-3.5 text-[14.5px] text-ink-70">
              {d}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
            SERVICE STRUCTURE
          </div>
          <div className="mt-3">
            <ArrowFlow steps={c.solution.serviceFlow} emphasizeEnds />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Placeholder label={c.solution.shot} img={SHOTS.solution} className="h-[clamp(240px,32vw,360px)]" />
          <Placeholder label={c.solution.shot2} img={SHOTS.solutionTerms} className="h-[clamp(240px,32vw,360px)]" />
        </div>
      </section>

      {/* 04 — Creator Rights (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW_DARK}>04 / CREATOR RIGHTS</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.rights.h2}</h2>
          </Reveal>
          <p className={LEAD_DARK}>{c.rights.lead}</p>

          <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-14">
            <Reveal className="flex-[1.1] flex flex-col gap-3">
              {c.rights.outreach.map((row) => (
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
                {c.rights.quote}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="w-full flex-1">
              <Placeholder variant="dark" label={c.rights.shotAttr} img={SHOTS.rightsAttribution} className="w-full" />
            </Reveal>
          </div>

          <div className="mt-12 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]">
              PERMISSION PROCESS
            </div>
            <div className="mt-6 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:grid-cols-5">
              {c.rights.steps.map((step, i) => (
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
            <h2 className={`mt-4 ${H2}`}>{c.features.h2}</h2>
          </Reveal>
          <p className={LEAD}>{c.features.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-12">
            {c.features.items.map((f, i) => {
              const featShot = [SHOTS.featOutfit, SHOTS.featSearch][i];
              return (
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
                {featShot && <Placeholder label={f.shot} img={featShot} className="mt-3" />}
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — Photo Editor */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>06 / ARCHIVE → CREATION</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.editor.h2}</h2>
        </Reveal>

        <div className="mt-6 flex max-[900px]:flex-col gap-8 sm:mt-10 sm:gap-14 items-start">
          {/* left — write-up */}
          <div className="min-w-0 flex-1">
            <p className="max-w-[560px] text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]">
              {c.editor.lead}
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-muted-light">
                  BEFORE
                </div>
                <div className="flex flex-wrap items-center gap-2 font-archivo text-[12px] font-semibold">
                  {c.editor.before.map((step, i, arr) => (
                    <span key={step} className="contents">
                      <span className="rounded-md border border-line-2 bg-paper px-3 py-1.5">{step}</span>
                      {i < arr.length - 1 && <span className="text-muted-light">→</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-archivo text-[10px] font-semibold tracking-[.16em] text-accent">AFTER</div>
                <span className="inline-block rounded-md border border-accent/25 bg-accent/10 px-3 py-1.5 font-archivo text-[12px] font-semibold text-accent">
                  {c.editor.afterLabel}
                </span>
              </div>
            </div>
          </div>

          {/* right — image */}
          <Reveal delay={0.1} className="w-full flex-1">
            <Placeholder
              label={c.editor.shotAfter}
              img={SHOTS.editorAfter}
              className="h-[clamp(240px,32vw,400px)]"
            />
          </Reveal>
        </div>
      </section>

      {/* 07 — Operation & Growth */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className={EYEBROW}>07 / OPERATION &amp; GROWTH</div>
          <Reveal>
            <h2 className={`mt-4 ${H2}`}>{c.ops.h2}</h2>
          </Reveal>

          <div className="mt-8 flex max-[900px]:flex-col gap-8 sm:mt-12 sm:gap-14 items-start">
            {/* left — cases */}
            <div className="min-w-0 flex-1 flex flex-col gap-3">
              {c.ops.cases.map((oc, i) => (
                <Reveal
                  key={oc.title}
                  delay={i * 0.04}
                  className="rounded-xl border border-line-2 bg-paper px-5 py-5"
                >
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-accent">{oc.label}</div>
                  <div className="mt-2 font-archivo text-[15.5px] font-bold leading-[1.3] tracking-[-.02em]">
                    {oc.title}
                  </div>
                  <p className="mt-2.5 text-[14px] leading-[1.55] text-ink-70">{oc.body}</p>
                </Reveal>
              ))}
            </div>

            {/* right — image */}
            <Reveal delay={0.1} className="w-full flex-1">
              <Placeholder variant="alt" label={c.ops.shot} img={SHOTS.ops} className="h-[clamp(240px,30vw,380px)]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 — Service Metrics */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-24">
        <div className={EYEBROW}>08 / SERVICE METRICS</div>
        <Reveal>
          <h2 className={`mt-4 ${H2}`}>{c.metrics.h2}</h2>
        </Reveal>
        <div className="mt-4 font-mono text-[12px] text-muted">{c.metrics.dateline}</div>

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

          <p className="mt-9 max-w-[720px] border-l-2 border-accent-on-dark pl-5 font-archivo text-[clamp(17px,1.9vw,20px)] font-bold leading-[1.45] tracking-[-.02em] sm:mt-14">
            {c.learn.quote}
          </p>

          <div className="mt-11 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-16 sm:grid-cols-3">
            {c.learn.takeaways.map((t, i) => (
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
