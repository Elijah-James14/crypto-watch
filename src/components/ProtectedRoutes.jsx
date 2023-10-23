/* eslint-disable react/prop-types */
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();

  return user ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoutes;
