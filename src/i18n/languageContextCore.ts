import { createContext } from "react";
import type { Translation } from "./translations";

export type Locale = "en" | "hu";

export interface LanguageContextValue {
  locale: Locale;
  toggle: () => void;
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
