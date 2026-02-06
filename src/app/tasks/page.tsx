import TaskCard from '@/components/TaskCard'
import prisma from '@/lib/prisma'

export default async function TasksPage() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      assignedTo: {
        select: { name: true },
      },
      project: {
        select: { name: true },
      },
    },
  })

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="mb-4 text-2xl font-bold">Tasks</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            assignee={task.assignedTo?.name}
            dueDate={task.dueDate}
            projectName={task.project.name}
            tags={[task.status === 'COMPLETED' ? 'Done' : 'Open']}
          />
        ))}
      </div>
    </main>
  )
}
