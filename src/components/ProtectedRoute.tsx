import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, json } from "react-router-dom";
// import type { To } from "react-router-dom";

interface User {
  user: boolean;
  isAuth: boolean;
}

const someUser = (to: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    console.log(to);
    setTimeout(() => {
      if (false) {
        resolve({
          user: true,
          isAuth: true,
        });
      } else {
        reject("some error");
      }
    }, 500);
  });
};

// interface ProtectedRouteProps {
//   //   condition: boolean;
//   //   fallbackRoute: To;
//   roles: Role[];
// }

const ProtectedRoute = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();
  //some api request to know if page is accessible
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await someUser(location.pathname);
        setUser(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        // throw new Response();
      }
    })();
  }, [location.pathname]);

  if (isLoading) {
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return user?.user ? (
    user.isAuth ? (
      <Outlet />
    ) : (
      <Navigate to={"/unauthorized"} state={{ from: location }} replace />
    )
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
