"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
type StatKey = "experience" | "projects" | "daily" | "location";

const stats: { key: StatKey }[] = [
  { key: "experience" },
  { key: "projects" },
  { key: "daily" },
  { key: "location" },
];

export default function About() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="mb-4 text-2xl font-bold text-text-strong">
        {t.sections.about}
      </h2>
      <p className="max-w-lg mb-10 text-text-muted">{t.about.description}</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.key}
            className="rounded-xl border border-border bg-surface-elevated p-6"
          >
            <p className="text-2xl font-bold text-text-strong">
              {t.about.stats[stat.key].value}
            </p>
            <p className="text-sm text-text-muted">
              {t.about.stats[stat.key].label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
