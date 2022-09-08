import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <a className="Contact--item">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a className="Contact--item">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a className="Contact--item">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
