import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Float = () => {
  const [onClick, setOnClick] = new useState(false);
  function handleClick() {
    setOnClick(!onClick);
  }
  return (
    <div className="links-container" onClick={handleClick}>
      <a className={"link comments" + (onClick ? " c-transform" : "")}>
        <FontAwesomeIcon icon={faComments} className="icon" />
      </a>
      <a className={"link whatsapp" + (onClick ? " w-transform" : "")} target={"_blank"} rel='noopener noreferrer' href="https://wa.me/919353472940">
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      </a>
      <a className={"link linkedin" + (onClick ? " l-transform" : "")} target={"_blank"} rel='noopener noreferrer' href="https://www.linkedin.com/in/shivaprasad-shetty-790a8a212/">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a className={"link twitter" + (onClick ? " t-transform" : "")} target={"_blank"} rel='noopener noreferrer' href="https://twitter.com/shivapr67928318">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
      <a className={"link instagram" + (onClick ? " i-transform" : "")} target={"_blank"} rel='noopener noreferrer' href="https://www.instagram.com/_shetty_shivu_/">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
    </div>
  );
};

export default Float;
