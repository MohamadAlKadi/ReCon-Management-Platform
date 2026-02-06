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

  const stats = [
    { label: 'Companies', value: companyCount, tone: 'pill-badge--primary' },
    { label: 'Projects', value: projectCount, tone: 'pill-badge--success' },
    { label: 'Tasks', value: taskCount, tone: 'pill-badge--warning' },
    { label: 'Assets', value: assetCount, tone: 'pill-badge--primary' },
  ];

  return (
    <section className="page-stack">
      <div className="section-header">
        <div>
          <p className="section-kicker">Overview</p>
          <h1>Dashboard</h1>
        </div>
        <span className="pill-badge pill-badge--primary">Live snapshot</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="surface-card subtle-gradient p-6 text-center flow-tight">
            <h2 className="text-base font-semibold">{item.label}</h2>
            <p className="text-3xl font-bold">{item.value}</p>
            <span className={`pill-badge ${item.tone}`}>Updated now</span>
          </div>
        ))}
      </div>
    </section>
  );
}
