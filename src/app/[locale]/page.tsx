import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealLines } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { ProjectCTA } from "@/components/Bits";
import { Placeholder } from "@/components/Placeholder";
import { getProfile, getCapabilities } from "@/data/profile";
import { impactStrip } from "@/data/metrics";
import { getProjects, type Project } from "@/data/projects";
import { getExperience } from "@/data/experience";
import { toLocale, type Locale } from "@/lib/i18n";
import { CARD_SHOTS } from "./shots";

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
    workSub: "세 게임에서 서로 다른 유저 행동과\n운영 과제를 다뤘습니다.",
    more: "더 보기 →",
    capH2: "라이브 운영과 커뮤니티, 실제로 해온 일",
    capSub: "각 역량 아래는 실제 프로젝트에서 한 일입니다.",
    buildH3: "기획한 것을 직접 만들 수도 있습니다.",
    buildBody:
      "기획부터 개발·배포까지 직접 하기 때문에, 아이디어를 빠르게 검증하고 데이터를 직접 뽑아 의사결정에 활용할 수 있습니다.",
    expSub: "역사학·소프트웨어학 복수전공. 유저를 이해하는 관점과 직접 만들 수 있는 역량을 함께 쌓았습니다.",
  },
  en: {
    workSub: "Three games — different player behaviors\nand operational problems in each.",
    more: "More →",
    capH2: "Live ops and community — what I've actually done",
    capSub: "Under each is what I actually did on a real project.",
    buildH3: "I can also build what I plan.",
    buildBody:
      "Because I do the planning, building, and deploying myself, I can validate an idea fast and pull the data I need for decisions directly.",
    expSub: "Double major in History and Software — a lens for understanding users, plus the ability to ship.",
  },
};

/** The text column of a Selected Work card — a self-contained summary. */
function CardText({ p, locale, more }: { p: Project; locale: Locale; more: string }) {
  const href = `/${locale}/work/${p.slug}`;
  return (
    <>
      <Link href={href}>
        <h3 className="font-archivo text-[clamp(23px,3vw,42px)] leading-[1.06] font-extrabold tracking-[-.035em] transition-colors duration-300 hover:text-accent">
          {p.title}
        </h3>
      </Link>
      <p className="mt-3 font-archivo text-[clamp(15px,1.7vw,17px)] font-bold leading-[1.4] tracking-[-.01em] text-ink-70">
        {p.cardSubtitle}
      </p>
      <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
        {p.cardActions.map((a) => (
          <li key={a} className="flex gap-2.5 text-[13.5px] leading-[1.55] text-ink-70 sm:text-[14px]">
            <span className="mt-px flex-none font-bold text-accent">·</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-archivo text-[13.5px] font-bold tracking-[.01em] text-ink">{p.cardResult}</p>
      <ProjectCTA href={href} label={more} liveUrl={p.liveUrl} />
    </>
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
  const [sky, identity5, heartopia] = getProjects(locale);

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
      <section id="work" className="border-t border-line px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto flex max-w-[1440px] max-[860px]:flex-col items-end max-[860px]:items-start gap-6 sm:gap-10">
          <Reveal className="flex-1">
            <h2 className="font-archivo text-[clamp(27px,4.4vw,60px)] leading-[1.14] font-extrabold tracking-[-.04em]">
              Selected Work
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mb-1.5 max-w-[280px] whitespace-pre-line text-[15px] leading-[1.7] text-muted">
            {t.workSub}
          </Reveal>
        </div>

        {/* 01 — Sky Planner: image left, text right */}
        <article className="mx-auto mt-11 max-w-[1440px] sm:mt-20">
          <div className="border-b border-line-2 pb-3.5">
            <span className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">
              {sky.eyebrow}
            </span>
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="w-full flex-[1.2]">
              <Placeholder
                href={`/${locale}/work/${sky.slug}`}
                label={sky.screenshotLabel}
                img={CARD_SHOTS.sky}
                className="h-[clamp(240px,32vw,420px)]"
              />
            </Reveal>
            <Reveal delay={0.1} className="w-full flex-1">
              <CardText p={sky} locale={locale} more={t.more} />
            </Reveal>
          </div>
        </article>

        {/* 02 — Identity5 Pick: left images, right text */}
        <article className="mx-auto mt-14 max-w-[1440px] sm:mt-20">
          <div className="border-b border-line-2 pb-3.5">
            <span className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">
              {identity5.eyebrow}
            </span>
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="w-full flex-[1.35]">
              <Placeholder
                href={`/${locale}/work/${identity5.slug}`}
                label={identity5.screenshotLabel}
                img={CARD_SHOTS.identity5.main}
                className="h-[clamp(200px,24vw,300px)]"
              />
              <div className="mt-3 grid grid-cols-3 gap-2.5 sm:mt-4 sm:gap-4">
                {CARD_SHOTS.identity5.thumbs.map((thumb) => (
                  <Placeholder
                    key={thumb.label}
                    label={thumb.label}
                    img={thumb}
                    className="h-[clamp(82px,17vw,150px)] text-[11px]"
                  />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="w-full max-w-[460px] flex-1 pt-1">
              <CardText p={identity5} locale={locale} more={t.more} />
            </Reveal>
          </div>
        </article>

        {/* 03 — Heartopia Archive: left text, right images */}
        <article className="mx-auto mt-14 max-w-[1440px] sm:mt-20">
          <div className="border-b border-line-2 pb-3.5">
            <span className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">
              {heartopia.eyebrow}
            </span>
          </div>
          <div className="mt-6 flex max-[860px]:flex-col-reverse gap-6 sm:gap-14 items-start">
            <Reveal className="w-full max-w-[460px] flex-1 pt-1">
              <CardText p={heartopia} locale={locale} more={t.more} />
            </Reveal>
            <Reveal delay={0.1} className="w-full flex-[1.35]">
              <Placeholder
                href={`/${locale}/work/${heartopia.slug}`}
                label={heartopia.screenshotLabel}
                img={CARD_SHOTS.heartopia.main}
                className="h-[clamp(200px,24vw,300px)]"
              />
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-4">
                {CARD_SHOTS.heartopia.thumbs.map((thumb) => (
                  <Placeholder
                    key={thumb.label}
                    label={thumb.label}
                    img={thumb}
                    className="h-[clamp(110px,20vw,170px)] text-[11px]"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </article>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-line bg-bg-alt px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col items-end max-[860px]:items-start gap-6 sm:gap-10">
            <Reveal className="flex-1">
              <h2 className="max-w-[30rem] font-archivo text-[clamp(27px,4.4vw,60px)] leading-[1.16] font-extrabold tracking-[-.04em] text-balance">
                {t.capH2}
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mb-1.5 max-w-[280px] text-[15px] leading-[1.7] text-muted">
              {t.capSub}
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-3 max-[1100px]:grid-cols-2 max-[760px]:grid-cols-1 gap-px border-t border-b border-line-4 bg-line-4 sm:mt-16">
            {capabilities.map((c, i) => (
              <Reveal key={c.number} delay={(i % 3) * 0.05} className="bg-bg-alt px-6 pt-7 pb-8">
                <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-accent">
                  {c.number}
                </div>
                <h3 className="mt-3.5 font-archivo text-[19px] font-bold leading-[1.15] tracking-[-.025em]">
                  {c.titleEn}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-muted">{c.lineEn}</p>
                <p className="mt-3 text-[14px] leading-[1.5] text-ink-70">{c.body}</p>
                <p className="mt-3 flex gap-2 text-[12.5px] leading-[1.5] text-ink-50">
                  <span className="flex-none font-bold text-accent">→</span>
                  <span>{c.evidence}</span>
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 max-w-[640px] sm:mt-16">
            <h3 className="font-archivo text-[clamp(19px,2.2vw,28px)] leading-[1.15] font-bold tracking-[-.03em]">
              {t.buildH3}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-70 sm:text-[15.5px]">{t.buildBody}</p>
          </Reveal>
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
