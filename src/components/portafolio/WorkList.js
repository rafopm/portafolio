import React from "react";
import Work from "./Work";

import image1 from "../../images/work/image1.png";
import image2 from "../../images/work/image2.png";
import image3 from "../../images/work/image3.png";

const works = [
  {
    id: 1,
    title: "Rick & Morty",
    image: image1,
    text: "Aplicación que usa la Api Rick & Morty y muestra cartas de los personajes. Muestra un color de ícono dependiendo de si están vivos o muertos.",
    url: "https://ricks-mortys.netlify.app/",
    category: "Aplicación web",
    tools: "HTML5, CSS, React, Api React & Morty",
  },
  {
    id: 2,
    title: "Encryptor",
    image: image2,
    text: "Encripta texto para enviarlo a través de algún servicio de mensajería, el receptor debe usar la aplicación para desencriptar el mensaje.",
    url: "https://encriptador-texto-react.netlify.app/",
    category: "Aplicación web",
    tools: "HTML5, CSS, React, JavaScript",
  },
  {
    id: 3,
    title: "Calculadora",
    image: image3,
    text: "Calculadora básica: realiza operaciones de suma, resta, multiplicación y división",
    url: "https://calculadora-ora.netlify.app/",
    category: "Aplicación web",
    tools: "HTML5, CSS, React",
  },
];

function WorkList() {
  return (
    <div id="portafolio">
      <div>
        <br /> 
      </div>
      <div className="workTitle">
          <p>PORTAFOLIO</p>
        </div>
      <div className="containerWork">

        <div className="workList">
          {works.map(({ title, image, text, url, id, category, tools }) => (
            <div className="work" key={id}>
              <Work
                imageSource={image}
                title={title}
                url={url}
                text={text}
                category={category}
                tools={tools}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkList;
