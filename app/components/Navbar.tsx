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
    <nav className="fixed top-0 z-10 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          <h3 className="text-2xl font-bold text-text-strong">Petr Komar</h3>
        </div>

        <div className="flex gap-6">
          <a
            href="#projekty"
            className="text-text-muted transition-colors hover:text-text-strong"
          >
            {t.nav.projects}
          </a>
          <a
            href="#skills"
            className="text-text-muted transition-colors hover:text-text-strong"
          >
            {t.nav.skills}
          </a>
          <a
            href="#kontakt"
            className="text-text-muted transition-colors hover:text-text-strong"
          >
            {t.nav.contact}
          </a>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-lg border border-border bg-surface px-3 py-1 text-text-strong transition-colors hover:bg-surface-elevated"
            aria-label="Toggle color theme"
          >
            {isDark ? "☀" : "☾"}
          </button>

          <button
            onClick={() => changeLang(lang === "cs" ? "en" : "cs")}
            className="rounded-lg border border-border px-3 py-1 text-text-muted"
          >
            {lang === "cs" ? "EN" : "CS"}
          </button>
        </div>
      </div>
    </nav>
  );
}
