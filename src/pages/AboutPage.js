import React from "react";
import InfiniteLoopSlider from "../components/infinityloop/InfiniteLoopSlider";
import "../styles/About.css";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "React",
  "Redux",
  "Illustrator",
  "CorelDraw",
  "Photoshop",
  "WordPress",
  "Joomla",
  "SQL",
  "MySQL",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

function AboutPage() {
  return (
    <div id="sobreMi">
      <br />
      <div >
        <div className="aboutTitle">
          <p> ACERCA DE MI </p>
        </div>
        <div className="aboutContenedor">
          <div className="aboutDescription">
            <p>
              Soy desarrollador de aplicaciones web. Me apasiona solucionar
              problemas y trabajar con datos.
            </p>
            <p>
              Uso herramientas de diseño gráfico para dar color a las interfaces
              de usuario y también para la impresión en gran formato y
              souvenirs.
            </p>
            <p>
              También tengo amplia experiencia en redes y hardware de
              computadoras.
            </p>
            <p>
              Soy una persona bien organizada, trabajo de forma independiente o
              en grupo.
            </p>
            <p>
              Me gusta leer, ver películas históricas y escuchar música de
              diferente género.
            </p>
          </div>
          <div className="aboutSlider">
            <div className="tag-list">
              {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider
                  key={i}
                  duration={random(DURATION - 5000, DURATION + 5000)}
                  reverse={i % 2}
                >
                  {shuffle(TAGS)
                    .slice(0, TAGS_PER_ROW)
                    .map((tag) => (
                      <div key={tag} className="tag">
                        <span>#</span> {tag}
                      </div>
                    ))}
                </InfiniteLoopSlider>
              ))}
              <div className="fade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
