import "../styles/CV.css";

export default function CV({
  personalDetails,
  technicalKnowledge,
  projectList,
  workList,
  educationList,
}) {
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
    <div className="cv">
      <div className="personal-details">
        <h1>{fullName}</h1>
        <h2 id="location">
          <span className="title">{title}</span> in {location}
        </h2>
        <p id="phone-and-email">
          <b>PHONE</b> {phone} | <b>EMAIL</b> {email}
        </p>
        <p id="github-and-linkedIn">
          <b>GITHUB</b> {githubURL} | <b>LINKEDIN</b> {linkedInURL}
        </p>
        <p id="headline">{headline}</p>
      </div>
      <div className="technical-knowledge">
        <div className="languages">
          <h3>Languages</h3>
          <ul>
            {languages.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="frameworks">
          <h3>Frameworks</h3>
          <ul>
            {frameworks.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="databases">
          <h3>Databases</h3>
          <ul>
            {databases.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="tools">
          <h3>Tools</h3>
          <ul>
            {tools.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="projects">
        <h2 className="section-header">Project Experience</h2>
        {projectList.map((project, index) => {
          return (
            <div className="project" key={index}>
              <h3>
                {project.name} -{" "}
                <span className="no-styling">{project.type}</span>
              </h3>
              <ul>
                {project.bullitPoints.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="jobs">
        <h2 className="section-header">Work</h2>
        {workList.map((work, index) => {
          return (
            <div key={index}>
              <h3>
                {work.jobTitle}
                <span className="no-styling">, {work.companyName},</span>{" "}
                <span className="no-styling small-font">
                  {work.workPlaceLocation}, {work.startDate} - {work.endDate}
                </span>
              </h3>
              <ul>
                {work.bullitPoints.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="schools">
        <h2 className="section-header">Education</h2>
        {educationList.map((education, index) => {
          return (
            <h3 key={index}>
              {education.name}
              <span className="no-styling">
                , {education.degree},{" "}
                <span className="small-font">{education.date}</span>
              </span>
            </h3>
          );
        })}
      </div>
    </div>
  );
}
