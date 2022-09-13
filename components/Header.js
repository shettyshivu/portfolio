import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import {
  faGithub,
  faLinkedin,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="position-relative h-100 header-main-container" id="home">
      <div className="header">
        <Navbar />
        <div className="header-content" data-aos="zoom-out">
          <div className="header-greeting">&lt;Hello&nbsp;&#47;&gt;</div>
          <div className="header-name">I&apos;m Shivaprasad Shetty</div>
          <div className="header-desciption">
            <span>Full Stack</span> Developer
          </div>
          <div className="header-links">
            <Tooltip title="GitHub" arrow>
              <a
                href="https://github.com/shettyshivu"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow={true}>
              <a
                href="https://www.linkedin.com/in/shivaprasad-shetty-790a8a212/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Tooltip>
            <Tooltip title="LeetCode" arrow>
              <a
                href="https://leetcode.com/shivaprasad_shetty/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faJava} />
              </a>
            </Tooltip>
            <Tooltip title="Resume" arrow>
              <a
                href="https://drive.google.com/file/d/110YkxKGMONIw-0O6IsqtlOw9dJS6CEoN/view"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
            </Tooltip>
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
