import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

type ProjectDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const projectId = Number(params.id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    notFound();
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      company: true,
      tasks: {
        include: {
          assignedTo: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
      assets: {
        include: {
          assignedTo: true,
        },
        orderBy: {
          id: 'desc',
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <section className="page-stack">
      <div className="section-header">
        <div>
          <p className="section-kicker">Project</p>
          <h1>{project.name}</h1>
          <p className="text-sm text-slate-600">{project.company.name}</p>
        </div>
        <span className="pill-badge pill-badge--primary">{project.tasks.length} tasks</span>
      </div>

      <section className="page-stack">
        <div className="section-header">
          <h2>Tasks</h2>
        </div>
        {project.tasks.length === 0 ? (
          <p className="text-sm text-slate-600">No tasks found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.tasks.map((task) => (
              <div key={task.id} className="surface-card p-4 flow-tight">
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-slate-600">Status: {task.status}</p>
                <p className="text-sm text-slate-600">
                  Assigned To: {task.assignedTo ? task.assignedTo.name : 'Unassigned'}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="page-stack">
        <div className="section-header">
          <h2>Assets</h2>
        </div>
        {project.assets.length === 0 ? (
          <p className="text-sm text-slate-600">No assets found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.assets.map((asset) => (
              <div key={asset.id} className="surface-card p-4 flow-tight">
                <h3 className="font-semibold">{asset.name}</h3>
                <p className="text-sm text-slate-600">Type: {asset.type}</p>
                <p className="text-sm text-slate-600">
                  Assigned To: {asset.assignedTo ? asset.assignedTo.name : 'Unassigned'}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
