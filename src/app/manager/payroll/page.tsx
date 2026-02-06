const payrollRows = [
  { period: 'Week 06', workers: 28, pending: '$12,450', status: 'Pending review' },
  { period: 'Week 05', workers: 27, pending: '$0', status: 'Paid' },
  { period: 'Week 04', workers: 29, pending: '$0', status: 'Paid' },
];

export default function ManagerPayrollPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Payroll Overview</h1>
      <p className="page-subtitle">Validate payout cycles and resolve pending approvals quickly.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="surface-card md:col-span-2">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="py-3">Period</th>
                <th className="py-3">Workers</th>
                <th className="py-3">Pending Amount</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {payrollRows.map((row) => (
                <tr key={row.period} className="border-b border-slate-100 last:border-0">
                  <td className="py-3 font-medium text-slate-800">{row.period}</td>
                  <td className="py-3 text-slate-600">{row.workers}</td>
                  <td className="py-3 text-slate-600">{row.pending}</td>
                  <td className="py-3">
                    <span className={`badge ${row.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="surface-card">
          <p className="text-sm text-slate-500">Total pending</p>
          <p className="mt-2 text-3xl font-bold text-amber-600">$12,450</p>
          <p className="mt-3 text-sm text-slate-600">1 cycle requires manager approval before payout.</p>
        </aside>
      </div>
    </div>
  );
}
