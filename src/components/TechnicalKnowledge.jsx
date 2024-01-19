export default function TechnicalKnowledge({ data, handleChange }) {
  const { languages, frameworks, databases, tools } = data;

  function getLabelsAndInputs(items, idPrefix, placeholderText) {
    return items.map((item, index) => {
      return (
        <div className="input-container" key={index}>
          <input
            type="text"
            id={`${idPrefix}-${index}`}
            value={item}
            onChange={handleChange}
            placeholder={`${placeholderText} ${index + 1}`}
          />
        </div>
      );
    });
  }

  return (
    <div className="technical-knowledge-container">
      <h2>Technical Knowledge</h2>
      <div>
        <h3>Languages</h3>
        {getLabelsAndInputs(languages, "languages", "language")}
      </div>
      <div>
        <h3>Frameworks</h3>
        {getLabelsAndInputs(frameworks, "frameworks", "framework")}
      </div>
      <div>
        <h3>Databases</h3>
        {getLabelsAndInputs(databases, "databases", "database")}
      </div>
      <div>
        <h3>Tools</h3>
        {getLabelsAndInputs(tools, "tools", "tool")}
      </div>
    </div>
  );
}
