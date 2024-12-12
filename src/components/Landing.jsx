import React from "react";
import aboutImage from "../assets/assets/arbie.jpeg"; // Import your image
import { FaLinkedin, FaDownload } from "react-icons/fa"; // Import LinkedIn and Download icons
import "../index.css"; // Import your custom CSS file
import resumeUrl from "../assets/assets/ArbieLacanlale-Resume.pdf";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 about-container">
        <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left about-text">
          <h1 className="text-4xl font-bold mb-4">Arbie Lhyn Lacanlale</h1>
          <h3>Web Designer / Developer</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* Resume Link with Download Icon */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
              download>
              <FaDownload /> Resume
            </a>
            {/* LinkedIn Link with LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/arbielhyn"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <img src={aboutImage} alt="About" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
