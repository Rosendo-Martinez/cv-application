export default function Education({
  data,
  educationIndex,
  handleChange,
  deleteEducation,
}) {
  const { name, degree, date } = data;

  return (
    <div className="school">
      <h3>School {educationIndex + 1}</h3>
      <div className="label-and-input-container">
        <label htmlFor={`${educationIndex}-name`}>College Name</label>
        <input
          type="text"
          id={`${educationIndex}-name`}
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${educationIndex}-degree`}>Degree</label>
        <input
          type="text"
          id={`${educationIndex}-degree`}
          value={degree}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${educationIndex}-date`}>Date</label>
        <input
          type="text"
          id={`${educationIndex}-date`}
          value={date}
          onChange={handleChange}
        />
      </div>
      <button
        className="delete-education"
        onClick={() => deleteEducation(educationIndex)}
      >
        Delete Education
      </button>
    </div>
  );
}
