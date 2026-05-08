import { useState } from 'react'

const initialProjects = [
  { id: 1, title: 'Portfolio Website', description: 'A personal portfolio built with React.', category: 'React' },
  { id: 2, title: 'Weather App', description: 'A weather app using OpenWeather API.', category: 'JavaScript' },
  { id: 3, title: 'Todo List', description: 'A simple todo list application.', category: 'React' },
]

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    const newProject = { id: Date.now(), title, description, category }
    setProjects([...projects, newProject])
    setTitle('')
    setDescription('')
    setCategory('')
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>My Portfolio</h1>

      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
      />

      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
        />
        <button type="submit">Add Project</button>
      </form>

      <h2>Projects</h2>
      <div>
        {filteredProjects.map(project => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '12px', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Category:</strong> {project.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App