import Link from 'next/link';
import { withRole } from '@/lib/ui-role';

export default function Home() {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/85 p-10 shadow-xl backdrop-blur">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">ReCon Management Platform</p>
      <h1 className="mb-3 text-4xl font-bold text-slate-900">Polished role-based workspace for construction teams</h1>
      <p className="max-w-2xl text-slate-600">
        Switch between manager and worker experiences from the top right to preview tailored dashboards and navigation.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={withRole('/dashboard', 'MANAGER')} className="rounded-full bg-slate-900 px-5 py-2.5 font-medium text-white">
          Enter Manager View
        </Link>
        <Link href={withRole('/dashboard', 'WORKER')} className="rounded-full bg-blue-600 px-5 py-2.5 font-medium text-white">
          Enter Worker View
        </Link>
      </div>
    </div>
  );
}
