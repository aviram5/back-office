import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import type { RouteObject } from "react-router-dom";
import { typesafeBrowserRouter } from "react-router-typesafe";

const AuthRoutes: RouteObject[] = [
  {
    path: "/login",
    async lazy() {
      const { Login } = await import("../pages");
      return { Component: Login };
    },
  },
  {
    path: "/signup",
    async lazy() {
      const { Signup } = await import("../pages");
      return { Component: Signup };
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
  {
    path: "/unauthorized",
    async lazy() {
      const { Unauthorized } = await import("../pages");
      return { Component: Unauthorized };
    },
  },
];

// const routes = createBrowserRouter([
// export const { router, href } = typesafeBrowserRouter([
//   {
//     path: "/",
//     async lazy() {
//       const { AppLoading } = await import("../pages");
//       return { Component: AppLoading };
//     },
//   },
//   {
//     path: "/app",
//     children: AppRoutes,
//   },
//   {
//     path: "/auth",
//     children: AuthRoutes,
//   },
// ]);

// // const routes = createBrowserRouter([
export const { router, href } = typesafeBrowserRouter([
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
        path: "/testafa",
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

// export default routes;
