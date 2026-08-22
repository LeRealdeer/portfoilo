"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "article" | "section";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}

const lineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const lineItem = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function RevealLines({
  lines,
  className,
  lineClassName,
}: {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={lineClassName}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={lineContainer}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span className={`block ${lineClassName ?? ""}`} variants={lineItem}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
