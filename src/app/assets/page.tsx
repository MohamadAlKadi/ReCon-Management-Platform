import AssetCard from '@/components/AssetCard';

const assets = [
  { id: 1, name: 'Crawler Crane - CC12', type: 'Heavy Equipment', project: 'Central Plaza Tower', assignedTo: 'Daniel Kim' },
  { id: 2, name: 'Survey Drone - SD05', type: 'Survey', project: 'Riverside Logistics Hub', assignedTo: 'Unassigned' },
  { id: 3, name: 'Formwork Kit - FK22', type: 'Material Set', project: 'Central Plaza Tower', assignedTo: 'Maya Patel' },
];

export default function AssetsPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Assets</h1>
      <p className="page-subtitle">Equipment and resource allocation by project and assignee.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {assets.map((asset) => (
          <AssetCard
            key={asset.id}
            name={asset.name}
            type={asset.type}
            projectName={asset.project}
            assignedTo={asset.assignedTo}
          />
        ))}
      </div>
    </div>
  );
}
