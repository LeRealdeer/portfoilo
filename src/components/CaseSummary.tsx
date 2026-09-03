import { Reveal } from "./Reveal";

/**
 * The five-second read at the top of a case study — problem / action / result,
 * before the reader hits the feature list and GA4 detail.
 */
export function CaseSummary({
  items,
}: {
  items: { k: string; v: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 sm:px-9">
      <Reveal className="rounded-2xl border border-line-2 bg-bg-alt px-6 py-7 sm:px-10 sm:py-9">
        <div className="font-archivo text-[11px] font-semibold tracking-[.18em] text-accent">SUMMARY</div>
        <dl className="mt-5 flex flex-col gap-4 sm:mt-6 sm:gap-5">
          {items.map((it) => (
            <div key={it.k} className="flex max-[620px]:flex-col gap-1.5 sm:gap-8">
              <dt className="flex-none pt-0.5 font-archivo text-[11px] font-semibold tracking-[.14em] text-muted-light sm:w-[84px]">
                {it.k}
              </dt>
              <dd className="flex-1 text-[14.5px] leading-[1.65] text-ink-70 sm:text-[15px]">{it.v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
