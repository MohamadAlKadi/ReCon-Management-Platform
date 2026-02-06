import ProjectCard from '@/components/ProjectCard'
import prisma from '@/lib/prisma'
import Link from 'next/link'

const getProjectStatus = (startDate: Date, endDate: Date | null) => {
  const now = new Date()

  if (endDate && endDate < now) {
    return 'COMPLETED'
  }

  if (startDate > now) {
    return 'UPCOMING'
  }

  return 'ACTIVE'
}

export default async function Projects() {
  const projects = await prisma.project.findMany({
    include: {
      company: true,
      tasks: {
        select: {
          status: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const completedCount = project.tasks.filter(
            (task) => task.status === 'COMPLETED',
          ).length
          const totalCount = project.tasks.length
          const progress = totalCount ? (completedCount / totalCount) * 100 : undefined

          return (
            <Link key={project.id} href={`/projects/${project.id}`} className="block">
              <ProjectCard
                name={project.name}
                companyName={project.company.name}
                status={getProjectStatus(project.startDate, project.endDate)}
                taskSummary={`${completedCount}/${totalCount || 0} completed`}
                progress={progress}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
