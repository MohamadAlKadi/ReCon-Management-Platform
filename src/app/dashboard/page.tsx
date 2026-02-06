import { getAppRole } from '@/lib/ui-role';
import { mockAssets, mockProjects, mockTasks, mockWorkers } from '@/lib/mock-data';

type DashboardProps = {
  searchParams: Promise<{ role?: string }>;
};

function StatCard({ title, value, subtitle }: { title: string; value: string | number; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
    </div>
  );
}

export default async function Dashboard({ searchParams }: DashboardProps) {
  const { role: roleParam } = await searchParams;
  const role = getAppRole(roleParam);

  const inProgressTasks = mockTasks.filter((task) => task.status === 'IN_PROGRESS').length;
  const completedTasks = mockTasks.filter((task) => task.status === 'COMPLETED').length;

  if (role === 'WORKER') {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Worker view</p>
          <h1 className="mt-2 text-3xl font-bold">Your day at a glance</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="My Active Tasks" value={inProgressTasks} subtitle="Tasks currently underway" />
          <StatCard title="Completed Tasks" value={completedTasks} subtitle="Marked done across projects" />
          <StatCard title="Active Projects" value={mockProjects.length} subtitle="Projects available this cycle" />
          <StatCard title="Site Assets" value={mockAssets.length} subtitle="Tools and equipment in circulation" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white shadow-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Manager view</p>
        <h1 className="mt-2 text-3xl font-bold">Operations performance overview</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Total Projects" value={mockProjects.length} subtitle="Across all managed companies" />
        <StatCard title="Total Tasks" value={mockTasks.length} subtitle="Work items currently tracked" />
        <StatCard title="In Progress" value={inProgressTasks} subtitle="Tasks needing close follow-up" />
        <StatCard title="Completed" value={completedTasks} subtitle="Delivered tasks this period" />
        <StatCard title="Workers" value={mockWorkers.length} subtitle="Active workforce profiles" />
        <StatCard title="Assets" value={mockAssets.length} subtitle="Equipment and resources linked" />
      </div>
    </div>
  );
}
