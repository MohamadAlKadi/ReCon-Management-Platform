import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'ReCon - Manpower Management',
  description: 'Construction management SaaS prototype',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-slate-900">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
