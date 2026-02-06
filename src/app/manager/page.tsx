const metrics = [
  { label: 'Active Projects', value: '14', trend: '+2 this month' },
  { label: 'Open Work Orders', value: '36', trend: '8 high-priority' },
  { label: 'Workforce Utilization', value: '87%', trend: 'Healthy allocation' },
  { label: 'Compliance Coverage', value: '94%', trend: '6 docs expiring soon' },
];

const queue = [
  'Approve new subcontractor onboarding packet',
  'Review crane maintenance checklist for Site C',
  'Publish revised timeline for Riverside Tower phase 2',
  'Confirm payroll lock for current bi-weekly cycle',
];

export default function ManagerPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Manager Command Center</h1>
        <p className="mt-2 text-slate-600">A presentation-ready overview for project managers and leadership.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
            <p className="mt-1 text-xs font-medium text-emerald-600">{metric.trend}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Project Progress Snapshot</h2>
          <div className="mt-5 space-y-4">
            {[
              ['Riverside Tower', 72],
              ['Northline Depot', 48],
              ['Civic Hall Retrofit', 89],
            ].map(([name, progress]) => (
              <div key={name as string}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{name as string}</span>
                  <span className="text-slate-600">{progress as number}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-blue-600" style={{ width: `${progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Immediate Action Queue</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {queue.map((item) => (
              <li key={item} className="rounded-lg bg-slate-50 p-3">{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
