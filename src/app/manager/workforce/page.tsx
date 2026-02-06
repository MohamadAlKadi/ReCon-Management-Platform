const workforceRows = [
  {
    worker: 'Liam Porter',
    project: 'Riverside Apartments',
    progress: '86%',
    compliance: 'Compliant',
    nextCheck: '2026-02-15',
  },
  {
    worker: 'Nina Alvarez',
    project: 'East Yard Depot',
    progress: '64%',
    compliance: 'Expiring Docs',
    nextCheck: '2026-02-09',
  },
  {
    worker: 'Omar Hussein',
    project: 'Harbor Access Road',
    progress: '91%',
    compliance: 'Compliant',
    nextCheck: '2026-02-20',
  },
]

export default function ManagerWorkforcePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">Manager Console</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">Workforce</h1>
          <p className="mt-2 text-sm text-slate-600">
            Static worker progress and compliance overview pending integration with workforce services.
          </p>
        </header>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Worker Progress & Compliance</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Worker</th>
                  <th className="px-4 py-3 font-medium">Project</th>
                  <th className="px-4 py-3 font-medium">Progress</th>
                  <th className="px-4 py-3 font-medium">Compliance</th>
                  <th className="px-4 py-3 font-medium">Next Check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {workforceRows.map((row) => (
                  <tr key={row.worker}>
                    <td className="px-4 py-3 font-medium text-slate-900">{row.worker}</td>
                    <td className="px-4 py-3 text-slate-700">{row.project}</td>
                    <td className="px-4 py-3 text-slate-700">{row.progress}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          row.compliance === 'Compliant'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {row.compliance}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.nextCheck}</td>
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
