import React from "react";
import Github from "../images/github.png";
import Email from "../images/envelope-solid.png";
import Itch from "../images/itch-io.png";
import Link from "../images/linkedin.png";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <a href="https://github.com/0Xiaohei0" className="Contact--item">
        <img alt="externalLinks" className="Contact--icon" src={Github} />
      </a>
      <a href="mailto:s35yi@uwaterloo.ca" className="Contact--item">
        <img alt="externalLinks" className="Contact--icon" src={Email} />
      </a>
      <div className="Contact--nameContainer">
        <p className="navbar--name">Sicheng Yi</p>
        <p className="navbar--role">Web and game developer</p>
      </div>
      <a
        href="https://www.linkedin.com/in/sicheng-yi-6a8256212/"
        className="Contact--item"
      >
        <img alt="externalLinks" className="Contact--icon" src={Link} />
      </a>
      <a href="https://daydreamstudio.itch.io/" className="Contact--item">
        <img alt="externalLinks" className="Contact--icon" src={Itch} />
      </a>
    </div>
  );
}
