function ProjectForm({ title, description, category, setTitle, setDescription, setCategory, handleSubmit }) {
  return (
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
  )
}

export default ProjectForm