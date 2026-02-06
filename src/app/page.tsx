import Link from 'next/link'

export default function Home() {
  return (
    <section className="page-stack">
      <div className="surface-card subtle-gradient p-8 flow-base">
        <p className="section-kicker">Welcome</p>
        <h1>Welcome to ReCon App</h1>
        <p className="text-slate-700">
          Go to your{' '}
          <Link className="text-blue-700 underline" href="/projects">
            Projects
          </Link>{' '}
          to get started.
        </p>
      </div>
    </section>
  )
}
