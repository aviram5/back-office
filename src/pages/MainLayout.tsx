import { useCallback, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { NavLink, Outlet } from "react-router-dom";
import {
  styled,
  Theme,
  CSSObject,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../assets/logo.svg";

const HEADER_HEIGHT = 75;
const DRAWER_WIDTH = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} )`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} )`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: 0,
  left: 0,
  height: HEADER_HEIGHT,
  zIndex: theme.zIndex.drawer,
  backgroundColor: "inherit",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  // marginBottom: 5,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme, open }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH - 1,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
// const NavItem = styled(NavLink)(({ theme }) => ({
//   textDecoration: "none",
//   color: "red",
// }));

const SiteHeader = () => {
  return (
    <Box>
      <img src={Logo} width="24" height="100%" />
    </Box>
  );
};

const MainLayout = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
  const isMd = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const isSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isMd) {
      setIsDrawerOpen(false);
    }
  }, [isMd]);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <AppBar
        open={isDrawerOpen}
        position="fixed"
        sx={{
          //   background: "transparent",
          //   width: "100%",
          height: HEADER_HEIGHT,
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "space-evenly",
          //   // borderBottom: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(isDrawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {!isDrawerOpen && <SiteHeader />}
          {/* <Box
            sx={{
              position: "absolute",
              right: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",

              width: 200,
            }}
          >
            <ToggleThemeModeButton toggleThemeMode={toggleThemeMode} />
            <AccountAvatar />
          </Box> */}
        </Toolbar>
        {/* <Box>
            <NavItem to="/">home</NavItem>
            <NavItem to="/about">about</NavItem>
            <NavItem to="/contact">contact</NavItem>
          </Box> */}
      </AppBar>
      <Drawer
        onClose={handleDrawerClose}
        anchor="left"
        variant={isSm ? "temporary" : "permanent"}
        open={isDrawerOpen}
        PaperProps={{
          sx: {
            backgroundColor: "secondary.main",
            borderRight: "0px",
          },
        }}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      >
        <DrawerHeader>
          {isDrawerOpen && <SiteHeader />}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {isDrawerOpen && <Divider />}
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <NavLink to={index % 2 === 0 ? "/" : "/contact"}>
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isDrawerOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isDrawerOpen ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isDrawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isDrawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component={"main"}
        sx={{
          marginTop: `${HEADER_HEIGHT}px`,
          flexGrow: 1,
          // background: "green",
          p: 3,
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
