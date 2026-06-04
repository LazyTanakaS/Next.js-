export type Lang = "cs" | "en";

export const translations = {
  cs: {
    nav: {
      projects: "Projekty",
      skills: "Dovednosti",
      contact: "Kontakt",
      about: "O mně",
    },
    hero: {
      role: "Junior Frontend Developer",
      description:
        "Junior frontend developer zaměřený na React a TypeScript. Postavil 16+ projektů s REST API, localStorage a CI/CD přes GitHub Actions. Přecházím z operations managementu — hledám junior roli kde mohu růst v týmu.",
      github: "GitHub",
      portfolio: "Portfolio",
      downloadCv: "Stáhnout CV",
      contact: "Kontakt",
    },
    about: {
      description:
        "Přecházím z operations managementu do frontend developmentu. Věnuji 2+ hodiny denně učení a budování reálných projektů. Za více než rok jsem postavil 16+ aplikací v React a TypeScript.",
      stats: {
        experience: { value: "1+ rok", label: "Zkušenosti" },
        projects: { value: "16+", label: "Projekty" },
        daily: { value: "2+ hod", label: "Denně" },
        location: { value: "Praha", label: "Lokace" },
      },
    },
    sections: {
      about: "O mně",
      projects: "Projekty",
      skills: "Dovednosti",
      contact: "Kontakt",
    },
    projects: {
      expenseTracker: {
        title: "Expense Tracker",
        description:
          "Správce výdajů s CRUD operacemi, navigací a localStorage persistencí.",
      },
      movieSearch: {
        title: "Movie Search App",
        description:
          "1000+ filmů z TMDb API s debounced vyhledáváním, filtrováním a oblíbenými.",
      },
      weatherApp: {
        title: "Weather App",
        description:
          "React + TypeScript aplikace s OpenWeatherMap API a automatickým CI/CD.",
      },
      quizApp: {
        title: "Quiz App",
        description:
          "SPA kvíz s Open Trivia DB API, časovačem, kategoriemi a historií výsledků v localStorage.",
      },
    },
    skills: {
      categories: {
        core: "Základní technologie",
        styling: "Styling",
        tools: "Nástroje",
        integration: "Integrace",
      },
    },
    contact: {
      title: "Kontakt",
      location: "Praha, Česká republika",
    },
    footer: {
      rights: "Všechna práva vyhrazena",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      about: "About",
    },
    hero: {
      role: "Junior Frontend Developer",
      description:
        "Junior frontend developer focused on React and TypeScript. Built 16+ projects with REST API, localStorage and CI/CD via GitHub Actions. Career changer seeking a junior role to grow within a team.",
      github: "GitHub",
      portfolio: "Portfolio",
      downloadCv: "Download CV",
      contact: "Contact",
    },
    about: {
      description:
        "Transitioning from operations management into frontend development. Spending 2+ hours daily building real projects. Over the past year I have built 16+ applications in React and TypeScript.",
      stats: {
        experience: { value: "1+ year", label: "Experience" },
        projects: { value: "16+", label: "Projects" },
        daily: { value: "2+ hrs", label: "Daily" },
        location: { value: "Prague", label: "Location" },
      },
    },
    sections: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    projects: {
      expenseTracker: {
        title: "Expense Tracker",
        description:
          "Expense manager with CRUD operations, sidebar navigation and localStorage persistence.",
      },
      movieSearch: {
        title: "Movie Search App",
        description:
          "1000+ movies from TMDb API with debounced search, filtering and favorites.",
      },
      weatherApp: {
        title: "Weather App",
        description:
          "React + TypeScript app with OpenWeatherMap API and automated CI/CD.",
      },
      quizApp: {
        title: "Quiz App",
        description:
          "SPA quiz app using Open Trivia DB API with timer, categories and localStorage score history.",
      },
    },
    skills: {
      categories: {
        core: "Core Technologies",
        styling: "Styling",
        tools: "Tools",
        integration: "Integration",
      },
    },
    contact: {
      title: "Contact",
      location: "Prague, Czech Republic",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
