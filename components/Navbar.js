import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={show ? "navbar-mobile navbar" : "navbar"}>
      <div className="logo">
        <Link href={"/"}>
          <img src="../icon-2.png" alt="" className="img-fluid" />
        </Link>
      </div>
      <ul>
        <Link href={"/"}>
          <li onClick={handleClick}>Home</li>
        </Link>
        <Link href={"#about"}>
          <li  onClick={handleClick}>About</li>
        </Link>
        <Link href={"#resume"}>
          <li onClick={handleClick}>Resume</li>
        </Link>
        <Link href={"#projects"}>
          <li onClick={handleClick}>projects</li>
        </Link>
      </ul>
      <div className="navbar-button" onClick={handleClick}>
        <span className="bar line-1"></span>
        <span className="bar line-2"></span>
        <span className="bar line-3"></span>
      </div>
    </div>
  );
}

export default Navbar;
