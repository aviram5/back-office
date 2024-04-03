import ProtectedRoute from "../components/ProtectedRoute";
import type { RouteObject } from "react-router-dom";
import { typesafeBrowserRouter } from "react-router-typesafe";
import AppLoading from "../pages/AppLoading";
import MainLayout from "../layouts/MainLayout/MainLayout";

import OverviewIcon from "@mui/icons-material/Apps";
import AboutIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/PermContactCalendar";

const AuthRoutes = [
  {
    path: "login",
    async lazy() {
      const { Login } = await import("../pages/Auth");
      return { Component: Login };
    },
  },
  {
    path: "signup",
    async lazy() {
      const { Signup } = await import("../pages/Auth");
      return { Component: Signup };
    },
  },
] as const satisfies RouteObject[];

const AppRoutes = [
  {
    index: true,
    // path: "/app",
    async lazy() {
      const { Home } = await import("../pages/App");
      return { Component: Home };
    },
  },
  {
    path: "about",
    async lazy() {
      const { About } = await import("../pages/App");
      return {
        element: <ProtectedRoute children={<About />} />,
      };
    },
  },
  {
    path: "contact",
    async lazy() {
      const { Contact } = await import("../pages/App");
      return {
        element: <ProtectedRoute children={<Contact />} />,
      };
    },
  },
  {
    path: "unauthorized",
    async lazy() {
      const { Unauthorized } = await import("../pages/App");
      return { Component: Unauthorized };
    },
  },
] as const satisfies RouteObject[];

export const navigationRoutes = [
  {
    path: "/app",
    title: "Overview",
    icon: <OverviewIcon />,
  },
  {
    path: "/app/about",
    title: "About",
    icon: <AboutIcon />,
  },
  {
    path: "/app/contact",
    title: "Contact",
    icon: <ContactIcon />,
  },
] as const;

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
