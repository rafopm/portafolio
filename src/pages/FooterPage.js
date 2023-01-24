import React from "react";
import "../styles/Footer.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="copyright">
          <p>
            Copyright &copy; 2023 All Rights Reserved by:
            <a className="enlace" href="#">
              Rafael Pampavilca
            </a>
          </p>
        </div>

        <div>
          <ul className="socialIcons">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/rafael-pampavilca/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/rafopm"
                target="_blank"
                rel="noreferrer"
              >
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
