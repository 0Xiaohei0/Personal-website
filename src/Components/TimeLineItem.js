import React from "react";

export default function TimeLineItem(props) {
  return (
    <li key={props.key}>
      <img alt="institution" class="timeline--image" src={props.imageUrl} />
      <div class="timeline-content">
        <h3 class="date">{props.date}</h3>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </li>
  );
}
