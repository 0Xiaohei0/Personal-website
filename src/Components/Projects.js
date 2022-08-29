import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../Data/ProjectData";

export default function Projects() {
  return (
    <section>
      <h1 className="projects--title">Projects</h1>
      <div className="projects--container">
        {ProjectData.map((project) => {
          return (
            <ProjectCard
              key={project.key}
              imageUrl={project.imageUrl}
              name={project.name}
              description={project.description}
              projectUrl={project.projectUrl}
            />
          );
        })}
      </div>
    </section>
  );
}
