import { Typography, Box } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import { href } from "../config/routes";

// import type { To } from "react-router-dom";

interface ProtectedRouteProps {}

const ProtectedRoute = ({
  children,
}: PropsWithChildren<ProtectedRouteProps>) => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const location = useLocation();

  //some api request to know if page is accessible
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await someUser(location.pathname);
  //       setUser(data);
  //       setIsLoading(false);
  //     } catch (e) {
  //       setIsLoading(false);
  //       // throw new Response();
  //     }
  //   })();
  // }, [location.pathname]);

  // if (isLoading) {
  //   return (
  //     <Box>
  //       <Typography>Loading...</Typography>
  //     </Box>
  //   );
  // }

  return isLogged ? (
    isAuth ? (
      children || <Outlet />
    ) : (
      <Navigate
        to={href({ path: "/app/unauthorized" })}
        state={{ from: location }}
        replace
      />
    )
  ) : (
    <Navigate
      to={href({ path: "/auth/login" })}
      state={{ from: location }}
      replace
    />
  );
};

export default ProtectedRoute;
