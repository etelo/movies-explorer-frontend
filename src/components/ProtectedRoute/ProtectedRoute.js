import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/");
    }
  }, [history]);

  return <Component {...props} />;
};

export default ProtectedRoute;
