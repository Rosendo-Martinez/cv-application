export default function EducationListContainer({ children, addEducation }) {
  return (
    <div>
      {children}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}
