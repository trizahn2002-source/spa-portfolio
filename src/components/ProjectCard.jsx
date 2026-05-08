function ProjectCard({ project }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '12px', borderRadius: '8px' }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Category:</strong> {project.category}</p>
    </div>
  )
}

export default ProjectCard