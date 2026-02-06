import { mockAssets, mockProjects } from '@/lib/mock-data';

export default async function AssetsPage() {
  return (
    <div>
      <h1 className="mb-1 text-3xl font-bold text-slate-900">Workforce & Asset Tracking</h1>
      <p className="mb-5 text-slate-600">Track equipment distribution and ownership across active project sites.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockAssets.map((asset) => (
          <article key={asset.id} className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{asset.name}</h2>
            <p className="mt-1 text-sm text-slate-600">Type: {asset.type}</p>
            <p className="text-sm text-slate-500">Project: {mockProjects.find((project) => project.id === asset.projectId)?.name}</p>
            <p className="mt-3 text-sm font-medium text-slate-700">Assigned to: {asset.assignedTo}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
