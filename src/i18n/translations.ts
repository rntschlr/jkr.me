export interface Translation {
  nav: {
    skills: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    desc: string;
    cta: string;
    viewProjects: string;
    phrases: string[];
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
      badge: "Open to opportunities",
      desc: "Building at the intersection of finance and technology. I craft clean, performant web experiences with modern tooling and a focus on user-centered design.",
      cta: "Get in Touch",
      viewProjects: "View Projects",
      phrases: [
        "Finance \u00d7 Code",
        "Full-Stack Developer",
        "Building for the web",
        "React & TypeScript",
        "Data-driven design",
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
          title: "hungary-tracker",
          desc: "A React app for expats to track immigration documents needed for Hungary\u2019s Enter Hungary portal, with progress tracking and local persistence.",
          alt: "Immigration document checklist interface",
        },
        {
          title: "market-pulse",
          desc: "A Python CLI tool that fetches live stock and crypto prices from a free API and displays color-coded changes in the terminal.",
          alt: "Terminal displaying live market data",
        },
        {
          title: "jkr.me",
          desc: "This portfolio site\u2014built with React 19, TypeScript, Vite, and Tailwind CSS, featuring bilingual support and dark/light theming.",
          alt: "Portfolio website screenshot",
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
        "Currently relocating to Hungary via family reunification visa. Open to remote work and European opportunities. Interested in frontend development, fintech, and product engineering roles.",
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
      skills: "K\u00e9szs\u00e9gek",
      projects: "Projektek",
      about: "R\u00f3lam",
      contact: "Kapcsolat",
    },
    hero: {
      badge: "Lehet\u0151s\u00e9gekre nyitok",
      desc: "A p\u00e9nz\u00fcgy \u00e9s a technol\u00f3gia hat\u00e1r\u00e1n alkotok. Modern eszk\u00f6z\u00f6kkel, felhaszn\u00e1l\u00f3k\u00f6zpont\u00fa tervez\u00e9ssel k\u00e9sz\u00edtek letisztult, gyors webes \u00e9lm\u00e9nyeket.",
      cta: "Vegy\u00fck fel a kapcsolatot",
      viewProjects: "Projektek megtekint\u00e9se",
      phrases: [
        "P\u00e9nz\u00fcgy \u00d7 K\u00f3d",
        "Full-Stack Fejleszt\u0151",
        "Webre fejlesztek",
        "React & TypeScript",
        "Adavez\u00e9relt tervez\u00e9s",
      ],
    },
    skills: {
      label: "Szaktud\u00e1s",
      heading: "Technikai K\u00e9szs\u00e9gek",
      desc: "Sz\u00e9les alapok szoftverfejleszt\u00e9s, felh\u0151infrastrukt\u00fara, adatelemz\u00e9s \u00e9s p\u00e9nz\u00fcgyi technol\u00f3gia ter\u00fclet\u00e9n.",
      items: [
        {
          title: "Programoz\u00e1si Nyelvek",
          desc: "J\u00e1rtas rendszer- \u00e9s alkalmaz\u00e1sszint\u0171 programoz\u00e1sban, t\u00f6bb paradigm\u00e1ban.",
        },
        {
          title: "Webfejleszt\u00e9s",
          desc: "Reszponz\u00edv webes \u00e9lm\u00e9nyek fejleszt\u00e9se \u00e9s \u00fczembe helyez\u00e9se modern szabv\u00e1nyokkal.",
        },
        {
          title: "G\u00e9pi Tanul\u00e1s",
          desc: "Meger\u0151s\u00edt\u00e9ses tanul\u00e1s, nagy nyelvi modellek \u00e9s prompt engineering alapjai.",
        },
        {
          title: "Eszk\u00f6z\u00f6k \u00e9s Platformok",
          desc: "Felh\u0151infrastrukt\u00fara, kont\u00e9neriz\u00e1ci\u00f3 \u00e9s verzi\u00f3kezel\u00e9s modern fejleszt\u00e9si munkafolyamatokhoz.",
        },
        {
          title: "Adatb\u00e1zisok \u00e9s Analitika",
          desc: "Adatlek\u00e9rdez\u00e9s, p\u00e9nz\u00fcgyi adatplatformok \u00e9s analitikai modellez\u00e9s.",
        },
        {
          title: "Kiberbiztons\u00e1g",
          desc: "Biztons\u00e1gi alapismeretek, CompTIA Security+ min\u0151s\u00edt\u00e9s folyamatban.",
        },
        {
          title: "H\u00e1l\u00f3zatok",
          desc: "H\u00e1l\u00f3zati infrastrukt\u00fara konfigur\u00e1l\u00e1sa, \u00fatv\u00e1laszt\u00e1si protokollok \u00e9s virtualiz\u00e1lt szerverk\u00f6rnyezetek.",
        },
        {
          title: "Szoftvercsomag",
          desc: "Tervez\u00e9si, elrendez\u00e9si \u00e9s produktivit\u00e1si eszk\u00f6z\u00f6k professzion\u00e1lis eredm\u00e9nyek el\u00e9r\u00e9s\u00e9hez.",
        },
        {
          title: "Fintech \u00e9s Megfelel\u0151s\u00e9g",
          desc: "Szab\u00e1lyoz\u00e1si keretek, \u00fcgyf\u00e9l-azonos\u00edt\u00e1si folyamatok \u00e9s felt\u00f6rekv\u0151 p\u00e9nz\u00fcgyi technol\u00f3gia.",
        },
        {
          title: "P\u00e9nz\u00fcgyi Elemz\u00e9s",
          desc: "Kvantitatív kockázatértékelés, hitelemzés és adatalapú pénzügyi döntéshozatal.",
        },
      ],
    },
    projects: {
      label: "Port\u00f3li\u00f3",
      heading: "Kiemelt Projektek",
      desc: "V\u00e1logatott munk\u00e1k, amelyek technikai probl\u00e9mamegold\u00e1st \u00e9s szakmai ig\u00e9nyess\u00e9get mutatnak be.",
      viewGithub: "GitHub Profil Megtekint\u00e9se",
      items: [
        {
          title: "hungary-tracker",
          desc: "React alkalmaz\u00e1s k\u00fclf\u00f6ldiek sz\u00e1m\u00e1ra, amellyel nyomon k\u00f6vethet\u0151k a magyarorsz\u00e1gi Enter Hungary port\u00e1lhoz sz\u00fcks\u00e9ges bev\u00e1ndorl\u00e1si dokumentumok, halad\u00e1sk\u00f6vet\u00e9ssel \u00e9s helyi adatt\u00e1rol\u00e1ssal.",
          alt: "Bev\u00e1ndorl\u00e1si dokumentum ellen\u0151rz\u0151lista fel\u00fclet",
        },
        {
          title: "market-pulse",
          desc: "Python parancssori eszk\u00f6z, amely val\u00f3s idej\u0171 r\u00e9szv\u00e9ny- \u00e9s kript\u00f3\u00e1rfolyamokat k\u00e9r le egy ingyenes API-b\u00f3l, \u00e9s sz\u00ednk\u00f3dolt v\u00e1ltoz\u00e1sokat jelen\u00edt meg a termin\u00e1lban.",
          alt: "Termin\u00e1l val\u00f3s idej\u0171 piaci adatokkal",
        },
        {
          title: "jkr.me",
          desc: "Ez a portf\u00f3li\u00f3 oldal\u2014React 19, TypeScript, Vite \u00e9s Tailwind CSS alapokon, k\u00e9tnyelv\u0171 t\u00e1mogat\u00e1ssal \u00e9s s\u00f6t\u00e9t/vil\u00e1gos t\u00e9m\u00e1val.",
          alt: "Portf\u00f3li\u00f3 weboldal k\u00e9perny\u0151k\u00e9p",
        },
      ],
    },
    about: {
      label: "H\u00e1tt\u00e9r",
      heading: "R\u00f3lam",
      h3: "A p\u00e9nz\u00fcgy \u00e9s a k\u00f3d tal\u00e1lkoz\u00e1sa.",
      p1: "Az utam a p\u00e9nz\u00fcgyi szektorban kezd\u0151d\u00f6tt \u2014 piacelemz\u00e9ssel, spreadsheet modellek \u00e9p\u00edt\u00e9s\u00e9vel \u00e9s az adatok d\u00f6nt\u00e9shozatalban bet\u00f6lt\u00f6tt szerep\u00e9nek meg\u00e9rt\u00e9s\u00e9vel. Ez az analitikai alap ma is meghat\u00e1rozza, hogyan k\u00f6zel\u00edtek a szoftverfejleszt\u00e9shez: m\u00f3dszeresen, figyelemmel a sz\u00e9ls\u0151 esetekre \u00e9s a teljes\u00edtm\u00e9nyre.",
      p2: "Ma gyors \u00e9s intuit\u00edv webalkalmazatokat fejlesztek. Fontos sz\u00e1momra a tiszta k\u00f3d, az akad\u00e1lymentesített interf\u00e9szek \u00e9s a val\u00f3di probl\u00e9m\u00e1kat megold\u00f3 term\u00e9kek. Jelenleg Magyarorsz\u00e1gra k\u00f6lt\u00f6z\u00f6m, \u00e9s nyitott vagyok t\u00e1vmunk\u00e1ra, illetve eur\u00f3pai lehet\u0151s\u00e9gekre.",
      statFinance: "\u00c9v a p\u00e9nz\u00fcgyekben",
      statBuilding: "\u00c9v fejleszt\u00e9sben",
      statCuriosity: "K\u00edv\u00e1ncsis\u00e1g",
    },
    contact: {
      label: "Kapcsol\u00f3dj",
      heading: "Vegy\u00fck fel a kapcsolatot",
      desc: "Nyitott vagyok lehet\u0151s\u00e9gekre \u00e9s \u00e9rdekes besz\u00e9lget\u00e9sekre. \u00c9p\u00edts\u00fcnk valamit egy\u00fctt.",
      detailsHeading: "Kapcsolati Adatok",
      emailLabel: "Email",
      githubLabel: "GitHub",
      locationLabel: "Helysz\u00edn",
      locationValue: "Egyes\u00fclt \u00c1llamok \u2192 Magyarorsz\u00e1g",
      availabilityHeading: "El\u00e9rhet\u0151s\u00e9g",
      availabilityDesc:
        "Jelenleg Magyarorsz\u00e1gra k\u00f6lt\u00f6z\u00f6m csal\u00e1degyesít\u00e9si v\u00edzummal. Nyitott vagyok t\u00e1vmunk\u00e1ra \u00e9s eur\u00f3pai lehet\u0151s\u00e9gekre. \u00c9rdekl\u0151d\u00f6m a frontend fejleszt\u00e9s, a fintech \u00e9s a term\u00e9km\u00e9rn\u00f6ki szerepk\u00f6r\u00f6k ir\u00e1nt.",
      labelName: "N\u00e9v",
      labelEmail: "Email",
      labelSubject: "T\u00e1rgy",
      labelMessage: "\u00dczenet",
      placeholderName: "Az \u00d6n neve",
      placeholderEmail: "you@example.com",
      placeholderSubject: "Mir\u0151l sz\u00f3l?",
      placeholderMessage: "Mes\u00e9ljen a projektj\u00e9r\u0151l vagy lehet\u0151s\u00e9g\u00e9r\u0151l...",
      submit: "\u00dczenet K\u00fcld\u00e9se",
      submitting: "K\u00fcld\u00e9s...",
      successMsg: "\u00dczenet elk\u00fcldve! Hamarosan visszajelzek.",
      mailtoMsg:
        "Az e-mail kliensnek meg kellett ny\u00edlnia az \u00fczenettel. Ha nem ny\u00edlt meg, \u00edrjon k\u00f6zvetlen\u00fcl:",
      mailtoSubject: "Kapcsolatfelv\u00e9tel:",
      errRequired: "K\u00e9rj\u00fck, t\u00f6ltse ki a nev\u00e9t, e-mail c\u00edm\u00e9t \u00e9s \u00fczenet\u00e9t.",
      errEmail: "K\u00e9rj\u00fck, adjon meg \u00e9rv\u00e9nyes e-mail c\u00edmet.",
      errLength: "K\u00e9rj\u00fck, r\u00f6vid\u00edtse az \u00fczenetet, \u00e9s pr\u00f3b\u00e1lja \u00fajra.",
      errGeneric: "Valami hiba t\u00f6rt\u00e9nt. K\u00e9rj\u00fck, pr\u00f3b\u00e1lja \u00fajra egy pillanat m\u00falva.",
    },
    footer: {
      backToTop: "Vissza a tetej\u00e9re",
      builtWith: "Gondosan k\u00e9sz\u00edtve.",
    },
  },
};
