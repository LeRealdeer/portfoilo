import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealLines } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { getProfile, getCapabilities } from "@/data/profile";
import { impactStrip } from "@/data/metrics";
import { getProjects, type Project } from "@/data/projects";
import { getExperience } from "@/data/experience";
import { toLocale, type Locale } from "@/lib/i18n";
import { SECTION_SHOTS, CARD_SHOTS } from "./shots";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const name = getProfile(toLocale(locale)).name;
  return { title: `${name} — I design around how players play, create, and connect.` };
}

const COPY: Record<Locale, Record<string, string>> = {
  ko: {
    workSub: "세 게임 라이브 서비스에서\n데이터·이벤트·유저 소통을 직접 담당했습니다.",
    resultLabel: "결과",
    projectMore: "프로젝트 더 보기",
    highlightsH2: "Community Operation Highlights",
    howH2: "How I Work",
    howSub: "각 항목 아래는 위 프로젝트에서 실제로 한 일입니다.",
    buildNote:
      "기획부터 개발·배포까지 직접 수행하기 때문에, 아이디어를 빠르게 검증하고 데이터를 기반으로 개선할 수 있습니다. 기술 상세는 각 프로젝트 페이지 하단에 있습니다.",
    expSub: "역사학·소프트웨어학 복수전공. 유저를 이해하는 관점과 직접 만들 수 있는 역량을 함께 쌓았습니다.",
  },
  en: {
    workSub: "Across three live game services I owned\nthe data, the events, and player communication.",
    resultLabel: "RESULT",
    projectMore: "See the full project",
    highlightsH2: "Community Operation Highlights",
    howH2: "How I Work",
    howSub: "Under each is what I actually did on the projects above.",
    buildNote:
      "Because I do the planning, building, and deploying myself, I can validate an idea fast and improve it from the data. The technical detail lives at the bottom of each project page.",
    expSub: "Double major in History and Software — a lens for understanding users, plus the ability to ship.",
  },
};

const HIGHLIGHTS: Record<Locale, { title: string; flow: string[] }[]> = {
  ko: [
    { title: "VOC Response", flow: ["유저 의견 수집", "개선", "업데이트"] },
    { title: "Community Event", flow: ["이벤트 기획", "참여 유도", "결과 분석"] },
    { title: "Global Communication", flow: ["해외 창작자 협업", "콘텐츠 운영 정책 수립"] },
  ],
  en: [
    { title: "VOC Response", flow: ["Collect feedback", "Improve", "Ship"] },
    { title: "Community Event", flow: ["Plan the event", "Drive participation", "Analyze results"] },
    { title: "Global Communication", flow: ["Partner with overseas creators", "Set content-ops policy"] },
  ],
};

const PAR_LABELS: Record<Locale, { problem: string; action: string; result: string; role: string; cases: string; stats: string }> = {
  ko: { problem: "PROBLEM", action: "ACTION", result: "RESULT", role: "MY ROLE", cases: "운영 사례", stats: "성과" },
  en: { problem: "PROBLEM", action: "ACTION", result: "RESULT", role: "MY ROLE", cases: "OPERATING CASES", stats: "RESULTS" },
};

/** One project as a full main-page section: identity → role → result numbers → P/A/R → operating cases → callouts → banner. */
function ProjectSection({
  p,
  locale,
  alt,
  resultLabel,
  moreLabel,
}: {
  p: Project;
  locale: Locale;
  alt: boolean;
  resultLabel: string;
  moreLabel: string;
}) {
  const href = `/${locale}/work/${p.slug}`;
  const shots = SECTION_SHOTS[p.slug];
  const hero = CARD_SHOTS[p.slug];
  const L = PAR_LABELS[locale];
  const liveHost = p.liveUrl?.replace(/^https?:\/\//, "");
  return (
    <section className={`border-t border-line px-5 py-14 sm:px-9 sm:py-20 ${alt ? "bg-bg-alt" : ""}`}>
      <div className="mx-auto max-w-[1440px]">
        {/* eyebrow + keywords */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">{p.eyebrow}</div>
          <div className="flex flex-wrap gap-1.5">
            {p.keywords.map((k) => (
              <span
                key={k}
                className="rounded-md border border-line-2 bg-bg px-2.5 py-1 font-archivo text-[11px] font-bold tracking-[.1em] text-ink-70"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Hero: text (40%) + representative service screenshot (60%) */}
        <div className="mt-5 grid items-start gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-14">
          <div>
            <Reveal>
              <Link href={href}>
                <h3 className="font-archivo text-[clamp(26px,4vw,52px)] leading-[1.05] font-extrabold tracking-[-.04em] transition-colors duration-300 hover:text-accent">
                  {p.title}
                </h3>
              </Link>
            </Reveal>
            <p className="mt-3 font-archivo text-[clamp(15px,1.8vw,19px)] font-bold leading-[1.45] tracking-[-.01em] text-ink-70">
              {p.cardSubtitle}
            </p>
            <div className="mt-4 space-y-3">
              {p.intro.map((para) => (
                <p key={para} className="text-[14px] leading-[1.7] text-ink-70">
                  {para}
                </p>
              ))}
            </div>

            {/* My Role */}
            <div className="mt-6 rounded-2xl border border-line-2 bg-bg px-6 py-6">
              <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{L.role}</div>
              <div className="mt-2 font-archivo text-[clamp(15px,1.7vw,18px)] font-bold tracking-[-.01em]">
                {p.myRole.title}
              </div>
              <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                {p.myRole.items.map((it) => (
                  <li key={it} className="flex gap-2 text-[14px] leading-[1.6] text-ink-70">
                    <span className="flex-none font-bold text-accent">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* representative screenshot — framed as operating evidence */}
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border-2 border-ink bg-bg">
              <figcaption className="flex items-center justify-between gap-3 border-b border-line-2 px-4 py-2.5">
                <span className="flex items-center gap-2 font-archivo text-[11.5px] font-semibold tracking-[.13em] text-ink-70">
                  <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden />
                  {p.keywords[0]}
                </span>
                {liveHost && <span className="font-mono text-[11px] text-muted">{liveHost}</span>}
              </figcaption>
              <Link href={href} className="block">
                <Placeholder variant="alt" label={p.title} img={hero} className="" />
              </Link>
            </figure>
          </Reveal>
        </div>

        {/* Result numbers — shown before the prose */}
        <div className="mt-9 rounded-2xl border-2 border-ink bg-bg px-6 py-7 sm:mt-12 sm:px-9 sm:py-9">
          <div className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">{L.stats}</div>
          <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {p.resultStats.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className={i > 0 ? "sm:border-l sm:border-line-2 sm:pl-8" : ""}>
                <Stat
                  metric={m}
                  numberClassName="font-archivo text-[clamp(30px,4.6vw,52px)] leading-[1] font-extrabold tracking-[-.045em]"
                  labelClassName="mt-2.5 font-archivo text-[12px] font-semibold tracking-[.07em] text-muted"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Problem / Action / Result */}
        <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-3">
          <Reveal className="rounded-2xl border border-line-2 bg-bg px-5 py-6">
            <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{L.problem}</div>
            <p className="mt-3 text-[14px] leading-[1.72] text-ink-70">{p.par.problem}</p>
          </Reveal>
          <Reveal delay={0.06} className="rounded-2xl border border-line-2 bg-bg px-5 py-6">
            <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{L.action}</div>
            <ul className="mt-3 flex flex-col gap-1.5 text-[14px] leading-[1.65] text-ink-70">
              {p.par.action.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="flex-none font-bold text-accent">·</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl border border-line-2 bg-bg px-5 py-6">
            <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{L.result}</div>
            <p className="mt-3 text-[14px] leading-[1.72] text-ink-70">{p.par.result}</p>
          </Reveal>
        </div>

        {/* Operating cases — parallel cards: evidence image on top, then label / title / body / metric */}
        <div className="mt-11 sm:mt-14">
          <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{L.cases}</div>
          <div
            className={`mt-6 grid gap-3 sm:gap-4 ${
              p.cases.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            }`}
          >
            {p.cases.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.06}
                className="flex flex-col overflow-hidden rounded-2xl border border-line-2 bg-bg"
              >
                {shots[i] && (
                  <Placeholder variant="alt" label={c.title} img={shots[i]} className="h-[190px] border-0! rounded-none!" />
                )}
                <div className="flex flex-1 flex-col px-5 py-5">
                  <div className="font-archivo text-[11.5px] font-semibold tracking-[.13em] text-muted-light">
                    {c.category}
                  </div>
                  <h4 className="mt-2 font-archivo text-[19px] font-bold leading-[1.28] tracking-[-.02em]">
                    {c.title}
                  </h4>
                  <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink-70">{c.body}</p>
                  <div className="mt-auto pt-4">
                    <span className="inline-block rounded-md border border-accent/40 bg-accent/5 px-2.5 py-1 font-archivo text-[11.5px] font-bold tracking-[.03em] text-accent">
                      {c.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Callouts — highlighted moments */}
        {p.callouts.length > 0 && (
          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2">
            {p.callouts.map((co) => (
              <Reveal key={co.title} className="rounded-2xl border border-dashed border-line-4 bg-bg-alt px-5 py-5">
                <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{co.tag}</div>
                <div className="mt-2 font-archivo text-[15.5px] font-bold leading-[1.4] tracking-[-.01em]">
                  {co.title}
                </div>
                <ul className="mt-2 flex flex-col gap-1 text-[13.5px] leading-[1.55] text-ink-70">
                  {co.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        )}

        {/* Closing banner */}
        <div className="mt-12 rounded-2xl border-2 border-ink px-6 py-8 sm:mt-16 sm:px-9">
          <div className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">{resultLabel}</div>
          <p className="mt-3 max-w-[680px] font-archivo text-[clamp(16px,2.2vw,24px)] font-extrabold leading-[1.35] tracking-[-.025em] text-balance">
            {p.resultNote}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mt-10">
          <Link
            href={href}
            className="inline-flex items-center gap-2.5 rounded-lg bg-ink px-10 py-5 font-archivo text-[clamp(14px,1.6vw,16px)] font-bold tracking-[.06em] text-bg transition-colors duration-300 hover:bg-accent"
          >
            {moreLabel} <span aria-hidden>→</span>
          </Link>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-archivo text-[12.5px] font-bold tracking-[.04em] text-ink-50 transition-colors duration-300 hover:text-accent"
            >
              {p.liveUrl.replace(/^https?:\/\//, "")} ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = toLocale(rawLocale);
  const t = COPY[locale];
  const profile = getProfile(locale);
  const capabilities = getCapabilities(locale);
  const experience = getExperience(locale);
  const projects = getProjects(locale);

  return (
    <div className="min-h-screen bg-bg">
      <Header locale={locale} variant="home" />

      {/* Hero */}
      <section id="top" className="mx-auto max-w-[1440px] px-5 pt-16 pb-12 sm:px-9 sm:pt-24 sm:pb-20">
        <Reveal>
          <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent mb-7 sm:mb-11">
            {profile.eyebrow}
          </div>
        </Reveal>
        <h1 className="font-archivo text-[clamp(25px,7.6vw,100px)] leading-[1.04] font-extrabold tracking-[-.04em] text-balance">
          <RevealLines lines={profile.heroLines} />
        </h1>
        <div className="mt-8 flex flex-col items-start gap-6 sm:mt-14 sm:flex-row sm:gap-20">
          <Reveal delay={0.15} className="flex-1 max-w-[560px]">
            <p className="text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]">
              {profile.heroBody}
            </p>
          </Reveal>
          <Reveal delay={0.25} className="flex gap-3 pt-1.5">
            <a
              href="#work"
              className="rounded-lg bg-ink px-7 py-3.5 font-archivo text-[12.5px] font-bold tracking-[.1em] text-bg transition-colors duration-300 hover:bg-accent"
            >
              VIEW WORK
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line-2 px-7 py-3.5 font-archivo text-[12.5px] font-bold tracking-[.1em] text-ink-70 transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              CONTACT
            </a>
          </Reveal>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="mx-auto max-w-[1440px] border-t border-line px-5 py-9 sm:px-9 sm:py-11">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-10">
          {impactStrip.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05} className={i > 0 ? "sm:border-l sm:border-line sm:pl-8" : ""}>
              <Stat
                metric={m}
                numberClassName="font-archivo text-[clamp(34px,5vw,72px)] leading-[1] font-extrabold tracking-[-.045em]"
                labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <div id="work">
        <section className="border-t border-line px-5 pt-16 pb-2 sm:px-9 sm:pt-24">
          <div className="mx-auto flex max-w-[1440px] max-[860px]:flex-col items-end max-[860px]:items-start gap-6 sm:gap-10">
            <Reveal className="flex-1">
              <h2 className="font-archivo text-[clamp(27px,4.4vw,60px)] leading-[1.14] font-extrabold tracking-[-.04em]">
                Selected Work
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mb-1.5 max-w-[340px] whitespace-pre-line text-[15px] leading-[1.7] text-muted">
              {t.workSub}
            </Reveal>
          </div>
        </section>

        {projects.map((p, i) => (
          <ProjectSection
            key={p.slug}
            p={p}
            locale={locale}
            alt={i % 2 === 1}
            resultLabel={t.resultLabel}
            moreLabel={t.projectMore}
          />
        ))}
      </div>

      {/* Community Operation Highlights */}
      <section className="border-t border-line px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-archivo text-[clamp(22px,3.4vw,40px)] leading-[1.14] font-extrabold tracking-[-.035em]">
            {t.highlightsH2}
          </h2>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
            {HIGHLIGHTS[locale].map((h, i) => (
              <Reveal
                key={h.title}
                delay={i * 0.05}
                className="rounded-xl border border-line-2 px-5 py-6"
              >
                <div className="font-archivo text-[13px] font-bold tracking-[.06em] text-accent">{h.title}</div>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 font-archivo text-[12px] font-semibold">
                  {h.flow.map((step, j) => (
                    <span key={step} className="contents">
                      <span className="rounded-md border border-line-2 bg-bg-alt px-2.5 py-1">{step}</span>
                      {j < h.flow.length - 1 && <span className="text-accent">→</span>}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="how" className="border-t border-line bg-bg-alt px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col items-end max-[860px]:items-start gap-6 sm:gap-10">
            <Reveal className="flex-1">
              <h2 className="font-archivo text-[clamp(27px,4.4vw,60px)] leading-[1.14] font-extrabold tracking-[-.04em]">
                {t.howH2}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mb-1.5 max-w-[300px] text-[15px] leading-[1.7] text-muted">
              {t.howSub}
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-3 max-[1100px]:grid-cols-2 max-[760px]:grid-cols-1 gap-px border-t border-b border-line-4 bg-line-4 sm:mt-14">
            {capabilities.map((c, i) => (
              <Reveal key={c.number} delay={(i % 3) * 0.05} className="bg-bg-alt px-6 pt-7 pb-8">
                <div className="font-archivo text-[12px] font-semibold tracking-[.14em] text-accent">{c.number}</div>
                <h3 className="mt-3.5 font-archivo text-[19px] font-bold leading-[1.15] tracking-[-.025em]">
                  {c.titleEn}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-muted">{c.lineEn}</p>
                <p className="mt-3 text-[13.5px] leading-[1.5] text-ink-70">{c.body}</p>
                <p className="mt-3.5 flex gap-2 border-t border-line-3 pt-3.5 text-[12.5px] leading-[1.55] text-ink-50">
                  <span className="flex-none font-bold text-accent">→</span>
                  <span>{c.evidence}</span>
                </p>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[680px] text-[13.5px] leading-[1.7] text-muted sm:mt-10">{t.buildNote}</p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-line px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col items-end max-[860px]:items-start gap-6 sm:gap-10">
            <Reveal className="flex-1">
              <h2 className="font-archivo text-[clamp(27px,4.4vw,60px)] leading-[1.14] font-extrabold tracking-[-.04em]">
                Experience
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mb-1.5 max-w-[320px] text-[15px] leading-[1.7] text-muted">
              {t.expSub}
            </Reveal>
          </div>

          <div className="mt-9 border-t border-line-2 sm:mt-14">
            {experience.map((row, i) => (
              <Reveal
                key={row.org}
                delay={Math.min(i * 0.04, 0.2)}
                className={`flex max-[860px]:flex-col gap-3 py-6 sm:gap-12 ${
                  i === experience.length - 1 ? "border-b border-line-2" : "border-b border-line-3"
                }`}
              >
                <div className="w-[140px] flex-none pt-1 font-mono text-[11.5px] text-muted">{row.period}</div>
                <div className="flex-[1.1]">
                  <h3 className="font-archivo text-[clamp(18px,1.9vw,24px)] font-bold tracking-[-.02em]">
                    {row.org}
                  </h3>
                  <div className="mt-1 text-[13.5px] text-muted">{row.role}</div>
                </div>
                <div className="flex-[1.7]">
                  <p className="text-[15px] leading-[1.5] text-ink-70">{row.body}</p>
                  <div className="mt-2.5 font-archivo text-[11.5px] font-semibold tracking-[.13em] text-accent">
                    {row.focus}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line bg-ink px-5 py-16 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-20 items-start">
            <Reveal className="flex-[1.3]">
              <h2 className="font-archivo text-[clamp(23px,5.6vw,54px)] leading-[1.16] font-extrabold tracking-[-.04em]">
                <RevealLines lines={profile.aboutHeadline} />
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1">
              {profile.aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-[15px] leading-[1.6] text-[rgba(244,241,234,.78)] text-pretty sm:text-[16px] sm:leading-[1.62] ${
                    i > 0 ? "mt-4" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-11 border-t border-line-dark pt-8 sm:mt-18">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.16em] text-accent-on-dark">
              MAIN FOCUS
            </div>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-archivo text-[clamp(16px,2vw,26px)] font-bold tracking-[-.02em] sm:gap-x-7 sm:gap-y-2.5">
              {profile.careerInterests.main.map((c, i) => (
                <span key={c} className="flex items-center gap-4 sm:gap-7">
                  <span>{c}</span>
                  {i < profile.careerInterests.main.length - 1 && (
                    <span className="text-[rgba(244,241,234,.3)]">·</span>
                  )}
                </span>
              ))}
            </div>

            <div className="mt-8 font-archivo text-[11.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.4)]">
              ALSO INTERESTED IN
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[15px] leading-[1.6] text-[rgba(244,241,234,.6)]">
              {profile.careerInterests.also.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
