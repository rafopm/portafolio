import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import Reaptcha, { Props as ReaptchaProps } from "reaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import ContactImage from "../images/contact.svg"

export default function ContactPage() {
  const form = useRef();
  const [verified, setVerified] = useState(false);
  //const captchaRef = useRef(null);
  const keyCaptcha = "6LeZhhskAAAAAIzvEKnESpLvWvuAwvRTgOv9bMm2";

  const onVerify = () => {
    setVerified(true);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_fpabh0g",
        "template_5bhppwm",
        form.current,
        "qhsJYavCYwCPl2lGZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <div id="idContacto" className="contactContenedor">
      <div className="contactTitle">
        <p>Contacto</p>
      </div>
      <div className="contactDescription">

      <img src={ContactImage} alt="Imagen de contacto" style={{width: "100%"}}/>
      </div>
      <div className="contactForm">
        {" "}
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <label htmlFor="nombre">
            <div className="lLabel">Nombre:</div>
            <input
              className="formImput"
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre"
              {...register("Nombre", { required: true, maxLength: 80 })}
              aria-invalid={errors.Nombre ? "true" : "false"}
            />
            {errors.Nombre?.type === "required" && (
              <p className="errorInput" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle} /> Nombre
                requerido
              </p>
            )}
          </label>
          <label htmlFor="email">
            <div className="lLabel">Email:</div>
            <input
              className="formImput"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email?.type === "required" && (
              <p className="errorInput" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle} /> Ingrese un
                correo válido
              </p>
            )}
          </label>
          <label htmlFor="telefono">
            <div className="lLabel">Teléfono:</div>
            <input
              className="formImput"
              id="telefono"
              name="telefono"
              type="number"
              placeholder="Teléfono"
              {...register("Telefono", { required: true, maxLength: 18 })}
            />
            {errors.Telefono?.type === "required" && (
              <p className="errorInput" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle} /> Ingrese un
                número telefónico
              </p>
            )}
          </label>
          <label htmlFor="mensaje">
            <div className="lLabel">Mensaje:</div>
            <textarea
              className="formMensaje"
              id="mensaje"
              name="mensaje"
              type="text"
              {...register("Mensaje", { required: true, maxLength: 200 })}
            />
            {errors.Mensaje?.type === "required" && (
              <p className="errorInput" role="alert">
                <FontAwesomeIcon icon={faExclamationTriangle} /> Ingrese un
                mensaje
              </p>
            )}
          </label>
          <div className="captchaForm">
            <Reaptcha
              sitekey="6LdGbxskAAAAAE5wN5qYQkBdy2Uf7Y57cEK4q6GC"
              onVerify={() => {
                setVerified(true);
              }}
            />
          </div>
          <div className="">
            <input type="submit" disabled={!verified} />
          </div>
        </form>
      </div>
    </div>
  );
}
