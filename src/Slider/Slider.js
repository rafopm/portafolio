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


  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);

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
        
          <TextoEffect value={dataSlider[slideIndex - 1].title}></TextoEffect>
          <img
            className="imageSlider"
            src={require(`../Slider/img/${
              dataSlider[slideIndex - 1].image
            }.png`)}
          />
          {/* <img
            className="subImageSlider"
            src={require(`../Slider/img/${
              dataSlider[slideIndex - 1].subimage
            }.svg`)}
            alt="Imágenes de bienvenida"
          /> */}
        
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </>
  );
}
