import ProtectedRoute from "../components/ProtectedRoute";
import type { RouteObject } from "react-router-dom";
import { typesafeBrowserRouter } from "react-router-typesafe";
import AppLoading from "../pages/AppLoading";
import { MainLayout } from "../pages";

const AuthRoutes = [
  {
    path: "/auth/login",
    async lazy() {
      const { Login } = await import("../pages");
      return { Component: Login };
    },
  },
  {
    path: "/auth/signup",
    async lazy() {
      const { Signup } = await import("../pages");
      return { Component: Signup };
    },
  },
] as const satisfies RouteObject[];

const AppRoutes = [
  {
    // index: true,
    path: "/app",
    async lazy() {
      const { Home } = await import("../pages");
      return { Component: Home };
    },
  },
  {
    path: "/app/about",
    async lazy() {
      const { About } = await import("../pages");
      return {
        element: <ProtectedRoute children={<About />} />,
      };
    },
  },
  {
    path: "/app/contact",
    async lazy() {
      const { Contact } = await import("../pages");
      return {
        element: <ProtectedRoute children={<Contact />} />,
      };
    },
  },
  {
    path: "/app/unauthorized",
    async lazy() {
      const { Unauthorized } = await import("../pages");
      return { Component: Unauthorized };
    },
  },
] as const satisfies RouteObject[];

export const navigationRoutes = [
  {
    path: "/app",
    title: "Overview",
  },
  {
    path: "/app/about",
    title: "About",
  },
  {
    path: "/app/contact",
    title: "Contact",
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
        path: "/app" as const,
        element: <MainLayout />,
        children: AppRoutes,
      },
      {
        path: "/auth" as const,
        children: AuthRoutes,
      },
    ],
  },
]);
