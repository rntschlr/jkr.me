const iconServer = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="7" rx="1.5" />
    <rect x="2" y="14" width="20" height="7" rx="1.5" />
    <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
    <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
  </svg>
);

const iconNetwork = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
    <circle cx="12" cy="15" r="1" />
  </svg>
);

const iconShield = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const iconContainers = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const iconPulse = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12h4l3 8 4-16 3 8h4" />
  </svg>
);

const iconCode = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const iconBraces = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
    <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
  </svg>
);

const iconGlobe = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const iconSync = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

const iconDatabase = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const iconCurrency = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const iconChart = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const iconToolbox = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M2 13h20" />
  </svg>
);

export const SKILL_META: Array<{ icon: React.ReactNode; tags: string[] }> = [
  { icon: iconServer, tags: ["Proxmox VE", "LXC", "KVM", "Linux", "Debian"] },
  {
    icon: iconNetwork,
    tags: ["DNS", "DHCP", "Routing & Switching", "WireGuard", "CCNA (in progress)"],
  },
  { icon: iconShield, tags: ["Hardening", "SSH keys", "Firewalls", "Security+ (in progress)"] },
  { icon: iconContainers, tags: ["Docker", "Portainer", "Compose", "Nginx Proxy Manager"] },
  { icon: iconPulse, tags: ["Uptime Kuma", "Alerting", "Backups", "Patch management"] },
  { icon: iconCode, tags: ["Python", "C/C++", "Java"] },
  { icon: iconBraces, tags: ["JavaScript", "TypeScript", "Node.js"] },
  { icon: iconGlobe, tags: ["React 19", "HTML", "CSS"] },
  {
    icon: iconSync,
    tags: ["REST APIs", "Git & GitHub", "GitHub Actions", "Cloudflare Pages"],
  },
  { icon: iconDatabase, tags: ["SQL", "Excel", "Data modelling"] },
  { icon: iconCurrency, tags: ["KYC", "AML", "Blockchain Basics"] },
  { icon: iconChart, tags: ["Risk Assessment", "Credit Risk Evaluation"] },
  {
    icon: iconToolbox,
    tags: ["Microsoft Office", "Photoshop", "Illustrator", "InDesign", "Bloomberg Terminal"],
  },
];
