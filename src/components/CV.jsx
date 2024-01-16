export default function CV({ data }) {
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
    <div>
      <h1>{fullName}</h1>
      <p>
        {title} in {location}
      </p>
      <p>
        PHONE {phone} | EMAIL {email}
      </p>
      <p>
        GITHUB {githubURL} | LINKEDIN {linkedInURL}
      </p>
      <p>{headline}</p>
    </div>
  );
}
