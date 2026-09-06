interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  badge?: string;
  caseStudyUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  githubUrl,
  badge,
  caseStudyUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-2xl font-bold text-text-strong">{title}</h3>
        {badge && (
          <span className="text-xs font-medium text-text-muted border border-border rounded-full px-2 py-0.5">
            {badge}
          </span>
        )}
      </div>

      <p className="mb-4 text-text-muted">{description}</p>

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
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-link underline transition-colors hover:text-link-hover"
          >
            Live demo →
          </a>
        )}

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-link underline transition-colors hover:text-link-hover"
        >
          GitHub
        </a>

        {caseStudyUrl && (
          <a
            href={caseStudyUrl}
            className="text-sm text-link underline transition-colors hover:text-link-hover"
          >
            Case study →
          </a>
        )}
      </div>
    </div>
  );
}
