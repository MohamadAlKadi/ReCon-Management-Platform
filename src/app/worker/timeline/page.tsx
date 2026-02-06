const milestones = [
  {
    date: '2026-02-03',
    title: 'Site handover complete',
    detail: 'Received final access permit and equipment storage allocation.',
  },
  {
    date: '2026-02-08',
    title: 'Ground prep and trenching',
    detail: 'Excavation and trench inspections planned for shift A and B.',
  },
  {
    date: '2026-02-14',
    title: 'Steel frame delivery',
    detail: 'Coordinate unloading crew and staging area sign-off.',
  },
  {
    date: '2026-02-20',
    title: 'QA checkpoint: foundation pour',
    detail: 'Supervisor verification and photographic evidence required.',
  },
]

export default function WorkerTimelinePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">Worker Portal</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">Project Timeline</h1>
          <p className="mt-2 text-sm text-slate-600">
            Static milestone timeline to preview worker-facing progress updates.
          </p>
        </header>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <ol className="relative border-s border-slate-200">
            {milestones.map((milestone) => (
              <li key={milestone.title} className="ms-6 pb-8 last:pb-0">
                <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600" />
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{milestone.date}</p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{milestone.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{milestone.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}
