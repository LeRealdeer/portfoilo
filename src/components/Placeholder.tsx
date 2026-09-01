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

export type Shot = {
  src: string;
  /** intrinsic pixel width */
  w: number;
  /** intrinsic pixel height */
  h: number;
  /** cap the rendered width in px; omit to fill the container */
  mw?: number;
};

const HAS_HEIGHT = /(?:^|\s)(?:sm:|md:|lg:)?(?:min-)?h-/;

export function Placeholder({
  label,
  variant = "light",
  className = "h-[240px]",
  href,
  img,
  fit = "cover",
}: {
  label: ReactNode;
  variant?: "light" | "alt" | "dark";
  className?: string;
  href?: string;
  /** when set, renders the real screenshot */
  img?: Shot;
  /**
   * How a fixed-height box treats the image.
   * "cover" (default) fills the box and crops the overflow.
   * "contain" fits the whole image inside the box (no crop) — use for tall
   * portrait screenshots where the box height is only a minimum guarantee.
   */
  fit?: "cover" | "contain";
}) {
  if (img) {
    const alt = typeof label === "string" ? label : "";
    const link = Boolean(href);
    // scale + accent ring when the image links somewhere (feels clickable)
    const hover = link ? " transition duration-300 group-hover/ph:scale-[1.03]" : "";
    const ring = link ? (
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition duration-300 group-hover/ph:ring-2 group-hover/ph:ring-accent/60" />
    ) : null;

    let content: ReactNode;

    if (HAS_HEIGHT.test(className)) {
      // gallery cell: the height class is a floor so a row of shots lines up.
      // "cover" fills and crops; "contain" fits the whole image (height = minimum).
      content = (
        <span
          className={`${link ? "group/ph " : ""}relative block overflow-hidden rounded-xl border ${VARIANT_BORDER[variant]} ${IMAGE_BG[variant]} ${className}`}
        >
          <Image
            src={img.src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className={`${fit === "contain" ? "object-contain" : "object-cover object-top"}${hover}`}
          />
          {ring}
        </span>
      );
    } else {
      // standalone figure: real aspect ratio, width capped by mw (or fill)
      const maxW = img.mw;
      content = (
        <span className={`block ${className}`}>
          <span
            className={`${link ? "group/ph " : ""}relative mx-auto block overflow-hidden rounded-xl border ${VARIANT_BORDER[variant]} ${IMAGE_BG[variant]}`}
            style={maxW ? { maxWidth: maxW } : undefined}
          >
            <Image
              src={img.src}
              alt={alt}
              width={img.w}
              height={img.h}
              sizes={maxW ? `(max-width: ${maxW}px) 100vw, ${maxW}px` : "(max-width: 1440px) 100vw, 1200px"}
              className={`block h-auto w-full${hover}`}
            />
            {ring}
          </span>
        </span>
      );
    }

    return link ? (
      <Link href={href!} className="block">
        {content}
      </Link>
    ) : (
      content
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
