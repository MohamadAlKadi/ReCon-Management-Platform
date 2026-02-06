interface ProjectCardProps {
  name: string
  companyName: string
  status?: string
  taskSummary?: string
  progress?: number
}

const projectStatusStyles: Record<string, string> = {
  ACTIVE: 'bg-emerald-100 text-emerald-700',
  UPCOMING: 'bg-indigo-100 text-indigo-700',
  COMPLETED: 'bg-slate-100 text-slate-700',
}

const formatLabel = (value: string) =>
  value
    .toLowerCase()
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export default function ProjectCard({
  name,
  companyName,
  status = 'ACTIVE',
  taskSummary,
  progress,
}: ProjectCardProps) {
  const chipClass = projectStatusStyles[status] ?? projectStatusStyles.ACTIVE

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
      <header className="mb-3 flex items-start justify-between gap-3">
        <h2 className="text-base font-semibold text-gray-900">{name}</h2>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${chipClass}`}>
          {formatLabel(status)}
        </span>
      </header>

      <div className="space-y-1.5 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Company:</span> {companyName}
        </p>
        {taskSummary ? (
          <p>
            <span className="font-medium text-gray-700">Tasks:</span> {taskSummary}
          </p>
        ) : null}
      </div>

      {typeof progress === 'number' ? (
        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
            <span>Progress</span>
            <span>{Math.max(0, Math.min(100, Math.round(progress)))}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-indigo-500"
              style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
            />
          </div>
        </div>
      ) : null}
    </article>
  )
}
