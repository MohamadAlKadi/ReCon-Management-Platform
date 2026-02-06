import { notFound } from 'next/navigation';
import TaskCard from '@/components/TaskCard';
import AssetCard from '@/components/AssetCard';

const projects = {
  1: {
    name: 'Central Plaza Tower',
    company: 'Summit Build Co.',
    tasks: [
      { id: 11, title: 'Framing zone A', description: 'Install structural steel for level 5.', status: 'IN_PROGRESS' as const, assignee: 'Daniel Kim', dueDate: new Date('2026-02-18') },
      { id: 12, title: 'Safety barrier check', description: 'Validate perimeter protections.', status: 'PENDING' as const, assignee: 'Maya Patel', dueDate: new Date('2026-02-11') },
    ],
    assets: [
      { id: 21, name: 'Crawler Crane - CC12', type: 'Heavy Equipment', projectName: 'Central Plaza Tower', assignedTo: 'Daniel Kim' },
      { id: 22, name: 'Formwork Kit - FK22', type: 'Material Set', projectName: 'Central Plaza Tower', assignedTo: 'Maya Patel' },
    ],
  },
  2: {
    name: 'Riverside Logistics Hub',
    company: 'Northline Contractors',
    tasks: [
      { id: 31, title: 'Electrical rough-in', description: 'Pull conduits in warehouse zone 2.', status: 'PENDING' as const, assignee: 'Jin Alvarez', dueDate: new Date('2026-02-20') },
    ],
    assets: [
      { id: 41, name: 'Survey Drone - SD05', type: 'Survey', projectName: 'Riverside Logistics Hub', assignedTo: null },
    ],
  },
};

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const projectId = Number(resolvedParams.id) as 1 | 2;
  const project = projects[projectId];

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="page-title">{project.name}</h1>
        <p className="page-subtitle">{project.company}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Tasks</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              assignee={task.assignee}
              dueDate={task.dueDate}
            />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Assets</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.assets.map((asset) => (
            <AssetCard
              key={asset.id}
              name={asset.name}
              type={asset.type}
              projectName={asset.projectName}
              assignedTo={asset.assignedTo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
