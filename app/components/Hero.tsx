"use client";

import { useLang } from "../context/LanguageContext";
import { transitions } from "../i18n/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = transitions[lang];

  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <h1 className="mb-4 text-4xl font-bold text-[-text-strong]">
        Petr Komar
      </h1>
      <p className="mb-2 text-xl text-[--text-muted]">{t.hero.role}</p>
      <p className="max-w-lg text-[--text-muted]">{t.hero.description}</p>

      <div className="flex gap-5 mt-8">
        <a
          href="https://github.com/LazyTanakaS"
          target="_blank"
          className="rounded-lg bg-[--text-strong] px-6 py-2 text-[--background] transition-colors hover:opacity-90"
        >
          {t.hero.github}
        </a>

        <a
          href="https://lazytanakas.github.io/portfolio/"
          target="_blank"
          className="rounded-lg border border-[--border] px-6 py-2 text-[v--text-strong] transition-colors hover:bg-[--surface]"
        >
          {t.hero.portfolio}
        </a>
      </div>
    </section>
  );
}
