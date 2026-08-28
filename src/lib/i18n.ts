export const SUPPORTED_LOCALES = ["ko", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Narrow an unknown route param to a Locale, defaulting to Korean. */
export function toLocale(value: string): Locale {
  return isLocale(value) ? value : "ko";
}

/** Pick the value for the active locale from a `{ ko, en }` bundle. */
export function pick<T>(locale: Locale, bundle: Record<Locale, T>): T {
  return bundle[locale];
}
