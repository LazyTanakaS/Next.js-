import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import AnimatedSection from "./components/AnimatedSection";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <hr className="m-auto max-w-4xl border-[var(--border)]" />

      <AnimatedSection>
        <ProjectSection />
      </AnimatedSection>

      <hr className="m-auto max-w-4xl border-[var(--border)]" />

      <AnimatedSection>
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
      </AnimatedSection>

      <section id="kontakt">
        <Contact />
      </section>
    </main>
  );
}
