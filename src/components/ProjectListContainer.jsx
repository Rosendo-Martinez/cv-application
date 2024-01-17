export default function ProjectListContainer({ children, addProject }) {
  return (
    <div>
      {children}
      <button onClick={addProject}>Add Project</button>
    </div>
  );
}
