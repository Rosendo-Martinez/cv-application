import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CV from "./components/CV";

function App() {
  const [cv, setCV] = useState({
    fullName: "",
    title: "",
    location: "",
    phone: "",
    email: "",
    githubURL: "",
    linkedInURL: "",
    headline: "",
  });

  function handleChange(event) {
    const propertyKey = event.target.id;
    const newPropertyValue = event.target.value;
    setCV({ ...cv, [propertyKey]: newPropertyValue });
  }

  return (
    <>
      <PersonalDetails data={cv} handleChange={handleChange} />
      <CV data={cv} />
    </>
  );
}

export default App;
