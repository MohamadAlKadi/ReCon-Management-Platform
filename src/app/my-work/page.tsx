import { mockProjects, mockTasks } from '@/lib/mock-data';

export default async function MyWorkPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Tasks</h1>
        <p className="text-slate-600">A focused board for daily execution and accountability.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockTasks.map((task) => (
          <article key={task.id} className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{mockProjects.find((project) => project.id === task.projectId)?.name}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{task.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{task.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">{task.status.replace('_', ' ')}</span>
              <span className="text-slate-500">Owner: {task.assignedTo}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
