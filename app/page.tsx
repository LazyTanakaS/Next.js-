import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Petr Komar</h1>
        <p className="text-xl text-gray-600 mb-2">Junior Frontend Developer</p>
        <p className="text-gray-500 max-w-lg">
          Junior frontend developer zaměřený na React a TypeScript. Postavil 16+
          projektů s REST API, localStorage a CI/CD přes GitHub Actions.
          Přecházím z operations managementu — hledám junior roli kde mohu růst
          v týmu.{" "}
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/LazyTanakaS"
            target="_blank"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-color"
          >
            GitHub
          </a>
          <a
            href="https://lazytanakas.github.io/portfolio/"
            target="_blank"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Portfolio
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16  ">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Projekty</h2>

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
    </main>
  );
}
