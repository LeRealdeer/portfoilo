/**
 * Shared type scale for /work/* case-study pages.
 * Every section eyebrow / heading / lead / card uses these exact classes so the
 * Sky Planner, Identity5 Pick, and Heartopia Archive pages read as one system.
 * Sizes are mobile-first — the clamp min / base size is what a phone sees.
 * Headings wrap naturally (text-balance) within a max width — no forced <br>.
 */
export const CASE_EYEBROW =
  "font-archivo text-[11px] font-semibold tracking-[.18em] text-accent";
export const CASE_EYEBROW_DARK =
  "font-archivo text-[11px] font-semibold tracking-[.18em] text-accent-on-dark";
export const CASE_H2 =
  "font-archivo text-[clamp(21px,3vw,40px)] leading-[1.26] font-extrabold tracking-[-.035em] text-balance max-w-[54rem]";
export const CASE_LEAD =
  "mt-4 max-w-[560px] text-[15px] leading-[1.55] text-ink-70 text-pretty sm:text-[16px] sm:leading-[1.6]";
export const CASE_LEAD_DARK =
  "mt-4 max-w-[560px] text-[15px] leading-[1.55] text-[rgba(244,241,234,.72)] text-pretty sm:text-[16px] sm:leading-[1.6]";
export const CASE_CARD_EYEBROW =
  "font-archivo text-[10px] font-semibold tracking-[.14em] text-accent";
export const CASE_CARD_H3 = "mt-3 font-archivo text-[18px] font-bold tracking-[-.02em]";
export const CASE_CARD_BODY = "mt-2.5 text-[14.5px] leading-[1.55] text-ink-70";
