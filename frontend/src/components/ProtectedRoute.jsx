`
This component checks if the user is authenticated before allowing access to certain routes.
`;

import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

import api from "../api.js";

function ProtectedRoute() {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      api
        .get("auth/login-status")
        .then((res) => {
          setIsAuthorized(res.data.isAuthorized);
        })
        .catch((err) => {
          setIsAuthorized(false);
        });
    };

    checkAuth();
  }, []);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
