import prisma from '@/lib/prisma';

export default async function Dashboard() {
  const [companyCount, projectCount, taskCount, assetCount] = await Promise.all([
    prisma.company.count(),
    prisma.project.count(),
    prisma.task.count(),
    prisma.asset.count(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-2">Companies</h2>
        <p className="text-2xl font-bold">{companyCount}</p>
      </div>

      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-2">Projects</h2>
        <p className="text-2xl font-bold">{projectCount}</p>
      </div>

      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-2">Tasks</h2>
        <p className="text-2xl font-bold">{taskCount}</p>
      </div>

      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-2">Assets</h2>
        <p className="text-2xl font-bold">{assetCount}</p>
      </div>
    </div>
  );
}
