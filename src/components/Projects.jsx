import React, { useState } from "react";
import "../index.css";

// Import placeholder image
import placeholderImage from "../blue 2.jpeg";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2>{project.title}</h2>
        </div>
        <div className="modal-body">
          <img src={project.image || placeholderImage} alt={project.title} />
          <p>{project.text}</p>
          <p>
            <strong>Technologies:</strong> {project.tech}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectBox = ({ project, onClick }) => {
  const imageUrl = project.image ? project.image : placeholderImage;

  return (
    <div className="project-box" onClick={() => onClick(project)}>
      <div className="project-image-container">
        <img src={imageUrl} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <div className="project-title">{project.title}</div>
        <div className="project-text">{project.text}</div>
        <div className="project-tech">{project.tech}</div>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container">
      <h1 className="about-title">Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
};

export default Projects;
