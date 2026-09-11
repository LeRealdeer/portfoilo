"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import {
  trackEvent,
  type AnalyticsEventMap,
  type AnalyticsEventName,
} from "@/lib/analytics";

/**
 * Drop-in replacements for `<Link>` and `<a>` that fire a GA4 event on click.
 * Markup, styling, `target`, `rel`, and default navigation are all unchanged —
 * the event is sent fire-and-forget before the original handler runs, so it
 * never delays the click.
 */

type TrackedLinkProps<E extends AnalyticsEventName> = ComponentProps<typeof Link> & {
  event: E;
  eventParams: AnalyticsEventMap[E];
};

export function TrackedLink<E extends AnalyticsEventName>({
  event,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps<E>) {
  return (
    <Link
      {...props}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}

type TrackedAnchorProps<E extends AnalyticsEventName> = ComponentProps<"a"> & {
  event: E;
  eventParams: AnalyticsEventMap[E];
};

export function TrackedAnchor<E extends AnalyticsEventName>({
  event,
  eventParams,
  onClick,
  ...props
}: TrackedAnchorProps<E>) {
  return (
    <a
      {...props}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    />
  );
}
