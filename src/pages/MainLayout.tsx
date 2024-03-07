import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box>
      <Box sx={{ width: 400, display: "flex", justifyContent: "space-evenly" }}>
        <NavLink to="/">/</NavLink>
        {/* <NavLink to="/">home</NavLink> */}
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </Box>
      <Box sx={{ width: 300, height: 300, border: 1, background: "red" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
