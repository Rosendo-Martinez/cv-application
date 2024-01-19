export default function EducationListContainer({ children, addEducation }) {
  return (
    <div className="education-container">
      <h2>Education</h2>
      {children}
      <button className="add-education" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
}
