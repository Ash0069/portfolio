"use client";

import { motion } from "motion/react";
import type { JSX } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
};

// Reveals text one character at a time as it scrolls into view.
// Inspired by reactbits.dev "Split Text".
export default function SplitText({
  text,
  className = "",
  delay = 0,
  as = "span",
}: Props) {
  const words = text.split(" ");
  const MotionTag = motion[as as "span"] ?? motion.span;

  return (
    <MotionTag
      className={className}
      style={{ display: "inline-block" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ staggerChildren: 0.03, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
          aria-hidden
        >
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "0.5em", opacity: 0, rotateX: -40 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: { type: "spring", stiffness: 320, damping: 24 },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
