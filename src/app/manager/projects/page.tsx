const projectCards = [
  { name: 'Riverside Apartments', owner: 'A. Nelson', phase: 'Execution', status: 'On Track' },
  { name: 'East Yard Depot', owner: 'M. Gupta', phase: 'Planning', status: 'At Risk' },
  { name: 'Harbor Access Road', owner: 'J. Kim', phase: 'Closeout', status: 'Delayed' },
]

const boardColumns = {
  Planning: ['Permits submitted', 'Initial budget approved'],
  Execution: ['North lot fencing', 'Foundation steel prep'],
  Review: ['Safety audit documentation'],
  Done: ['Temporary office setup'],
}

export default function ManagerProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">Manager Console</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">Projects</h1>
          <p className="mt-2 text-sm text-slate-600">
            Mock project setup cards and status board with static records.
          </p>
        </header>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Project Setup Snapshot</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {projectCards.map((project) => (
              <article key={project.name} className="rounded-lg border border-slate-200 p-4">
                <h3 className="font-semibold text-slate-900">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-600">Owner: {project.owner}</p>
                <p className="text-sm text-slate-600">Phase: {project.phase}</p>
                <p className="mt-2 inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {project.status}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Status Board</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-4">
            {Object.entries(boardColumns).map(([column, items]) => (
              <div key={column} className="rounded-lg bg-slate-100 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">{column}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="rounded-md bg-white p-3 text-sm text-slate-700 shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
