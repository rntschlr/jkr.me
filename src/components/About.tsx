export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Background</div>
          <h2 id="about-heading" className="section-title">
            About Me
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
            <h3>Finance background meets code.</h3>
            <p>
              My path started in finance&mdash;analyzing markets, building
              spreadsheet models, and understanding how data drives decisions.
              That analytical foundation now shapes how I approach software
              development: methodically, with attention to edge cases and
              performance.
            </p>
            <p>
              Today I build web applications that feel fast and intuitive. I care
              about clean code, accessible interfaces, and shipping products that
              solve real problems. Currently relocating to Hungary and open to
              remote opportunities across Europe.
            </p>

            <div className="about-stats">
              <div>
                <div className="about-stat-value">5+</div>
                <div className="about-stat-label">Years in Finance</div>
              </div>
              <div>
                <div className="about-stat-value">3+</div>
                <div className="about-stat-label">Years Building</div>
              </div>
              <div>
                <div className="about-stat-value">&infin;</div>
                <div className="about-stat-label">Curiosity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
