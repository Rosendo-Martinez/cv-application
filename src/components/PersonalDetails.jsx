export default function PersonalDetails({ data, handleChange }) {
  const {
    fullname,
    title,
    location,
    phone,
    email,
    githubURL,
    linkedInURL,
    headline,
  } = data;

  return (
    <div>
      <label htmlFor="fullName">Full name:</label>
      <input
        type="text"
        id="fullName"
        value={fullname}
        onChange={handleChange}
      />
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={handleChange} />
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" value={phone} onChange={handleChange} />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={handleChange} />
      <label htmlFor="githubURL">Github:</label>
      <input
        type="text"
        id="githubURL"
        value={githubURL}
        onChange={handleChange}
      />
      <label htmlFor="linkedInURL">LinkedIn:</label>
      <input
        type="text"
        id="linkedInURL"
        value={linkedInURL}
        onChange={handleChange}
      />
      <label htmlFor="headline">Headline:</label>
      <textarea id="headline" value={headline} onChange={handleChange} />
    </div>
  );
}
