import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{t.about.label}</div>
          <h2 id="about-heading" className="section-title">
            {t.about.heading}
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper reveal">
            <img
              src="/profile.jpg"
              alt="Jack Rentschler"
              className="about-image"
              width={380}
              height={380}
            />
            <div className="about-image-decoration" />
          </div>

          <div className="about-content reveal reveal-delay-1">
            <h3>{t.about.h3}</h3>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="about-stats">
              <div>
                <div className="about-stat-value">5+</div>
                <div className="about-stat-label">{t.about.statFinance}</div>
              </div>
              <div>
                <div className="about-stat-value">3+</div>
                <div className="about-stat-label">{t.about.statBuilding}</div>
              </div>
              <div>
                <div className="about-stat-value">&infin;</div>
                <div className="about-stat-label">{t.about.statCuriosity}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
