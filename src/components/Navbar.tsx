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
    <nav className="surface-card subtle-gradient sticky top-0 z-10 border-x-0 border-t-0 rounded-none">
      <div className="w-[min(1120px,calc(100%-2rem))] mx-auto py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">ReCon</div>
        <div className="space-x-4 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/tasks" className="hover:text-blue-600">Tasks</Link>
          <Link href="/assets" className="hover:text-blue-600">Assets</Link>
        </div>
      </div>
    </nav>
  );
}
