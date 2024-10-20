import React from 'react';

// Project Data
const projects = [
  {
    title: "Book Store API with Postman:👮",
    description: "Developed a user authentication system using JavaScript and Node.js, featuring user registration, login, and password management. Implemented testing with logs.",
    link: "https://www.postman.com/altimetry-explorer-23850898/workspace/bookstoreapi-demo/documentation/29656285-bef80968-6b6d-43e4-8382-262f96bb6d2d",
    image: "https://cdn.glitch.global/94a7131f-39ee-40d3-88fe-7071630fd895/Capture13.PNG?v=1725351652932", 
  },
  {
    title: "Performance Testing with Apache JMeter🪂",
    description: "Conducted performance testing on a web application using Apache JMeter to test its responsiveness. Simulating multiple users to analyze response times, throughput, and resource usage.",
    mediumLink: "https://medium.com/@kanchiatwar/a-beginner-guide-to-performance-testing-with-apache-jmeter-b9f9d2e2cf9e", 
    image: "https://cdn.glitch.global/94a7131f-39ee-40d3-88fe-7071630fd895/11.PNG?v=1725281874236",
  },
  {
    title: "Java Selenium Exploratory Testing🔍",
    description: "Automated exploratory testing of a Book Search Application using Java and Selenium WebDriver, covering login, search functionality, author verification, and logout processes.",
    link: "https://github.com/Kanch-prog/DemoQA_kan",
    mediumLink: "https://medium.com/@kanchiatwar/understanding-exploratory-testing-a-practical-approach-02ff1b658d4a", 
    image: "https://cdn.glitch.global/94a7131f-39ee-40d3-88fe-7071630fd895/demoqa.PNG?v=1725198646857",
  },
  {
    title: "Test Management Project 🛠️",
    description: "Documented 11 bugs using Jira while testing academybugs.com. This project involved test case management and defect tracking, showcasing skills in issue identification and project organization.",
    link: "https://github.com/Kanch-prog/Test-Management-Project",
    image: "https://cdn.glitch.global/94a7131f-39ee-40d3-88fe-7071630fd895/Capture-test.PNG?v=1725197266205",
  },
  {
    title: "Database Testing 🛢️",
    description: "Database schema and functional testing, focuses on validating the database structure and verifying that CRUD operations function correctly.",
    link: "https://github.com/Kanch-prog/database_testing_classicmodels",
    mediumLink: "https://medium.com/@kanchiatwar/database-schema-testing-ensuring-data-integrity-and-structure-fed29af47097",
    image: "https://cdn.glitch.global/94a7131f-39ee-40d3-88fe-7071630fd895/captht.png?v=1725428957092",
  },
  {
    title: "Automated Testing Framework ⚙️",
    description: "An automated test suite developed using Selenium WebDriver and TestNG for testing the functionality of the Sauce Demo application.",
    link: "https://github.com/Kanch-prog/saucedemo_automation",
    image: "https://cdn.glitch.global/94a7131f-39ee-40d3-88fe-7071630fd895/swaglabs.webp?v=1725199334306",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
              {project.mediumLink && (
                <a href={project.mediumLink} target="_blank" rel="noopener noreferrer">
                  Read on Medium
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
