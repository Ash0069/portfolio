"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
};

// A card that follows the cursor with a soft radial spotlight glow.
// Inspired by reactbits.dev "Spotlight Card".
export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const glow = useMotionTemplate`radial-gradient(340px circle at ${mouseX}px ${mouseY}px, rgba(124,108,255,0.18), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(124,108,255,0.55), transparent 65%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(-200);
        mouseY.set(-200);
      }}
      className={`group relative overflow-hidden rounded-2xl glow-card ${className}`}
    >
      {/* animated border highlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: border,
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
        }}
      />
      {/* fill glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
