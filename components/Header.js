import React from "react";

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
          <div className="lets-talk-button">
            <button>Let&apos;s Talk!</button>
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
