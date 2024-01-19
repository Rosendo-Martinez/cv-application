export default function Project({
  data,
  projectIndex,
  handleChange,
  addBullitPoint,
  deleteBullitPoint,
  deleteProject,
}) {
  const { name, type, bullitPoints } = data;

  return (
    <div className="project">
      <h3>Project {projectIndex + 1}</h3>
      <div className="label-and-input-container">
        <label htmlFor={`${projectIndex}-name`}>Project Name</label>
        <input
          type="text"
          id={`${projectIndex}-name`}
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${projectIndex}-type`}>Project Type</label>
        <input
          type="text"
          id={`${projectIndex}-type`}
          value={type}
          onChange={handleChange}
        />
      </div>
      <div className="bullitpoints-container">
        <p>Bullit Points</p>
        {bullitPoints.map((item, index) => {
          return (
            <div key={index}>
              <div className="bullitpoint">
                <input
                  type="text"
                  id={`${projectIndex}-bullitPoints-${index}`}
                  value={item}
                  onChange={handleChange}
                  placeholder={`bullit point ${index + 1}`}
                />
                <button onClick={() => deleteBullitPoint(projectIndex, index)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <button
          className="add-bullit-point"
          onClick={() => addBullitPoint(projectIndex)}
        >
          Add Bullit Point
        </button>
      </div>
      <button
        className="delete-project"
        onClick={() => deleteProject(projectIndex)}
      >
        Delete Project
      </button>
    </div>
  );
}
