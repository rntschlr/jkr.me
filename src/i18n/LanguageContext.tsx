import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, type Locale } from "./languageContextCore";
import { translations } from "./translations";

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
