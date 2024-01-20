const emptyCVData = {
  personalDetails: {
    fullName: "",
    title: "",
    location: "",
    phone: "",
    email: "",
    githubURL: "",
    linkedInURL: "",
    headline: "",
  },
  technicalKnowledge: {
    languages: Array(6).fill(""),
    frameworks: Array(6).fill(""),
    databases: Array(3).fill(""),
    tools: Array(3).fill(""),
  },
  projectList: [],
  workList: [],
  educationList: [],
};

export default emptyCVData;
