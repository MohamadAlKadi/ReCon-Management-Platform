import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockAssets, mockProjects, mockTasks } from '@/lib/mock-data';
import { getAppRole, withRole } from '@/lib/ui-role';

type ProjectDetailPageProps = { params: Promise<{ id: string }>; searchParams: Promise<{ role?: string }> };

export default async function ProjectDetailPage({ params, searchParams }: ProjectDetailPageProps) {
  const { id } = await params;
  const { role: roleParam } = await searchParams;
  const role = getAppRole(roleParam);
  const projectId = Number(id);
  const project = mockProjects.find((item) => item.id === projectId);

  if (!project) notFound();

  const projectTasks = mockTasks.filter((task) => task.projectId === projectId);
  const projectAssets = mockAssets.filter((asset) => asset.projectId === projectId);

  return (
    <div>
      <Link href={withRole('/projects', role)} className="text-sm font-medium text-blue-700 hover:text-blue-800">← Back to projects</Link>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{project.name}</h1>
      <p className="mb-6 text-slate-500">{project.company}</p>
      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Tasks</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projectTasks.map((task) => (
            <div key={task.id} className="rounded-2xl border border-white/60 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-slate-900">{task.title}</h3>
              <p className="text-sm text-slate-600">Status: {task.status.replace('_', ' ')}</p>
              <p className="text-sm text-slate-500">Assigned To: {task.assignedTo}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-3 text-xl font-semibold text-slate-900">Assets</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projectAssets.map((asset) => (
            <div key={asset.id} className="rounded-2xl border border-white/60 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-slate-900">{asset.name}</h3>
              <p className="text-sm text-slate-600">Type: {asset.type}</p>
              <p className="text-sm text-slate-500">Assigned To: {asset.assignedTo}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
