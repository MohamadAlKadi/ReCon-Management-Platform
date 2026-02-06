interface ProjectCardProps {
  name: string;
  companyName: string;
  description?: string | null;
}

export default function ProjectCard({ name, companyName, description }: ProjectCardProps) {
  return (
    <article className="surface-card transition hover:-translate-y-0.5 hover:shadow-md">
      <h2 className="text-lg font-bold text-slate-900">{name}</h2>
      <p className="mt-1 text-sm text-slate-500">{companyName}</p>
      {description && <p className="mt-3 text-sm text-slate-600">{description}</p>}
    </article>
  );
}
