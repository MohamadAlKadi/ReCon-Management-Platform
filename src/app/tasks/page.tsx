import prisma from '@/lib/prisma'
import { Task } from '@prisma/client'
import React from 'react'

type TaskListProps = {
  tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {tasks.map((task: Task) => (
        <div
          key={task.id}
          className="surface-card p-5 transition hover:-translate-y-0.5"
        >
          <div className="section-header">
            <h3 className="font-semibold">{task.title}</h3>
            <span className="pill-badge pill-badge--warning">{task.status ?? 'Pending'}</span>
          </div>
          <div className="flow-base text-sm text-slate-600">
            {task.description && <p>{task.description}</p>}
            <p>Assigned to: {task.assignedToId ?? 'Unassigned'}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default async function TasksPage() {
  const tasks: Task[] = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      assignedTo: true,
    },
  })

  return (
    <section className="page-stack">
      <div className="section-header">
        <div>
          <p className="section-kicker">Execution</p>
          <h1>Tasks</h1>
        </div>
        <span className="pill-badge pill-badge--primary">{tasks.length} total</span>
      </div>
      <TaskList tasks={tasks} />
    </section>
  )
}
