import type { MetricSpec } from "./projects";

export const impactStrip: MetricSpec[] = [
  { value: 3, raw: "03", label: "LIVE GAME SERVICES" },
  { value: 19, suffix: "K", accentSuffix: "+", label: "CUMULATIVE ACTIVE USERS" },
  { value: 358, suffix: "K", accentSuffix: "+", label: "PAGEVIEWS" },
  { value: 0, raw: "VOC", label: "COMMUNITY OPS · EVENT · FEEDBACK" },
];
