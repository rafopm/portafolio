import React from "react";
import { Slideshow, Slide, TextoSlide } from "./Slideshow";
import "../styles/SliderS.css";
import styled from "styled-components";
import img1 from "../images/r-code-slider-one.jpg";
import img2 from "../images/r-code-slider-two.jpg";
import img3 from "../images/r-code-slider-three.jpg";

const SliderS = () => {
  return (
    <main>
      <Slideshow
        controles={true}
        autoplay={true}
        velocidad="7000"
        intervalo="500"
      >
        <Slide>
          <img src={img1} alt="" />

          <TextoSlide colorFondo="navy">
            <p>15% descuento en productos Apple</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <img src={img2} alt="" />

          <TextoSlide>
            <p>15% descuento en productos Apple</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <img src={img3} alt="" />

          <TextoSlide>
            <p>15% descuento en productos Apple</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
};

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export default SliderS;
