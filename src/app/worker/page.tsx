const quickStats = [
  { label: 'Assigned Tasks', value: '7' },
  { label: 'Completed This Week', value: '11' },
  { label: 'Documents Valid', value: '5/6' },
  { label: 'Hours Logged', value: '34h' },
];

export default function WorkerPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight">Worker Home</h1>
        <p className="mt-2 text-slate-600">
          A focused workspace to track daily assignments, documents, and project context.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((item) => (
          <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
