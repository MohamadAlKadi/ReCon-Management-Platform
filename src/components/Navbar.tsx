'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type AppRole = 'manager' | 'worker';

type NavItem = {
  label: string;
  href: string;
};

const navByRole: Record<AppRole, NavItem[]> = {
  manager: [
    { label: 'Overview', href: '/dashboard' },
    { label: 'Projects', href: '/manager/projects' },
    { label: 'Workforce', href: '/manager/workforce' },
    { label: 'Payroll', href: '/manager/payroll' },
    { label: 'Assets', href: '/assets' },
  ],
  worker: [
    { label: 'My Dashboard', href: '/dashboard' },
    { label: 'My Tasks', href: '/worker/tasks' },
    { label: 'Documents', href: '/worker/documents' },
    { label: 'Timeline', href: '/worker/timeline' },
    { label: 'Assigned Assets', href: '/assets' },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentRole = searchParams.get('role') === 'worker' ? 'worker' : 'manager';

  const roleQuery = `?role=${currentRole}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <Link href={`/${roleQuery}`} className="text-xl font-extrabold tracking-tight text-slate-900">
            ReCon
          </Link>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
            {currentRole} view
          </span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {navByRole[currentRole].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={`${item.href}${roleQuery}`}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`${pathname}?role=manager`}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
              currentRole === 'manager'
                ? 'bg-slate-900 text-white'
                : 'border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Manager
          </Link>
          <Link
            href={`${pathname}?role=worker`}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
              currentRole === 'worker'
                ? 'bg-emerald-600 text-white'
                : 'border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Worker
          </Link>
        </div>
      </div>
    </nav>
  );
}
