import React from "react";

export default function ProjectCard(props) {
  return (
    <a href={props.projectUrl} className="projectCard--container">
      <img
        alt="project cover"
        className="projectCard--image"
        src={props.imageUrl}
      />
      <div className="projectCard--infoContainer">
        <p className="projectCard--name">{props.name}</p>
        <p className="projectCard--description">{props.description}</p>
      </div>
    </a>
  );
}
