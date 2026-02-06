const tasks = [
  { title: 'Concrete inspection - Zone B', priority: 'High', due: 'Today, 15:00', status: 'In progress' },
  { title: 'Safety walkthrough checklist', priority: 'Medium', due: 'Tomorrow', status: 'Pending' },
  { title: 'Upload equipment usage logs', priority: 'Low', due: 'Fri, 09:00', status: 'Pending' },
];

export default function WorkerTasksPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Tasks</h1>
      {tasks.map((task) => (
        <article key={task.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{task.status}</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">Priority: {task.priority}</p>
          <p className="text-sm text-slate-600">Due: {task.due}</p>
        </article>
      ))}
    </div>
  );
}
