import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Styled from "styled-components";
import "../styles/navBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState(0);
  const divRef = useRef();

  useEffect(() => {
    const div = divRef.current;

    window.addEventListener("scroll", function (e) {
      setPosition(window.pageYOffset);
    });

    if (position === 0) {
      div.style.top = "-100px";
    } else {
      div.style.top = "0px";
    }
  }, [position]);

  return (
    <Navbar
      ref={divRef}
      className={`active ${show && "hidden"}`}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
      <Nav.Link href="#home"><div className="nombreAutor">Rafael Pampavilca</div></Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
