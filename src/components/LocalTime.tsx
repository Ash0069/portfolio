"use client";

import { useSyncExternalStore } from "react";

// Live local clock for the footer, driven by an external store so it
// never calls setState in an effect and stays hydration-safe (the
// server snapshot is null, so first paint matches then upgrades).
let current: number | null = null;

function subscribe(onChange: () => void) {
  current = Date.now();
  onChange();
  const id = window.setInterval(() => {
    current = Date.now();
    onChange();
  }, 1000);
  return () => window.clearInterval(id);
}

const getSnapshot = () => current;
const getServerSnapshot = () => null;

export default function LocalTime() {
  const ms = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (ms === null) {
    return <span className="tabular-nums text-muted">—:—:—</span>;
  }

  const time = new Date(ms).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <span className="tabular-nums text-muted">
      {time} <span className="text-foreground/40">· {tz}</span>
    </span>
  );
}
