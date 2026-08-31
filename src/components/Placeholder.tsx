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
  /** max rendered width in px (keeps large screenshots from dominating); default 720 */
  mw?: number;
};

const HAS_HEIGHT = /(?:^|\s)(?:sm:|md:|lg:)?(?:min-)?h-/;

export function Placeholder({
  label,
  variant = "light",
  className = "h-[240px]",
  href,
  img,
  crop = false,
}: {
  label: ReactNode;
  variant?: "light" | "alt" | "dark";
  className?: string;
  href?: string;
  /** when set, renders the real screenshot at its natural aspect ratio */
  img?: Shot;
  /** in a fixed-height row, crop to fill instead of letterboxing the whole shot */
  crop?: boolean;
}) {
  if (img) {
    const alt = typeof label === "string" ? label : "";
    let content: ReactNode;

    if (HAS_HEIGHT.test(className)) {
      // gallery cell: a fixed-height box so a row of shots lines up.
      // default keeps the whole screenshot (contain); crop only on request.
      content = (
        <span
          className={`relative block overflow-hidden rounded-xl border ${VARIANT_BORDER[variant]} ${IMAGE_BG[variant]} ${className}`}
        >
          <Image
            src={img.src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 460px"
            className={crop ? "object-cover object-top" : "object-contain"}
          />
        </span>
      );
    } else {
      // standalone figure: render at the screenshot's real aspect ratio
      const maxW = img.mw ?? 720;
      content = (
        <span className={`${className} block`}>
          <Image
            src={img.src}
            alt={alt}
            width={img.w}
            height={img.h}
            sizes={`(max-width: ${maxW}px) 100vw, ${maxW}px`}
            style={{ maxWidth: maxW }}
            className={`mx-auto block h-auto w-full rounded-xl border ${VARIANT_BORDER[variant]} ${IMAGE_BG[variant]}`}
          />
        </span>
      );
    }

    return href ? (
      <Link href={href} className="block">
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
