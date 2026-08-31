import Link from "next/link";
import { getProfile } from "@/data/profile";
import { LocaleToggle } from "@/components/LocaleToggle";
import type { Locale } from "@/lib/i18n";

export function Header({
  locale,
  variant = "home",
  serviceUrl,
}: {
  locale: Locale;
  variant?: "home" | "case";
  /** Live service URL shown (and linked) in the case-study header. */
  serviceUrl?: string;
}) {
  const home = `/${locale}`;
  const profile = getProfile(locale);
  const serviceLabel = serviceUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-20 flex items-center gap-8 border-b border-line-3 bg-bg/88 px-5 py-5 backdrop-blur-md sm:px-9">
      <Link
        href={home}
        className="flex-none whitespace-nowrap font-archivo text-[17px] font-extrabold tracking-[-.03em] text-ink hover:text-ink"
      >
        {profile.name}
      </Link>

      {variant === "home" ? (
        <span className="hidden text-[12px] tracking-[.02em] text-muted sm:inline">
          {profile.tagline}
        </span>
      ) : (
        serviceLabel && (
          <a
            href={serviceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-[11.5px] text-muted transition-colors duration-300 hover:text-accent sm:inline"
          >
            {serviceLabel} ↗
          </a>
        )
      )}

      <span className="flex-1" />

      <nav className="flex flex-none items-center gap-6 whitespace-nowrap font-archivo text-[12.5px] font-semibold tracking-[.09em]">
        <Link href={`${home}#work`}>WORK</Link>
        <Link href={`${home}#experience`} className="hidden sm:inline">
          EXPERIENCE
        </Link>
        <Link href={`${home}#about`} className="hidden sm:inline">
          ABOUT
        </Link>
        <a href={`${home}#contact`} className="text-accent">
          CONTACT
        </a>
        <LocaleToggle locale={locale} />
      </nav>
    </header>
  );
}
