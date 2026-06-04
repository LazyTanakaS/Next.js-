import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSections";
import SkillSection from "./components/SkillSections";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <hr className="m-auto max-w-4xl border-border" />

      <AnimatedSection>
        <About /> {/* ← сюда */}
      </AnimatedSection>

      <hr className="m-auto max-w-4xl border-border" />

      <AnimatedSection>
        <ProjectSection />
      </AnimatedSection>

      <hr className="m-auto max-w-4xl border-border" />

      <AnimatedSection>
        <SkillSection />
      </AnimatedSection>

      <AnimatedSection>
        <section id="kontakt">
          <Contact />
        </section>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
