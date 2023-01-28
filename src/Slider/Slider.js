import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import TextoEffect from "./TextoEffect";

export default function Slider() {
  const slideshow = useRef(null);
  const slideImg = useRef(null);
  const timeout = useRef(null);

  const [slideIndex, setSlideIndex] = useState(1);

  // repetir con el intervalo de 2 segundos
  let i = 0;
  const timerId = setInterval(() => (i++), 10);

  // después de 5 segundos parar
  setTimeout(() => {
    clearInterval(timerId);

  }, 1000);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);

      slideImg.current.style.opacity = "0.1";
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 4000);

    slideshow.current.addEventListener("mouseenter", () => {
      clearTimeout(timeout.current);
    });

    slideshow.current.addEventListener("mouseleave", () => {
      nextSlide();
    });

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [slideIndex, slideshow]);

  return (
    <>
      <div className="container-slider" ref={slideshow}>
        <div className="backMensaje">
          <TextoEffect value={dataSlider[slideIndex - 1].title}></TextoEffect>
        </div>
        <div ref={slideImg}>
          <img
            className="imageSlider"
            src={require(`../Slider/img/${
              dataSlider[slideIndex - 1].image
            }.jpg`)}
          />
          <img
            className="subImageSlider"
            src={require(`../Slider/img/${
              dataSlider[slideIndex - 1].subimage
            }.svg`)}
            alt="Imágenes de bienvenida"
          />
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </>
  );
}
