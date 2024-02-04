/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localStorage.js";

const PrivateRoute = ({ children }) => {
  const user = getUserFromLocalStorage();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
