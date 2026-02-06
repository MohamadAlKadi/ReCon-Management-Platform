import Link from 'next/link'

export default function Navbar() {
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
  )
}
