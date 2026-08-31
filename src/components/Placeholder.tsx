import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const VARIANT_BG: Record<"light" | "alt" | "dark", string> = {
  light:
    "bg-[repeating-linear-gradient(45deg,#f1eee8,#f1eee8_10px,#e8e4dc_10px,#e8e4dc_20px)]",
  alt: "bg-[repeating-linear-gradient(45deg,#ece8e0,#ece8e0_10px,#e3dfd6_10px,#e3dfd6_20px)]",
  dark: "bg-[repeating-linear-gradient(45deg,#26272a,#26272a_10px,#1f2023_10px,#1f2023_20px)]",
};

const VARIANT_BORDER: Record<"light" | "alt" | "dark", string> = {
  light: "border-line",
  alt: "border-line",
  dark: "border-line-dark",
};

const VARIANT_TEXT: Record<"light" | "alt" | "dark", string> = {
  light: "text-[#8d8a84]",
  alt: "text-[#8d8a84]",
  dark: "text-[rgba(244,241,234,.45)]",
};

const IMAGE_BG: Record<"light" | "alt" | "dark", string> = {
  light: "bg-[#efece6]",
  alt: "bg-[#e9e5dd]",
  dark: "bg-[#1f2023]",
};

export function Placeholder({
  label,
  variant = "light",
  className = "h-[240px]",
  href,
  src,
  fit = "cover",
}: {
  label: ReactNode;
  variant?: "light" | "alt" | "dark";
  className?: string;
  href?: string;
  /** When set, renders the real image instead of the hatched placeholder. */
  src?: string;
  fit?: "cover" | "contain";
}) {
  if (src) {
    const alt = typeof label === "string" ? label : "";
    const image = (
      <span
        className={`relative block overflow-hidden rounded-xl border ${VARIANT_BORDER[variant]} ${IMAGE_BG[variant]} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className={fit === "contain" ? "object-contain" : "object-cover object-top"}
        />
      </span>
    );
    return href ? (
      <Link href={href} className="group block">
        {image}
      </Link>
    ) : (
      image
    );
  }

  const classes = `flex items-center justify-center rounded-xl border ${VARIANT_BG[variant]} ${VARIANT_BORDER[variant]} ${VARIANT_TEXT[variant]} px-3 text-center font-mono text-[11.5px] tracking-[.08em] transition-colors duration-300 whitespace-pre-line ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${classes} hover:border-accent hover:text-accent`}>
        {label}
      </Link>
    );
  }

  return <div className={classes}>{label}</div>;
}
