import Link from 'next/link';
import { mockProjects, mockTasks } from '@/lib/mock-data';
import { getAppRole, withRole } from '@/lib/ui-role';

type ProjectsPageProps = { searchParams: Promise<{ role?: string }> };

export default async function Projects({ searchParams }: ProjectsPageProps) {
  const { role: roleParam } = await searchParams;
  const role = getAppRole(roleParam);

  return (
    <div>
      <h1 className="mb-1 text-3xl font-bold text-slate-900">Project Portfolio</h1>
      <p className="mb-5 text-slate-600">Manager workspace for project configuration, monitoring, and execution details.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockProjects.map((project) => (
          <Link key={project.id} href={withRole(`/projects/${project.id}`, role)} className="block rounded-2xl border border-white/60 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{project.company}</p>
            <p className="mt-4 text-sm text-slate-600">{mockTasks.filter((task) => task.projectId === project.id).length} tracked tasks</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
