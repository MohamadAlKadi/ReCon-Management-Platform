import Link from 'next/link';
import prisma from '@/lib/prisma';

type DashboardRole = 'MANAGER' | 'WORKER';

type DashboardProps = {
  searchParams?: Promise<{
    role?: string;
  }>;
};

const ROLE_TITLES: Record<DashboardRole, string> = {
  MANAGER: 'Manager dashboard',
  WORKER: 'Worker dashboard',
};

function getRole(roleParam?: string): DashboardRole {
  return roleParam?.toUpperCase() === 'WORKER' ? 'WORKER' : 'MANAGER';
}

function Icon({ symbol }: { symbol: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-lg" aria-hidden="true">
      {symbol}
    </span>
  );
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const params = (await searchParams) ?? {};
  const activeRole = getRole(params.role);

  const [companyCount, projectCount, taskCount, assetCount, inProgressTasks] = await Promise.all([
    prisma.company.count().catch(() => 0),
    prisma.project.count().catch(() => 0),
    prisma.task.count().catch(() => 0),
    prisma.asset.count().catch(() => 0),
    prisma.task.count({ where: { status: 'IN_PROGRESS' } }).catch(() => 0),
  ]);

  const completionRate = taskCount === 0 ? 0 : Math.round(((taskCount - inProgressTasks) / taskCount) * 100);

  const managerKpis = [
    {
      title: 'Workforce utilization',
      value: `${Math.min(100, Math.round((taskCount / Math.max(assetCount, 1)) * 18))}%`,
      delta: '+4.3% vs last week',
      icon: '👷',
      accent: 'text-sky-600',
      border: 'border-sky-100',
      bg: 'bg-sky-50',
    },
    {
      title: 'Document compliance',
      value: `${completionRate}%`,
      delta: '+2.1% this month',
      icon: '📄',
      accent: 'text-emerald-600',
      border: 'border-emerald-100',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Payroll pending',
      value: `${Math.max(1, Math.round(companyCount * 2))}`,
      delta: '-1 from yesterday',
      icon: '💰',
      accent: 'text-amber-600',
      border: 'border-amber-100',
      bg: 'bg-amber-50',
    },
    {
      title: 'Active projects',
      value: `${projectCount}`,
      delta: '+2 opened this sprint',
      icon: '🏗️',
      accent: 'text-indigo-600',
      border: 'border-indigo-100',
      bg: 'bg-indigo-50',
    },
  ];

  const workerKpis = [
    {
      title: "Today's tasks",
      value: `${Math.max(1, Math.round(taskCount * 0.25))}`,
      delta: '2 due before 3 PM',
      icon: '✅',
      accent: 'text-sky-600',
      border: 'border-sky-100',
      bg: 'bg-sky-50',
    },
    {
      title: 'Upcoming deadlines',
      value: `${Math.max(1, Math.round(taskCount * 0.4))}`,
      delta: '1 high priority',
      icon: '⏳',
      accent: 'text-amber-600',
      border: 'border-amber-100',
      bg: 'bg-amber-50',
    },
    {
      title: 'Assigned project',
      value: `${Math.max(1, projectCount - 1)}`,
      delta: 'Site Alpha Phase 2',
      icon: '📍',
      accent: 'text-indigo-600',
      border: 'border-indigo-100',
      bg: 'bg-indigo-50',
    },
    {
      title: 'Document expiry alerts',
      value: `${Math.max(0, 3 - companyCount)}`,
      delta: 'Renew safety training',
      icon: '⚠️',
      accent: 'text-rose-600',
      border: 'border-rose-100',
      bg: 'bg-rose-50',
    },
  ];

  const kpis = activeRole === 'MANAGER' ? managerKpis : workerKpis;

  return (
    <div className="space-y-8 px-4 py-6 md:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-700 p-6 text-white shadow-sm md:p-8">
        <p className="text-sm font-medium text-slate-200">Project period · Q1 2026</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{ROLE_TITLES[activeRole]}</h1>
            <p className="mt-2 text-sm text-slate-200 md:text-base">
              {activeRole === 'MANAGER'
                ? 'Team execution is stable with critical milestones on schedule.'
                : 'You are on track. Focus on priority tasks and upcoming deadlines.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              View projects
            </Link>
            <Link
              href={activeRole === 'MANAGER' ? '/tasks' : '/assets'}
              className="rounded-lg border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {activeRole === 'MANAGER' ? 'Review operations' : 'Open worker tools'}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <article key={kpi.title} className={`rounded-xl border ${kpi.border} ${kpi.bg} p-5 shadow-sm`}>
            <div className="flex items-start justify-between gap-3">
              <Icon symbol={kpi.icon} />
              <span className={`text-xs font-medium ${kpi.accent}`}>{kpi.delta}</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{kpi.title}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{kpi.value}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <article className="rounded-xl border border-rose-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">At risk tasks</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-lg bg-rose-50 p-3">
              Scaffold inspection checklist · <span className="font-medium text-rose-700">Overdue 2d</span>
            </li>
            <li className="rounded-lg bg-rose-50 p-3">
              Electrical permit validation · <span className="font-medium text-rose-700">Needs approval</span>
            </li>
            <li className="rounded-lg bg-rose-50 p-3">
              Concrete delivery sign-off · <span className="font-medium text-rose-700">Blocked</span>
            </li>
          </ul>
        </article>

        <article className="rounded-xl border border-amber-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Upcoming deadlines</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-lg bg-amber-50 p-3">Site safety audit · Mar 12</li>
            <li className="rounded-lg bg-amber-50 p-3">Payroll cutoff · Mar 14</li>
            <li className="rounded-lg bg-amber-50 p-3">Equipment calibration · Mar 18</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="rounded-lg bg-slate-50 p-3">A. Rivera marked &quot;Masonry QA&quot; complete.</li>
            <li className="rounded-lg bg-slate-50 p-3">North Yard project shifted to Phase 3.</li>
            <li className="rounded-lg bg-slate-50 p-3">Compliance packet uploaded for Review Team B.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
