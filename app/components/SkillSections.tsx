"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import SkillBadge from "./SkillBadge";

export default function SkillSection() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-[--text-strong]">
        {t.sections.skills}
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
  );
}
