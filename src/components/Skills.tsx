import { useLanguage } from "@/i18n/useLanguage";
import { SKILL_META } from "@/data/skills";

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
