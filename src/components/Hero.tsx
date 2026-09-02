import { useLanguage } from "@/i18n/useLanguage";
import { CV_URL } from "@/constants/profile";
import { DownloadIcon } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-content">
            <div className="hero-kicker">
              <img
                className="hero-kicker-photo"
                src="/profile-96.jpg"
                alt=""
                width={48}
                height={48}
              />
              <span className="hero-kicker-copy">
                <span className="hero-kicker-index">JR / 2026</span>
                <span>{t.hero.badge}</span>
              </span>
            </div>

            <p className="hero-eyebrow">{t.hero.eyebrow}</p>

            <h1 className="hero-name">
              {t.hero.headingLead}
              <span>{t.hero.headingAccent}</span>
            </h1>

            <p className="hero-desc">{t.hero.desc}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4 20-7z" />
                  <path d="M22 2 11 13" />
                </svg>
                {t.hero.cta}
              </a>
              <a href="#projects" className="btn btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                {t.hero.viewProjects}
              </a>
              {CV_URL && (
                <a className="btn btn-secondary" href={CV_URL} download>
                  <DownloadIcon />
                  {t.hero.downloadCv}
                </a>
              )}
            </div>
          </div>

          <aside className="hero-desk" aria-label={t.hero.deskTitle}>
            <div className="hero-portrait-panel">
              <div className="hero-portrait-frame">
                <img
                  src="/profile.jpg"
                  alt={t.hero.portraitAlt}
                  width={800}
                  height={800}
                  fetchPriority="high"
                />
              </div>
              <div className="hero-portrait-caption">
                <span>{t.hero.availabilityLabel}</span>
                <strong>Finance × Code</strong>
              </div>
            </div>

            <div className="hero-board">
              <div className="hero-board-header">
                <span>{t.hero.deskTitle}</span>
                <span>live brief</span>
              </div>
              {t.hero.signals.map((signal) => (
                <div className="hero-signal-row" key={signal.label}>
                  <div>
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </div>
                  <p>{signal.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="hero-metrics" role="group" aria-label={t.hero.metricsTitle}>
          {t.hero.metrics.map((metric) => (
            <div className="hero-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
