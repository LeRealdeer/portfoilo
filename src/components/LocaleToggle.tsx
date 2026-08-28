"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";

export function LocaleToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  const swapTo = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts.length > 1) parts[1] = target;
    const next = parts.join("/");
    return next || `/${target}`;
  };

  return (
    <span className="flex items-center gap-1.5 border-l border-line-2 pl-5 font-medium text-muted-light">
      {SUPPORTED_LOCALES.map((l, i) => (
        <span key={l} className="contents">
          {i > 0 && <span aria-hidden>/</span>}
          {l === locale ? (
            <span className="font-bold text-ink">{l.toUpperCase()}</span>
          ) : (
            <Link href={swapTo(l)} className="transition-colors duration-200 hover:text-ink">
              {l.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </span>
  );
}
