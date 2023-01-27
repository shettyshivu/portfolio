import React from "react";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="container">
        <div className="section-title">
          <h2>MY RESUME</h2>
          <span>MY RESUME</span>
        </div>
        <div className="row">
          <div className="col-md-6" data-aos="zoom-out">
            <div className="resume-title">Summary</div>
            <div className="resume-item">
              <h4>Shivaprasad</h4>
              <p>
                I&apos;m a full stack developer having serious passion for
                creating fully functional web applications with intuitive user
                interface.
              </p>
            </div>
            <div className="resume-title">Education</div>
            <div className="resume-item">
              <h4>Computer Science Engineering </h4>
              <h5>2019&nbsp;&minus;&nbsp;2023</h5>
              <p>
                <em>
                  University Visvesvaraya College of Engineering, Bengaluru
                </em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary Education</h4>
              <h5>2017&nbsp;&minus;&nbsp;2019</h5>
              <p>
                <em>Jawahar Navodaya Vidyalaya, Udupi</em>
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in">
            <div className="resume-title">Professional Experience</div>
            <div className="resume-item">
              <h4>Software Developer Intern</h4>
              <h5>Oct&apos;22&nbsp;&minus;&nbsp;Dec&apos;22</h5>
              <a
                href="https://drive.google.com/file/d/1yvr98pt8MGtK_8sescIlYsfnMvcrJ4Qp/view?usp=sharing"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <p>
                  <em>Taskmonk, Bengaluru</em>
                </p>
              </a>
              <p>
                Developing new UI components using Reactjs and Storybook for all
                Taskmonk products.
              </p>
              <p>
                Resolved multiple issues in Taskmonk data labeling platform.
              </p>
            </div>
            <div className="resume-item">
              <h4>Web Development Intern</h4>
              <h5>Feb&apos;22&nbsp;&minus;&nbsp;May&apos;22</h5>
              <a
                href="https://drive.google.com/file/d/1royi6dpm7pCm_1E710gg3kgPHaBvU0Et/view?usp=sharing"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <p>
                  <em>WhatCode, Mumbai </em>
                </p>
              </a>
              <p>
                Implemented fully responsive front&minus;end web application
                &minus; React js, Next js, Bootstrap, SCSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
