import AssetCard from '@/components/AssetCard'
import TaskCard from '@/components/TaskCard'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

type ProjectDetailPageProps = {
  params: {
    id: string
  }
}

const taskProgressByStatus: Record<string, number> = {
  PENDING: 25,
  IN_PROGRESS: 60,
  COMPLETED: 100,
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const projectId = Number(params.id)

  if (!Number.isInteger(projectId) || projectId <= 0) {
    notFound()
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
  })

  if (!project) {
    notFound()
  }

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold">{project.name}</h1>
      <p className="mb-6 text-sm text-gray-600">{project.company.name}</p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">Tasks</h2>
        {project.tasks.length === 0 ? (
          <p className="text-sm text-gray-600">No tasks found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.tasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                assignee={task.assignedTo?.name}
                dueDate={task.dueDate}
                projectName={project.name}
                progress={taskProgressByStatus[task.status] ?? 0}
              />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Assets</h2>
        {project.assets.length === 0 ? (
          <p className="text-sm text-gray-600">No assets found for this project.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.assets.map((asset) => (
              <AssetCard
                key={asset.id}
                name={asset.name}
                type={asset.type}
                assignee={asset.assignedTo?.name}
                projectName={project.name}
                tags={[asset.type]}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
