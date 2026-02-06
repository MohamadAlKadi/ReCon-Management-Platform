import prisma from '@/lib/prisma';

export default async function Assets() {
  // Include the related User (assignedTo) and Project for each asset
  const assets = await prisma.asset.findMany({
    include: {
      assignedTo: true, // include the full user object
      project: true,    // include the full project object
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Assets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className="bg-white p-4 rounded shadow hover:bg-gray-50"
          >
            <h2 className="font-semibold">{asset.name}</h2>
            <p className="text-sm text-gray-600">
              Project: {asset.project.name}
            </p>
            <p className="text-sm text-gray-600">
              Assigned To: {asset.assignedTo ? asset.assignedTo.name : 'Unassigned'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
