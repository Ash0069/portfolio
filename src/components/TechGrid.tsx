"use client";

import { motion } from "motion/react";
import { skillGroups } from "@/lib/data";

// Grouped, interactive skill chips that lift and glow on hover.
export default function TechGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="cursor-default rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-white"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
