import React, { useEffect, useRef } from "react";
import "./modal.css";

const ModalCore = ({ isOpen, close, children }) => {
  const contentRef = useRef();
  const y = window.scrollY;

  useEffect(() => {
 
    if (!isOpen) return;

      function listener(evt) {
        console.log("evt",evt.target)
        if (contentRef.current?.contains(evt.target)) return;
        close();
      }

    //   window.addEventListener("click", listener);
      return () => {
        window.removeEventListener("click", listener);
      };
  }, [isOpen]);

 if (!isOpen) return null;

  return (
    <div className="container" ref={contentRef} >
      <div className="reactModal reactShow" style={{top:y}}>
        <div className="reactModalDialog">
          <button className="reactModalClose" onClick={close}>
            x
          </button>
          <div>{children}</div>
        </div>
        <div className="reactModalOverlay" onClick={close}></div>
      </div>
    </div>
  );
};

export default ModalCore;
