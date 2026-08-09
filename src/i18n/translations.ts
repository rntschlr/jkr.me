export interface Translation {
  nav: {
    skills: string;
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
    locationLabel: string;
    locationValue: string;
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
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Open to remote product and fintech roles",
      eyebrow: "Finance-trained builder working between ledgers, interfaces, and automation.",
      headingLead: "I turn messy decision systems into ",
      headingAccent: "clear software.",
      desc: "I bring finance judgment, web engineering, and a bias for usable tools to teams that need accurate data, sharp interfaces, and dependable execution.",
      cta: "Start a Conversation",
      viewProjects: "See Work",
      availabilityLabel: "Available now",
      portraitAlt: "Portrait of Jack Rentschler",
      deskTitle: "Operating Signals",
      metricsTitle: "Homepage highlights",
      metrics: [
        { value: "5+ yrs", label: "finance, risk, markets" },
        { value: "3+ yrs", label: "web apps and tooling" },
        { value: "HU/EU", label: "relocating, remote-ready" },
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
          value: "Cloudflare + GitHub",
          detail: "Small systems that ship and stay maintainable.",
        },
        {
          label: "Direction",
          value: "Fintech and product engineering",
          detail: "Useful where money, data, and trust meet.",
        },
      ],
    },
    skills: {
      label: "Expertise",
      heading: "Technical Skills",
      desc: "A broad foundation spanning software development, cloud infrastructure, data analysis, and financial technology.",
      items: [
        {
          title: "Programming Languages",
          desc: "Proficient in systems and application-level programming across multiple paradigms.",
        },
        {
          title: "JavaScript & TypeScript",
          desc: "Typed, modern application code from the browser to Node.js.",
        },
        {
          title: "Web Development",
          desc: "Building and deploying responsive web experiences with modern standards.",
        },
        {
          title: "Machine Learning",
          desc: "Fundamentals in reinforcement learning, large language models, and prompt engineering.",
        },
        {
          title: "Tools & Platforms",
          desc: "Cloud infrastructure, containerization, and version control for modern development workflows.",
        },
        {
          title: "APIs & Automation",
          desc: "Designing and consuming HTTP APIs, with automated build and deploy pipelines.",
        },
        {
          title: "Databases & Analytics",
          desc: "Data querying, financial data platforms, and analytical modeling.",
        },
        {
          title: "Cybersecurity",
          desc: "Security fundamentals with CompTIA Security+ certification in progress.",
        },
        {
          title: "Networking",
          desc: "Network infrastructure configuration, routing protocols, and virtualized server environments.",
        },
        {
          title: "Software Suites",
          desc: "Design, layout, and productivity tools for professional deliverables.",
        },
        {
          title: "Fintech & Compliance",
          desc: "Regulatory frameworks, customer verification processes, and emerging financial technology.",
        },
        {
          title: "Financial Analysis",
          desc: "Quantitative risk evaluation, credit analysis, and data-driven financial decision-making.",
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
          alt: "Map and camera laid out for planning a journey",
        },
        {
          title: "hungary-tracker",
          desc: "A React app for expats to track immigration documents needed for the Enter Hungary portal, with progress tracking and local persistence.",
          alt: "",
        },
        {
          title: "market-pulse",
          desc: "A Python CLI tool that fetches live stock and crypto prices from a free API and displays color-coded changes in the terminal.",
          alt: "",
        },
        {
          title: "jkr.me",
          desc: "This portfolio site\u2014built with React 19, TypeScript, Vite, and Cloudflare Pages, with bilingual support and dark/light theming.",
          alt: "",
        },
      ],
    },
    about: {
      label: "Background",
      heading: "About Me",
      h3: "Finance background meets code.",
      p1: "My path started in finance\u2014analyzing markets, building spreadsheet models, and understanding how data drives decisions. That analytical foundation now shapes how I approach software development: methodically, with attention to edge cases and performance.",
      p2: "Today I build web applications that feel fast and intuitive. I care about clean code, accessible interfaces, and shipping products that solve real problems. Currently relocating to Hungary and open to remote opportunities across Europe.",
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
      locationLabel: "Location",
      locationValue: "United States \u2192 Hungary",
      availabilityHeading: "Availability",
      availabilityDesc:
        "Currently relocating to Hungary. Open to remote work and European opportunities. Interested in frontend development, fintech, and product engineering roles.",
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
      projects: "Projektek",
      about: "Rólam",
      contact: "Kapcsolat",
    },
    hero: {
      badge: "Nyitott vagyok távoli termék- és fintech szerepekre",
      eyebrow: "Pénzügyi háttérrel építek a főkönyvek, felületek és automatizálás határán.",
      headingLead: "Rendezetlen döntési rendszerekből ",
      headingAccent: "átlátható szoftvert építek.",
      desc: "Pénzügyi ítélőképességet, webes fejlesztést és használható eszközökre fókuszáló szemléletet hozok olyan csapatoknak, amelyeknek pontos adatokra, éles felületekre és megbízható kivitelezésre van szükségük.",
      cta: "Beszéljünk",
      viewProjects: "Munkák",
      availabilityLabel: "Elérhető vagyok",
      portraitAlt: "Jack Rentschler portréja",
      deskTitle: "Működési jelek",
      metricsTitle: "Kiemelt adatok",
      metrics: [
        { value: "5+ év", label: "pénzügy, kockázat, piacok" },
        { value: "3+ év", label: "webalkalmazások és eszközök" },
        { value: "HU/EU", label: "költözés, távmunkára kész" },
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
          value: "Cloudflare + GitHub",
          detail: "Kis rendszerek, amelyek szállíthatók és karbantarthatók.",
        },
        {
          label: "Irány",
          value: "Fintech és termékfejlesztés",
          detail: "Hasznos ott, ahol pénz, adat és bizalom találkozik.",
        },
      ],
    },
    skills: {
      label: "Szakértelem",
      heading: "Technikai készségek",
      desc: "Széles körű alapismeretek a szoftverfejlesztés, a felhőalapú infrastruktúra, az adatelemzés és a pénzügyi technológia területén.",
      items: [
        {
          title: "Programozási nyelvek",
          desc: "Jártasság a rendszer- és alkalmazásszintű programozásban több paradigmán átívelően.",
        },
        {
          title: "JavaScript és TypeScript",
          desc: "Típusos, modern alkalmazáskód a böngészőtől a Node.js-ig.",
        },
        {
          title: "Webfejlesztés",
          desc: "Reszponzív webes élmények létrehozása és üzembe helyezése modern szabványok szerint.",
        },
        {
          title: "Gépi tanulás",
          desc: "Alapok a megerősítéses tanulásban, a nagy nyelvi modellekben és a prompt engineeringben.",
        },
        {
          title: "Eszközök és platformok",
          desc: "Felhőalapú infrastruktúra, konténeresítés és verziókezelés a modern fejlesztési munkafolyamatokhoz.",
        },
        {
          title: "API-k és automatizálás",
          desc: "HTTP API-k tervezése és használata automatizált build- és telepítési folyamatokkal.",
        },
        {
          title: "Adatbázisok és elemzés",
          desc: "Adatlekérdezés, pénzügyi adatplatformok és analitikai modellezés.",
        },
        {
          title: "Kiberbiztonság",
          desc: "Biztonsági alapismeretek, folyamatban lévő CompTIA Security+ tanúsítás.",
        },
        {
          title: "Hálózatok",
          desc: "Hálózati infrastruktúra konfigurálása, útválasztási protokollok és virtualizált szerverkörnyezetek.",
        },
        {
          title: "Szoftvercsomagok",
          desc: "Tervezési, elrendezési és termelékenységi eszközök professzionális eredményekhez.",
        },
        {
          title: "Fintech és szabályozási megfelelés",
          desc: "Szabályozási keretrendszerek, ügyfél-azonosítási folyamatok és a feltörekvő pénzügyi technológiák.",
        },
        {
          title: "Pénzügyi elemzés",
          desc: "Kvantitatív kockázatértékelés, hitelelemzés és adatalapú pénzügyi döntéshozatal.",
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
          alt: "Térkép és fényképezőgép egy utazás tervezéséhez",
        },
        {
          title: "hungary-tracker",
          desc: "Egy React-alkalmazás külföldiek számára, amely nyomon követi az Enter Hungary portálhoz szükséges bevándorlási dokumentumokat, haladáskövetéssel és helyi adattárolással.",
          alt: "",
        },
        {
          title: "market-pulse",
          desc: "Egy Python CLI-eszköz, amely ingyenes API-ból tölti be az élő részvény- és kriptovaluta-árakat, és színkóddal jelzi a változásokat a terminálon.",
          alt: "",
        },
        {
          title: "jkr.me",
          desc: "Ez a portfólióoldal — React 19, TypeScript, Vite és Cloudflare Pages segítségével készült, kétnyelvű támogatással és sötét/világos témával.",
          alt: "",
        },
      ],
    },
    about: {
      label: "Háttér",
      heading: "Rólam",
      h3: "A pénzügyi háttér találkozik a kóddal.",
      p1: "Pályafutásom a pénzügyek területén kezdődött — piacok elemzésével, táblázati modellek készítésével és annak megértésével, hogy az adatok hogyan befolyásolják a döntéseket. Ez az analitikai alap ma is meghatározza a szoftverfejlesztéshez való hozzáállásomat: módszeresen, figyelemmel a szélsőséges esetekre és a teljesítményre.",
      p2: "Jelenleg olyan webalkalmazásokat fejlesztek, amelyek gyorsnak és intuitívnak tűnnek. Fontos számomra a tiszta kód, a hozzáférhető felületek, valamint olyan termékek piacra dobása, amelyek valódi problémákat oldanak meg. Jelenleg Magyarországra költözöm, és nyitott vagyok európai távmunkás álláslehetőségekre.",
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
      locationLabel: "Helyszín",
      locationValue: "Egyesült Államok → Magyarország",
      availabilityHeading: "Elérhetőség",
      availabilityDesc:
        "Jelenleg Magyarországra költözöm. Nyitott vagyok a távmunkára és az európai lehetőségekre. Érdekelnek a frontend fejlesztés, a fintech és a termékfejlesztés területén elérhető pozíciók.",
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
