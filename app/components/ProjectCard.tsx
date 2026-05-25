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
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-xl text-gray-500 mb-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href={githubUrl}
          target="_blank"
          className="text-sm text-gray-600 hover:text-gray-900 underline"
        >
          GitHub
        </a>
        <a
          href={demoUrl}
          target="_blank"
          className="text-sm text-gray-600 hover:text-gray-900 underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
}
