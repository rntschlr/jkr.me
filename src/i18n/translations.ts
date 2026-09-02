export interface Translation {
  nav: {
    skills: string;
    homelab: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    desc: string;
    cta: string;
    viewProjects: string;
    downloadCv: string;
    availabilityLabel: string;
    portraitAlt: string;
    deskTitle: string;
    metricsTitle: string;
    metrics: Array<{ value: string; label: string }>;
    signals: Array<{ label: string; value: string; detail: string }>;
  };
  skills: {
    label: string;
    heading: string;
    desc: string;
    items: Array<{ title: string; desc: string }>;
  };
  homelab: {
    label: string;
    heading: string;
    desc: string;
    statusLabel: string;
    statusValue: string;
    repoLink: string;
    items: Array<{ title: string; desc: string }>;
  };
  projects: {
    label: string;
    heading: string;
    desc: string;
    viewGithub: string;
    items: Array<{ title: string; desc: string; alt: string }>;
  };
  about: {
    label: string;
    heading: string;
    h3: string;
    p1: string;
    p2: string;
    statFinance: string;
    statBuilding: string;
    statCuriosity: string;
  };
  contact: {
    label: string;
    heading: string;
    desc: string;
    detailsHeading: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    locationValue: string;
    workRightsLabel: string;
    workRightsValue: string;
    languagesLabel: string;
    languagesValue: string;
    availabilityHeading: string;
    availabilityDesc: string;
    labelName: string;
    labelEmail: string;
    labelSubject: string;
    labelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
    submit: string;
    submitting: string;
    successMsg: string;
    mailtoMsg: string;
    mailtoSubject: string;
    errRequired: string;
    errEmail: string;
    errLength: string;
    errGeneric: string;
  };
  footer: {
    backToTop: string;
    builtWith: string;
  };
}

export const translations: Record<"en" | "hu", Translation> = {
  en: {
    nav: {
      skills: "Skills",
      homelab: "Homelab",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Based in Budapest — open to infrastructure and fintech roles",
      eyebrow:
        "Finance-trained systems builder working between infrastructure, ledgers, and automation.",
      headingLead: "I build, secure, and run the ",
      headingAccent: "systems behind the numbers.",
      desc: "I pair five years of finance judgment with hands-on infrastructure work \u2014 Linux, virtualisation, networking, and containers \u2014 for teams that need systems which stay up and data they can trust.",
      cta: "Start a Conversation",
      viewProjects: "See Work",
      downloadCv: "Download CV",
      availabilityLabel: "Available now",
      portraitAlt: "Portrait of Jack Rentschler",
      deskTitle: "Operating Signals",
      metricsTitle: "Homepage highlights",
      metrics: [
        { value: "5+ yrs", label: "finance, risk, markets" },
        { value: "3+ yrs", label: "web apps and tooling" },
        { value: "Budapest", label: "on the ground, permit in progress" },
      ],
      signals: [
        {
          label: "Model",
          value: "Risk to requirements",
          detail: "Spreadsheet logic becomes product logic.",
        },
        {
          label: "Build",
          value: "React, TypeScript, APIs",
          detail: "Fast frontends with clean boundaries.",
        },
        {
          label: "Operate",
          value: "Proxmox, Docker, Tailscale",
          detail: "Self-hosted infrastructure, built and hardened by hand.",
        },
        {
          label: "Direction",
          value: "Infrastructure and fintech",
          detail: "Useful where money, data, and uptime meet.",
        },
      ],
    },
    skills: {
      label: "Expertise",
      heading: "Technical Skills",
      desc: "Infrastructure and operations first, backed by software development and a finance background. Everything listed here is something I have built, run, or shipped.",
      items: [
        {
          title: "Infrastructure & Virtualisation",
          desc: "Hypervisor administration, provisioning virtual machines and containers, snapshots and rollback, and resource planning on self-managed Linux hosts.",
        },
        {
          title: "Networking",
          desc: "DNS resolution and filtering, DHCP, routing and switching concepts, and mesh VPN with subnet routing. CCNA study in progress.",
        },
        {
          title: "Cybersecurity",
          desc: "System hardening, key-based authentication, firewall policy, and least-privilege access. CompTIA Security+ study in progress.",
        },
        {
          title: "Containers & Self-Hosting",
          desc: "Building, deploying, and managing containerised services behind a reverse proxy, each with its own declarative definition.",
        },
        {
          title: "Monitoring & Operations",
          desc: "Uptime monitoring and alerting, scheduled backups, patch management, and the maintenance routines that keep systems dependable.",
        },
        {
          title: "Programming Languages",
          desc: "Systems and application-level programming across multiple paradigms.",
        },
        {
          title: "JavaScript & TypeScript",
          desc: "Typed, modern application code from the browser to Node.js.",
        },
        {
          title: "Web Development",
          desc: "Building and deploying responsive, accessible web experiences with modern standards.",
        },
        {
          title: "APIs & Automation",
          desc: "Designing and consuming HTTP APIs, with automated build, test, and deploy pipelines.",
        },
        {
          title: "Databases & Analytics",
          desc: "Data querying and analytical modelling for reporting and decision support.",
        },
        {
          title: "Fintech & Compliance",
          desc: "Regulatory frameworks, customer verification processes, and emerging financial technology.",
        },
        {
          title: "Financial Analysis",
          desc: "Quantitative risk evaluation, credit analysis, and data-driven financial decision-making.",
        },
        {
          title: "Other Tooling",
          desc: "Day-to-day productivity, design, and market-data tools carried over from previous roles.",
        },
      ],
    },
    homelab: {
      label: "Infrastructure",
      heading: "Homelab",
      desc: "A self-hosted Proxmox environment I designed, built, and operated end to end \u2014 the practical half of my infrastructure experience, and where most of what I know about Linux, networking, and containers actually came from.",
      statusLabel: "Status",
      statusValue:
        "Built and operated through 2026 on a mini-PC host. The hardware has moved with me to Budapest and the lab is being rebuilt as soon as home internet is installed.",
      repoLink: "Full architecture and runbook on GitHub",
      items: [
        {
          title: "Virtualisation Platform",
          desc: "A Proxmox VE hypervisor running LXC containers and KVM virtual machines side by side, with snapshots taken before every change and memory budgeted between always-on services and on-demand lab workloads.",
        },
        {
          title: "DNS & Network Filtering",
          desc: "Pi-hole acting as the network\u2019s resolver \u2014 blocklist filtering for every device, internal DNS records mapping readable names to hosts, and router DHCP configured so no client can quietly bypass it.",
        },
        {
          title: "Remote Access & VPN",
          desc: "A Tailscale mesh joining the hypervisor, virtual machines, laptop, and phone. Subnet routing with IP forwarding makes the whole network reachable from anywhere, and Tailscale Serve issues auto-renewing TLS certificates for internal services.",
        },
        {
          title: "Containers & Services",
          desc: "A Docker host managed through Portainer, running a reverse proxy, a self-hosted password vault, document management, monitoring, and a status dashboard \u2014 each isolated, each with its own compose definition.",
        },
        {
          title: "Monitoring & Dashboards",
          desc: "Uptime Kuma polling every service on a 60-second heartbeat with alerting on failure, alongside a Homepage dashboard reading container health directly from the Docker socket next to host CPU, memory, and disk.",
        },
        {
          title: "Hardening & Operations",
          desc: "SSH key authentication with password login disabled, a default-deny host firewall, UPS-triggered graceful shutdown so power loss cannot corrupt storage, scheduled backups, and a weekly patch cadence.",
        },
      ],
    },
    projects: {
      label: "Portfolio",
      heading: "Featured Projects",
      desc: "Selected work demonstrating technical problem-solving and attention to craft.",
      viewGithub: "View GitHub Profile",
      items: [
        {
          title: "travel-blog",
          desc: "A self-run travel blog with a phone-friendly CMS, photo gallery, RSS feed, and email newsletter — built with Astro and Tailwind CSS, hosted free on GitHub Pages.",
          alt: "Screenshot of the travel blog homepage",
        },
        {
          title: "hungary-tracker",
          desc: "A React app for expats tracking the documents the Enter Hungary portal requires \u2014 built while going through the process myself. Progress persists in the browser; live demo available.",
          alt: "Screenshot of the immigration document tracker showing saved progress",
        },
        {
          title: "market-pulse",
          desc: "A Python CLI that pulls live crypto prices from a free API and renders colour-coded 24-hour changes in the terminal. Unit-tested, with CI running the suite on every push.",
          alt: "Terminal window showing market-pulse listing live crypto prices",
        },
        {
          title: "jkr.me",
          desc: "This portfolio site\u2014built with React 19, TypeScript, Vite, and Cloudflare Pages, with bilingual support and dark/light theming.",
          alt: "Screenshot of this portfolio site",
        },
      ],
    },
    about: {
      label: "Background",
      heading: "About Me",
      h3: "Finance background meets code.",
      p1: "My path started in finance\u2014analyzing markets, building spreadsheet models, and understanding how data drives decisions. That analytical foundation now shapes how I approach software development: methodically, with attention to edge cases and performance.",
      p2: "I now live in Budapest, where I am pursuing infrastructure and fintech work. Alongside writing software I build and run real systems: through 2026 I operated a self-hosted Proxmox lab covering virtualisation, DNS, VPN networking, containers, and monitoring, and I am rebuilding it here. I would rather understand a stack end to end than only the layer I write in.",
      statFinance: "Years in Finance",
      statBuilding: "Years Building",
      statCuriosity: "Curiosity",
    },
    contact: {
      label: "Connect",
      heading: "Get in Touch",
      desc: "Open to opportunities and interesting conversations. Let\u2019s build something together.",
      detailsHeading: "Contact Details",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      locationLabel: "Location",
      locationValue: "Budapest, Hungary",
      workRightsLabel: "Work status",
      workRightsValue: "Residence and work permit in progress (Enter Hungary)",
      languagesLabel: "Languages",
      languagesValue: "English \u2014 fluent \u00b7 Hungarian \u2014 A1\u2013A2, actively learning",
      availabilityHeading: "Availability",
      availabilityDesc:
        "Already living in Budapest, with a residence and work permit in progress. Open to on-site, hybrid, and remote roles in IT infrastructure, systems administration, security operations, and fintech.",
      labelName: "Name",
      labelEmail: "Email",
      labelSubject: "Subject",
      labelMessage: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@example.com",
      placeholderSubject: "What is this about?",
      placeholderMessage: "Tell me about your project or opportunity...",
      submit: "Send Message",
      submitting: "Sending...",
      successMsg: "Message sent! I\u2019ll get back to you soon.",
      mailtoMsg:
        "Your email client should open with the message. If it didn\u2019t, email me directly at",
      mailtoSubject: "Contact from",
      errRequired: "Please fill in your name, email, and message.",
      errEmail: "Please enter a valid email address.",
      errLength: "Please shorten your message and try again.",
      errGeneric: "Something went wrong. Please try again in a moment.",
    },
    footer: {
      backToTop: "Back to Top",
      builtWith: "Built with care.",
    },
  },

  hu: {
    nav: {
      skills: "Készségek",
      homelab: "Otthoni labor",
      projects: "Projektek",
      about: "Rólam",
      contact: "Kapcsolat",
    },
    hero: {
      badge: "Budapesten élek — nyitott vagyok infrastruktúra- és fintech szerepekre",
      eyebrow:
        "Pénzügyi háttérrel építek az infrastruktúra, a főkönyvek és az automatizálás határán.",
      headingLead: "Építem, védem és üzemeltetem ",
      headingAccent: "a számok mögötti rendszereket.",
      desc: "Öt év pénzügyi tapasztalatot párosítok gyakorlati infrastruktúra-munkával — Linux, virtualizáció, hálózatok és konténerek — olyan csapatoknak, amelyeknek stabilan működő rendszerekre és megbízható adatokra van szükségük.",
      cta: "Beszéljünk",
      viewProjects: "Munkák",
      downloadCv: "Önéletrajz letöltése",
      availabilityLabel: "Elérhető vagyok",
      portraitAlt: "Jack Rentschler portréja",
      deskTitle: "Működési jelek",
      metricsTitle: "Kiemelt adatok",
      metrics: [
        { value: "5+ év", label: "pénzügy, kockázat, piacok" },
        { value: "3+ év", label: "webalkalmazások és eszközök" },
        { value: "Budapest", label: "helyben, engedély folyamatban" },
      ],
      signals: [
        {
          label: "Modellezés",
          value: "Kockázatból követelmény",
          detail: "A táblázatos logikából terméklogika lesz.",
        },
        {
          label: "Építés",
          value: "React, TypeScript, API-k",
          detail: "Gyors frontendek tiszta határokkal.",
        },
        {
          label: "Üzemeltetés",
          value: "Proxmox, Docker, Tailscale",
          detail: "Saját üzemeltetésű infrastruktúra, kézzel építve és bebiztosítva.",
        },
        {
          label: "Irány",
          value: "Infrastruktúra és fintech",
          detail: "Hasznos ott, ahol pénz, adat és rendelkezésre állás találkozik.",
        },
      ],
    },
    skills: {
      label: "Szakértelem",
      heading: "Technikai készségek",
      desc: "Elsősorban infrastruktúra és üzemeltetés, mögötte szoftverfejlesztéssel és pénzügyi háttérrel. Minden, ami itt szerepel, olyasmi, amit ténylegesen építettem, üzemeltettem vagy leszállítottam.",
      items: [
        {
          title: "Infrastruktúra és virtualizáció",
          desc: "Hipervizor-adminisztráció, virtuális gépek és konténerek létrehozása, pillanatképek és visszaállítás, valamint erőforrás-tervezés saját üzemeltetésű Linux-gazdagépeken.",
        },
        {
          title: "Hálózatok",
          desc: "DNS-feloldás és -szűrés, DHCP, útválasztási és kapcsolási alapok, valamint mesh VPN alhálózati útválasztással. A CCNA felkészülés folyamatban.",
        },
        {
          title: "Kiberbiztonság",
          desc: "Rendszerek biztonsági megerősítése, kulcsalapú hitelesítés, tűzfalszabályok és legkisebb jogosultság elve. A CompTIA Security+ felkészülés folyamatban.",
        },
        {
          title: "Konténerek és saját üzemeltetés",
          desc: "Konténerizált szolgáltatások építése, telepítése és kezelése reverse proxy mögött, mindegyik saját deklaratív leírással.",
        },
        {
          title: "Monitorozás és üzemeltetés",
          desc: "Rendelkezésre állás figyelése és riasztás, ütemezett mentések, frissítéskezelés, valamint a rendszerek megbízhatóságát fenntartó karbantartási rutinok.",
        },
        {
          title: "Programozási nyelvek",
          desc: "Rendszer- és alkalmazásszintű programozás több paradigmában.",
        },
        {
          title: "JavaScript és TypeScript",
          desc: "Típusos, modern alkalmazáskód a böngészőtől a Node.js-ig.",
        },
        {
          title: "Webfejlesztés",
          desc: "Reszponzív, akadálymentes webes felületek építése és üzembe helyezése modern szabványokkal.",
        },
        {
          title: "API-k és automatizálás",
          desc: "HTTP API-k tervezése és használata, automatizált build-, teszt- és telepítési folyamatokkal.",
        },
        {
          title: "Adatbázisok és analitika",
          desc: "Adatlekérdezés és analitikai modellezés riportáláshoz és döntéstámogatáshoz.",
        },
        {
          title: "Fintech és megfelelőség",
          desc: "Szabályozási keretrendszerek, ügyfél-azonosítási folyamatok és feltörekvő pénzügyi technológiák.",
        },
        {
          title: "Pénzügyi elemzés",
          desc: "Kvantitatív kockázatértékelés, hitelelemzés és adatvezérelt pénzügyi döntéshozatal.",
        },
        {
          title: "Egyéb eszközök",
          desc: "Napi szintű irodai, tervezői és piaci adatszolgáltató eszközök korábbi munkakörökből.",
        },
      ],
    },
    homelab: {
      label: "Infrastruktúra",
      heading: "Otthoni labor",
      desc: "Saját üzemeltetésű Proxmox környezet, amelyet a tervezéstől az üzemeltetésig végig magam építettem \u2014 az infrastruktúrás tapasztalatom gyakorlati fele, és innen származik a legtöbb, amit Linuxról, hálózatokról és konténerekről tudok.",
      statusLabel: "Állapot",
      statusValue:
        "2026 folyamán épült és működött egy mini PC-n. A hardver velem együtt Budapestre költözött, és a labor újraépítése az otthoni internet bekötése után indul.",
      repoLink: "A teljes architektúra és üzemeltetési leírás a GitHubon",
      items: [
        {
          title: "Virtualizációs platform",
          desc: "Proxmox VE hipervizor, amely LXC konténereket és KVM virtuális gépeket futtat egymás mellett, minden változtatás előtt pillanatképpel, és a memóriát a folyamatosan futó szolgáltatások, valamint az igény szerint indított labor-terhelések között elosztva.",
        },
        {
          title: "DNS és hálózati szűrés",
          desc: "A Pi-hole látja el a hálózat névfeloldását \u2014 szűrőlisták minden eszközre, belső DNS-rekordok olvasható nevekkel, és úgy beállított router-DHCP, hogy egyetlen kliens se kerülhesse meg észrevétlenül.",
        },
        {
          title: "Távoli elérés és VPN",
          desc: "Tailscale hálózat, amely összeköti a hipervizort, a virtuális gépeket, a laptopot és a telefont. Az alhálózati útválasztás és az IP-továbbítás révén a teljes hálózat bárhonnan elérhető, a Tailscale Serve pedig automatikusan megújuló TLS-tanúsítványokat ad a belső szolgáltatásoknak.",
        },
        {
          title: "Konténerek és szolgáltatások",
          desc: "Portaineren keresztül kezelt Docker-gazdagép, amelyen reverse proxy, saját jelszószéf, dokumentumkezelő, monitorozás és állapot-irányítópult fut \u2014 mind elkülönítve, mind saját compose-leírással.",
        },
        {
          title: "Monitorozás és irányítópultok",
          desc: "Az Uptime Kuma 60 másodperces ütemben ellenőrzi az összes szolgáltatást, hiba esetén riaszt; mellette egy Homepage irányítópult közvetlenül a Docker socketből olvassa a konténerek állapotát, a gazdagép CPU-, memória- és lemezadatai mellett.",
        },
        {
          title: "Biztonsági megerősítés és üzemeltetés",
          desc: "SSH-kulcsos hitelesítés letiltott jelszavas belépéssel, alapértelmezetten tiltó tűzfal, szünetmentes tápról vezérelt szabályos leállítás, hogy az áramkimaradás ne okozhasson adatvesztést, ütemezett mentések és heti frissítési ciklus.",
        },
      ],
    },
    projects: {
      label: "Portfólió",
      heading: "Kiemelt projektek",
      desc: "Kiválasztott munkák, amelyek bemutatják a technikai problémamegoldást és a szakma iránti figyelmet.",
      viewGithub: "GitHub-profil megtekintése",
      items: [
        {
          title: "travel-blog",
          desc: "Saját üzemeltetésű utazási blog telefonbarát tartalomkezelővel, fotógalériával, RSS-csatornával és e-mail hírlevéllel — Astro és Tailwind CSS alapokon, ingyenesen a GitHub Pages-en.",
          alt: "Képernyőkép az utazási blog kezdőlapjáról",
        },
        {
          title: "hungary-tracker",
          desc: "React-alkalmazás külföldieknek, amely nyomon követi az Enter Hungary portálhoz szükséges dokumentumokat — miközben magam is végigmentem a folyamaton. A haladás a böngészőben tárolódik; élő demó elérhető.",
          alt: "Screenshot of the immigration document tracker showing saved progress",
        },
        {
          title: "market-pulse",
          desc: "Python CLI, amely ingyenes API-ból tölti be az élő kriptovaluta-árakat, és színkóddal jelzi a 24 órás változásokat a terminálon. Egységtesztekkel, minden push-nál lefutó CI-vel.",
          alt: "Terminal window showing market-pulse listing live crypto prices",
        },
        {
          title: "jkr.me",
          desc: "Ez a portfólióoldal — React 19, TypeScript, Vite és Cloudflare Pages segítségével készült, kétnyelvű támogatással és sötét/világos témával.",
          alt: "Screenshot of this portfolio site",
        },
      ],
    },
    about: {
      label: "Háttér",
      heading: "Rólam",
      h3: "A pénzügyi háttér találkozik a kóddal.",
      p1: "Pályafutásom a pénzügyek területén kezdődött — piacok elemzésével, táblázati modellek készítésével és annak megértésével, hogy az adatok hogyan befolyásolják a döntéseket. Ez az analitikai alap ma is meghatározza a szoftverfejlesztéshez való hozzáállásomat: módszeresen, figyelemmel a szélsőséges esetekre és a teljesítményre.",
      p2: "Jelenleg Budapesten élek, és infrastruktúra- illetve fintech-területen keresek munkát. A szoftverfejlesztés mellett valódi rendszereket építek és üzemeltetek: 2026 folyamán saját Proxmox labort működtettem, amely lefedte a virtualizációt, a DNS-t, a VPN-hálózatokat, a konténereket és a monitorozást, és most itt építem újra. Szeretem végig érteni a rendszert, nem csak azt a réteget, amelyben kódolok.",
      statFinance: "Évek a pénzügyi szektorban",
      statBuilding: "Évek a fejlesztés területén",
      statCuriosity: "Kíváncsiság",
    },
    contact: {
      label: "Kapcsolat",
      heading: "Vegye fel velem a kapcsolatot",
      desc: "Nyitott vagyok az új lehetőségekre és az érdekes beszélgetésekre. Építsünk fel együtt valamit!",
      detailsHeading: "Elérhetőségek",
      emailLabel: "E-mail",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      locationLabel: "Helyszín",
      locationValue: "Budapest, Magyarország",
      workRightsLabel: "Munkavállalási státusz",
      workRightsValue: "Tartózkodási és munkavállalási engedély folyamatban (Enter Hungary)",
      languagesLabel: "Nyelvek",
      languagesValue: "Angol — folyékony · Magyar — A1–A2, aktívan tanulom",
      availabilityHeading: "Elérhetőség",
      availabilityDesc:
        "Már Budapesten élek, tartózkodási és munkavállalási engedélyem folyamatban van. Nyitott vagyok helyszíni, hibrid és távmunkás pozíciókra IT-infrastruktúra, rendszergazdai, biztonsági üzemeltetési (SOC) és fintech területen.",
      labelName: "Név",
      labelEmail: "E-mail",
      labelSubject: "Tárgy",
      labelMessage: "Üzenet",
      placeholderName: "A neved",
      placeholderEmail: "you@example.com",
      placeholderSubject: "Miről van szó?",
      placeholderMessage: "Mesélj a projektedről vagy a lehetőségről...",
      submit: "Üzenet elküldése",
      submitting: "Küldés...",
      successMsg: "Üzenet elküldve! Hamarosan visszajelzek.",
      mailtoMsg:
        "Az e-mail kliensednek meg kell nyílnia az üzenettel. Ha nem így történt, írj nekem közvetlenül a következő címre:",
      mailtoSubject: "Kapcsolatfelvétel:",
      errRequired: "Kérlek, add meg a neved, e-mail címed és üzeneted.",
      errEmail: "Kérlek, adj meg érvényes e-mail címet.",
      errLength: "Kérlek, rövidítsd le az üzenetedet, és próbáld meg újra.",
      errGeneric: "Valami hiba történt. Kérlek, próbáld meg újra egy pillanat múlva.",
    },
    footer: {
      backToTop: "Vissza a tetejére",
      builtWith: "Gondosan elkészítve.",
    },
  },
};
