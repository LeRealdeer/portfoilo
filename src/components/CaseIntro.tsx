import { Reveal } from "./Reveal";
import { Placeholder, type Shot } from "./Placeholder";

export type IntroCase = {
  n: string;
  heading: string;
  body: string;
  /** optional operating-example block inside a case */
  note?: { label: string; lines: string[] };
};

/**
 * The operations case-study opener on a /work/* page: one-line definition,
 * intro, My Role, the numbered operating cases, and a result banner. The
 * detailed feature / GA4 / tech sections continue below it.
 */
export function CaseIntro({
  oneLiner,
  intro,
  myRoleLabel,
  roleTitle,
  roleItems,
  cases,
  caseShots,
  resultLabel,
  resultNumbers,
  resultNote,
  tags,
}: {
  oneLiner: string;
  intro: string[];
  myRoleLabel: string;
  roleTitle: string;
  roleItems: string[];
  cases: IntroCase[];
  caseShots: Shot[];
  resultLabel: string;
  resultNumbers: string;
  resultNote: string;
  tags?: string[];
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-20">
      <Reveal>
        <p className="max-w-[900px] font-archivo text-[clamp(18px,2.4vw,30px)] font-extrabold leading-[1.3] tracking-[-.03em] text-balance">
          {oneLiner}
        </p>
      </Reveal>
      <div className="mt-5 max-w-[760px] space-y-3.5">
        {intro.map((para) => (
          <p key={para} className="text-[14.5px] leading-[1.7] text-ink-70 sm:text-[15px]">
            {para}
          </p>
        ))}
      </div>

      {/* My Role */}
      <div className="mt-8 rounded-2xl border border-line-2 bg-bg-alt px-6 py-6 sm:mt-10 sm:px-8 sm:py-7">
        <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-accent">{myRoleLabel}</div>
        <div className="mt-2 font-archivo text-[clamp(15px,1.7vw,18px)] font-bold tracking-[-.01em]">{roleTitle}</div>
        <ul className="mt-4 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
          {roleItems.map((it) => (
            <li key={it} className="flex gap-2 text-[13.5px] leading-[1.6] text-ink-70">
              <span className="flex-none font-bold text-accent">·</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* numbered operating cases */}
      <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:gap-14">
        {cases.map((c, i) => (
          <div
            key={c.n}
            className={`flex max-[860px]:flex-col gap-6 sm:gap-14 items-start ${
              i % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <Reveal className="w-full flex-1">
              <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-accent">{c.n}</div>
              <h3 className="mt-2 font-archivo text-[clamp(18px,2.2vw,26px)] font-extrabold leading-[1.25] tracking-[-.03em]">
                {c.heading}
              </h3>
              <p className="mt-3 max-w-[560px] text-[14px] leading-[1.75] text-ink-70 sm:text-[15px]">{c.body}</p>
              {c.note && (
                <div className="mt-4 max-w-[420px] rounded-xl border border-line-2 px-4 py-3.5">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.14em] text-muted-light">
                    {c.note.label}
                  </div>
                  <ul className="mt-2 flex flex-col gap-1 text-[13px] leading-[1.5] text-ink-70">
                    {c.note.lines.map((l) => (
                      <li key={l}>· {l}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
            {caseShots[i] && (
              <Reveal delay={0.1} className="w-full flex-1">
                <Placeholder variant="alt" label={c.heading} img={caseShots[i]} className="" />
              </Reveal>
            )}
          </div>
        ))}
      </div>

      {/* result banner */}
      <div className="mt-12 rounded-2xl border-2 border-ink px-6 py-8 sm:mt-16 sm:px-10 sm:py-10">
        <div className="font-archivo text-[11px] font-semibold tracking-[.18em] text-accent">{resultLabel}</div>
        <p className="mt-3 font-archivo text-[clamp(20px,3vw,38px)] font-extrabold leading-[1.15] tracking-[-.035em] text-balance">
          {resultNumbers}
        </p>
        <p className="mt-4 max-w-[640px] text-[14px] leading-[1.7] text-ink-70 sm:text-[15px]">{resultNote}</p>
      </div>

      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tg) => (
            <span
              key={tg}
              className="rounded-md border border-line-2 px-3 py-1.5 font-archivo text-[10.5px] font-semibold tracking-[.08em] text-ink-50"
            >
              {tg}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
