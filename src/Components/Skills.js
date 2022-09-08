import React from "react";
import UnityIcon from "../images/Icons/Unity.png";
import Blender from "../images/Icons/Blender.png";
import c from "../images/Icons/C.png";
import Cpp from "../images/Icons/C++.png";
import CSS from "../images/Icons/CSS.png";
import HTML from "../images/Icons/HTML.png";
import Java from "../images/Icons/Java.png";
import JS from "../images/Icons/JS.png";
import Python from "../images/Icons/Python.png";
import Racket from "../images/Icons/Racket.png";
import ReactIcon from "../images/Icons/React.png";
import Spring from "../images/Icons/Spring.png";
import Vue from "../images/Icons/Vue.png";

export default function Skills() {
  return (
    <section id="Skills">
      <h1 className="Skills--title">Skills</h1>
      <p className="Skills--description">
        Languages: C, C++, Java, HTML, CSS, JavaScript, C#, Python, Kotlin,
        Racket.
      </p>
      <p className="Skills--description">
        Technologies: React, Angular, Vue, Spring Boot, Unity, android SDK, Git,
        Blender, Mockito, Fabric.
      </p>
      <div className="Skills--TechIcons">
        <img alt="Technology Icon" className="Skills--icon" src={UnityIcon} />
        <img alt="Technology Icon" className="Skills--icon" src={Blender} />
        <img alt="Technology Icon" className="Skills--icon" src={c} />
        <img alt="Technology Icon" className="Skills--icon" src={Cpp} />
        <img alt="Technology Icon" className="Skills--icon" src={CSS} />
        <img alt="Technology Icon" className="Skills--icon" src={HTML} />
        <img alt="Technology Icon" className="Skills--icon" src={Java} />
        <img alt="Technology Icon" className="Skills--icon" src={JS} />
        <img alt="Technology Icon" className="Skills--icon" src={Python} />
        <img alt="Technology Icon" className="Skills--icon" src={Racket} />
        <img alt="Technology Icon" className="Skills--icon" src={ReactIcon} />
        <img alt="Technology Icon" className="Skills--icon" src={Spring} />
        <img alt="Technology Icon" className="Skills--icon" src={Vue} />
      </div>
    </section>
  );
}
