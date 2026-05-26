"use client";

import { useTheme } from "./ThemeProvider";
import { useLang } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, changeLang } = useLang();
  const t = translations[lang];

  const isDark = theme === "dark";

  return (
    <nav className="fixed top-0 z-10 w-full border-b border-[--border] bg-[color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          <h3 className="text-2xl font-bold text-[--text-strong]">
            Petr Komar
          </h3>
        </div>

        <div className="flex gap-6">
          <a
            href="#projekty"
            className="text-[--text-muted] hover:text-[--text-strong] transition-colors"
          >
            {t.nav.projects}
          </a>
          <a
            href="#skills"
            className="text-[--text-muted] hover:text-[--text-strong] transition-colors"
          >
            {t.nav.skills}
          </a>
          <a
            href="#kontakt"
            className="text-[--text-muted] hover:text-[--text-strong] transition-colors"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="px-3 py-1 rounded-lg border border-[--border] bg-[--surface] text-[--text-strong] hover:bg-[--surface-elevated] transition-colors"
            aria-label="Toggle color theme"
          >
            {isDark ? "☀" : "☾"}
          </button>

          <button
            onClick={() => changeLang(lang === "cs" ? "en" : "cs")}
            className="px-3 py-1 rounded-lg border border-[--border] text-[--text-muted]"
          >
            {lang === "cs" ? "EN" : "CS"}
          </button>
        </div>
      </div>
    </nav>
  );
}
