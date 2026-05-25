export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Kontakt</h2>

      <div className="flex flex-col gap-3">
        <a
          href="mailto:petrokomar16@gmail.com"
          target="_blank"
          className="text-gray-700 hover:text-gray-900 underline"
        >
          petrokomar16@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/petro-komar-8824b6266/"
          target="_blank"
          className="text-gray-700 hover:text-gray-900 underline"
        >
          linkedin.com/in/petro-komar-8824b6266
        </a>
        <p className="text-gray-500">Praha, Czech Republic</p>
      </div>
    </section>
  );
}
