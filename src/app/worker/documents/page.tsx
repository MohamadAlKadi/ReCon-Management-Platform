const documents = [
  {
    name: 'General Construction Induction',
    type: 'Certification',
    validUntil: '2026-08-01',
    status: 'Valid',
  },
  {
    name: 'Elevated Work Platform License',
    type: 'License',
    validUntil: '2026-02-18',
    status: 'Expiring Soon',
  },
  {
    name: 'First Aid Certificate',
    type: 'Safety',
    validUntil: '2026-01-22',
    status: 'Expired',
  },
]

const badgeStyles: Record<string, string> = {
  Valid: 'bg-emerald-100 text-emerald-700',
  'Expiring Soon': 'bg-amber-100 text-amber-700',
  Expired: 'bg-rose-100 text-rose-700',
}

export default function WorkerDocumentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">Worker Portal</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">My Documents</h1>
          <p className="mt-2 text-sm text-slate-600">
            Mock compliance document list with static expiry badges until document services are connected.
          </p>
        </header>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Compliance Documents</h2>
          <ul className="mt-4 space-y-3">
            {documents.map((doc) => (
              <li
                key={doc.name}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-medium text-slate-900">{doc.name}</p>
                  <p className="text-sm text-slate-500">{doc.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-slate-600">Valid until: {doc.validUntil}</p>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[doc.status]}`}>
                    {doc.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
