"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiRabbitmq,
  SiDocker,
  SiNginx,
  SiGithubactions,
} from "react-icons/si";
import LogoLoop from "./ui/LogoLoop";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiCelery />, title: "Celery", href: "https://docs.celeryq.dev" },
  { node: <SiRabbitmq />, title: "RabbitMQ", href: "https://www.rabbitmq.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiNginx />, title: "NGINX", href: "https://nginx.org" },
  { node: <SiGithubactions />, title: "GitHub Actions", href: "https://github.com/features/actions" },
];

export default function TechMarquee() {
  return (
    <div className="relative h-16 text-foreground/70">
      <LogoLoop
        logos={techLogos}
        speed={55}
        direction="left"
        logoHeight={30}
        gap={52}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#06070d"
        ariaLabel="Technologies I work with"
      />
    </div>
  );
}
