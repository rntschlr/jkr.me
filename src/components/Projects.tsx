const projects = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=300&q=80",
    alt: "Financial dashboard interface",
    tags: ["React", "TypeScript", "API"],
    title: "Portfolio Analytics Dashboard",
    desc: "Real-time financial data visualization with customizable charts, watchlists, and portfolio tracking.",
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&h=300&q=80",
    alt: "Code editor showing clean code",
    tags: ["Node.js", "Express", "Auth"],
    title: "REST API Template",
    desc: "Production-ready API boilerplate with authentication, rate limiting, and comprehensive documentation.",
  },
  {
    img: "https://images.unsplash.com/photo-1618044619888-009e412ff12a?auto=format&fit=crop&w=600&h=300&q=80",
    alt: "Terminal with automation scripts",
    tags: ["Bash", "macOS", "Automation"],
    title: "macOS Backup Automation",
    desc: "Command-line script that builds time-stamped backups, copies key folders, and exports user data reliably.",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&h=300&q=80",
    alt: "Documentation workspace",
    tags: ["Documentation", "Troubleshooting"],
    title: "IT Support Playbook",
    desc: "A growing set of troubleshooting guides for common issues with clear triage steps and escalation notes.",
    status: "In Progress",
  },
];

export function Projects() {
  return (
    <section
      className="section section-alt"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Portfolio</div>
          <h2 id="projects-heading" className="section-title">
            Featured Projects
          </h2>
          <p className="section-desc">
            Selected work demonstrating technical problem-solving and attention
            to craft.
          </p>
        </div>

        <div className="projects-grid stagger-children reveal">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <img
                src={project.img}
                alt={project.alt}
                className="project-img"
                loading="lazy"
                width={600}
                height={300}
              />
              <div className="project-body">
                <div className="project-meta">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a
            href="https://github.com/rntschlr"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
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
