import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="mb-4 text-4xl font-bold text-[var(--text-strong)]">
          Petr Komar
        </h1>
        <p className="mb-2 text-xl text-[var(--text-muted)]">
          Junior Frontend Developer
        </p>
        <p className="max-w-lg text-[var(--text-muted)]">
          Junior frontend developer zaměřený na React a TypeScript. Postavil 16+
          projektů s REST API, localStorage a CI/CD přes GitHub Actions.
          Přecházím z operations managementu — hledám junior roli kde mohu růst
          v týmu.{" "}
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/LazyTanakaS"
            target="_blank"
            className="rounded-lg bg-[var(--text-strong)] px-6 py-2 text-[var(--background)] transition-colors hover:opacity-90"
          >
            GitHub
          </a>
          <a
            href="https://lazytanakas.github.io/portfolio/"
            target="_blank"
            className="rounded-lg border border-[var(--border)] px-6 py-2 text-[var(--text-strong)] transition-colors hover:bg-[var(--surface)]"
          >
            Portfolio
          </a>
        </div>
      </section>

      <hr className="m-auto max-w-4xl border-[var(--border)]" />

      <section id="projekty" className="max-w-4xl mx-auto px-6 py-16  ">
        <h2 className="mb-8 text-2xl font-bold text-[var(--text-strong)]">
          Projekty
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <ProjectCard
            title="Expenses Tracker"
            description="Full-featured expense manager s CRUD operacemi, sidebar navigací a localStorage persistencí."
            tags={["TypeScript", "React", "localStorage", "CRUD"]}
            demoUrl="https://lazytanakas.github.io/React-TypeScript/expenses-tracker/"
            githubUrl="https://github.com/LazyTanakaS/React-TypeScript/tree/main/expenses-tracker"
          />
          <ProjectCard
            title="Movie Search App"
            description="1000+ filmů z TMDb API s debounced vyhledáváním, filtrováním a localStorage oblíbenými."
            tags={["React", "TMDb API", "useCallback", "Components"]}
            demoUrl="https://lazytanakas.github.io/React-mini-projects/movie-search-app/"
            githubUrl="https://github.com/LazyTanakaS/React-mini-projects"
          />
          <ProjectCard
            title="Weather App"
            description="React + TypeScript aplikace s OpenWeatherMap API a automatickým CI/CD přes GitHub Actions"
            tags={["TypeScript", "React", "GitHub Actions", "CI/CD"]}
            demoUrl="https://lazytanakas.github.io/React-TypeScript/weather-app/"
            githubUrl="https://github.com/LazyTanakaS/React-TypeScript/tree/main/weather-app"
          />
        </div>
      </section>

      <hr className="m-auto max-w-4xl border-[var(--border)]" />

      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="mb-8 text-2xl font-bold text-[var(--text-strong)]">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          <SkillBadge skill="React" />
          <SkillBadge skill="TypeScript" />
          <SkillBadge skill="JavaScript" />
          <SkillBadge skill="HTML" />
          <SkillBadge skill="CSS" />
          <SkillBadge skill="Git" />
          <SkillBadge skill="GitHub Actions" />
          <SkillBadge skill="REST API" />
          <SkillBadge skill="Next.js" />
          <SkillBadge skill="Tailwind" />
        </div>
      </section>

      <section id="kontakt">
        <Contact />
      </section>
    </main>
  );
}
