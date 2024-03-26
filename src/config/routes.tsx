import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import type { RouteObject } from "react-router-dom";

const AuthRoutes: RouteObject[] = [
  {
    path: "/login",
    async lazy() {
      const { Login } = await import("../pages");
      return { Component: Login };
    },
  },
  {
    path: "/unauthorized",
    async lazy() {
      const { Unauthorized } = await import("../pages");
      return { Component: Unauthorized };
    },
  },
];

const AppRoutes: RouteObject[] = [
  {
    index: true,
    async lazy() {
      const { Home } = await import("../pages");
      return { Component: Home };
    },
  },
  {
    path: "/about",
    async lazy() {
      const { About } = await import("../pages");
      return {
        element: <ProtectedRoute children={<About />} />,
      };
    },
  },
  {
    path: "/contact",
    async lazy() {
      const { Contact } = await import("../pages");
      return {
        element: <ProtectedRoute children={<Contact />} />,
      };
    },
  },
];

const routes = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { MainLayout } = await import("../pages");
      return { Component: MainLayout };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import("../pages");
          return { Component: Home };
        },
      },
      {
        path: "/about",
        async lazy() {
          const { About } = await import("../pages");
          return {
            element: <ProtectedRoute children={<About />} />,
          };
        },
      },
      {
        path: "/contact",
        async lazy() {
          const { Contact } = await import("../pages");
          return {
            element: <ProtectedRoute children={<Contact />} />,
          };
        },
      },

      {
        path: "/login",
        async lazy() {
          const { Login } = await import("../pages");
          return { Component: Login };
        },
      },
      {
        path: "/unauthorized",
        async lazy() {
          const { Unauthorized } = await import("../pages");
          return { Component: Unauthorized };
        },
      },
    ],
  },
]);

export default routes;
