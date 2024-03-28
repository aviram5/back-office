import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { fetchUser } from "../slices/userSlice";
import { Box, Typography } from "@mui/material";
// import { redirect } from "react-router-dom";
import { redirect } from "react-router-typesafe";
import { href } from "../config/routes";
import { Navigate } from "react-router-dom";

const AppLoading = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser);
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("hi");
  //   redirect("/app");
  // });
  useEffect(() => {
    if (!userState.isLogged) {
      redirect("/auth");
    } else {
      redirect("/app");
    }
  }, [userState]);

  return (
    <Box>
      <Typography>App Loading...</Typography>
      {/* {userState.isLogged && <Navigate to={"/app"} />} */}
    </Box>
  );
};

export default AppLoading;
