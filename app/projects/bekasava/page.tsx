import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function BekasavaCaseStudy() {
  return (
    <main className="min-h-screen bg-background animate-fadeIn">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href={"/"}
          className="text-sm text-text-muted hover:text-text-strong transition-colors"
        >
          {" "}
          ← Back to portfolio
        </Link>

        <Navbar />

        <div className="mt-12 mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-text-muted uppercase">
            Case Study · 2026
          </p>
          <h1 className="text-5xl font-bold text-text-strong mb-2">
            Court Interpreter
            <br />
            Website
          </h1>
          <p className="text-text-muted mb-8">
            bekasava.eu - Commercial project
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/LazyTanakaS/bekasava-eu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-2 text-text-strong text-sm hover:bg-surface transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <hr className="border-border mb-16" />

        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-6">
            Overview
          </h2>
          <p className="text-text-muted leading-relaxed max-w-xl">
            Delivered and deployed to production at bekasava.eu, where it served
            the client court interpreter business for several months following
            launch. The client has since taken the site offline; the codebase
            remains available on GitHub.
          </p>
        </section>

        <hr className="border-border mb-16" />

        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-8">
            Technical Highlights
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-text-strong mb-2">
                4-language i18n
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Typed dictionary in a single translations.ts file with blocks
                for each language — cz, ru, bg, be. All strings typed via
                Record&lt;Lang, TranslationItem&gt; — no runtime errors, full
                autocomplete.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text-strong mb-2">
                Custom Hooks
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                useInView triggers card entrance animations via
                IntersectionObserver — elements fade in as they scroll into
                view. useCounter animates a number from 0 to 20 using
                requestAnimationFrame, displaying years of experience on page
                load.
              </p>
            </div>

            <div>
              <p className="font-semibold text-text-strong mb-2">
                Accessibility
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Accessible FAQ with aria-expanded toggling, full keyboard
                navigation, focus-visible outlines, and prefers-reduced-motion
                support — animations are disabled for users who prefer reduced
                motion.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-border mb-16" />

        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-6">
            Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Vite",
              "CSS3",
              "i18n",
              "Accessibility",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-sm text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-border mb-16" />

        <section>
          <h2 className="text-sm font-semibold tracking-widest uppercase text-text-muted mb-6">
            Result
          </h2>
          <p className="text-text-muted leading-relaxed max-w-xl">
            Delivered and deployed to production at bekasava.eu. The site is
            actively used by the client for professional court interpreter
            services. Ongoing frontend support and maintenance as needed.
          </p>
        </section>
      </div>
    </main>
  );
}
