import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="position-relative h-100 header-main-container">
      <div className="header">
        <div className="header-content" data-aos="zoom-out">
          <div className="header-greeting">&lt;Hello&nbsp;&#47;&gt;</div>
          <div className="header-name">I&apos;m Shivaprasad Shetty</div>
          <div className="header-desciption">
            <span>Full Stack</span> Developer
          </div>
          <div className="header-links">
            <a
              href="https://github.com/shettyshivu"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivaprasad-shetty-790a8a212/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://leetcode.com/shivaprasad_shetty/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faJava} />
            </a>
          </div>
          <div className="lets-talk-button">
            <a
              href="mailto:shivaprasadshetty555@gmail.com"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <button>Let&apos;s Talk!</button>
            </a>
          </div>
        </div>
        <div className="header-image" data-aos="zoom-out" data-aos-delay="300">
          <img src="../hero-girl.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Header;
