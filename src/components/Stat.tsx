"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import type { MetricSpec } from "@/data/projects";

function formatNumber(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function CountUp({
  value,
  decimals = 0,
  duration = 1.4,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [animatedDisplay, setAnimatedDisplay] = useState<string | null>(null);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setAnimatedDisplay(formatNumber(v, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, reduceMotion]);

  const display = animatedDisplay ?? formatNumber(reduceMotion ? value : 0, decimals);

  return <span ref={ref}>{display}</span>;
}

export function Stat({
  metric,
  numberClassName,
  labelClassName,
  tbdClassName,
}: {
  metric: MetricSpec;
  numberClassName: string;
  labelClassName: string;
  tbdClassName?: string;
}) {
  return (
    <div>
      <div className={numberClassName}>
        {metric.tbd ? (
          <span className={tbdClassName}>TBD</span>
        ) : (
          <>
            {metric.raw ?? <CountUp value={metric.value} decimals={metric.decimals} />}
            {metric.suffix}
            {metric.accentSuffix && (
              <span className="text-accent">{metric.accentSuffix}</span>
            )}
          </>
        )}
      </div>
      <div className={labelClassName}>{metric.label}</div>
    </div>
  );
}
