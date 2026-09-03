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
    <span className="rounded-md border border-line-2 px-3 py-1.5 font-archivo text-[11px] font-semibold tracking-[.08em] text-ink-50">
      {children}
    </span>
  );
}

export function ProjectCTA({
  href,
  label,
  liveUrl,
}: {
  href: string;
  label: string;
  liveUrl?: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 font-archivo text-[12.5px] font-bold tracking-[.06em] transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        {label}
      </Link>
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-archivo text-[12px] font-bold tracking-[.04em] text-ink-50 transition-colors duration-300 hover:text-accent"
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
