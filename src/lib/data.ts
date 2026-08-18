// ─────────────────────────────────────────────────────────────
// Edit this file to make the portfolio yours.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nishant Agrawal",
  role: "Software Engineer",
  tagline: "I design and build fast, delightful web experiences.",
  blurb:
    "Full-stack engineer with a soft spot for motion, design systems, and shipping products that feel alive. I turn ambitious ideas into interfaces people love to use.",
  location: "Bengaluru, India",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://x.com" },
  ],
  resumeHref: "#",
};

export const stats = [
  { value: "5+", label: "Years building" },
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Open-source repos" },
  { value: "∞", label: "Cups of coffee" },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Motion",
  "Tailwind CSS",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
  "Three.js",
  "Rust",
  "Figma",
];

// A quick "currently" snapshot for the About bento grid.
export const now = {
  building: "A generative-UI playground",
  reading: "Refactoring UI (again)",
  listening: "Lo-fi, Bonobo, Tycho",
};

export const facts = [
  "Coffee-fueled",
  "Open-source contributor",
  "Design-minded engineer",
  "Remote-friendly",
];

// Grouped skills for the interactive tech grid.
export const skillGroups = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Motion", "Three.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "GraphQL", "PostgreSQL", "Rust"],
  },
  {
    label: "Craft",
    items: ["Figma", "Design Systems", "Accessibility", "Perf"],
  },
];

export const services = [
  {
    icon: "◆",
    title: "Frontend Engineering",
    body: "Accessible, pixel-precise interfaces in React & Next.js with buttery motion and rock-solid performance.",
  },
  {
    icon: "▲",
    title: "Design Systems",
    body: "Reusable component libraries and tokens that keep teams shipping consistent UI at speed.",
  },
  {
    icon: "●",
    title: "Creative Development",
    body: "Playful, memorable web experiences — animated backgrounds, WebGL, and micro-interactions that delight.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  year: string;
  // Two colors for the placeholder thumbnail gradient.
  // Add `image: "/work/foo.jpg"` (in /public) to use a real screenshot instead.
  gradient: [string, string];
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Nova Analytics",
    description:
      "A real-time dashboard for product teams with live charts, collaborative annotations, and a command palette.",
    tags: ["Next.js", "WebSockets", "D3"],
    href: "#",
    year: "2025",
    gradient: ["#7c6cff", "#22d3ee"],
    featured: true,
  },
  {
    title: "Drift Design Kit",
    description:
      "An open-source, themeable component library with 60+ animated primitives and full a11y coverage.",
    tags: ["React", "Motion", "Storybook"],
    href: "#",
    year: "2024",
    gradient: ["#22d3ee", "#7c6cff"],
  },
  {
    title: "Loop Music",
    description:
      "A generative-music playground that builds ambient loops in the browser using the Web Audio API.",
    tags: ["Three.js", "Web Audio", "Rust"],
    href: "#",
    year: "2024",
    gradient: ["#ff6ac1", "#7c6cff"],
  },
  {
    title: "Postcard",
    description:
      "A minimalist blogging platform focused on typography, reading speed, and zero-JS content pages.",
    tags: ["Next.js", "MDX", "Edge"],
    href: "#",
    year: "2023",
    gradient: ["#7c6cff", "#ff6ac1"],
  },
];

// Smaller / older work shown as a hover-preview list.
export type ArchiveItem = {
  title: string;
  year: string;
  role: string;
  href: string;
  gradient: [string, string];
};

export const archiveProjects: ArchiveItem[] = [
  {
    title: "Pulse CLI",
    year: "2023",
    role: "Developer tooling",
    href: "#",
    gradient: ["#22d3ee", "#0ea5e9"],
  },
  {
    title: "Vault",
    year: "2022",
    role: "Encrypted notes app",
    href: "#",
    gradient: ["#7c6cff", "#4338ca"],
  },
  {
    title: "Mapline",
    year: "2022",
    role: "Interactive maps",
    href: "#",
    gradient: ["#ff6ac1", "#f43f5e"],
  },
  {
    title: "Chroma",
    year: "2021",
    role: "Color system generator",
    href: "#",
    gradient: ["#34d399", "#22d3ee"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  body: string;
  tags: string[];
  achievements: string[];
  gradient: [string, string];
};

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Aurora Labs",
    period: "2023 — Present",
    body: "Lead the web platform team, owning the marketing site and core app experience end-to-end.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Motion"],
    achievements: [
      "Rebuilt the app shell and cut median load time by 45%.",
      "Shipped a shared motion + design-token system used by 4 teams.",
      "Mentored 3 engineers and set the frontend review bar.",
    ],
    gradient: ["#7c6cff", "#22d3ee"],
  },
  {
    role: "Software Engineer",
    company: "Bright Studio",
    period: "2021 — 2023",
    body: "Built client products end-to-end — design systems, dashboards, and interactive landing pages for startups.",
    tags: ["React", "Node.js", "PostgreSQL"],
    achievements: [
      "Delivered 15+ client projects from Figma to production.",
      "Created a reusable component kit that halved project setup time.",
    ],
    gradient: ["#22d3ee", "#7c6cff"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2019 — 2021",
    body: "Partnered with founders and agencies to ship polished, animated marketing sites and web apps.",
    tags: ["React", "Tailwind CSS", "GSAP"],
    achievements: [
      "Grew a referral-driven client base to 20+ businesses.",
      "Specialized in high-conversion, motion-rich landing pages.",
    ],
    gradient: ["#ff6ac1", "#7c6cff"],
  },
];
