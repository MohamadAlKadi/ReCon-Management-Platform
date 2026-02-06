type DashboardPageProps = {
  searchParams: Promise<{
    role?: string;
  }>;
};

const managerHighlights = [
  { label: 'Compliance Docs', value: '94%', tone: 'text-emerald-600' },
  { label: 'Payroll Pending', value: '$42.8K', tone: 'text-amber-600' },
  { label: 'Schedule Risk', value: '2 projects', tone: 'text-rose-600' },
];

const workerHighlights = [
  { label: 'Due This Week', value: '5 tasks', tone: 'text-amber-600' },
  { label: 'Documents Active', value: '8 files', tone: 'text-emerald-600' },
  { label: 'Hours This Week', value: '31.5h', tone: 'text-indigo-600' },
];

const kpis = [
  { label: 'Active Projects', value: 12 },
  { label: 'Open Tasks', value: 43 },
  { label: 'Field Workers', value: 86 },
  { label: 'Tracked Assets', value: 64 },
];

export default async function Dashboard({ searchParams }: DashboardPageProps) {
  const { role: requestedRole } = await searchParams;
  const role = requestedRole === 'worker' ? 'worker' : 'manager';
  const highlights = role === 'manager' ? managerHighlights : workerHighlights;

  return (
    <div className="space-y-6">
      <section className="surface-card bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
        <p className="badge bg-white/20 text-white">{role === 'manager' ? 'Manager Overview' : 'Worker Overview'}</p>
        <h1 className="mt-3 text-3xl font-bold">{role === 'manager' ? 'Portfolio command center' : 'Your daily work cockpit'}</h1>
        <p className="mt-2 text-sm text-indigo-100">
          {role === 'manager'
            ? 'Track delivery, team productivity, and financial health across active construction projects.'
            : 'Keep your tasks, project milestones, and required documents in one place.'}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <div key={item.label} className="surface-card">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.label} className="surface-card">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className={`mt-2 text-2xl font-semibold ${item.tone}`}>{item.value}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
