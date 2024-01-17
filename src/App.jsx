import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CV from "./components/CV";
import TechnicalKnowledge from "./components/TechnicalKnowledge";
import ProjectListContainer from "./components/ProjectListContainer";
import Project from "./components/Project";

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

  const [projectList, setProjectList] = useState([]);

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

  function addItem(list, setList, item) {
    const updatedList = [...list];
    updatedList.push(item);
    setList(updatedList);
  }

  function deleteItem(list, setList, indexOfItem) {
    const updatedList = [...list];
    updatedList.splice(indexOfItem, 1);
    setList(updatedList);
  }

  function addBullitPoint(list, setList, indexOfObject) {
    const updatedBullitPoints = [...list[indexOfObject].bullitPoints];
    updatedBullitPoints.push("");
    const updatedObject = {
      ...list[indexOfObject],
      bullitPoints: updatedBullitPoints,
    };
    const updatedList = [...list];
    updatedList[indexOfObject] = updatedObject;
    setList(updatedList);
  }

  function deleteBullitPoint(list, setList, indexOfObject, indexOfBullitPoint) {
    const updatedBullitPoints = [...list[indexOfObject].bullitPoints];
    updatedBullitPoints.splice(indexOfBullitPoint, 1);
    const updatedObject = {
      ...list[indexOfObject],
      bullitPoints: updatedBullitPoints,
    };
    const updatedList = [...list];
    updatedList[indexOfObject] = updatedObject;
    setList(updatedList);
  }

  function handleItemChange(event, list, setList) {
    const [indexOfObject, key, indexOfBullitPoint] = event.target.id.split("-");
    const newValue = event.target.value;
    let updatedObject = null;
    if (key === "bullitPoints") {
      const updatedBullitPoints = [...list[indexOfObject][key]];
      updatedBullitPoints[indexOfBullitPoint] = newValue;
      updatedObject = {
        ...list[indexOfObject],
        [key]: updatedBullitPoints,
      };
    } else {
      updatedObject = { ...list[indexOfObject], [key]: newValue };
    }
    const updatedList = [...list];
    updatedList[indexOfObject] = updatedObject;
    setList(updatedList);
  }

  return (
    <>
      <CV
        personalDetails={personalDetails}
        technicalKnowledge={technicalKnowledge}
        projectList={projectList}
      />
      <PersonalDetails
        data={personalDetails}
        handleChange={handlePersonalDetailsChange}
      />
      <TechnicalKnowledge
        data={technicalKnowledge}
        handleChange={handleTechnicalKnowledgeChange}
      />
      <ProjectListContainer
        addProject={() =>
          addItem(projectList, setProjectList, {
            name: "",
            type: "",
            bullitPoints: [],
          })
        }
      >
        {projectList.map((project, index) => {
          return (
            <Project
              key={index}
              projectIndex={index}
              data={project}
              handleChange={(event) =>
                handleItemChange(event, projectList, setProjectList)
              }
              addBullitPoint={(indexOfProject) =>
                addBullitPoint(projectList, setProjectList, indexOfProject)
              }
              deleteBullitPoint={(indexOfProject, indexOfBullitPoint) =>
                deleteBullitPoint(
                  projectList,
                  setProjectList,
                  indexOfProject,
                  indexOfBullitPoint,
                )
              }
              deleteProject={(indexOfitem) =>
                deleteItem(projectList, setProjectList, indexOfitem)
              }
            />
          );
        })}
      </ProjectListContainer>
    </>
  );
}

export default App;
