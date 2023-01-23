import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();

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

    e.target.reset();
  };

  return (
    <div className="contactContenedor">
      <div className="contactDescription"></div>
      <div className="contactForm">
        {" "}
        <form ref={form} onSubmit={sendEmail}>
          <label className="lLabel" htmlFor="nombre">
            <div>Nombre:</div>
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
              <p role="alert">Nombre requerido</p>
            )}
          </label>
          <label className="lLabel" htmlFor="email">
            <div>Email:</div>
            <input
              className="formImput"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          <label className="lLabel" htmlFor="telefono">
            <div>Teléfono:</div>
            <input
              className="formImput"
              id="telefono"
              name="telefono"
              type="number"
              placeholder="Teléfono"
              {...register("Teléfono", { required: true, maxLength: 18 })}
            />
          </label>
          <label className="lLabel" htmlFor="mensaje">
            <div>Mensaje:</div>
            <textarea
              className="formMensaje"
              {...register("Mensaje", { required: true, maxLength: 200 })}
            />
          </label>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
