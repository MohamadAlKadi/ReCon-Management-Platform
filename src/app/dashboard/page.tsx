import prisma from '@/lib/prisma';

export default async function Dashboard() {
  const [companyCount, projectCount, taskCount, assetCount] = await Promise.all([
    prisma.company.count(),
    prisma.project.count(),
    prisma.task.count(),
    prisma.asset.count(),
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
