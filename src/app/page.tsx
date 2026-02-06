import Link from 'next/link';

const roleCards = [
  {
    role: 'Manager',
    href: '/dashboard?role=manager',
    points: ['Monitor project performance', 'Manage workforce and compliance', 'Track payroll and delivery risk'],
    accent: 'from-indigo-600 to-violet-600',
  },
  {
    role: 'Worker',
    href: '/dashboard?role=worker',
    points: ['Track personal tasks and deadlines', 'View certifications and documents', 'Follow project timeline and updates'],
    accent: 'from-emerald-500 to-teal-600',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="surface-card bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <p className="badge bg-white/20 text-white">Construction Operations Platform</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Run every site with clarity and confidence.</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-200">
          ReCon gives teams one place to manage projects, people, tasks, documentation, and progress.
          Choose a role below to launch a tailored view for your demo.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {roleCards.map((card) => (
          <article key={card.role} className="surface-card">
            <div className={`h-2 rounded-full bg-gradient-to-r ${card.accent}`} />
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{card.role} View</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {card.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <Link
              href={card.href}
              className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Enter {card.role} Dashboard
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
