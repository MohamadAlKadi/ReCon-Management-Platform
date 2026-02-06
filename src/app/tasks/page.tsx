// src/app/tasks/page.tsx
import  prisma  from '@/lib/prisma'
import { Task } from '@prisma/client'
import React from 'react'

// Optional: define a type for props if you fetch tasks in a separate component
type TaskListProps = {
  tasks: Task[]
}

// Component to render a list of tasks
function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="p-4 space-y-4">
      {tasks.map((task: Task) => (
        <div
          key={task.id}
          className="p-4 border rounded shadow hover:bg-gray-50 transition"
        >
          <h3 className="font-semibold">{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <p className="text-sm text-gray-500">
            Assigned to: {task.assignedToId ?? 'Unassigned'}
          </p>
          <p className="text-sm text-gray-500">
            Status: {task.status ?? 'Pending'}
          </p>
        </div>
      ))}
    </div>
  )
}

// Server component that fetches tasks from the database
export default async function TasksPage() {
  // Fetch tasks from Prisma
  const tasks: Task[] = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      // Include assigned user info if you want
      assignedTo: true,
    },
  })

  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-4">Tasks</h1>
      <TaskList tasks={tasks} />
    </main>
  )
}
