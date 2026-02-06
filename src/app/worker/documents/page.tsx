const docs = [
  { name: 'Trade Certification', expires: 'Nov 02, 2026', state: 'Valid' },
  { name: 'Site Safety Induction', expires: 'May 20, 2026', state: 'Renew soon' },
  { name: 'Medical Clearance', expires: 'Jan 11, 2027', state: 'Valid' },
];

export default function WorkerDocumentsPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">My Documents</h1>
      <p className="page-subtitle">Keep certifications and required records current.</p>
      <div className="surface-card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="py-3">Document</th>
              <th className="py-3">Expiry</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc) => (
              <tr key={doc.name} className="border-b border-slate-100 last:border-0">
                <td className="py-3 font-medium text-slate-800">{doc.name}</td>
                <td className="py-3 text-slate-600">{doc.expires}</td>
                <td className="py-3">
                  <span className={`badge ${doc.state === 'Valid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {doc.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
