import ScrollExpand from "./ui/ScrollExpand";
import { profile } from "@/lib/data";

// Full-bleed scroll section: the framed portrait expands to fill the
// viewport as you scroll, then hands the stage to the overlay copy.
export default function Showcase() {
  return (
    <section aria-label="Introduction">
      <ScrollExpand
        src="/photo.jpeg"
        alt={`${profile.name} — portrait`}
        title={profile.name}
        scrollHint="Scroll to meet me"
        useWindowScroll
        mediaZoom={1.3}
        scrollDistance={1.1}
        holdDistance={0.3}
        startRadius={28}
        overlayScrim={0.5}
      >
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
            Nice to meet you
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {profile.tagline}
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            {profile.blurb}
          </p>
        </div>
      </ScrollExpand>
    </section>
  );
}
