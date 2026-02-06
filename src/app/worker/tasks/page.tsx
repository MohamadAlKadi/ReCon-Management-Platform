const workerTasks = [
  { title: 'Submit foundation inspection checklist', status: 'Due today', priority: 'High' },
  { title: 'Upload safety orientation document', status: 'Due tomorrow', priority: 'Medium' },
  { title: 'Review concrete pour timeline', status: 'This week', priority: 'Medium' },
];

export default function WorkerTasksPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">My Tasks</h1>
      <p className="page-subtitle">Focus on what needs your attention next.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {workerTasks.map((task) => (
          <article key={task.title} className="surface-card">
            <h2 className="text-lg font-semibold text-slate-900">{task.title}</h2>
            <div className="mt-4 flex gap-2">
              <span className="badge bg-indigo-100 text-indigo-700">{task.status}</span>
              <span className="badge bg-amber-100 text-amber-700">{task.priority}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
