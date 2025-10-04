import { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({Children}) => {
    const token = localStorage.getItem('token');
    return token ? Children : <Navigate to="/Login"/>
}

export default ProtectedRoute;