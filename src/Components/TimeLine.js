import React from "react";
import TimeLineItem from "./TimeLineItem";
import TimeLineData from "../Data/TimeLineData";
export default function TimeLine() {
  return (
    <section>
      <h1 className="Timeline--title">Experiences</h1>
      <div class="container">
        <div class="timeline">
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
