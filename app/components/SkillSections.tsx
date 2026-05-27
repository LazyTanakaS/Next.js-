"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import SkillBadge from "./SkillBadge";

export default function SkillSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const skillGroups = [
    {
      category: t.skills.categories.core,
      skills: ["React", "TypeScript", "JavaScript"],
    },
    {
      category: t.skills.categories.styling,
      skills: ["CSS", "Tailwind CSS", "HTML"],
    },
    {
      category: t.skills.categories.tools,
      skills: ["Git", "GitHub Actions", "Vite", "Next.js"],
    },
    {
      category: t.skills.categories.integration,
      skills: ["REST API", "LocalStorage"],
    },
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-text-strong">
        {t.sections.skills}
      </h2>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
