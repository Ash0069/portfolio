"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/lib/data";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — fall back to opening the mail app
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm transition-colors hover:border-accent/40 hover:bg-white/10"
    >
      <span className="font-mono text-foreground">{profile.email}</span>
      <span className="relative grid h-5 w-14 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xs font-medium text-accent-2"
            >
              ✓ Copied
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="text-xs text-muted group-hover:text-foreground"
            >
              ⧉ Copy
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
