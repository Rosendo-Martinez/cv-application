export default function WorkListContainer({ children, addWork }) {
  return (
    <div>
      {children}
      <button onClick={addWork}>Add Work</button>
    </div>
  );
}
