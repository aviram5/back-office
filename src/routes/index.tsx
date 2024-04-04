import AppLoading from "../pages/AppLoading";
import MainLayout from "../layouts/MainLayout/MainLayout";
import OverviewIcon from "@mui/icons-material/Apps";
import AboutIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/PermContactCalendar";
import { typesafeBrowserRouter } from "react-router-typesafe";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";

export const { router, href } = typesafeBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <AppLoading />,
      },
      {
        path: "/app",
        element: <MainLayout />,
        children: AppRoutes,
      },
      {
        path: "/auth",
        children: AuthRoutes,
      },
    ],
  },
]);

export const drawerRoutes = [
  {
    path: href({ path: "/app" }),
    title: "Overview",
    icon: <OverviewIcon />,
  },
  {
    path: href({ path: "/app/about" }),
    title: "About",
    icon: <AboutIcon />,
  },
  {
    path: href({ path: "/app/contact" }),
    title: "Contact",
    icon: <ContactIcon />,
  },
];
