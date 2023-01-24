import { useEffect, useState, useRef } from "react";
import styles from "../styles/navBar.css";
import Styled from "styled-components";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(0);
  const divRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="navBar">
        <div className="navLogo"> <a href="#"> Rafael Pampavilca</a> </div>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href="#"> INICIO</a>
          <a href="#sobreMi" > ACERCA DE MI</a>
          <a href="#portafolio" > PORTAFOLIO</a>
          <a href="#idContacto" > CONTACTO</a>
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
