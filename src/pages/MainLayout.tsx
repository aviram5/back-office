import { Box, AppBar, IconButton, Drawer, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // borderBottom: 1,
        }}
      >
        <IconButton onClick={() => setIsOpen((state) => !state)}>
          <Menu />
        </IconButton>
        <Box>
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </Box>
      </AppBar>
      <Drawer
        onClose={() => setIsOpen(false)}
        variant="permanent"
        anchor="left"
        open={isOpen}
        sx={{
          width: 250,
          background: "#fff",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography>Test</Typography>
        </Box>
      </Drawer>
      <Box
        sx={{
          marginTop: "100px",
          flexGrow: 1,
          background: "green",
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
