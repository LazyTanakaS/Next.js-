"use client";

import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav className="fixed top-0 z-10 w-full border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_86%,transparent)] backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-6">
          <h3 className="text-2xl font-bold text-[var(--text-strong)]">
            Petr Komar
          </h3>
        </div>

        <div className="flex gap-6">
          <a
            href="#projekty"
            className="text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors"
          >
            Projekty
          </a>
          <a
            href="#skills"
            className="text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors"
          >
            Skills
          </a>
          <a
            href="#kontakt"
            className="text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors"
          >
            Kontakt
          </a>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="px-3 py-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] hover:bg-[var(--surface-elevated)] transition-colors"
            aria-label="Toggle color theme"
          >
            {isDark ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </nav>
  );
}
