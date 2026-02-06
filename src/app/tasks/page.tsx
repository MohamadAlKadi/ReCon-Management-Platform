import { mockProjects, mockTasks } from '@/lib/mock-data';

export default async function TasksPage() {
  return (
    <div>
      <h1 className="mb-1 text-3xl font-bold text-slate-900">Task Board</h1>
      <p className="mb-5 text-slate-600">Prioritize work, assign responsibility, and track execution status.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockTasks.map((task) => (
          <article key={task.id} className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{mockProjects.find((p) => p.id === task.projectId)?.name}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{task.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{task.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-700">{task.status.replace('_', ' ')}</span>
              <span className="text-slate-500">{task.assignedTo}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
