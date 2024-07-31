import React from "react";
import { FaCode } from "react-icons/fa";
import "../index.css";

// Import placeholder image
import placeholderImage from "../blue 2.jpeg";

const ProjectBox = ({ image, title, text, link, tech }) => {
  // Use placeholder image if no image is provided
  const imageUrl = image ? image : placeholderImage;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link">
      <div className="project-box">
        <div className="project-image-container">
          <img src={imageUrl} alt={title} className="project-image" />
        </div>
        <div className="project-content">
          <div className="project-title">{title}</div>
          <div className="project-text">{text}</div>
          <div className="project-tech">{tech}</div>
        </div>
      </div>
    </a>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="project-container">
      <div className="skills-icon-container">
        <FaCode className="skills-icon" />
      </div>
      <h1 className="about-title">Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
