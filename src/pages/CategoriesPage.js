import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const history = useNavigate();

  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0;
  const limit = parseInt(query.get("limit")) || 15;

  const handleNext = () => {
    //Asignando valores a la query (parametros ruta de navegacion)
    query.set("skip", skip + limit);
    history({ search: query.toString() });
  };

  return (
    <div>
      <h2>useLocation | useNavigate</h2>
      <h3>CategoriesPage</h3>
      <h3>Ver URL</h3>
      <h3>Skip: {skip}</h3>
      <h3>Limit: {limit}</h3>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}
