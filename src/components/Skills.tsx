const skills = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: "Frontend Development",
    desc: "Building responsive, accessible interfaces with modern frameworks and attention to performance.",
    tags: ["React", "TypeScript", "Tailwind", "Next.js"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Backend & APIs",
    desc: "Server-side development with Node.js, Python, and experience integrating financial data APIs.",
    tags: ["Node.js", "Python", "REST", "PostgreSQL"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Finance & Analytics",
    desc: "Background in financial analysis, data modeling, and building tools for quantitative workflows.",
    tags: ["Excel/VBA", "Data Analysis", "Fintech"],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "DevOps & Tooling",
    desc: "Version control, CI/CD pipelines, cloud deployment, and automation scripting.",
    tags: ["Git", "Vercel", "Docker", "Bash"],
  },
];

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Expertise</div>
          <h2 id="skills-heading" className="section-title">
            Technical Skills
          </h2>
          <p className="section-desc">
            Full-stack capabilities with a focus on frontend excellence and
            financial domain knowledge.
          </p>
        </div>

        <div className="skills-grid stagger-children reveal">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
