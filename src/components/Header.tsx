import Link from "next/link";
import { profile } from "@/data/profile";

export function Header({
  locale,
  variant = "home",
  breadcrumb,
  resumeHref = "#resume",
}: {
  locale: string;
  variant?: "home" | "case";
  breadcrumb?: string;
  resumeHref?: string;
}) {
  const home = `/${locale}`;

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
        <span className="hidden font-mono text-[11.5px] text-muted sm:inline">
          {breadcrumb}
        </span>
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
        <a href={resumeHref} className="text-accent">
          RESUME ↗
        </a>
        {variant === "home" && (
          <span className="flex gap-1.5 border-l border-line-2 pl-5 font-medium text-muted-light">
            <span className="font-bold text-ink">KR</span>/<span>EN</span>
          </span>
        )}
      </nav>
    </header>
  );
}
