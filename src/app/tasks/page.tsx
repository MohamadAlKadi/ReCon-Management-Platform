import TaskCard from '@/components/TaskCard';

const tasks = [
  {
    id: 1,
    title: 'Finalize crane operation checklist',
    description: 'Confirm all lift plans are signed before tomorrow shift.',
    status: 'IN_PROGRESS' as const,
    assignee: 'Daniel Kim',
    dueDate: new Date('2026-02-10'),
  },
  {
    id: 2,
    title: 'Concrete quality test submission',
    description: 'Upload laboratory compressive strength report.',
    status: 'PENDING' as const,
    assignee: 'Maya Patel',
    dueDate: new Date('2026-02-12'),
  },
  {
    id: 3,
    title: 'Close interior punch list - Block C',
    description: 'Finish all pending snag items for handover.',
    status: 'COMPLETED' as const,
    assignee: 'Jin Alvarez',
    dueDate: new Date('2026-02-08'),
  },
];

export default async function TasksPage() {
  return (
    <main className="space-y-4">
      <h1 className="page-title">Team Tasks</h1>
      <p className="page-subtitle">Track progress, assignments, and delivery dates across ongoing projects.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
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
    </main>
  );
}
