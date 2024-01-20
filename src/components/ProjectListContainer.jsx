export default function ProjectListContainer({
  children,
  addProject,
  toggleShow,
  isOpen,
}) {
  return (
    <div className="project-container">
      <div className="title-and-toggle-show-container">
        <h2>Projects</h2>
        <button onClick={toggleShow}>{isOpen ? "Close" : "Open"}</button>
      </div>
      <div
        className={
          isOpen ? "open-close-container open" : "open-close-container closed"
        }
      >
        {children}
        <button className="add-project" onClick={addProject}>
          Add Project
        </button>
      </div>
    </div>
  );
}
