import Reveal from "./ui/Reveal";
import SectionTitle from "./ui/SectionTitle";
import SpotlightCard from "./ui/SpotlightCard";
import CountUp from "./ui/CountUp";
import TechGrid from "./TechGrid";
import GitHubActivity from "./GitHubActivity";
import TechMarquee from "./TechMarquee";
import { profile, stats, services, facts, now } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <SectionTitle
        eyebrow="About"
        title="Engineer, designer, tinkerer."
        description="A little more about who I am and how I work."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {/* Bio */}
        <Reveal className="sm:col-span-2 lg:col-span-4">
          <SpotlightCard className="flex h-full flex-col p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
              Who I am
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">
              {profile.blurb}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              When I&apos;m not shipping, I&apos;m usually exploring new
              animation techniques, contributing to open source, or
              over-engineering my personal setup. I care about the details most
              people never notice — because they&apos;re the ones that make an
              interface feel right.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {facts.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 pt-6">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Photo */}
        <Reveal className="sm:col-span-2 lg:col-span-2" delay={0.05}>
          <SpotlightCard className="relative h-full min-h-[260px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo.jpeg"
              alt={`${profile.name} — portrait`}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-white/60">{profile.role}</p>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Stats with count-up */}
        <Reveal className="sm:col-span-2 lg:col-span-3" delay={0.1}>
          <SpotlightCard className="h-full p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              By the numbers
            </p>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent">
                    <CountUp value={s.value} />
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </SpotlightCard>
        </Reveal>

        {/* Location */}
        <Reveal className="sm:col-span-1 lg:col-span-1" delay={0.15}>
          <SpotlightCard className="flex h-full flex-col justify-between p-6">
            <span className="text-xl">📍</span>
            <div className="mt-4">
              <p className="text-xs text-muted">Based in</p>
              <p className="mt-1 font-semibold">{profile.location}</p>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Currently */}
        <Reveal className="sm:col-span-1 lg:col-span-2" delay={0.2}>
          <SpotlightCard className="h-full p-6">
            <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
              </span>
              Currently
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 text-muted">
                <span className="text-foreground/60">Building</span>
                <span className="text-foreground/90">{now.building}</span>
              </li>
              <li className="flex gap-2 text-muted">
                <span className="text-foreground/60">Reading</span>
                <span className="text-foreground/90">{now.reading}</span>
              </li>
              <li className="flex gap-2 text-muted">
                <span className="text-foreground/60">Listening</span>
                <span className="text-foreground/90">{now.listening}</span>
              </li>
            </ul>
          </SpotlightCard>
        </Reveal>

        {/* Services */}
        {services.map((s, i) => (
          <Reveal key={s.title} className="lg:col-span-2" delay={0.1 + i * 0.06}>
            <SpotlightCard className="h-full p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg text-accent-2">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </SpotlightCard>
          </Reveal>
        ))}

        {/* Tech grid */}
        <Reveal className="sm:col-span-2 lg:col-span-6" delay={0.1}>
          <SpotlightCard className="p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">
              Tools I reach for
            </p>
            <TechGrid />
          </SpotlightCard>
        </Reveal>

        {/* GitHub activity */}
        <GitHubActivity />
      </div>

      {/* Tech marquee */}
      <div className="mt-12">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
          The stack I build with
        </p>
        <TechMarquee />
      </div>
    </section>
  );
}
