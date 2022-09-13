import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [show, setShow] = useState(false);
  const [clicked, seClicked] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className={show ? "navbar-mobile navbar pt-4" : "navbar pt-4"}>
      <ul>
        <Link href={"/"}>
          <li onClick={handleClick}>Home</li>
        </Link>
        <Link href={"#about"}>
          <li onClick={handleClick}>About</li>
        </Link>
        <Link href={"#resume"}>
          <li onClick={handleClick}>Resume</li>
        </Link>
        <Link href={"#projects"}>
          <li onClick={handleClick}>projects</li>
        </Link>
      </ul>
      <div className="navbar-button" onClick={handleClick}>
        <FontAwesomeIcon icon={show ? faXmark : faBars} />
      </div>
    </div>
  );
}

export default Navbar;
