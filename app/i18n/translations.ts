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
        "Junior frontend developer zaměřený na React a TypeScript. Postavil jsem 5 větších projektů a 4 cvičné aplikace s REST API, localStorage a CI/CD přes GitHub Actions. Přecházím z operations managementu — hledám junior roli kde mohu růst v týmu.",
      github: "GitHub",
      portfolio: "Portfolio",
      downloadCv: "Stáhnout CV",
      contact: "Kontakt",
    },
    about: {
      description:
        "Přecházím z operations managementu do frontend developmentu. Věnuji 2+ hodiny denně učení a budování reálných projektů. Za více než rok jsem postavil 5 větších projektů a 4 cvičné aplikace v JavaScriptu, Reactu a TypeScriptu.",
      stats: {
        experience: { value: "1+ rok", label: "Zkušenosti" },
        projects: { value: "5 + 4", label: "Větší + cvičné" },
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
      links: {
        demo: "Živá ukázka",
        caseStudy: "Případová studie",
      },
      badges: {
        client: "Klient",
        featured: "Hlavní projekt",
        architecture: "Architektura",
        cicd: "CI/CD",
        fundamentals: "Základy",
        personal: "Osobní projekt",
      },
      bekasava: {
        title: "Court Interpreter Website",
        description:
          "Reálný klientský projekt. Vícejazyčný web s i18n ve 4 jazycích, custom hooks a plnou přístupností.",
      },
      expenseTracker: {
        title: "Expense Tracker",
        description:
          "Správce výdajů s CRUD operacemi, navigací a localStorage persistencí. Pokryto komponentovými testy (Vitest + React Testing Library).",
      },
      movieSearch: {
        title: "Movie Search App",
        description:
          "1000+ filmů z TMDb API s debounced vyhledáváním, filtrováním a oblíbenými. Přepracováno do vlastních hooks (useDebounce, useFavorites, useMovieData, useSearchHistory).",
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
      carServiceLog: {
        title: "Car Service Log",
        description:
          "Veďte si přehled o údržbě auta: přidávejte, upravujte a mažte záznamy (datum, stav tachometru, díl nebo úkon) a filtrujte je podle dílu. Data se ukládají v localStorage.",
      },
    },
    skills: {
      categories: {
        core: "Základní technologie",
        styling: "Styling",
        tools: "Nástroje",
        integration: "Integrace",
        tests: "Testy",
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
        "Junior frontend developer focused on React and TypeScript. Built 5 larger projects and 4 practice apps with REST API, localStorage and CI/CD via GitHub Actions. Career changer seeking a junior role to grow within a team.",
      github: "GitHub",
      portfolio: "Portfolio",
      downloadCv: "Download CV",
      contact: "Contact",
    },
    about: {
      description:
        "Transitioning from operations management into frontend development. Spending 2+ hours daily building real projects. Over the past year I have built 5 larger projects and 4 practice apps in JavaScript, React and TypeScript.",
      stats: {
        experience: { value: "1+ year", label: "Experience" },
        projects: { value: "5 + 4", label: "Larger + practice" },
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
      links: {
        demo: "Live demo",
        caseStudy: "Case study",
      },
      badges: {
        client: "Client project",
        featured: "Featured project",
        architecture: "Architecture",
        cicd: "CI/CD",
        fundamentals: "Fundamentals",
        personal: "Personal project",
      },
      bekasava: {
        title: "Court Interpreter Website",
        description:
          "Real client project for a judicial translator. Multilingual site with 4-language i18n, custom hooks and full accessibility.",
      },
      expenseTracker: {
        title: "Expense Tracker",
        description:
          "Full CRUD expense tracker with sidebar navigation and localStorage persistence. Covered with a component test suite (Vitest + React Testing Library).",
      },
      movieSearch: {
        title: "Movie Search App",
        description:
          "1000+ movies from TMDb API with debounced search, filtering and favorites. Refactored into custom hooks (useDebounce, useFavorites, useMovieData, useSearchHistory).",
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
      carServiceLog: {
        title: "Car Service Log",
        description:
          "Keep a personal car maintenance history: add, edit and delete records (date, mileage, part or job) and filter them by part. Data persists in localStorage.",
      },
    },
    skills: {
      categories: {
        core: "Core Technologies",
        styling: "Styling",
        tools: "Tools",
        integration: "Integration",
        tests: "Tests",
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
