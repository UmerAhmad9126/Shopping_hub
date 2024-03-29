import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

function PrivateRoute({ children }) {

  const { authState } = useContext(AuthContext);

  if (authState.isAuth === false) {
    return <Navigate to="/login" />
  }
  return children;


}

export default PrivateRoute;