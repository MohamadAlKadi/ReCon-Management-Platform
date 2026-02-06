import { TaskStatus } from '@prisma/client';

type TaskCardProps = {
  title: string;
  description?: string | null;
  status: TaskStatus;
  assignee?: string | null;
  dueDate?: Date | null;
};

const statusStyles: Record<TaskStatus, string> = {
  PENDING: 'bg-amber-100 text-amber-700',
  IN_PROGRESS: 'bg-indigo-100 text-indigo-700',
  COMPLETED: 'bg-emerald-100 text-emerald-700',
};

export default function TaskCard({ title, description, status, assignee, dueDate }: TaskCardProps) {
  return (
    <article className="surface-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <span className={`badge ${statusStyles[status]}`}>{status.replace('_', ' ')}</span>
      </div>
      {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      <div className="mt-4 space-y-1 text-sm text-slate-500">
        <p>Assigned to: {assignee || 'Unassigned'}</p>
        <p>Due: {dueDate ? dueDate.toLocaleDateString() : 'No date set'}</p>
      </div>
    </article>
  );
}
