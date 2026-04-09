import { useLanguage } from "@/i18n/LanguageContext";

// Icons and tags are tech terms — they stay language-neutral.
// Titles and descriptions are pulled from translations.
const SKILL_META: Array<{ icon: React.ReactNode; tags: string[] }> = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tags: ["Python", "C/C++", "Java"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    tags: ["HTML", "CSS", "Self-Hosting"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    ),
    tags: ["RL (PPO)", "LLMs", "Prompt Engineering"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    tags: ["AWS", "Git & GitHub", "Linux", "Docker"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    tags: ["SQL", "Bloomberg Terminal", "Excel"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    tags: ["Fundamentals", "CompTIA Security+ (In Progress)"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
        <circle cx="12" cy="15" r="1" />
      </svg>
    ),
    tags: ["Network Config", "Routing & Switching", "Server Virtualization"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    tags: ["Photoshop", "Illustrator", "InDesign", "Microsoft Office"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    tags: ["KYC", "AML", "Blockchain Basics"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
    tags: ["Risk Assessment", "Credit Risk Evaluation"],
  },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.skills.label}</div>
          <h2 id="skills-heading" className="section-title">
            {t.skills.heading}
          </h2>
          <p className="section-desc">{t.skills.desc}</p>
        </div>

        <div className="skills-grid stagger-children reveal">
          {SKILL_META.map((meta, i) => {
            const item = t.skills.items[i]!;
            return (
              <div key={i} className="skill-card">
                <div className="skill-icon">{meta.icon}</div>
                <h3 className="skill-title">{item.title}</h3>
                <p className="skill-desc">{item.desc}</p>
                <div className="skill-tags">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
