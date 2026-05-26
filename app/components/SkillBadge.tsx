interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="rounded-lg bg-surface px-4 py-2 text-sm font-medium text-text-muted">
      {skill}
    </span>
  );
}
