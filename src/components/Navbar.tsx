'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { getAppRole, type AppRole, withRole } from '@/lib/ui-role';

const managerLinks = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/projects', label: 'Projects' },
  { href: '/tasks', label: 'Task Board' },
  { href: '/assets', label: 'Workforce & Assets' },
];

const workerLinks = [
  { href: '/dashboard', label: 'My Dashboard' },
  { href: '/my-work', label: 'My Tasks' },
  { href: '/documents', label: 'Documents' },
  { href: '/timeline', label: 'Project Timeline' },
];

function RolePill({ role, currentRole }: { role: AppRole; currentRole: AppRole }) {
  const isActive = role === currentRole;

  return (
    <Link
      href={withRole('/dashboard', role)}
      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
        isActive
          ? 'bg-blue-600 text-white shadow'
          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
      }`}
    >
      {role === 'MANAGER' ? 'Company / Manager' : 'Worker'}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentRole = getAppRole(searchParams.get('role') ?? undefined);
  const links = currentRole === 'MANAGER' ? managerLinks : workerLinks;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">ReCon Platform</p>
          <h1 className="text-xl font-bold text-slate-900">Construction Ops Control Center</h1>
        </div>

        <div className="flex items-center gap-2">
          <RolePill role="MANAGER" currentRole={currentRole} />
          <RolePill role="WORKER" currentRole={currentRole} />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-2 px-4 pb-4">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={withRole(link.href, currentRole)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
