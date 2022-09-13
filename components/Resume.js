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
              <h5>2019&nbsp;&minus;&nbsp;Present</h5>
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
              <h4>Full Stack Developer</h4>
              <h5>Aug&apos;21&nbsp;&minus;&nbsp;Present</h5>
              <a
                href="https://twoandhalfdots.com/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <p>
                  <em>Two and Half Dots, Bengaluru</em>
                </p>
              </a>
              <p>
                <p>
                  We are a group of friends, working on creating something new
                  for the world, doing a bit from technical side might help the
                  cause!
                </p>
                Maintained CRUD based website and wrote frontend &amp; backend
                APIs for building travel&minus;based application &minus; React
                js, Django, JavaScript, Bootstrap, Material UI.
              </p>
            </div>
            <div className="resume-item">
              <h4>Web Development Intern</h4>
              <h5>Feb&apos;22&nbsp;&minus;&nbsp;May&apos;22</h5>
              <a
                href="https://whatcode.in/"
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
