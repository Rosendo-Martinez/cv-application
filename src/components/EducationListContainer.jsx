export default function EducationListContainer({
  children,
  addEducation,
  toggleShow,
  isOpen,
}) {
  return (
    <div className="education-container">
      <div className="title-and-toggle-show-container">
        <h2>Education</h2>
        <button onClick={toggleShow}>{isOpen ? "Close" : "Open"}</button>
      </div>
      <div
        className={
          isOpen ? "open-close-container open" : "open-close-container closed"
        }
      >
        {children}
        <button className="add-education" onClick={addEducation}>
          Add Education
        </button>
      </div>
    </div>
  );
}
