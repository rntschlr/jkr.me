export const NAV_SECTIONS = ["skills", "homelab", "projects", "about", "contact"] as const;
export type NavSection = (typeof NAV_SECTIONS)[number];
