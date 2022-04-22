import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div class="header-greeting">
            <h2>&lt;Hello&nbsp;&#47;&gt;</h2>
          </div>
          <div class="header-name">I'm Shivaprasad Shetty</div>
          <div class="header-desciption">Full Stack Web Developer</div>
          <div className="lets-talk-button text-center">
              <button>Let's Talk!</button>
          </div>
        </div>
        <div className="header-image">
            <img src="../hero-girl.png" alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default Header;
