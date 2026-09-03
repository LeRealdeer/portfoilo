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

export function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`font-archivo ${dark ? "text-accent-on-dark" : "text-accent"}`}>
      →
    </span>
  );
}
