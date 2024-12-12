import React from "react";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <a
          href="#landing"
          onClick={(e) => scrollToSection(e, "about")}
          className="navbar-link">
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, "projects")}
          className="navbar-link">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
