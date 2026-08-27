// ─────────────────────────────────────────────────────────────
// Edit this file to make the portfolio yours.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Nishant Agrawal",
  role: "Full-Stack Engineer & AI Operations Specialist",
  tagline: "I build production-grade full-stack systems and agentic AI workflows.",
  blurb:
    "Full-stack engineer and AI operations specialist working across React/Next.js, Django, and FastAPI. I build and deploy agentic AI systems, streamline document-processing pipelines, and craft performant relational databases for high-stakes production environments.",
  location: "Jodhpur, Rajasthan, India",
  email: "nishantagrawal2003@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nishant-agrawal-47b19321a/" },
    { label: "GitHub", href: "https://github.com/Ash0069" },
  ],
  resumeHref: "/Nishant-Agrawal-Resume.pdf",
};

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "5", label: "Featured projects" },
  { value: "35%", label: "Faster processing" },
  { value: "99%+", label: "Uptime sustained" },
];

export const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Django",
  "FastAPI",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
];

// A quick "currently" snapshot for the About bento grid.
export const now = {
  building: "Hunger Platform — an interactive Global Hunger Index & research platform",
  reading: "System design & production-readiness patterns",
  listening: "Lo-fi & focus playlists",
};

export const facts = [
  "AI operations specialist",
  "Full-stack engineer",
  "VIT graduate",
  "Remote-friendly",
];

// Grouped skills for the interactive tech grid.
export const skillGroups = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    label: "AI & Infra",
    items: ["LLM Integration", "Mistral AI", "Docker", "CI/CD", "AWS", "Git"],
  },
];

export const services = [
  {
    icon: "◆",
    title: "Full-Stack Engineering",
    body: "End-to-end web products with React/Next.js front ends and Django or FastAPI back ends, built for high-stakes production environments.",
  },
  {
    icon: "▲",
    title: "AI Systems & Agent Workflows",
    body: "Agentic AI systems and scalable agent workflows that automate complex tasks, from LLM integration to document-processing pipelines.",
  },
  {
    icon: "●",
    title: "Backend & Infrastructure",
    body: "Performant PostgreSQL databases, RESTful APIs, and CI/CD pipelines that keep mission-critical workflows fast and reliable.",
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
    title: "Hunger Platform",
    description:
      "An educational and research platform raising awareness about hunger and global food systems — featuring an interactive Global Hunger Index globe, editorial storytelling, a research library, and community/admin tooling.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    href: "#",
    year: "WIP · 2026",
    gradient: ["#f59e0b", "#ef4444"],
    featured: true,
  },
  {
    title: "Aurexa E-commerce",
    description:
      "A scalable, full-stack e-commerce platform pairing a dynamic Next.js storefront with a Django REST backend and PostgreSQL, deployed with zero-downtime CI/CD across 5 product categories.",
    tags: ["Next.js", "Django", "PostgreSQL", "GitHub Actions"],
    href: "#",
    year: "2025",
    gradient: ["#7c6cff", "#22d3ee"],
  },
  {
    title: "AI Customer Support Dashboard",
    description:
      "An AI-powered customer intelligence dashboard with a modular Next.js (TypeScript) front end and a Node.js backend using Mistral AI for automated replies, summaries, and insights, backed by TursoDB.",
    tags: ["Next.js", "Node.js", "Mistral AI", "TursoDB"],
    href: "#",
    year: "2025",
    gradient: ["#22d3ee", "#7c6cff"],
  },
  {
    title: "DEX",
    description:
      "An academic platform giving professors tools to administer tests, curate student records, and distribute course materials — with responsive UI for scheduling, automated grading, and real-time alerts.",
    tags: ["Next.js", "Tailwind CSS", "Django"],
    href: "#",
    year: "2024",
    gradient: ["#ff6ac1", "#7c6cff"],
  },
  {
    title: "FastAudit",
    description:
      "An automated pre-deployment auditing framework that validates Django apps for production readiness — security hardening, environment config, database integrity, CORS policy, and static asset setup.",
    tags: ["Python", "Django", "DevTools"],
    href: "#",
    year: "2024",
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
    title: "Customs Entry Database",
    year: "2025",
    role: "PostgreSQL data platform",
    href: "#",
    gradient: ["#22d3ee", "#0ea5e9"],
  },
  {
    title: "FastAPI Operator Tooling",
    year: "2025",
    role: "Internal tooling",
    href: "#",
    gradient: ["#7c6cff", "#4338ca"],
  },
  {
    title: "SMTP Notification Pipeline",
    year: "2023",
    role: "Automation",
    href: "#",
    gradient: ["#ff6ac1", "#f43f5e"],
  },
  {
    title: "IACA Mapping & Locking Tool",
    year: "2023",
    role: "Internal tooling",
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
    role: "Operations Manager",
    company: "Amari AI",
    period: "Jun 2025 — Present",
    body: "Oversee AI-driven document-processing pipelines for international customs clearance, keeping high-volume global transactions precise and on time.",
    tags: ["FastAPI", "PostgreSQL", "AI Ops", "REST APIs"],
    achievements: [
      "Architected a production-grade FastAPI service that let operations scripts run autonomously, eliminating manual hand-offs.",
      "Built a centralized PostgreSQL database that accelerated average entry processing time by 35%.",
      "Sustained 99%+ uptime by remediating AI output anomalies through FastAPI-based operator tooling.",
    ],
    gradient: ["#7c6cff", "#22d3ee"],
  },
  {
    role: "Director of Frontend Development",
    company: "Raniac",
    period: "Feb 2025 — Jun 2025",
    body: "Led a high-performing frontend engineering squad, setting coding standards and acting as the liaison between executive stakeholders and delivery teams.",
    tags: ["React", "Next.js", "Leadership"],
    achievements: [
      "Established coding standards and rigorous code reviews across performance, accessibility, and scalability.",
      "Ran agile sprint planning and workload distribution, consistently hitting release targets without compromising quality.",
    ],
    gradient: ["#22d3ee", "#7c6cff"],
  },
  {
    role: "Software Engineer Intern",
    company: "Orange Business Service",
    period: "Sep 2023 — Dec 2023",
    body: "Partnered with cross-functional colleagues on the IACA project, revamping internal tooling and API reliability.",
    tags: ["APIs", "Automation", "Postman"],
    achievements: [
      "Revamped the customer mapping and locking tool, lifting user engagement and satisfaction by 15%.",
      "Launched an automated SMTP notification pipeline that cut manual communication overhead by 50%.",
      "Hardened API reliability with Postman-driven validation, cutting testing cycle time by 25%.",
    ],
    gradient: ["#ff6ac1", "#7c6cff"],
  },
];
