"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Contact() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-[--text-strong]">
        {t.contact.title}
      </h2>

      <div className="flex flex-col gap-3">
        <a
          href="mailto:petrokomar16@gmail.com"
          target="_blank"
          className="text-[--link] underline transition-colors hover:text-[--link-hover]"
        >
          petrokomar16@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/petro-komar-8824b6266/"
          target="_blank"
          className="text-[--link] underline transition-colors hover:text-[--link-hover]"
        >
          linkedin.com/in/petro-komar-8824b6266
        </a>
        <p className="text-[--text-muted]">{t.contact.location}</p>
      </div>
    </section>
  );
}
