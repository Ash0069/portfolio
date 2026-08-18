"use client";

import { motion } from "motion/react";
import Aurora from "./ui/Aurora";
import SplitText from "./ui/SplitText";
import ParticleText from "./ui/ParticleText";
import MagneticButton from "./ui/MagneticButton";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center"
    >
      <Aurora />

      <motion.a
        href={profile.socials[0]?.href}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Available for new work
      </motion.a>

      {/* SEO / a11y heading — the visual name is rendered as particles below */}
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg font-medium tracking-tight text-muted"
      >
        Hi, I&apos;m
      </motion.p>

      {/* React Bits: ParticleText — hover to scatter & reform the name */}
      <div
        aria-hidden
        className="mt-1 h-[clamp(150px,24vw,260px)] w-full max-w-4xl"
      >
        <ParticleText
          text={profile.name}
          color="#e7e9f0"
          highlightColor="#7c6cff"
          particleSize={2}
          density={4}
          scatter={170}
          gatherDuration={1500}
          stagger={380}
          pointerRepel={46}
          repelRadius={130}
          idleDrift={0.6}
          trigger="hover"
          fontWeight={700}
          fontFamily="inherit"
          glow
        />
      </div>

      <p className="gradient-text text-3xl font-semibold tracking-tight sm:text-5xl">
        <SplitText text={profile.role} delay={0.2} />
      </p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 max-w-xl text-balance text-lg text-muted"
      >
        {profile.tagline} Currently based in {profile.location}.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <MagneticButton
          href="#work"
          className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black"
        >
          View my work
        </MagneticButton>
        <MagneticButton
          href="#contact"
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/10"
        >
          Get in touch
        </MagneticButton>
      </motion.div>

      {/* stat strip */}
      <motion.dl
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="mt-16 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-black/20 px-4 py-5">
            <dt className="text-2xl font-semibold text-foreground">{s.value}</dt>
            <dd className="mt-1 text-xs text-muted">{s.label}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
