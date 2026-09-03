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
import { SECTION_SHOTS } from "./shots";

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
    projectMoreSub: "기술스택 · 전체 기능 · GA4 세부 수치",
    howH2: "How I Work",
    howSub: "각 항목 아래는 위 프로젝트에서 실제로 한 일입니다.",
    expSub: "역사학·소프트웨어학 복수전공. 유저를 이해하는 관점과 직접 만들 수 있는 역량을 함께 쌓았습니다.",
  },
  en: {
    workSub: "Across three live game services I owned\nthe data, the events, and player communication.",
    resultLabel: "RESULT",
    projectMore: "See the full project",
    projectMoreSub: "tech stack · all features · full GA4 numbers",
    howH2: "How I Work",
    howSub: "Under each is what I actually did on the projects above.",
    expSub: "Double major in History and Software — a lens for understanding users, plus the ability to ship.",
  },
};

/** One project as a full main-page section: identity, three CM subsections with a shot each, result, CTA. */
function ProjectSection({
  p,
  locale,
  alt,
  resultLabel,
  moreLabel,
  moreSub,
}: {
  p: Project;
  locale: Locale;
  alt: boolean;
  resultLabel: string;
  moreLabel: string;
  moreSub: string;
}) {
  const href = `/${locale}/work/${p.slug}`;
  const shots = SECTION_SHOTS[p.slug];
  return (
    <section className={`border-t border-line px-5 py-14 sm:px-9 sm:py-20 ${alt ? "bg-bg-alt" : ""}`}>
      <div className="mx-auto max-w-[1440px]">
        <div className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">{p.eyebrow}</div>
        <Reveal>
          <Link href={href}>
            <h3 className="mt-4 font-archivo text-[clamp(26px,4vw,52px)] leading-[1.05] font-extrabold tracking-[-.04em] transition-colors duration-300 hover:text-accent">
              {p.title}
            </h3>
          </Link>
        </Reveal>
        <p className="mt-3 max-w-[820px] font-archivo text-[clamp(15px,1.8vw,18px)] font-bold leading-[1.45] tracking-[-.01em] text-ink-70">
          {p.cardSubtitle}
        </p>

        <div className="mt-10 flex flex-col gap-10 sm:mt-14 sm:gap-16">
          {p.sections.map((s, i) => (
            <div
              key={s.heading}
              className={`flex max-[860px]:flex-col gap-6 sm:gap-14 items-start ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Reveal className="w-full flex-1">
                <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-accent">
                  {`0${i + 1}`}
                </div>
                <h4 className="mt-2 font-archivo text-[clamp(17px,2vw,23px)] font-bold leading-[1.3] tracking-[-.025em]">
                  {s.heading}
                </h4>
                <p className="mt-3 max-w-[560px] text-[14px] leading-[1.75] text-ink-70 sm:text-[15px]">
                  {s.body}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="w-full flex-1">
                <Placeholder
                  variant="alt"
                  label={s.heading}
                  img={shots[i]}
                  className="h-[clamp(200px,26vw,360px)]"
                />
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t-2 border-ink pt-6 sm:mt-14">
          <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
            {resultLabel}
          </div>
          <p className="mt-2 font-archivo text-[clamp(16px,2.1vw,24px)] font-extrabold leading-[1.3] tracking-[-.025em]">
            {p.cardResult}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-9">
          <Link
            href={href}
            className="group inline-flex flex-col rounded-lg bg-ink px-8 py-4 transition-colors duration-300 hover:bg-accent"
          >
            <span className="font-archivo text-[13.5px] font-bold tracking-[.05em] text-bg">{moreLabel} →</span>
            <span className="mt-0.5 font-archivo text-[10.5px] font-semibold tracking-[.08em] text-[rgba(244,241,234,.55)]">
              {moreSub}
            </span>
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
            moreSub={t.projectMoreSub}
          />
        ))}
      </div>

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
                <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-accent">{c.number}</div>
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
                  <div className="mt-2.5 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent">
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
