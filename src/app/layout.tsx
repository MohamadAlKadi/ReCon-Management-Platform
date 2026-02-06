import './globals.css';
import Navbar from '@/components/Navbar';

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
