import Link from 'next/link';

const previewMetrics = [
  { label: 'Active Projects', value: '12' },
  { label: 'Open Tasks', value: '48' },
  { label: 'Tracked Assets', value: '325' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900 px-8 py-10 text-white shadow-lg">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            ReCon Management Platform
          </p>
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Coordinate field operations with confidence.</h1>
          <p className="max-w-3xl text-sm text-slate-100 md:text-base">
            ReCon unifies project oversight, task execution, and asset visibility in one system so teams can move
            from planning to delivery without losing momentum.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Manager View</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Monitor portfolio health across active projects.</li>
              <li>Track company-wide task and asset utilization.</li>
              <li>Surface top-level metrics for rapid decision making.</li>
            </ul>
            <Link
              href="/dashboard"
              className="mt-6 inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Enter Manager View
            </Link>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Worker View</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>See assigned work clearly in one streamlined queue.</li>
              <li>Review task details and status before heading on-site.</li>
              <li>Stay aligned with project priorities as work shifts.</li>
            </ul>
            <Link
              href="/tasks"
              className="mt-6 inline-flex rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-900"
            >
              Enter Worker View
            </Link>
          </article>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Live Platform Snapshot</h2>
          <p className="mt-1 text-sm text-slate-600">A quick demo preview to accelerate onboarding conversations.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {previewMetrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-slate-100 p-4">
                <p className="text-xs uppercase text-slate-500">{metric.label}</p>
                <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
