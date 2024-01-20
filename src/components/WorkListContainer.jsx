export default function WorkListContainer({
  children,
  addWork,
  toggleShow,
  isOpen,
}) {
  return (
    <div className="work-container">
      <div className="title-and-toggle-show-container">
        <h2>Work Experience</h2>
        <button onClick={toggleShow}>{isOpen ? "Close" : "Open"}</button>
      </div>
      <div
        className={
          isOpen ? "open-close-container open" : "open-close-container closed"
        }
      >
        {children}
        <button className="add-work" onClick={addWork}>
          Add Work
        </button>
      </div>
    </div>
  );
}
