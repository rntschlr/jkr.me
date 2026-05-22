import { useContext } from "react";
import { LanguageContext, type LanguageContextValue } from "./languageContextCore";

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
