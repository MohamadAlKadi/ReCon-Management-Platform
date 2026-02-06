import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    id: 1,
    name: 'Central Plaza Tower',
    company: 'Summit Build Co.',
    description: 'Mixed-use high-rise with phased handover and underground parking.',
  },
  {
    id: 2,
    name: 'Riverside Logistics Hub',
    company: 'Northline Contractors',
    description: 'Distribution facility with office fit-out and loading bays.',
  },
];

export default function Projects() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">Browse active and upcoming construction projects across companies.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="block">
            <ProjectCard name={project.name} companyName={project.company} description={project.description} />
          </Link>
        ))}
      </div>
    </div>
  );
}
