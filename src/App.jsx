import { useState, useEffect } from "react";
import PersonalDetails from "./components/PersonalDetails";
import CV from "./components/CV";
import TechnicalKnowledge from "./components/TechnicalKnowledge";
import ProjectListContainer from "./components/ProjectListContainer";
import Project from "./components/Project";
import WorkListContainer from "./components/WorkListContainer";
import Work from "./components/Work";
import EducationListContainer from "./components/EducationListContainer";
import Education from "./components/Education";
import exampleCVData from "./components/exampleCVData";
import Print from "./components/Print";
import emptyCVData from "./components/emptyCVData";
import "./styles/App.css";

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

  const [workList, setWorkList] = useState([]);

  const [educationList, setEducationList] = useState([]);

  const [isShown, setIsShown] = useState({
    personalDetails: true,
    technicalKnowledge: false,
    project: false,
    work: false,
    education: false,
    print: false,
  });

  useEffect(() => {
    loadCVData(exampleCVData);
  }, []);

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

  function loadCVData(cvData) {
    setPersonalDetails(cvData.personalDetails);
    setTechnicalKnowledge(cvData.technicalKnowledge);
    setProjectList(cvData.projectList);
    setWorkList(cvData.workList);
    setEducationList(cvData.educationList);
  }

  return (
    <div id="app">
      <div className="left inputs-container">
        <div className="top-bar">
          <div className="load-cv-data-buttons-container">
            <button onClick={() => loadCVData(exampleCVData)}>
              Load Example CV
            </button>
            <button onClick={() => loadCVData(emptyCVData)}>Clear CV</button>
          </div>
          <button
            onClick={() => {
              setIsShown({ ...isShown, print: !isShown.print });
            }}
            className="print-button"
          >
            Print
          </button>
        </div>
        <PersonalDetails
          data={personalDetails}
          handleChange={handlePersonalDetailsChange}
          toggleShow={() => {
            setIsShown({
              ...isShown,
              personalDetails: !isShown.personalDetails,
            });
          }}
          isOpen={isShown.personalDetails}
        />
        <TechnicalKnowledge
          data={technicalKnowledge}
          handleChange={handleTechnicalKnowledgeChange}
          toggleShow={() => {
            setIsShown({
              ...isShown,
              technicalKnowledge: !isShown.technicalKnowledge,
            });
          }}
          isOpen={isShown.technicalKnowledge}
        />
        <ProjectListContainer
          addProject={() =>
            addItem(projectList, setProjectList, {
              name: "",
              type: "",
              bullitPoints: [],
            })
          }
          toggleShow={() => {
            setIsShown({ ...isShown, project: !isShown.project });
          }}
          isOpen={isShown.project}
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
                deleteProject={(indexOfProject) =>
                  deleteItem(projectList, setProjectList, indexOfProject)
                }
              />
            );
          })}
        </ProjectListContainer>
        <WorkListContainer
          addWork={() =>
            addItem(workList, setWorkList, {
              jobTitle: "",
              companyName: "",
              workPlaceLocation: "",
              startDate: "",
              endDate: "",
              bullitPoints: [],
            })
          }
          toggleShow={() => {
            setIsShown({ ...isShown, work: !isShown.work });
          }}
          isOpen={isShown.work}
        >
          {workList.map((work, index) => {
            return (
              <Work
                key={index}
                workIndex={index}
                data={work}
                handleChange={(event) =>
                  handleItemChange(event, workList, setWorkList)
                }
                addBullitPoint={(indexOfWork) =>
                  addBullitPoint(workList, setWorkList, indexOfWork)
                }
                deleteBullitPoint={(indexOfWork, indexOfBullitPoint) =>
                  deleteBullitPoint(
                    workList,
                    setWorkList,
                    indexOfWork,
                    indexOfBullitPoint,
                  )
                }
                deleteWork={(indexOfWork) =>
                  deleteItem(workList, setWorkList, indexOfWork)
                }
              />
            );
          })}
        </WorkListContainer>
        <EducationListContainer
          addEducation={() =>
            addItem(educationList, setEducationList, {
              name: "",
              degree: "",
              date: "",
            })
          }
          toggleShow={() => {
            setIsShown({ ...isShown, education: !isShown.education });
          }}
          isOpen={isShown.education}
        >
          {educationList.map((education, index) => {
            return (
              <Education
                key={index}
                educationIndex={index}
                data={education}
                handleChange={(event) =>
                  handleItemChange(event, educationList, setEducationList)
                }
                deleteEducation={(indexOfEducation) =>
                  deleteItem(educationList, setEducationList, indexOfEducation)
                }
              />
            );
          })}
        </EducationListContainer>
      </div>
      <div className="right">
        <CV
          personalDetails={personalDetails}
          technicalKnowledge={technicalKnowledge}
          projectList={projectList}
          workList={workList}
          educationList={educationList}
        />
      </div>
      <Print
        toggleModal={() => {
          setIsShown({ ...isShown, print: !isShown.print });
        }}
        isOpen={isShown.print}
      />
    </div>
  );
}

export default App;
