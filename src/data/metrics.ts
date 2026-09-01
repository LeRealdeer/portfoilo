import type { MetricSpec } from "./projects";

export const impactStrip: MetricSpec[] = [
  { value: 3, raw: "03", label: "LIVE GAME SERVICES" },
  { value: 15, suffix: "K", accentSuffix: "+", label: "CUMULATIVE ACTIVE USERS" },
  { value: 340, suffix: "K", accentSuffix: "+", label: "PAGEVIEWS" },
  { value: 4.84, decimals: 2, label: "USER SATISFACTION / 5.0" },
];
