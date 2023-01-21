import { useEffect, useState, useRef } from "react";
import styles from "../styles/navBar.css";
import Styled from "styled-components";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(0);
  const divRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)
  useEffect(() => {
    const div = divRef.current;

    window.addEventListener("scroll", function (e) {
      setPosition(window.pageYOffset);
    });

    if (position === 0) {
      div.style.visibility = "hidden";
    } else {
      div.style.visibility = "";
    }
  }, [position]);

  return (
    <div
      id={styles["nav"]}
      ref={divRef}
      className={`active ${show && "hidden"}`}
    >
      <div className="navbar">
        <div className="nav_logo"> Rafael Pampavilca </div>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#"> INICIO</a>
          <a href="#"> BIO</a>
          <a href="#"> PORTAFOLIO</a>
          <a href="#"> CONTACTO</a>
        </div>
        <div
          className={`nav_toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
