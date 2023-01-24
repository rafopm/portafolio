import React from "react";
import "../styles/Footer.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div >
      <br />
      <br />
      <div className="container">
        <div className="copyright">
          <p >
            Copyright &copy; 2023 All Rights Reserved by:
            <a className="enlace" href="#">
              Rafael Pampavilca
            </a>
          </p>
        </div>

        <div>
          <ul className="socialIcons">
            <li>
              <a className="linkedin" href="#">
                <FaLinkedin  />
              </a>
            </li>
            <li>
              <a className="github" href="#">
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
