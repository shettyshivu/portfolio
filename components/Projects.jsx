import React from "react";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="title mt-md-5">My Latest Works</div>
        <div className="row my-5 py-md-5 py-0 g-0 box-reverse">
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-out"
          >
            <div
              className="project-box box-border-radius-bottom"
              style={{ borderRadius: "15px 0 0 15px" }}
            >
              <div className="project-name">CS International School </div>
              <div className="project-description">
                A website for the client CS International School, Bengaluru.
              </div>
              <div className="project-button">
                <a
                  href="http://www.csinternationalschool.in/ "
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    className="school"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #72e9f3 -20%, #404de6 120%)",
                    }}
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-in"
          >
            <div
              className="project-img d-flex box-border-radius-top"
              style={{
                borderRadius: "0 15px 15px 0",
                backgroundImage:
                  "linear-gradient(150deg, #c99fff -20%, #4a4eff)",
              }}
            >
              <img src="../school.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row my-5 py-md-3 py-0 g-0">
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-in"
          >
            <div
              className="project-img d-flex box-border-radius-top"
              style={{
                borderRadius: "15px 0 0 15px",
                backgroundImage: "linear-gradient(135deg,#8254e5,#83afe3 150%)",
              }}
            >
              <img src="../travel.png" alt="" className="img-fluid travel" />
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-out"
          >
            <div
              className="project-box box-border-radius-bottom"
              style={{ borderRadius: "0 15px 15px 0" }}
            >
              <div className="project-name">Travel Advisor</div>
              <div className="project-description">
                A Google Maps &amp; Travel Advisor API based application for
                real-time Restaurants, Hotels and Attractions information on
                Maps.
              </div>
              <div className="project-button">
                <a
                  href="https://twoandhalfdots-travel-advisor.netlify.app/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    className="travel-advisor"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg,#8254e5,#83afe3 150%)",
                    }}
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5 py-md-3 py-0 g-0 box-reverse">
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-out"
          >
            <div
              className="project-box box-border-radius-bottom"
              style={{ borderRadius: "15px 0 0 15px" }}
            >
              <div className="project-name">Ticketzy</div>
              <div className="project-description">
                A ticket booking mobile application for intercity travelers,
                Created the website and maintained admin portal for the
                operators.
              </div>
              <div className="project-button">
                <a
                  href="https://ticketzy.twoandhalfdots.com/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    className="ticketzy"
                    style={{
                      backgroundImage:
                        "linear-gradient(225deg,#0abac2,#b2de94)",
                    }}
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            data-aos="zoom-in"
          >
            <div
              className="project-img d-flex box-border-radius-top"
              style={{
                borderRadius: "0 15px 15px 0",
                backgroundImage: "linear-gradient(225deg,#0abac2,#b2de94)",
              }}
            >
              <img
                src="../crisp-works.png"
                alt=""
                className="img-fluid school"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
