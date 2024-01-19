export default function ProjectListContainer({ children, addProject }) {
  return (
    <div className="project-container">
      <h2>Projects</h2>
      {children}
      <button className="add-project" onClick={addProject}>
        Add Project
      </button>
    </div>
  );
}
