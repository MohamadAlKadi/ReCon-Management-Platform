import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function Projects() {
  const projects = await prisma.project.findMany({
    include: { company: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="bg-white p-4 rounded shadow hover:bg-gray-50 block"
          >
            <h2 className="font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-600">{project.company.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
