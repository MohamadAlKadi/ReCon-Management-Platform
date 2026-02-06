import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'ReCon - Manpower Management',
  description: 'Construction management SaaS prototype',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">{children}</main>
      </body>
    </html>
  );
}
