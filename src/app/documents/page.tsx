import { mockWorkers } from '@/lib/mock-data';

export default async function DocumentsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Worker Documentation</h1>
        <p className="text-slate-600">Visual placeholder for licenses, certifications, and compliance readiness.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockWorkers.map((user) => (
          <article key={user.id} className="rounded-2xl border border-white/60 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{user.name}</h2>
            <p className="text-sm text-slate-500">{user.email}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-slate-100 p-3">
                <p className="text-slate-500">Assigned Tasks</p>
                <p className="text-lg font-bold text-slate-900">{user.tasks}</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-3">
                <p className="text-slate-500">Issued Assets</p>
                <p className="text-lg font-bold text-slate-900">{user.assets}</p>
              </div>
            </div>
            <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">Compliance profile: {user.documentsStatus}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
