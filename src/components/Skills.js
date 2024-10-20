import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSelenium } from '@fortawesome/free-brands-svg-icons';

import { 
  faCode, 
  faDatabase, 
  faRobot, // Use this for automation
  faCloud, 
  faChartLine, 
  faTools 
} from '@fortawesome/free-solid-svg-icons';

// Skills Data
const skills = [
  {
    title: "Manual Testing",
    description: "Knowledge of various testing techniques.",
    icon: faTools,
  },
  {
    title: "Automated Testing",
    description: "Hands-on experience with Selenium and JMeter.",
    icon: faRobot, // Changed to faRobot
  },
  {
    title: "Programming Languages",
    description: "Familiar with Java, JavaScript, and Python.",
    icon: faCode,
  },
  {
    title: "Database Management",
    description: "Understanding of SQL and NoSQL databases.",
    icon: faDatabase,
  },
  {
    title: "Cloud Technologies",
    description: "Knowledge of cloud computing concepts.",
    icon: faCloud,
  },
  {
    title: "Data Analysis",
    description: "Experience using Python libraries like Pandas and NumPy.",
    icon: faChartLine,
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} size="3x" className="skill-icon" />
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
