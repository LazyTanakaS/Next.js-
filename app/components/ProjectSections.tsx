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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard
          title={t.projects.bekasava.title}
          description={t.projects.bekasava.description}
          tags={["React", "TypeScript", "Vite", "i18n", "Accessibility"]}
          githubUrl="https://github.com/LazyTanakaS/bekasava-eu"
          caseStudyUrl="/projects/bekasava"
          badge={t.projects.badges.client}
          linkLabels={t.projects.links}
        />

        <ProjectCard
          title={t.projects.expenseTracker.title}
          description={t.projects.expenseTracker.description}
          tags={["TypeScript", "React", "LocalStorage", "CRUD", "Vitest"]}
          demoUrl="https://lazytanakas.github.io/React-TypeScript/expenses-tracker/"
          githubUrl="https://github.com/LazyTanakaS/React-TypeScript/tree/main/expenses-tracker"
          badge={t.projects.badges.featured}
          linkLabels={t.projects.links}
        />

        <ProjectCard
          title={t.projects.movieSearch.title}
          description={t.projects.movieSearch.description}
          tags={["TMDb API", "React", "Custom hooks", "Components"]}
          demoUrl="https://lazytanakas.github.io/React-mini-projects/movie-search-app/"
          githubUrl="https://github.com/LazyTanakaS/React-mini-projects"
          badge={t.projects.badges.architecture}
          linkLabels={t.projects.links}
        />

        <ProjectCard
          title={t.projects.weatherApp.title}
          description={t.projects.weatherApp.description}
          tags={["TypeScript", "React", "GitHub Actions", "CI/CD"]}
          demoUrl="https://lazytanakas.github.io/React-TypeScript/weather-app/"
          githubUrl="https://github.com/LazyTanakaS/React-TypeScript/tree/main/weather-app"
          badge={t.projects.badges.cicd}
          linkLabels={t.projects.links}
        />

        <ProjectCard
          title={t.projects.quizApp.title}
          description={t.projects.quizApp.description}
          tags={["Vanilla JS", "Async API", "SPA", "LocalStorage"]}
          demoUrl="https://lazytanakas.github.io/JS-Mini-Projects/quiz-app/"
          githubUrl="https://github.com/LazyTanakaS/JS-Mini-Projects"
          badge={t.projects.badges.fundamentals}
          linkLabels={t.projects.links}
        />

        <ProjectCard
          title={t.projects.carServiceLog.title}
          description={t.projects.carServiceLog.description}
          tags={["React", "TypeScript", "Vite", "LocalStorage", "CRUD"]}
          githubUrl="https://github.com/LazyTanakaS/car-service-log"
          badge={t.projects.badges.personal}
          linkLabels={t.projects.links}
        />
      </div>
    </section>
  );
}
