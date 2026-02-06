const payRuns = [
  {
    payPeriod: '2026-01-16 to 2026-01-31',
    workers: 42,
    gross: '$86,240',
    pendingPayouts: '$9,840',
    status: 'Pending Approval',
  },
  {
    payPeriod: '2026-01-01 to 2026-01-15',
    workers: 40,
    gross: '$82,915',
    pendingPayouts: '$0',
    status: 'Paid',
  },
  {
    payPeriod: '2025-12-16 to 2025-12-31',
    workers: 39,
    gross: '$80,670',
    pendingPayouts: '$0',
    status: 'Paid',
  },
]

export default function ManagerPayrollPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">Manager Console</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">Payroll</h1>
          <p className="mt-2 text-sm text-slate-600">
            Static payroll summary and pending payouts table used as a placeholder UI.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Current Pending Payouts</p>
            <p className="mt-2 text-2xl font-bold text-amber-600">$9,840</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Last Approved Gross</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">$82,915</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Workers on Payroll</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">42</p>
          </div>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Pay Summary</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Pay Period</th>
                  <th className="px-4 py-3 font-medium">Workers</th>
                  <th className="px-4 py-3 font-medium">Gross</th>
                  <th className="px-4 py-3 font-medium">Pending Payouts</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payRuns.map((run) => (
                  <tr key={run.payPeriod}>
                    <td className="px-4 py-3 text-slate-900">{run.payPeriod}</td>
                    <td className="px-4 py-3 text-slate-700">{run.workers}</td>
                    <td className="px-4 py-3 text-slate-700">{run.gross}</td>
                    <td className="px-4 py-3 text-slate-700">{run.pendingPayouts}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          run.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {run.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
