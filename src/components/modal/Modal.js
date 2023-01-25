import React, { useState } from "react";
import ModalCore from "./ModalCore";
import "./modal.css";

const Modal = ({Titulo, Parrafo, DisplayModal}) => {
  // const [displayModal, setDisplayModal] = useState(false);
  console.log("modal",DisplayModal)
  let displayM = DisplayModal;

  // const toggleModal = (e) => {
  //   e.preventDefault();
  //   display=false
  // };

  return (
    <div className="container">
      {/* <button className="btn" onClick={toggleModal}>
        {NameBtn}
      </button> */}
      <ModalCore display={displayM}>
        <h2>{Titulo}</h2>
        <p>{Parrafo}</p>
      </ModalCore>
    </div>
  );
};

export default Modal;
