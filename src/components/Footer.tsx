import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            JR<span>.</span>
          </div>
          <ul className="footer-links">
            <li>
              <a href="mailto:johnkrentschler@icloud.com">Email</a>
            </li>
            <li>
              <a
                href="https://github.com/rntschlr"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="#home">{t.footer.backToTop}</a>
            </li>
          </ul>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Jack Rentschler. {t.footer.builtWith}
        </div>
      </div>
    </footer>
  );
}
