export const HOMELAB_META: Array<{ icon: React.ReactNode; tags: string[] }> = [
  {
    // Virtualisation platform
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="7" rx="1.5" />
        <rect x="2" y="14" width="20" height="7" rx="1.5" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
      </svg>
    ),
    tags: ["Proxmox VE", "LXC", "KVM", "Debian"],
  },
  {
    // DNS and filtering
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
      </svg>
    ),
    tags: ["Pi-hole", "DNS", "DHCP", "Blocklists"],
  },
  {
    // Remote access
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    tags: ["Tailscale", "WireGuard", "Subnet routing", "TLS"],
  },
  {
    // Containers
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    tags: ["Docker", "Portainer", "Nginx Proxy Manager", "Compose"],
  },
  {
    // Monitoring
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h4l3 8 4-16 3 8h4" />
      </svg>
    ),
    tags: ["Uptime Kuma", "Homepage", "Health checks", "Alerting"],
  },
  {
    // Hardening
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    tags: ["SSH keys", "Firewall", "UPS / NUT", "Backups"],
  },
];

/** Public, sanitised link to the full architecture write-up. */
export const HOMELAB_REPO = "https://github.com/rntschlr/homelab";
