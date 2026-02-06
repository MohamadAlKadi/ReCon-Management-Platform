const managerProjects = [
  { name: 'Central Plaza Tower', progress: 72, risk: 'Low' },
  { name: 'Greenfield Housing Block C', progress: 45, risk: 'Medium' },
  { name: 'Riverside Logistics Hub', progress: 28, risk: 'High' },
];

export default function ManagerProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Project Control</h1>
      <p className="page-subtitle">Set direction, track momentum, and identify delivery risk.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {managerProjects.map((project) => (
          <article key={project.name} className="surface-card">
            <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
            <p className="mt-3 text-sm text-slate-600">Progress: {project.progress}%</p>
            <div className="mt-2 h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${project.progress}%` }} />
            </div>
            <span className={`mt-4 badge ${project.risk === 'High' ? 'bg-rose-100 text-rose-700' : project.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {project.risk} Risk
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
