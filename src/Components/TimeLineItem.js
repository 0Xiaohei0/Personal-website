import React from "react";

export default function TimeLineItem(props) {
  return (
    <li>
      <img alt="institution" className="timeline--image" src={props.imageUrl} />
      <div className="timeline-content">
        <h3 className="date">{props.date}</h3>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </li>
  );
}
