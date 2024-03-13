import { Typography, Box } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
// import type { To } from "react-router-dom";

interface User {
  user: boolean;
  isAuth: boolean;
}

const someUser = (to: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    console.log(to);
    setTimeout(() => {
      if (true) {
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

interface ProtectedRouteProps {}

const ProtectedRoute = ({
  children,
}: PropsWithChildren<ProtectedRouteProps>) => {
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
      children
    ) : (
      <Navigate to={"/unauthorized"} state={{ from: location }} replace />
    )
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
