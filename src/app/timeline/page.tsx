import { mockProjects, mockTasks } from '@/lib/mock-data';

export default async function TimelinePage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Project Timeline</h1>
        <p className="text-slate-600">Understand where each job stands in the broader delivery schedule.</p>
      </div>
      <div className="space-y-3">
        {mockProjects.map((project) => {
          const taskCount = mockTasks.filter((task) => task.projectId === project.id).length;
          return (
            <article key={project.id} className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
                  <p className="text-sm text-slate-500">{project.company}</p>
                </div>
                <div className="text-sm text-slate-600">
                  <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                  <p>End: {new Date(project.endDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: `${Math.min(100, taskCount * 20)}%` }} />
              </div>
              <p className="mt-2 text-sm text-slate-500">Progress indicator based on tracked tasks ({taskCount}).</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
