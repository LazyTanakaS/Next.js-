"use client";

import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Petr Komar · 2026 · {t.footer.rights}
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/LazyTanakaS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text-strong transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:petrokomar16@gmail.com"
            className="text-sm text-text-muted hover:text-text-strong transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
