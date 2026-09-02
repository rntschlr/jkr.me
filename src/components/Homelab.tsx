import { useLanguage } from "@/i18n/useLanguage";
import { HOMELAB_META, HOMELAB_REPO } from "@/data/homelab";
import { GitHubIcon } from "./icons";

export function Homelab() {
  const { t } = useLanguage();

  return (
    <section className="section section-alt" id="homelab" aria-labelledby="homelab-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.homelab.label}</div>
          <h2 id="homelab-heading" className="section-title">
            {t.homelab.heading}
          </h2>
          <p className="section-desc">{t.homelab.desc}</p>
        </div>

        <div className="lab-status reveal" role="note">
          <span className="lab-status-label">{t.homelab.statusLabel}</span>
          <p className="lab-status-text">{t.homelab.statusValue}</p>
        </div>

        <div className="lab-grid stagger-children reveal">
          {HOMELAB_META.map((meta, i) => {
            const item = t.homelab.items[i]!;
            return (
              <article key={i} className="lab-card">
                <div className="lab-icon">{meta.icon}</div>
                <h3 className="lab-title">{item.title}</h3>
                <p className="lab-desc">{item.desc}</p>
                <div className="lab-tags">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="lab-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <p className="lab-footnote reveal">
          <a
            href={HOMELAB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="lab-repo-link"
          >
            <GitHubIcon />
            {t.homelab.repoLink}
          </a>
        </p>
      </div>
    </section>
  );
}
