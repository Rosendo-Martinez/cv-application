export default function Print({ toggleModal, isOpen }) {
  return (
    <div className={isOpen ? "modal-container open" : "modal-container closed"}>
      <div className="modal">
        <h2>Oops, this feature is not available right now.</h2>
        <p>
          But don't fret,{" "}
          <a href="https://docs.google.com/document/d/1XrslPeV-5Vjggu0p2_qFvDS8uXo2gDB2El1Qb4L6c7A/edit">
            here
          </a>{" "}
          is a link to a google doc of the CV that this project's CV is based
          on. <br /> Now just copy and paste!
        </p>
        <button onClick={toggleModal} className="modal-button">
          Close
        </button>
      </div>
    </div>
  );
}
