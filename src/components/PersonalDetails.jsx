export default function PersonalDetails({ data, handleChange }) {
  const {
    fullName,
    title,
    location,
    phone,
    email,
    githubURL,
    linkedInURL,
    headline,
  } = data;

  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>
      <div className="label-and-input-container">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={handleChange} />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" value={phone} onChange={handleChange} />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={handleChange} />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="githubURL">Github</label>
        <input
          type="text"
          id="githubURL"
          value={githubURL}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="linkedInURL">LinkedIn</label>
        <input
          type="text"
          id="linkedInURL"
          value={linkedInURL}
          onChange={handleChange}
        />
      </div>
      <div className="label-and-input-container">
        <label htmlFor="headline">Headline</label>
        <textarea id="headline" value={headline} onChange={handleChange} />
      </div>
    </div>
  );
}
