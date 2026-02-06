'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Role = 'manager' | 'worker';

type NavItem = {
  label: string;
  href: string;
};

const navItemsByRole: Record<Role, NavItem[]> = {
  manager: [
    { label: 'Overview', href: '/dashboard' },
    { label: 'Projects', href: '/projects' },
    { label: 'Team Tasks', href: '/tasks' },
    { label: 'Worker Docs', href: '/documents' },
    { label: 'Payroll', href: '/payroll' },
    { label: 'Assets', href: '/assets' },
  ],
  worker: [
    { label: 'My Dashboard', href: '/dashboard' },
    { label: 'My Tasks', href: '/tasks' },
    { label: 'My Documents', href: '/documents' },
    { label: 'Project Timeline', href: '/projects' },
    { label: 'Assigned Assets', href: '/assets' },
  ],
};

export default function Navbar({ role }: { role: Role }) {
  const pathname = usePathname();
  const navItems = navItemsByRole[role];
  const roleLabel = role === 'manager' ? 'Manager View' : 'Worker View';

  return (
    <nav className="bg-white shadow p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="font-bold text-xl">ReCon</div>
        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
          {roleLabel}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 md:justify-end">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href + item.label}
              href={{ pathname: item.href, query: { role } }}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
