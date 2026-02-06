import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="font-bold text-xl">ReCon</div>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <Link href="/tasks" className="hover:text-blue-600">Tasks</Link>
        <Link href="/assets" className="hover:text-blue-600">Assets</Link>
      </div>
    </nav>
  )
}
