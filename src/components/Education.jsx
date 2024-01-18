export default function Education({
  data,
  educationIndex,
  handleChange,
  deleteEducation,
}) {
  const { name, degree, date } = data;

  return (
    <div>
      <label htmlFor={`${educationIndex}-name`}>College Name:</label>
      <input
        type="text"
        id={`${educationIndex}-name`}
        value={name}
        onChange={handleChange}
      />
      <label htmlFor={`${educationIndex}-degree`}>Degree:</label>
      <input
        type="text"
        id={`${educationIndex}-degree`}
        value={degree}
        onChange={handleChange}
      />
      <label htmlFor={`${educationIndex}-date`}>Date:</label>
      <input
        type="text"
        id={`${educationIndex}-date`}
        value={date}
        onChange={handleChange}
      />
      <button onClick={() => deleteEducation(educationIndex)}>
        Delete Education
      </button>
    </div>
  );
}
