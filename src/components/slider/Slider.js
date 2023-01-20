import React, { useState, useRef, useEffect } from "react";
import SliderData from "./SliderData";
import "../../styles/slider.css";
import styled from 'styled-components';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);
  const slideshow = useRef(null);
  const velocidad="500";

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
    slideshow.current.children[current].style.transition = "opacity .5s";
    slideshow.current.children[current].style.transition = `${velocidad}ms ease-out all`;
    console.log(slideshow.current.children[current].style)
    
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);

  };

  useEffect(() => {


    timeout.current = setTimeout(nextSlide, 4000);
 
    slideshow.current.addEventListener('mouseenter', () => {
      clearTimeout(timeout.current);
    });

    slideshow.current.addEventListener('mouseleave', () => {
        nextSlide();
    });

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, slideshow]);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slideSection" ref={slideshow}>
      {SliderData.map((slide, index) => {
        return (
          <div key={index}>
            <div className="slideItem">
              {index === current && (
                <>
                  <h1>{slide.title}</h1>
                  <img src={require(`../../images/${slide.image}.jpg`)} />
                  <div className="sliderButtons">
                    <button onClick={prevSlide}>Prev</button>
                    <button onClick={nextSlide}>Next</button>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
