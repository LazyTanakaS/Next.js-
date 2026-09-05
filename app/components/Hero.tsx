"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];
  const cvHref = lang === "cs" ? "/cv-cz.pdf" : "/cv-en.pdf";

  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <p className="mb-3 text-sm font-semibold tracking-widest text-text-muted uppercase">
        {t.hero.role}
      </p>
      <h1 className="mb-6 text-5xl font-bold">
        <span className="text-text-strong">Petr </span>
        <span className="text-text-muted">Komar</span>
      </h1>
      <p className="max-w-lg mb-8 text-text-muted">{t.hero.description}</p>

      <div className="flex gap-4 mb-8">
        <a
          href="https://github.com/LazyTanakaS"
          target="_blank"
          className="rounded-lg bg-text-strong px-6 py-2 text-background font-medium hover:opacity-90 transition-opacity"
          rel="noopener noreferrer"
        >
          {t.hero.github}
        </a>

        <a
          href={cvHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border px-6 py-2 text-text-strong hover:bg-surface transition-colors"
        >
          {t.hero.downloadCv}
        </a>
        <a
          href="#kontakt"
          className="rounded-lg border border-border px-6 py-2 text-text-strong hover:bg-surface transition-colors"
        >
          {t.hero.contact}
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {["TypeScript", "React", "CSS3", "GitHub Actions"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-sm text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
