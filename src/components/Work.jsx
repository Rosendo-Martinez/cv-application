export default function Work({
  data,
  workIndex,
  handleChange,
  addBullitPoint,
  deleteBullitPoint,
  deleteWork,
}) {
  const {
    jobTitle,
    companyName,
    workPlaceLocation,
    startDate,
    endDate,
    bullitPoints,
  } = data;

  return (
    <div>
      <label htmlFor={`${workIndex}-jobTitle`}>Job Title:</label>
      <input
        type="text"
        id={`${workIndex}-jobTitle`}
        value={jobTitle}
        onChange={handleChange}
      />
      <label htmlFor={`${workIndex}-companyName`}>Company Name:</label>
      <input
        type="text"
        id={`${workIndex}-companyName`}
        value={companyName}
        onChange={handleChange}
      />
      <label htmlFor={`${workIndex}-workPlaceLocation`}>
        Work Place Location:
      </label>
      <input
        type="text"
        id={`${workIndex}-workPlaceLocation`}
        value={workPlaceLocation}
        onChange={handleChange}
      />
      <label htmlFor={`${workIndex}-startDate`}>Start Date:</label>
      <input
        type="text"
        id={`${workIndex}-startDate`}
        value={startDate}
        onChange={handleChange}
      />
      <label htmlFor={`${workIndex}-endDate`}>End Date:</label>
      <input
        type="text"
        id={`${workIndex}-endDate`}
        value={endDate}
        onChange={handleChange}
      />
      <div>
        <p>Bullit Points</p>
        {bullitPoints.map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={`${workIndex}-bullitPoints-${index}`}>
                {index + 1}:
              </label>
              <input
                type="text"
                id={`${workIndex}-bullitPoints-${index}`}
                value={item}
                onChange={handleChange}
              />
              <button onClick={() => deleteBullitPoint(workIndex, index)}>
                Delete Bullit Point
              </button>
            </div>
          );
        })}
        <button onClick={() => addBullitPoint(workIndex)}>
          Add Bullit Point
        </button>
      </div>
      <button onClick={() => deleteWork(workIndex)}>Delete Work</button>
    </div>
  );
}
