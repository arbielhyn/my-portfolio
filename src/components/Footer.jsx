import React from "react";
import "../index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons library

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <p className="footer-text">Connect with me:</p>
        <div className="social-icons">
          <a
            href="https://github.com/arbielhyn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arbielhyn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-note">
          &copy; 2024 Arbie Lhyn Lacanlale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
