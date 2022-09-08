import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--nameContainer">
        <p className="navbar--name">Sicheng Yi</p>
        <p className="navbar--role">Web and game developer</p>
      </div>
      <div className="navbar--linkContainer">
        <Link
          className="navbar--link"
          to="About"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className="navbar--link"
          to="Skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="navbar--link"
          to="Experience"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="navbar--link"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="navbar--link"
          to="Contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
