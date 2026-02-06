interface AssetCardProps {
  name: string
  type: string
  projectName?: string
  assignee?: string | null
  status?: string
  tags?: string[]
}

const assetStatusStyles: Record<string, string> = {
  ASSIGNED: 'bg-indigo-100 text-indigo-700',
  AVAILABLE: 'bg-emerald-100 text-emerald-700',
  UNASSIGNED: 'bg-slate-100 text-slate-700',
}

const formatLabel = (value: string) =>
  value
    .toLowerCase()
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export default function AssetCard({
  name,
  type,
  projectName,
  assignee,
  status,
  tags,
}: AssetCardProps) {
  const resolvedStatus = status ?? (assignee ? 'ASSIGNED' : 'UNASSIGNED')
  const chipClass =
    assetStatusStyles[resolvedStatus] ??
    (assignee ? assetStatusStyles.ASSIGNED : assetStatusStyles.UNASSIGNED)

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
      <header className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${chipClass}`}>
          {formatLabel(resolvedStatus)}
        </span>
      </header>

      <div className="space-y-1.5 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Type:</span> {type}
        </p>
        <p>
          <span className="font-medium text-gray-700">Assigned to:</span>{' '}
          {assignee || 'Unassigned'}
        </p>
        {projectName ? (
          <p>
            <span className="font-medium text-gray-700">Project:</span> {projectName}
          </p>
        ) : null}
      </div>

      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}
