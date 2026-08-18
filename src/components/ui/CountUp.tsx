"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

type Props = {
  value: string; // e.g. "40+", "5+", "12", "∞"
  duration?: number; // ms
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Counts a numeric value up from 0 when it scrolls into view.
// Non-numeric values (like "∞") render as-is.
export default function CountUp({ value, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    if (!inView || target === null) return;
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const current = target * easeOutCubic(p);
      setDisplay(current.toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisplay(target.toFixed(decimals));
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${display}${suffix}`}
    </span>
  );
}
