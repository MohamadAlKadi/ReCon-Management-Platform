interface TaskCardProps {
  title: string
  status: string
  assignee?: string | null
  dueDate?: Date | string | null
  projectName?: string
  description?: string | null
  progress?: number
  tags?: string[]
}

const taskStatusStyles: Record<string, string> = {
  COMPLETED: 'bg-emerald-100 text-emerald-700',
  IN_PROGRESS: 'bg-amber-100 text-amber-700',
  PENDING: 'bg-slate-100 text-slate-700',
}

const formatLabel = (value: string) =>
  value
    .toLowerCase()
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const formatDate = (value: Date | string | null | undefined) => {
  if (!value) {
    return 'No due date'
  }

  const date = value instanceof Date ? value : new Date(value)

  if (Number.isNaN(date.getTime())) {
    return 'No due date'
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

export default function TaskCard({
  title,
  status,
  assignee,
  dueDate,
  projectName,
  description,
  progress,
  tags,
}: TaskCardProps) {
  const normalizedStatus = status ?? 'PENDING'
  const chipClass = taskStatusStyles[normalizedStatus] ?? taskStatusStyles.PENDING

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
      <header className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${chipClass}`}>
          {formatLabel(normalizedStatus)}
        </span>
      </header>

      {description ? <p className="mb-3 text-sm text-gray-600">{description}</p> : null}

      <div className="space-y-1.5 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Assignee:</span>{' '}
          {assignee || 'Unassigned'}
        </p>
        <p>
          <span className="font-medium text-gray-700">Due date:</span> {formatDate(dueDate)}
        </p>
        {projectName ? (
          <p>
            <span className="font-medium text-gray-700">Project:</span> {projectName}
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
