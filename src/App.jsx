import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CV from "./components/CV";
import TechnicalKnowledge from "./components/TechnicalKnowledge";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    title: "",
    location: "",
    phone: "",
    email: "",
    githubURL: "",
    linkedInURL: "",
    headline: "",
  });

  const [technicalKnowledge, setTechnicalKnowledge] = useState({
    languages: Array(6).fill(""),
    frameworks: Array(6).fill(""),
    databases: Array(3).fill(""),
    tools: Array(3).fill(""),
  });

  function handlePersonalDetailsChange(event) {
    const propertyKey = event.target.id;
    const newPropertyValue = event.target.value;
    setPersonalDetails({ ...personalDetails, [propertyKey]: newPropertyValue });
  }

  function handleTechnicalKnowledgeChange(event) {
    const [key, index] = event.target.id.split("-");
    const item = event.target.value;
    const updatedList = [...technicalKnowledge[key]];
    updatedList[index] = item;
    setTechnicalKnowledge({ ...technicalKnowledge, [key]: updatedList });
  }

  return (
    <>
      <CV
        personalDetails={personalDetails}
        technicalKnowledge={technicalKnowledge}
      />
      <PersonalDetails
        data={personalDetails}
        handleChange={handlePersonalDetailsChange}
      />
      <TechnicalKnowledge
        data={technicalKnowledge}
        handleChange={handleTechnicalKnowledgeChange}
      />
    </>
  );
}

export default App;
