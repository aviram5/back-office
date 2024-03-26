import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { fetchUser } from "../slices/userSlice";
import { Box, Typography } from "@mui/material";
import { redirect } from "react-router-dom";

const AppLoading = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser);
  }, []);

  useEffect(() => {
    if (!userState.isLogged) {
      redirect("/auth");
    } else {
      redirect("/app");
    }
  }, [userState]);

  return (
    <Box>
      <Typography>Loading...</Typography>
    </Box>
  );
};
