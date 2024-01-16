export default function TechnicalKnowledge({ data, handleChange }) {
  const { languages, frameworks, databases, tools } = data;

  function getLabelsAndInputs(items, idPrefix) {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <label htmlFor={`${idPrefix}-${index}`}>{index + 1}:</label>
          <input
            type="text"
            id={`${idPrefix}-${index}`}
            value={item}
            onChange={handleChange}
          />
        </div>
      );
    });
  }

  return (
    <div>
      <div>
        <p>Languages</p>
        {getLabelsAndInputs(languages, "languages")}
      </div>
      <div>
        <p>Frameworks</p>
        {getLabelsAndInputs(frameworks, "frameworks")}
      </div>
      <div>
        <p>Databases</p>
        {getLabelsAndInputs(databases, "databases")}
      </div>
      <div>
        <p>Tools</p>
        {getLabelsAndInputs(tools, "tools")}
      </div>
    </div>
  );
}
