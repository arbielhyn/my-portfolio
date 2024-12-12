import React, { useState } from "react";
import { FiUser, FiBook, FiBriefcase } from "react-icons/fi"; // Import icons
import "../index.css"; // Import your custom styles
import logo from "../assets/assets/red-river-logo.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("about"); // State to track active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="me-content">
            <p>
              Hello! I'm Arbie, my journey into web development started with a
              curiosity for how websites are built and has grown into a
              full-fledged passion for coding and problem-solving. I'm always
              eager to learn new skills and take on new challenges.
            </p>
            <p>
              When I'm not coding, I'm off on adventures! I love traveling to
              new places and blending in with the locals. I'm also a big fan of
              trying out new hobbies and diving headfirst into them. Right now,
              I'm all about rock climbing/bouldering.
            </p>
          </div>
        );
      case "education":
        return (
          <div>
            <div className="education-content">
              <h4>
                <img
                  src={logo}
                  alt="Red River College Logo"
                  className="college-logo"
                />
                <a
                  href="https://www.rrc.ca"
                  target="_blank"
                  rel="noopener noreferrer">
                  Red River Polytechnic College - Full Stack Web Development
                </a>
              </h4>
              <p>
                Gained expertise in front-end and back-end development,
                including JavaScript, React, Ruby on Rails, and Python.
                Collaborated with teams to build responsive and dynamic
                applications.
              </p>
            </div>
            <div className="education-content">
              <h4>
                <img
                  src={logo}
                  alt="Red River College Logo"
                  className="college-logo"
                />
                <a
                  href="https://www.rrc.ca"
                  target="_blank"
                  rel="noopener noreferrer">
                  Red River Polytechnic College - Business Administration
                </a>
              </h4>
              <p>
                Gained expertise in front-end and back-end development,
                including JavaScript, React, Ruby on Rails, and Python.
                Collaborated with teams to build responsive and dynamic
                applications.
              </p>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="skills-container">
            <h4>Technology</h4>
            <div className="skills-buttons">
              <button className="skill-button">HTML</button>
              <button className="skill-button">CSS</button>
              <button className="skill-button">JavaScript</button>
              <button className="skill-button">React</button>
              <button className="skill-button">PHP</button>
              <button className="skill-button">Ruby</button>
              <button className="skill-button">SQL</button>
              <button className="skill-button">Python</button>
            </div>
            <p className="skills-description"></p>

            <h4>Design Software</h4>
            <div className="skills-buttons">
              <button className="skill-button">Figma</button>
              <button className="skill-button">Photoshop</button>
              <button className="skill-button">Illustrator</button>
              <button className="skill-button">In Design</button>
              <button className="skill-button">Premiere</button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      {/* Navigation Tabs */}
      <div className="tab-navigation">
        <button
          className={`tab-button ${activeTab === "about" ? "active" : ""}`}
          onClick={() => handleTabClick("about")}>
          <FiUser /> About Me
        </button>
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => handleTabClick("education")}>
          <FiBook /> Education
        </button>
        <button
          className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => handleTabClick("skills")}>
          <FiBriefcase /> Skills
        </button>
      </div>
      {/* Content goes here */}
      <div className="tab-content">
        {renderContent()}{" "}
        {/* This dynamically renders the content based on the active tab */}
      </div>
    </div>
  );
};

export default About;
