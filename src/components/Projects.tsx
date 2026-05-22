import { useLanguage } from "@/i18n/useLanguage";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

function ProjectLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
      {icon}
      {label}
    </a>
  );
}

const PROJECT_META: Array<{
  img: string;
  tags: string[];
  repo?: string;
  live?: string;
}> = [
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&h=300&q=80",
    tags: ["React 19", "CSS3", "localStorage"],
    repo: "https://github.com/rntschlr/hungary-tracker",
  },
  {
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=300&q=80",
    tags: ["Python", "REST APIs", "CLI"],
    repo: "https://github.com/rntschlr/market-pulse",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=300&q=80",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind"],
    repo: "https://github.com/rntschlr/jkr.me",
    live: "https://johnkrentschler.me",
  },
];

export function Projects() {
  const { t } = useLanguage();

  const visible = PROJECT_META.map((meta, i) => ({ meta, item: t.projects.items[i]! }));

  return (
    <section className="section section-alt" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.projects.label}</div>
          <h2 id="projects-heading" className="section-title">
            {t.projects.heading}
          </h2>
          <p className="section-desc">{t.projects.desc}</p>
        </div>

        <div className="projects-grid stagger-children reveal">
          {visible.map(({ meta, item }, i) => (
            <article key={i} className="project-card">
              <img
                src={meta.img}
                alt={item.alt}
                className="project-img"
                loading="lazy"
                width={600}
                height={300}
              />
              <div className="project-body">
                <div className="project-meta">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">{item.desc}</p>
                {(meta.repo || meta.live) && (
                  <div className="project-links">
                    {meta.repo && (
                      <ProjectLink href={meta.repo} label="Code" icon={<GitHubIcon />} />
                    )}
                    {meta.live && (
                      <ProjectLink href={meta.live} label="Live" icon={<ExternalLinkIcon />} />
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a href="https://github.com/rntschlr" target="_blank" rel="noopener noreferrer">
            {t.projects.viewGithub}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
