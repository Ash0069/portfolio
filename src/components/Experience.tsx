"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import Reveal from "./ui/Reveal";
import { experience, profile, type Job } from "@/lib/data";

function monogram(company: string) {
  return company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ExperienceItem({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="relative pl-12">
      {/* node */}
      <motion.span
        initial={{ scale: 0.6, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-0 top-1 grid h-[15px] w-[15px] place-items-center rounded-full border border-white/25 bg-background"
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${job.gradient[0]}, ${job.gradient[1]})`,
          }}
        />
      </motion.span>

      <div className="glow-card rounded-2xl p-5 sm:p-6">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-start gap-4 text-left"
        >
          {/* monogram */}
          <span
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold text-black"
            style={{
              background: `linear-gradient(135deg, ${job.gradient[0]}, ${job.gradient[1]})`,
            }}
          >
            {monogram(job.company)}
          </span>

          <span className="flex-1">
            <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <span className="text-lg font-semibold">
                {job.role}{" "}
                <span className="text-accent-2">· {job.company}</span>
              </span>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-muted">
              {job.body}
            </span>
          </span>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1 shrink-0 text-muted"
            aria-hidden
          >
            ⌄
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 pl-1">
                {job.achievements.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-foreground/80">
                    <span className="mt-1 text-accent-2">▹</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Sticky left rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent-2">
                Experience
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where I&apos;ve worked.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-muted">
                {profile.role} with {experience.length} roles across product
                teams and independent work. Click any role to see the details.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={profile.resumeHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
              >
                Download résumé ↗
              </a>
            </Reveal>
          </div>
        </div>

        {/* Right timeline */}
        <div className="lg:col-span-8">
          <div ref={trackRef} className="relative">
            {/* base track */}
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-white/10" />
            {/* scroll-fill */}
            <motion.div
              style={{ scaleY }}
              className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-gradient-to-b from-accent-2 via-accent to-accent-3"
            />

            <div className="space-y-6">
              {experience.map((job, i) => (
                <ExperienceItem key={job.company} job={job} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
