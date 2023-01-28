import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.css";
import "./TextoEffect.css";
import avatar from '../images/avatar.svg'

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
        if (arr[i] === " ") {
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

  return (
    <div>
      <div className="chat">
        <div ><img className="avatar" src={avatar} /></div>
        <div className="txtAnimado">{newTexto}<span className="parpadea text">_</span></div>
        
      </div>
    </div>
  );
};

export default TextoEffect;
