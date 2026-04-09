import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Translation } from "./translations";

type Locale = "en" | "hu";

interface LanguageContextValue {
  locale: Locale;
  toggle: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("locale");
  return saved === "hu" ? "hu" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggle = useCallback(() => setLocale((l) => (l === "en" ? "hu" : "en")), []);
  const t = useMemo(() => translations[locale], [locale]);
  const value = useMemo(() => ({ locale, toggle, t }), [locale, toggle, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
