import Link from "next/link";

export function Eyebrow({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`font-archivo text-[11.5px] font-semibold tracking-[.18em] ${
        dark ? "text-accent-on-dark" : "text-accent"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-line-2 px-3 py-1.5 font-archivo text-[11px] font-semibold tracking-[.08em] text-ink-50">
      {children}
    </span>
  );
}

export function ProjectCTA({ href, liveUrl }: { href: string; liveUrl?: string }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-archivo text-[12.5px] font-bold tracking-[.1em] text-bg transition-colors duration-300 hover:bg-accent"
      >
        VIEW CASE STUDY →
      </Link>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-archivo text-[12.5px] font-bold tracking-[.04em] text-ink-70 transition-colors duration-300 hover:text-accent"
        >
          {liveUrl.replace(/^https?:\/\//, "")} ↗
        </a>
      )}
    </div>
  );
}

export function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`font-archivo ${dark ? "text-accent-on-dark" : "text-accent"}`}>
      →
    </span>
  );
}
