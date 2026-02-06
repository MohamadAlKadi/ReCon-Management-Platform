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
    <div>
      <h1 className="text-2xl font-bold mb-1">{project.name}</h1>
      <p className="text-sm text-gray-600 mb-6">{project.company.name}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Tasks</h2>
        {project.tasks.length === 0 ? (
          <p className="text-sm text-gray-600">No tasks found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.tasks.map((task) => (
              <div key={task.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">Status: {task.status}</p>
                <p className="text-sm text-gray-600">
                  Assigned To: {task.assignedTo ? task.assignedTo.name : 'Unassigned'}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Assets</h2>
        {project.assets.length === 0 ? (
          <p className="text-sm text-gray-600">No assets found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.assets.map((asset) => (
              <div key={asset.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{asset.name}</h3>
                <p className="text-sm text-gray-600">Type: {asset.type}</p>
                <p className="text-sm text-gray-600">
                  Assigned To: {asset.assignedTo ? asset.assignedTo.name : 'Unassigned'}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
