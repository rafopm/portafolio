import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function PublicRoute({ component: Component, ...rest }) {
  const auth = useAuth();

  return (
    <>
      {!auth.isLogged() ? (
        <Component />
      ) : (
        <Navigate to="/dashboard" />
        //<Navigate to="/" state={{ from: location }} replace />;
      )}
    </>
  );
}
