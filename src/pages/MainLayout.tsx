import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        // border: 3,
        // borderColor: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          justifyContent: "space-evenly",
          borderBottom: 1,
        }}
      >
        <NavLink to="/">/</NavLink>
        {/* <NavLink to="/">home</NavLink> */}
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          //  border: 2,
          // borderColor: "green"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
