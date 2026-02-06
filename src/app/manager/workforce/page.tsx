const workforce = [
  { name: 'Maya Patel', role: 'Site Engineer', compliance: 100, tasks: 8 },
  { name: 'Owen Brooks', role: 'Foreman', compliance: 90, tasks: 11 },
  { name: 'Jin Alvarez', role: 'Electrician', compliance: 78, tasks: 6 },
];

export default function ManagerWorkforcePage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Workforce Tracking</h1>
      <p className="page-subtitle">Monitor team allocation, compliance and workload distribution.</p>
      <div className="surface-card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="py-3">Worker</th>
              <th className="py-3">Role</th>
              <th className="py-3">Compliance</th>
              <th className="py-3">Open Tasks</th>
            </tr>
          </thead>
          <tbody>
            {workforce.map((person) => (
              <tr key={person.name} className="border-b border-slate-100 last:border-0">
                <td className="py-3 font-medium text-slate-800">{person.name}</td>
                <td className="py-3 text-slate-600">{person.role}</td>
                <td className="py-3 text-slate-600">{person.compliance}%</td>
                <td className="py-3 text-slate-600">{person.tasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
