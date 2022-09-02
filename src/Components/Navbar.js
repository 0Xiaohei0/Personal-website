import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--nameContainer">
        <p className="navbar--name">Sicheng Yi</p>
        <p className="navbar--role">Web and game developer</p>
      </div>
      <div className="navbar--linkContainer">
        <button className="navbar--link">About</button>
        <button className="navbar--link">Skills</button>
        <button className="navbar--link">Experience</button>
        <button className="navbar--link">Projects</button>
        <button className="navbar--link">Contact</button>
      </div>
    </nav>
  );
}
