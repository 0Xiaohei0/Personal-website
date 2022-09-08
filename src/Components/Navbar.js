import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--nameContainer">
        <p className="navbar--name">Sicheng Yi</p>
        <p className="navbar--role">Web and game developer</p>
      </div>
      <div className="navbar--linkContainer">
        <a className="navbar--link">About</a>
        <a className="navbar--link">Skills</a>
        <a className="navbar--link">Experience</a>
        <a href="#Projects" className="navbar--link">
          Projects
        </a>
        <a className="navbar--link">Contact</a>
      </div>
    </nav>
  );
}
