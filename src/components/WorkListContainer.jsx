export default function WorkListContainer({ children, addWork }) {
  return (
    <div className="work-container">
      <h2>Work Experience</h2>
      {children}
      <button className="add-work" onClick={addWork}>
        Add Work
      </button>
    </div>
  );
}
