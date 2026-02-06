import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function Projects() {
  const projects = await prisma.project.findMany({
    include: { company: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <section className="page-stack">
      <div className="section-header">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h1>Projects</h1>
        </div>
        <span className="pill-badge pill-badge--primary">{projects.length} active</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="surface-card subtle-gradient block p-5 transition hover:-translate-y-0.5"
          >
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-sm text-slate-600">{project.company.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
