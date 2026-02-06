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
      <body className="min-h-screen">
        <Navbar />
        <main className="page-shell page-stack">{children}</main>
      </body>
    </html>
  );
}
