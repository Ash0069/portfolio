"use client";

import { motion } from "motion/react";
import SplitText from "./ui/SplitText";
import SpotlightCard from "./ui/SpotlightCard";
import ContactForm from "./ContactForm";
import CopyEmail from "./CopyEmail";
import LocalTime from "./LocalTime";
import { profile } from "@/lib/data";

function SocialIcon({ label }: { label: string }) {
  const l = label.toLowerCase();
  const cls = "h-5 w-5";
  if (l.includes("git"))
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
        <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z" />
      </svg>
    );
  if (l.includes("linked"))
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13H3.5V9h3.6v11.4ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M18.9 1.2h3.7l-8 9.1 9.4 12.5h-7.4l-5.8-7.6-6.6 7.6H.5l8.5-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.4h2L6.5 3.3H4.3l13.3 17.3Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <SpotlightCard className="relative overflow-hidden p-6 sm:p-10 lg:p-14">
        {/* living backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 left-1/3 h-72 w-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(124,108,255,0.35), transparent 60%)",
            animation: "aurora-move 16s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.28), transparent 60%)",
            animation: "aurora-move 20s ease-in-out infinite reverse",
          }}
        />

        <div className="relative grid gap-10 lg:grid-cols-2">
          {/* Left: pitch + contact rails */}
          <div className="flex flex-col">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              <SplitText text="Let's build something great together." />
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Have a project in mind or just want to say hi? Drop a note — my
              inbox is always open.
            </p>

            <div className="mt-6">
              <CopyEmail />
            </div>

            <div className="mt-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                Find me online
              </p>
              <div className="flex flex-wrap gap-3">
                {profile.socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-white hover:shadow-[0_0_24px_rgba(124,108,255,0.25)]"
                  >
                    <SocialIcon label={s.label} />
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </SpotlightCard>

      {/* Big animated wordmark */}
      <div className="mt-20 overflow-hidden text-center">
        <h2 className="gradient-text text-[clamp(2.5rem,15vw,11rem)] font-bold leading-none tracking-tighter">
          <SplitText text={profile.name} />
        </h2>
      </div>

      {/* Footer */}
      <footer className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="flex items-center gap-2 text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new work
          </p>
          <LocalTime />
        </div>

        <p className="text-muted">
          © 2026 {profile.name}. Built with Next.js &amp; Motion.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground"
        >
          Back to top
          <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
        </button>
      </footer>
    </section>
  );
}
