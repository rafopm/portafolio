import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth();
  const location = useLocation();
  return (
    <>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Navigate to="/login" state={{ from: location }} />
        //<Navigate to="/" state={{ from: location }} replace />;
      )}
    </>
  );
}
