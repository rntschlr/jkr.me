import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const typingText = useTypingEffect(t.hero.phrases);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-terminal reveal">
            <span className="hero-terminal-dot" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hero-name reveal reveal-delay-1">
            Jack
            <br />
            Rentschler<span>.</span>
          </h1>

          <p className="hero-tagline reveal reveal-delay-2">
            <span>{typingText}</span>
            <span className="typing-cursor" />
          </p>

          <p className="hero-desc reveal reveal-delay-3">{t.hero.desc}</p>

          <div className="hero-actions reveal reveal-delay-4">
            <a href="#contact" className="btn btn-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m22 2-7 20-4-9-9-4 20-7z" />
                <path d="M22 2 11 13" />
              </svg>
              {t.hero.cta}
            </a>
            <a href="#projects" className="btn btn-secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              {t.hero.viewProjects}
            </a>
          </div>
        </div>

        <svg
          className="hero-decoration"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" />
          <line x1="60" y1="60" x2="340" y2="340" stroke="currentColor" strokeWidth="0.5" />
          <line x1="340" y1="60" x2="60" y2="340" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}
