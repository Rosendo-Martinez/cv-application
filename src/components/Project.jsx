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
    <div>
      <label htmlFor={`${projectIndex}-name`}>Project Name:</label>
      <input
        type="text"
        id={`${projectIndex}-name`}
        value={name}
        onChange={handleChange}
      />
      <label htmlFor={`${projectIndex}-type`}>Project Type:</label>
      <input
        type="text"
        id={`${projectIndex}-type`}
        value={type}
        onChange={handleChange}
      />
      <div>
        <p>Bullit Points</p>
        {bullitPoints.map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={`${projectIndex}-bullitPoints-${index}`}>
                {index + 1}:
              </label>
              <input
                type="text"
                id={`${projectIndex}-bullitPoints-${index}`}
                value={item}
                onChange={handleChange}
              />
              <button onClick={() => deleteBullitPoint(projectIndex, index)}>
                Delete Bullit Point
              </button>
            </div>
          );
        })}
        <button onClick={() => addBullitPoint(projectIndex)}>
          Add Bullit Point
        </button>
      </div>
      <button onClick={() => deleteProject(projectIndex)}>
        Delete Project
      </button>
    </div>
  );
}
