import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-title">
          <span>About Me</span>
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="row">
            <div className="col-lg-5 col-md-4" data-aos="zoom-in">
              <div className="about-img">
                <img src="../about.jpeg" alt="About Me" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 col-md-8">
              <div className="about-description">
                <div className="row mt-4 mt-md-0">
                  <div className="col-md-6" data-aos="fade-right">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <strong>Name:</strong>
                        <span>Shivaprasad Shetty</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <strong>Degree:</strong>
                        <span>B-Tech</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <strong>Phone:</strong>
                        <a href="tel:9353472940">
                          <span>+91 9353472940</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6" data-aos="fade-left">
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <strong>Profile:</strong>
                        <span>Full Stack Developer</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <strong>Age:</strong>
                        <span>20</span>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <strong>Email:</strong>
                        <span className="email">
                          <a
                            href="mailto:shivaprasadshetty555@gmail.com"
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            shivaprasadshetty555@gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="skills-content" data-aos="zoom-in">
                  <div className="skills-title">Skills</div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress">
                        <div className="skill">
                          React JS
                          <i className="val">80%</i>
                        </div>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div className="skill">
                          Next JS
                          <i className="val">60%</i>
                        </div>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress">
                        <div className="skill">
                          Java
                          <i className="val">75%</i>
                        </div>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div className="skill">
                          Django
                          <i className="val">70%</i>
                        </div>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
