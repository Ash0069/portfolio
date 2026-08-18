"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./ui/Reveal";
import SectionTitle from "./ui/SectionTitle";
import TiltCard from "./ui/TiltCard";
import HoverPreviewList from "./HoverPreviewList";
import { projects, type Project } from "@/lib/data";

function Thumb({ project, big = false }: { project: Project; big?: boolean }) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden ${
        big ? "min-h-[220px]" : "h-40"
      }`}
      style={{
        background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
      }}
    >
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span
          style={{ transform: "translateZ(40px)" }}
          className="px-6 text-center text-xl font-semibold text-white/90 drop-shadow-lg"
        >
          {project.title}
        </span>
      )}
      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const tags = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all)];
  }, []);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-28">
      <SectionTitle
        eyebrow="Selected Work"
        title="Things I've built."
        description="A few projects I'm proud of. Filter by tech, or hover to feel them out."
      />

      {/* Filter chips */}
      <Reveal className="mb-8 flex flex-wrap gap-2">
        <>
          {tags.map((t) => {
            const activeChip = filter === t;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  activeChip
                    ? "text-black"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeChip && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent to-accent-2"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {t}
              </button>
            );
          })}
        </>
      </Reveal>

      {/* Featured + grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => {
            const big = p.featured && filter === "All";
            return (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={big ? "sm:col-span-2" : ""}
              >
                <TiltCard className="h-full">
                  <a
                    href={p.href}
                    className={`group relative flex h-full overflow-hidden rounded-2xl glow-card ${
                      big ? "flex-col md:flex-row" : "flex-col"
                    }`}
                  >
                    <div className={big ? "md:w-1/2" : ""}>
                      <Thumb project={p} big={big} />
                    </div>
                    <div
                      className={`flex flex-1 flex-col p-6 ${
                        big ? "md:justify-center md:p-8" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={`font-semibold ${
                            big ? "text-2xl" : "text-xl"
                          }`}
                        >
                          {p.title}
                        </h3>
                        <span className="font-mono text-xs text-muted">
                          {p.year}
                        </span>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        {p.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <Tags tags={p.tags} />
                        <span className="inline-block text-accent-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Archive — hover-preview list */}
      <div className="mt-20">
        <Reveal>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
            More work
          </p>
        </Reveal>
        <HoverPreviewList />
      </div>
    </section>
  );
}
