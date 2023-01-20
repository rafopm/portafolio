import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const slideshow = useRef(null);
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
    <div className="container-slider" ref={slideshow}>
      {dataSlider.map((obj, index) => {
        return (
          <>
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                key={obj.id}
                src={require(`../Slider/img/${obj.image}.jpg`)}
              />
            </div>
          </>
        );
      })}

      <h1 className="sliderTitle">{dataSlider[slideIndex - 1].title}</h1>
      <h1 className="sliderSubTitle">{dataSlider[slideIndex - 1].subTitle}</h1>
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
