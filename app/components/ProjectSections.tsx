"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="projekty" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-text-strong">
        {t.sections.projects}
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <ProjectCard
          title={t.projects.expenseTracker.title}
          description={t.projects.expenseTracker.description}
          tags={["TypeScript", "React", "LocalStorage", "CRUD"]}
          demoUrl="https://lazytanakas.github.io/React-TypeScript/expenses-tracker/"
          githubUrl="https://github.com/LazyTanakaS/React-TypeScript/tree/main/expenses-tracker"
        />

        <ProjectCard
          title={t.projects.movieSearch.title}
          description={t.projects.movieSearch.description}
          tags={["TMDb API", "React", "useCallback", "Components"]}
          demoUrl="https://lazytanakas.github.io/React-mini-projects/movie-search-app/"
          githubUrl="https://github.com/LazyTanakaS/React-mini-projects"
        />

        <ProjectCard
          title={t.projects.weatherApp.title}
          description={t.projects.weatherApp.description}
          tags={["TypeScript", "React", "GitHub Actions", "CI/CD"]}
          demoUrl="https://lazytanakas.github.io/React-TypeScript/weather-app/"
          githubUrl="https://github.com/LazyTanakaS/React-TypeScript/tree/main/weather-app"
        />
      </div>
    </section>
  );
}
