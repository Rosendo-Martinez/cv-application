const exampleCVData = {
  personalDetails: {
    fullName: "Rose Blade",
    title: "Jr. Sofware Developer",
    location: "Texas",
    phone: "316-123-4567",
    email: "roseBlade@notreal.com",
    githubURL: "https://github.com/",
    linkedInURL: "https://www.linkedin.com/",
    headline: "A recent bootcamp grad and aspiring fullstack developer.",
  },
  technicalKnowledge: {
    languages: ["JavaScript", "Python", "Java", "C#", "SQL", ""],
    frameworks: ["React", "Express", "Spring", "Rails", "", ""],
    databases: ["MySQL", "MongoDB", "Microsoft Access"],
    tools: ["Git", "NPM", "CLI"],
  },
  projectList: [
    {
      name: "Zomboid",
      type: "Desktop Game",
      bullitPoints: [
        "Over 100,000 downloads on steam!",
        "Used Unity to build the game.",
        "A really cool game.",
      ],
    },
  ],
  workList: [
    {
      jobTitle: "Intern Software Developer",
      companyName: "Google",
      workPlaceLocation: "California",
      startDate: "Oct 2016",
      endDate: "Dec 2016",
      bullitPoints: [
        "Learned alot!",
        "It's Google, need I say more?",
        "COL was too high.",
      ],
    },
    {
      jobTitle: "Fullstack Developer",
      companyName: "G6 Funky",
      workPlaceLocation: "Florida",
      startDate: "Aug 2019",
      endDate: "Dec 2019",
      bullitPoints: ["Yep, it was fullstack.", "Worked directly with the CEO!"],
    },
  ],
  educationList: [
    { name: "MIT", degree: "Masters in Computer Science", date: "2009-2015" },
  ],
};

export default exampleCVData;
