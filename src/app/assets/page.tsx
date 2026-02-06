import AssetCard from '@/components/AssetCard'
import prisma from '@/lib/prisma'

export default async function AssetsPage() {
  const assets = await prisma.asset.findMany({
    include: {
      assignedTo: { select: { name: true } },
      project: { select: { name: true } },
    },
  })

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Assets</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {assets.map((asset) => (
          <AssetCard
            key={asset.id}
            name={asset.name}
            type={asset.type}
            assignee={asset.assignedTo?.name}
            projectName={asset.project.name}
            tags={[asset.type]}
          />
        ))}
      </div>
    </div>
  )
}
