import { Suspense } from 'react';
import './globals.css';
import RoleAwareNavbar from '@/components/RoleAwareNavbar';

export const metadata = {
  title: 'ReCon - Manpower Management',
  description: 'Construction management SaaS prototype',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <Suspense fallback={null}>
          <RoleAwareNavbar />
        </Suspense>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
