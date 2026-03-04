import { useCallback, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolledNav } from "@/hooks/useScrolledNav";

interface NavigationProps {
  onToggleTheme: () => void;
}

export function Navigation({ onToggleTheme }: NavigationProps) {
  const scrolled = useScrolledNav();
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

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
          {(["skills", "projects", "about", "contact"] as const).map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "nav-active" : ""}
                onClick={closeMenu}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
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
