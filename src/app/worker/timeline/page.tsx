const milestones = [
  { phase: 'Foundation', window: 'Jan 10 - Feb 14', status: 'Completed' },
  { phase: 'Structural Framing', window: 'Feb 15 - Mar 30', status: 'In progress' },
  { phase: 'Electrical & MEP', window: 'Apr 1 - May 20', status: 'Upcoming' },
  { phase: 'Interior Finishing', window: 'May 21 - Jul 05', status: 'Upcoming' },
];

export default function WorkerTimelinePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Project Timeline</h1>
      <div className="space-y-3">
        {milestones.map((milestone) => (
          <article key={milestone.phase} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{milestone.phase}</h2>
            <p className="text-sm text-slate-600">{milestone.window}</p>
            <p className="mt-2 text-sm font-medium text-blue-700">{milestone.status}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
