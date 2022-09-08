import React from "react";
import TimeLineItem from "./TimeLineItem";
import TimeLineData from "../Data/TimeLineData";
export default function TimeLine() {
  return (
    <section id="Experience">
      <h1 className="Timeline--title">Experience</h1>
      <div className="container">
        <div className="timeline">
          <ul>
            {TimeLineData.map((project) => {
              return (
                <TimeLineItem
                  key={project.key}
                  date={project.date}
                  imageUrl={project.imageUrl}
                  name={project.name}
                  description={project.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
