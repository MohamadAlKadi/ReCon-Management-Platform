interface ProjectCardProps {
  name: string
  companyName: string
}

export default function ProjectCard({ name, companyName }: ProjectCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow hover:bg-gray-50">
      <h2 className="font-bold">{name}</h2>
      <p>{companyName}</p>
    </div>
  )
}
 
