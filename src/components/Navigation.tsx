import { useCallback, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolledNav } from "@/hooks/useScrolledNav";
import { useLanguage } from "@/i18n/LanguageContext";

interface NavigationProps {
  onToggleTheme: () => void;
}

const NAV_SECTIONS = ["skills", "projects", "about", "contact"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];

export function Navigation({ onToggleTheme }: NavigationProps) {
  const scrolled = useScrolledNav();
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, toggle: toggleLanguage, t } = useLanguage();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className={`nav${scrolled ? " scrolled" : ""}`}
      id="navbar"
      aria-label="Main navigation"
    >
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          JR<span>.</span>
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {NAV_SECTIONS.map((id: NavSection) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "nav-active" : ""}
                onClick={closeMenu}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={locale === "en" ? "Switch to Hungarian" : "Switch to English"}
          >
            {locale === "en" ? "\uD83C\uDDED\uD83C\uDDFA" : "\uD83C\uDDFA\uD83C\uDDF8"}
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <svg
              className="sun-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg
              className="moon-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            type="button"
            className={`nav-toggle${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
