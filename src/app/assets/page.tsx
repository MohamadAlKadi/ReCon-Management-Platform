import prisma from '@/lib/prisma';

export default async function AssetsPage() {
  const assets = await prisma.asset.findMany({
    include: {
      assignedTo: { select: { name: true } },
      project: { select: { name: true } },
    },
  });

  return (
    <section className="page-stack">
      <div className="section-header">
        <div>
          <p className="section-kicker">Inventory</p>
          <h1>Assets</h1>
        </div>
        <span className="pill-badge pill-badge--success">{assets.length} tracked</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {assets.map((asset) => (
          <div key={asset.id} className="surface-card p-5 flow-tight">
            <h2 className="font-bold">{asset.name}</h2>
            <p className="text-sm text-slate-600">Type: {asset.type}</p>
            <p className="text-sm text-slate-600">Project: {asset.project.name}</p>
            <p className="text-sm text-slate-600">Assigned To: {asset.assignedTo?.name || 'Unassigned'}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
