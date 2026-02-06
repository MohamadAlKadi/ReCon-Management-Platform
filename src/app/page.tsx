import Link from 'next/link';

const managerHighlights = [
  'Project and labor allocation dashboard',
  'Task planning and progress tracking',
  'Worker documentation and compliance status',
  'Payroll visibility and productivity snapshots',
];

const workerHighlights = [
  'Personal tasks and daily priorities',
  'Certification and document tracker',
  'Project timeline and milestone visibility',
  'Quick access to assigned assets and updates',
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight">Construction Operations, Designed for Every Role</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          ReCon now has dedicated experiences for company leadership and on-site workers. Choose a role-specific
          workspace below to present your workflows clearly in demos and stakeholder reviews.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Company / Manager Workspace</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {managerHighlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Link
            href="/manager?role=manager"
            className="mt-6 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Open Manager View
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Worker Workspace</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {workerHighlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Link
            href="/worker?role=worker"
            className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Open Worker View
          </Link>
        </div>
      </section>
    </div>
  );
}
