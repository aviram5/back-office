import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
// import { fetchUser } from "../slices/userSlice";
import { Box, Typography } from "@mui/material";
import { href } from "../routes";
import { useNavigate } from "react-router-dom";

const AppLoading = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userState = useAppSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchUser);
  // }, [dispatch]);

  useEffect(() => {
    if (userState.isLogged) {
      console.log("app");
      navigate(href({ path: "/app" }));
    } else {
      console.log("auth");
      navigate(href({ path: "/auth/login" }));
    }
  }, [userState, navigate]);

  return (
    <Box sx={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
      <Typography>App Loading...</Typography>
    </Box>
  );
};

export default AppLoading;
