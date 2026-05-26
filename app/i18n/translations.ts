export type Lang = "cs" | "en";

export const transitions = {
  cs: {
    nav: {
      projects: "Projekty",
      skills: "Dovoednosti",
      contact: "Kontakt",
    },
    hero: {
      role: "Junior Frontend Developer",
      description:
        "Junior frontend developer zaměřený na React a TypeScript. Postavil 16+ projektů s REST API, localStorage a CI/CD přes GitHub Actions. Přecházím z operations managementu — hledám junior roli kde mohu růst v týmu.",
      github: "GitHub",
      portfolio: "Portfolio",
    },
    section: {
      projects: "Projekty",
      skills: "Dovednosti",
      contact: "Kontakt",
    },
  },

  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      role: "Junior Frontend Developer",
      description:
        "Junior frontend developer focused on React and TypeScript. Built 16+ projects with REST API, localStorage and CI/CD via GitHub Actions. Career changer seeking a junior role to grow within a team.",
      github: "GitHub",
      portfolio: "Portfolio",
    },
    sections: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
  },
} as const;

export type Translations = (typeof transitions)[Lang];
