import prisma from '@/lib/prisma';

export default async function AssetsPage() {
  const assets = await prisma.asset.findMany({
    include: {
      assignedTo: { select: { name: true } },
      project: { select: { name: true } },
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {assets.map((asset) => (
        <div key={asset.id} className="bg-white p-4 rounded shadow">
          <h2 className="font-bold">{asset.name}</h2>
          <p>Type: {asset.type}</p>
          <p>Project: {asset.project.name}</p>
          <p>Assigned To: {asset.assignedTo?.name || 'Unassigned'}</p>
        </div>
      ))}
    </div>
  );
}
