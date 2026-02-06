'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const navByRole = {
  manager: [
    { label: 'Overview', href: '/manager' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tasks', href: '/tasks' },
    { label: 'Assets', href: '/assets' },
  ],
  worker: [
    { label: 'Overview', href: '/worker' },
    { label: 'My Tasks', href: '/worker/tasks' },
    { label: 'Documents', href: '/worker/documents' },
    { label: 'Timeline', href: '/worker/timeline' },
  ],
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') === 'worker' ? 'worker' : 'manager';
  const links = navByRole[role];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          ReCon Platform
        </Link>

        <div className="inline-flex rounded-lg bg-slate-100 p-1 text-sm">
          <Link
            href="?role=manager"
            className={`rounded-md px-3 py-1.5 font-medium transition ${
              role === 'manager' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Company / Manager
          </Link>
          <Link
            href="?role=worker"
            className={`rounded-md px-3 py-1.5 font-medium transition ${
              role === 'worker' ? 'bg-white text-slate-900 shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Worker
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={`${item.href}?role=${role}`}
                className={`rounded-md px-3 py-1.5 font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
