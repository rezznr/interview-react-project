import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("myToken");

    if (!token) {
        return <Navigate to="/" />;
    } else {
        return <Component {...rest} />;
    }
};

export default ProtectedRoute;
