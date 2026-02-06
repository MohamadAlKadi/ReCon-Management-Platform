const timeline = [
  { phase: 'Groundwork Complete', date: 'Mar 04', status: 'done' },
  { phase: 'Steel Framing', date: 'Mar 18', status: 'active' },
  { phase: 'Electrical Rough-in', date: 'Apr 02', status: 'upcoming' },
  { phase: 'Interior Finishes', date: 'Apr 20', status: 'upcoming' },
];

export default function WorkerTimelinePage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Project Timeline</h1>
      <p className="page-subtitle">See milestone sequence and upcoming site phases.</p>
      <div className="surface-card space-y-4">
        {timeline.map((item) => (
          <div key={item.phase} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
            <div>
              <p className="font-semibold text-slate-800">{item.phase}</p>
              <p className="text-sm text-slate-500">Target: {item.date}</p>
            </div>
            <span className={`badge ${item.status === 'done' ? 'bg-emerald-100 text-emerald-700' : item.status === 'active' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700'}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
