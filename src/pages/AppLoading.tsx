import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { fetchUser } from "../slices/userSlice";
import { Box, Typography } from "@mui/material";
// import { redirect } from "react-router-dom";
import { redirect } from "react-router-typesafe";
import { href } from "../config/routes";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AppLoading = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userState = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchUser);
  // }, [dispatch]);

  useEffect(() => {
    if (!userState.isLogged) {
      console.log("app");
      // navigate(href({ path: "home" }));
      navigate(href({ path: "/app" }));
      // navigate(href({ path: "about" }));

      // navigate("/app");
    } else {
      console.log("auth");
      // redirect("/auth/login");
      navigate(href({ path: "/auth/login" }));
      // navigate("/auth/login");
    }
  }, [userState, navigate]);

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
      <Typography>App Loading...</Typography>
      {/* <Outlet /> */}
    </Box>
  );
};

export default AppLoading;
