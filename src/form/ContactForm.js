import React, { useState } from "react";
import {
  Formulario,
  Label,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  Contenedor,
  ColForm,
  ColRedes,
  ContactTitle,
} from "./Elementos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import ContactImage from "../images/contact.svg"

const ContactForm = () => {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    mensaje: /^[A-Za-z0-9\s]+$/g,
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.valido === "true" &&
      nombre.valido === "true" &&
      correo.valido === "true" &&
      telefono.valido === "true"
    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: "", valido: "" });
      cambiarNombre({ campo: "", valido: null });
      cambiarCorreo({ campo: "", valido: null });
      cambiarTelefono({ campo: "", valido: null });

      // ...
    } else {
      cambiarFormularioValido(false);
    }
  };

  return (
    <Contenedor>
      <ContactTitle>Conctacto</ContactTitle>
      <ColRedes>
      <img src={ContactImage} alt="Imagen de contacto" style={{width: "100%"}}/>
      </ColRedes>
      <ColForm>
        <Formulario action="" onSubmit={onSubmit}>
          <Input
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="John Doe"
            name="usuario"
            leyendaError="El nombre solo puede contener letras y espacios."
            expresionRegular={expresiones.nombre}
          />
          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            placeholder="john@correo.com"
            name="correo"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label="Teléfono"
            placeholder="4491234567"
            name="telefono"
            leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
            expresionRegular={expresiones.telefono}
          />

          <Input
            
            estado={usuario}
            cambiarEstado={cambiarUsuario}
            tipo="textarea"
            label="Mensaje"
            placeholder="Escriba aquí"
            name="mensaje"
            leyendaError="No se permiten caracteres especiales."
            expresionRegular={expresiones.mensaje}
          />

          {formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </MensajeError>
          )}
          <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            {formularioValido === true && (
              <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
            )}
          </ContenedorBotonCentrado>
        </Formulario>
      </ColForm>
    </Contenedor>
  );
};

export default ContactForm;
