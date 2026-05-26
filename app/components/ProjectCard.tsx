interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
      <h3 className="mb-3 text-3xl font-bold text-text-strong">{title}</h3>
      <p className="mb-2 text-xl text-text-muted">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface px-3 py-1 text-sm text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href={githubUrl}
          target="_blank"
          className="text-sm text-link underline transition-colors hover:text-link-hover"
        >
          GitHub
        </a>
        <a
          href={demoUrl}
          target="_blank"
          className="text-sm text-link underline transition-colors hover:text-link-hover"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
