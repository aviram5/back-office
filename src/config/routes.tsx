// import { Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
// import type { RouteObject } from "react-router-dom";
import {
  LoaderFunction,
  redirect,
  typesafeBrowserRouter,
} from "react-router-typesafe";
import AppLoading from "../pages/AppLoading";
import { Home, MainLayout } from "../pages";
// import { Home, MainLayout } from "../pages";

// const AuthRoutes = [
//   {
//     index: true,
//     element: <Navigate to="/auth/login" replace={true} />,
//   },
//   {
//     path: "/auth/login",
//     async lazy() {
//       const { Login } = await import("../pages");
//       return { Component: Login };
//     },
//   },
//   {
//     path: "/auth/signup",
//     async lazy() {
//       const { Signup } = await import("../pages");
//       return { Component: Signup };
//     },
//   },
// ] satisfies RouteObject[];

// const AppRoutes = [
//   {
//     index: true,
//     async lazy() {
//       const { Home } = await import("../pages");
//       return { Component: Home };
//     },
//   },
//   {
//     path: "about",
//     async lazy() {
//       const { About } = await import("../pages");
//       return {
//         element: <ProtectedRoute children={<About />} />,
//       };
//     },
//   },
//   {
//     path: "contact/:id",
//     async lazy() {
//       const { Contact } = await import("../pages");
//       return {
//         element: <ProtectedRoute children={<Contact />} />,
//       };
//     },
//   },
//   {
//     path: "unauthorized",
//     async lazy() {
//       const { Unauthorized } = await import("../pages");
//       return { Component: Unauthorized };
//     },
//   },
// ] satisfies RouteObject[];
// ] satisfies RouteObject[];
// element: <Navigate to="/auth/login" replace={true} />,

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
        children: [
          {
            index: true,
            // element: <Home />,
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
        ],
      },
      {
        path: "/auth",
        children: [
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
        ],
      },
    ],
  },
]);

// // const routes = createBrowserRouter([
// export const { router, href } = typesafeBrowserRouter([
//   // export const { router, href } = typesafeBrowserRouter([
//   {
//     path: "/",
//     async lazy() {
//       const { MainLayout } = await import("../pages");
//       return { Component: MainLayout };
//     },
//     children: [
//       {
//         index: true,
//         async lazy() {
//           const { Home } = await import("../pages");
//           return { Component: Home };
//         },
//       },
//       {
//         path: "/about",
//         async lazy() {
//           const { About } = await import("../pages");
//           return {
//             element: <ProtectedRoute children={<About />} />,
//           };
//         },
//       },
//       {
//         path: "/contact",
//         async lazy() {
//           const { Contact } = await import("../pages");
//           return {
//             element: <ProtectedRoute children={<Contact />} />,
//           };
//         },
//       },

//       {
//         path: "/login",
//         async lazy() {
//           const { Login } = await import("../pages");
//           return { Component: Login };
//         },
//       },
//       {
//         path: "/unauthorized",
//         async lazy() {
//           const { Unauthorized } = await import("../pages");
//           return { Component: Unauthorized };
//         },
//       },
//     ],
//   },
// ]);

// export default routes;
