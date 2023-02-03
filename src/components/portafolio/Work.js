import React from "react";
import PropTypes from "prop-types";

import "./work.css";

function Work({ imageSource, title, text, url, category, tools }) {
  return (
    <div className="cardWork">
      <div className="card">
        <div className="cardInfo">
          <div className="cardInfoText">
            <h2>{category}</h2>
            <p>Herramientas: </p>
            <h4>{tools}</h4>
            <br /><br />
            {/* <p>Ir a la web de: </p> */}
            <h4>
            <a
              href={url ? url : "#!"}
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
               DEMO
            </a>
            </h4>
          </div>
        </div>
        <img src={imageSource} alt="miniatura de la aplicación" />
        <div className="cardAbout">
          <h2 className="titleCard">{title}</h2>
          <p className="work-text">
            {text
              ? text
              : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
          </p>
        </div>
      </div>
    </div>
  );
}

Work.propTypes = {
  imageSource: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  category: PropTypes.string,
  tools: PropTypes.string,
};

export default Work;
