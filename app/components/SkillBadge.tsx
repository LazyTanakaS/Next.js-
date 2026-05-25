interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
      {skill}
    </span>
  );
}
