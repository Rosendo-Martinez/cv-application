export default function CV({ personalDetails, technicalKnowledge }) {
  const {
    fullName,
    title,
    location,
    phone,
    email,
    githubURL,
    linkedInURL,
    headline,
  } = personalDetails;

  const { languages, frameworks, databases, tools } = technicalKnowledge;

  return (
    <div>
      <div>
        <h1>{fullName}</h1>
        <p>
          {title} in {location}
        </p>
        <p>
          PHONE {phone} | EMAIL {email}
        </p>
        <p>
          GITHUB {githubURL} | LINKEDIN {linkedInURL}
        </p>
        <p>{headline}</p>
      </div>
      <div>
        <div>
          <p>Languages</p>
          <ul>
            {languages.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <p>Frameworks</p>
          <ul>
            {frameworks.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <p>Databases</p>
          <ul>
            {databases.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div>
          <p>Tools</p>
          <ul>
            {tools.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
