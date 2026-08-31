import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealLines } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Chip, ProjectCTA } from "@/components/Bits";
import { Placeholder } from "@/components/Placeholder";
import { getProfile, getCapabilities, stack } from "@/data/profile";
import { impactStrip } from "@/data/metrics";
import { getProjects } from "@/data/projects";
import { getExperience } from "@/data/experience";
import { toLocale, type Locale } from "@/lib/i18n";

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
    workSub: "게임 셋, 서로 다른 커뮤니티 셋,\n서로 다른 운영 과제 셋.",
    capH2: "유저의 목소리에서 라이브 서비스까지",
    capSub: "유저의 목소리가 실제 서비스가 되기까지, 제가 직접 해온 일들.",
    buildH3: "기획한 것을 직접 만들 수도 있습니다.",
    buildBody:
      "아이디어를 문서에서 끝내지 않고 직접 프로토타입과 서비스로 만들 수 있습니다. 기술은 직무 정체성이 아니라 실행 수단입니다.",
    expSub: "역사학·소프트웨어학 복수전공. 유저를 이해하는 관점과 직접 만들 수 있는 역량을 함께 쌓았습니다.",
    permission: "Permission before publication.",
  },
  en: {
    workSub: "Three games. Three different communities.\nThree different operational challenges.",
    capH2: "From player voice to live service",
    capSub: "What I've personally done to turn player voice into a running service.",
    buildH3: "I can also build what I plan.",
    buildBody:
      "I don't leave ideas in a doc — I can take them to a prototype and a running service. Tech isn't my job identity; it's how I execute.",
    expSub: "Double major in History and Software — a lens for understanding users, plus the ability to ship.",
    permission: "Permission before publication.",
  },
};

const CARD_SHOTS = {
  sky: { src: "/main_skyplanner_home.png", w: 1754, h: 997, mw: 900 },
  identity5: {
    main: { src: "/main_identity5_home.png", w: 2481, h: 1412, mw: 760 },
    thumbs: [
      { label: "CP MAP", src: "/main_identity5_cp.png", w: 1692, h: 1237, mw: 260 },
      { label: "SKIN ARCHIVE", src: "/main_identity5_skin.png", w: 1680, h: 1259, mw: 260 },
      { label: "TIER LIST", src: "/main_identity5_tierlist.png", w: 1431, h: 1212, mw: 260 },
    ],
  },
  heartopia: {
    main: { src: "/main_heartopia_home.png", w: 2535, h: 1261, mw: 760 },
    thumbs: [
      { label: "CREATOR PAGE", src: "/main_heartopia_creator.png", w: 2538, h: 1261, mw: 380 },
      { label: "CONTENT DETAIL", src: "/main_heartopia_detail.png", w: 4416, h: 2122, mw: 380 },
    ],
  },
};

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
        <h1 className="font-archivo text-[clamp(29px,8.5vw,100px)] leading-[1.02] font-extrabold tracking-[-.04em] text-balance">
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
              href="#resume"
              className="rounded-lg border border-line-2 px-7 py-3.5 font-archivo text-[12.5px] font-bold tracking-[.1em] text-ink-70 transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              RESUME ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="mx-auto max-w-[1440px] border-t border-line px-5 py-9 sm:px-9 sm:py-11">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
          {impactStrip.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05} className={i > 0 ? "border-l border-line pl-4 sm:pl-8" : ""}>
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
        <div className="mx-auto flex max-w-[1440px] max-[860px]:flex-col items-end gap-10">
          <Reveal className="flex-1">
            <h2 className="font-archivo text-[clamp(27px,4.4vw,60px)] leading-[1.14] font-extrabold tracking-[-.04em]">
              Selected Work
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mb-1.5 max-w-[280px] whitespace-pre-line text-[15px] leading-[1.7] text-muted">
            {t.workSub}
          </Reveal>
        </div>

        {/* 01 — Sky Planner: full-bleed */}
        <article className="mx-auto mt-11 max-w-[1440px] sm:mt-20">
          <div className="border-b border-line-2 pb-3.5">
            <span className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">
              {sky.eyebrow}
            </span>
          </div>
          <Reveal>
            <Placeholder
              href={`/${locale}/work/${sky.slug}`}
              label={sky.screenshotLabel}
              img={CARD_SHOTS.sky}
              className="mt-5 block"
            />
          </Reveal>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="max-w-[640px] flex-[1.5]">
              <Link href={`/${locale}/work/${sky.slug}`}>
                <h3 className="font-archivo text-[clamp(24px,3.4vw,46px)] leading-[1.06] font-extrabold tracking-[-.035em] transition-colors duration-300 hover:text-accent">
                  {sky.title}
                </h3>
              </Link>
              <p className="mt-3 text-[15px] leading-[1.5] text-ink-70 text-pretty sm:text-[16px]">
                {sky.cardSubtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {sky.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <ProjectCTA href={`/${locale}/work/${sky.slug}`} liveUrl={sky.liveUrl} />
            </Reveal>
            <Reveal delay={0.1} className="flex-1 grid grid-cols-2 gap-x-6 gap-y-5 pt-2">
              {sky.cardMetrics.map((m) => (
                <Stat
                  key={m.label}
                  metric={m}
                  numberClassName="font-archivo text-[32px] leading-[1] font-extrabold tracking-[-.04em]"
                  labelClassName="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted"
                  tbdClassName="text-muted-light"
                />
              ))}
            </Reveal>
          </div>
        </article>

        {/* 02 — Identity5 Pick: left images, right text */}
        <article className="mx-auto mt-16 max-w-[1440px] sm:mt-28">
          <div className="border-b border-line-2 pb-3.5">
            <span className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">
              {identity5.eyebrow}
            </span>
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <Reveal className="flex-[1.35]">
              <Placeholder
                href={`/${locale}/work/${identity5.slug}`}
                label={identity5.screenshotLabel}
                img={CARD_SHOTS.identity5.main}
                className="flex"
              />
              <div className="mt-4 flex gap-4">
                {CARD_SHOTS.identity5.thumbs.map((thumb) => (
                  <Placeholder key={thumb.label} label={thumb.label} img={thumb} className="flex-1 text-[11px]" />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[460px] flex-1 pt-1">
              <Link href={`/${locale}/work/${identity5.slug}`}>
                <h3 className="font-archivo text-[clamp(22px,3vw,42px)] leading-[1.06] font-extrabold tracking-[-.035em] transition-colors duration-300 hover:text-accent">
                  {identity5.title}
                </h3>
              </Link>
              <p className="mt-3 text-[15px] leading-[1.5] text-ink-70 text-pretty sm:text-[16px]">
                {identity5.cardSubtitle}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {identity5.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <div className="mt-6 flex gap-8 border-t border-line pt-5">
                {identity5.cardMetrics.map((m) => (
                  <Stat
                    key={m.label}
                    metric={m}
                    numberClassName="font-archivo text-[30px] leading-[1] font-extrabold tracking-[-.04em]"
                    labelClassName="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted"
                    tbdClassName="text-muted-light"
                  />
                ))}
              </div>
              <ProjectCTA href={`/${locale}/work/${identity5.slug}`} liveUrl={identity5.liveUrl} />
            </Reveal>
          </div>
        </article>

        {/* 03 — Heartopia Archive: left text, right images */}
        <article className="mx-auto mt-16 max-w-[1440px] sm:mt-28">
          <div className="border-b border-line-2 pb-3.5">
            <span className="font-archivo text-[12px] font-semibold tracking-[.16em] text-accent">
              {heartopia.eyebrow}
            </span>
          </div>
          <div className="mt-6 flex max-[860px]:flex-col-reverse gap-6 sm:gap-14 items-start">
            <Reveal className="max-w-[460px] flex-1 pt-1">
              <Link href={`/${locale}/work/${heartopia.slug}`}>
                <h3 className="font-archivo text-[clamp(22px,3vw,42px)] leading-[1.06] font-extrabold tracking-[-.035em] transition-colors duration-300 hover:text-accent">
                  {heartopia.title}
                </h3>
              </Link>
              <p className="mt-3 text-[15px] leading-[1.5] text-ink-70 text-pretty sm:text-[16px]">
                {heartopia.cardSubtitle}
              </p>
              <blockquote className="mt-6 border-l-2 border-accent pl-4.5 font-archivo text-[20px] font-bold leading-[1.3] tracking-[-.02em]">
                {t.permission}
              </blockquote>
              <div className="mt-5 flex flex-wrap gap-2">
                {heartopia.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3.5 border-t border-line pt-5">
                {heartopia.cardMetrics.map((m) => (
                  <div key={m.label} className="flex items-baseline gap-3.5">
                    <Stat
                      metric={m}
                      numberClassName="font-archivo text-[19px] leading-[1.1] font-extrabold tracking-[-.02em]"
                      labelClassName="hidden"
                    />
                    <span className="font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
              <ProjectCTA href={`/${locale}/work/${heartopia.slug}`} liveUrl={heartopia.liveUrl} />
            </Reveal>
            <Reveal delay={0.1} className="flex-[1.35]">
              <Placeholder
                href={`/${locale}/work/${heartopia.slug}`}
                label={heartopia.screenshotLabel}
                img={CARD_SHOTS.heartopia.main}
                className="flex"
              />
              <div className="mt-4 flex gap-4">
                {CARD_SHOTS.heartopia.thumbs.map((thumb) => (
                  <Placeholder key={thumb.label} label={thumb.label} img={thumb} className="flex-1 text-[11px]" />
                ))}
              </div>
            </Reveal>
          </div>
        </article>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-line bg-bg-alt px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col items-end gap-10">
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
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:mt-16 sm:gap-20 items-start">
            <Reveal className="max-w-[420px] flex-1">
              <h3 className="font-archivo text-[clamp(19px,2.2vw,28px)] leading-[1.15] font-bold tracking-[-.03em]">
                {t.buildH3}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-70 sm:text-[15.5px]">{t.buildBody}</p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-[1.4] flex-wrap gap-1.5 pt-1.5">
              {stack.map((s) => (
                <span key={s} className="rounded bg-ink/5 px-2.5 py-1.5 font-mono text-[11.5px] text-ink-50">
                  {s}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-line px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col items-end gap-10">
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
              <h2 className="font-archivo text-[clamp(26px,4vw,54px)] leading-[1.16] font-extrabold tracking-[-.04em]">
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
              <a
                href="#about"
                className="mt-6 inline-block font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
              >
                {profile.aboutMore}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-11 border-t border-line-dark pt-8 sm:mt-18">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              {profile.interestedIn}
            </div>
            <div className="mt-4.5 flex flex-wrap gap-x-7 gap-y-2.5 font-archivo text-[clamp(15px,2vw,25px)] font-bold tracking-[-.02em]">
              {profile.careerInterests.map((c, i) => (
                <span key={c} className="flex items-center gap-7">
                  <span>{c}</span>
                  {i < profile.careerInterests.length - 1 && (
                    <span className="text-[rgba(244,241,234,.3)]">·</span>
                  )}
                </span>
              ))}
            </div>
            <div className="mt-6 font-mono text-[11.5px] text-[rgba(244,241,234,.45)]">{profile.language}</div>
          </Reveal>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}
