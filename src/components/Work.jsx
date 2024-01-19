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
    <div className="work">
      <h3>Job {workIndex + 1}</h3>
      <div className="label-and-input-container">
        <label htmlFor={`${workIndex}-jobTitle`}>Job Title</label>
        <input
          type="text"
          id={`${workIndex}-jobTitle`}
          value={jobTitle}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${workIndex}-companyName`}>Company Name</label>
        <input
          type="text"
          id={`${workIndex}-companyName`}
          value={companyName}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${workIndex}-workPlaceLocation`}>
          Work Place Location
        </label>
        <input
          type="text"
          id={`${workIndex}-workPlaceLocation`}
          value={workPlaceLocation}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${workIndex}-startDate`}>Start Date</label>
        <input
          type="text"
          id={`${workIndex}-startDate`}
          value={startDate}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor={`${workIndex}-endDate`}>End Date</label>
        <input
          type="text"
          id={`${workIndex}-endDate`}
          value={endDate}
          onChange={handleChange}
        />
      </div>
      <div className="bullitpoints-container">
        <p>Bullit Points</p>
        {bullitPoints.map((item, index) => {
          return (
            <div className="bullitpoint" key={index}>
              <input
                type="text"
                id={`${workIndex}-bullitPoints-${index}`}
                value={item}
                onChange={handleChange}
                placeholder={`bullit point ${index + 1}`}
              />
              <button onClick={() => deleteBullitPoint(workIndex, index)}>
                Delete
              </button>
            </div>
          );
        })}
        <button
          className="add-bullit-point"
          onClick={() => addBullitPoint(workIndex)}
        >
          Add Bullit Point
        </button>
      </div>
      <button className="delete-work" onClick={() => deleteWork(workIndex)}>
        Delete Work
      </button>
    </div>
  );
}
