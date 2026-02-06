const docs = [
  { name: 'OSHA-30 Certificate', expires: '2026-03-22', status: 'Valid' },
  { name: 'Site Access Card', expires: '2026-01-10', status: 'Renew soon' },
  { name: 'Medical Clearance', expires: '2025-12-04', status: 'Valid' },
];

export default function WorkerDocumentsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Documents</h1>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Document</th>
              <th className="px-4 py-3">Expiration</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc) => (
              <tr key={doc.name} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{doc.name}</td>
                <td className="px-4 py-3 text-slate-600">{doc.expires}</td>
                <td className="px-4 py-3">{doc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
