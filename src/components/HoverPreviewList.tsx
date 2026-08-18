"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { archiveProjects } from "@/lib/data";

export default function HoverPreviewList() {
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.4 });
  const y = useSpring(my, { stiffness: 300, damping: 30, mass: 0.4 });
  const wrapRef = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {/* Floating preview that follows the cursor */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
            style={{
              x,
              y,
              translateX: "-50%",
              translateY: "-115%",
              background: `linear-gradient(135deg, ${archiveProjects[active].gradient[0]}, ${archiveProjects[active].gradient[1]})`,
            }}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden h-40 w-64 place-items-center rounded-xl shadow-2xl md:grid"
          >
            <span className="text-lg font-semibold text-white drop-shadow">
              {archiveProjects[active].title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <ul>
        {archiveProjects.map((p, i) => (
          <li key={p.title}>
            <a
              href={p.href}
              onMouseEnter={() => setActive(i)}
              className="group flex items-center justify-between gap-4 border-t border-white/10 py-5 transition-colors last:border-b"
            >
              <span className="flex items-baseline gap-3">
                <span className="text-lg font-medium text-foreground/60 transition-colors group-hover:text-white sm:text-2xl">
                  {p.title}
                </span>
                <span className="hidden text-sm text-muted sm:inline">
                  {p.role}
                </span>
              </span>
              <span className="flex items-center gap-4 text-muted">
                <span className="font-mono text-xs">{p.year}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-2">
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
