import Reveal from "./ui/Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import { profile } from "@/lib/data";

// Derive the GitHub username from the profile's GitHub social link.
const githubHref =
  profile.socials.find((s) => s.label.toLowerCase() === "github")?.href ??
  "https://github.com";
const username = githubHref.replace(/\/+$/, "").split("/").pop() ?? "";

// Contribution graph rendered by ghchart, tinted to the site accent color.
const chartSrc = `https://ghchart.rshah.org/7c6cff/${username}`;

export default function GitHubActivity() {
  if (!username) return null;

  return (
    <Reveal className="sm:col-span-2 lg:col-span-6" delay={0.1}>
      <SpotlightCard className="p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            GitHub activity
          </p>
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-xs text-accent-2 hover:underline"
          >
            @{username}
          </a>
        </div>
        <div className="overflow-x-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={chartSrc}
            alt={`${profile.name}'s GitHub contribution graph`}
            className="min-w-[640px] w-full"
            loading="lazy"
          />
        </div>
      </SpotlightCard>
    </Reveal>
  );
}
