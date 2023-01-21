import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.css";

const TextoEffect = ({ value }) => {
  const [newTexto, setNewTexto] = useState("");
  const newValue = value;

  useEffect(() => {
    const arr = newValue.split("");
    let i = 0;
    let temporal = "";
    const intervalo = setInterval(() => {
      //Inicia revisando el último
      if (i === arr.length - 1) {
        temporal += arr[i];
        setNewTexto(temporal);
        clearInterval(intervalo);
      } else {
        if (arr[i] == " ") {
          temporal += arr[i];
          setNewTexto(temporal);
          i++;
          if (!(i === arr.length - 1)) {
            temporal += arr[i];
            setNewTexto(temporal);
            i++;
          }
        } else {
          temporal += arr[i];
          setNewTexto(temporal);
          i++;
        }
      }
    }, 100);
    return () => clearInterval(intervalo);
  }, [newValue]);

  return <div className="sliderTitle">{newTexto}</div>;
};

export default TextoEffect;
