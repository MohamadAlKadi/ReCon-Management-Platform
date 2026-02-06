type AssetCardProps = {
  name: string;
  type: string;
  projectName: string;
  assignedTo?: string | null;
};

export default function AssetCard({ name, type, projectName, assignedTo }: AssetCardProps) {
  return (
    <article className="surface-card">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <span className="badge bg-slate-100 text-slate-700">{type}</span>
      </div>
      <div className="mt-4 space-y-1 text-sm text-slate-600">
        <p>Project: {projectName}</p>
        <p>Assigned to: {assignedTo || 'Unassigned'}</p>
      </div>
    </article>
  );
}
