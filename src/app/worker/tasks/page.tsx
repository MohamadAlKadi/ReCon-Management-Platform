const statusFilters = ['All', 'Pending', 'In Progress', 'Blocked', 'Completed']

const taskRows = [
  {
    id: 'TSK-3021',
    title: 'Install perimeter hoarding on north lot',
    project: 'Riverside Apartments',
    dueDate: '2026-02-10',
    priority: 'High',
    status: 'In Progress',
  },
  {
    id: 'TSK-3014',
    title: 'Complete daily safety checklist',
    project: 'Riverside Apartments',
    dueDate: '2026-02-07',
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 'TSK-2998',
    title: 'Submit concrete pour quality photos',
    project: 'East Yard Depot',
    dueDate: '2026-02-05',
    priority: 'Low',
    status: 'Completed',
  },
]

export default function WorkerTasksPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">Worker Portal</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">My Tasks</h1>
          <p className="mt-2 text-sm text-slate-600">
            This is a presentational task view using static data while task APIs are being wired.
          </p>
        </header>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700">Status Filters</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {statusFilters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Assigned Tasks</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Task</th>
                  <th className="px-4 py-3 font-medium">Project</th>
                  <th className="px-4 py-3 font-medium">Due Date</th>
                  <th className="px-4 py-3 font-medium">Priority</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {taskRows.map((task) => (
                  <tr key={task.id} className="text-slate-700">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">{task.title}</p>
                      <p className="text-xs text-slate-500">{task.id}</p>
                    </td>
                    <td className="px-4 py-3">{task.project}</td>
                    <td className="px-4 py-3">{task.dueDate}</td>
                    <td className="px-4 py-3">{task.priority}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
