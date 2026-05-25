export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold text-[var(--text-strong)]">
        Kontakt
      </h2>

      <div className="flex flex-col gap-3">
        <a
          href="mailto:petrokomar16@gmail.com"
          target="_blank"
          className="text-[var(--link)] underline transition-colors hover:text-[var(--link-hover)]"
        >
          petrokomar16@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/petro-komar-8824b6266/"
          target="_blank"
          className="text-[var(--link)] underline transition-colors hover:text-[var(--link-hover)]"
        >
          linkedin.com/in/petro-komar-8824b6266
        </a>
        <p className="text-[var(--text-muted)]">Praha, Czech Republic</p>
      </div>
    </section>
  );
}
