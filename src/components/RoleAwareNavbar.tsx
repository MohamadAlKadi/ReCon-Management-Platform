'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

type Role = 'manager' | 'worker';

function getRole(roleParam: string | null): Role {
  return roleParam === 'worker' ? 'worker' : 'manager';
}

export default function RoleAwareNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const role = getRole(searchParams.get('role'));

  return (
    <>
      <div className="bg-slate-900 px-4 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2">
          <span className="text-slate-300">Demo Role:</span>
          <Link
            href={{ pathname, query: { role: 'manager' } }}
            className={`rounded px-2 py-1 ${
              role === 'manager' ? 'bg-blue-500 text-white' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Manager
          </Link>
          <Link
            href={{ pathname, query: { role: 'worker' } }}
            className={`rounded px-2 py-1 ${
              role === 'worker' ? 'bg-blue-500 text-white' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Worker
          </Link>
        </div>
      </div>
      <Navbar role={role} />
    </>
  );
}
