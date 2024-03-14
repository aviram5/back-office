// import { About, Contact, Home, MainLayout, Login, Unauthorized } from "./pages";
// import { About, Home, MainLayout, Login, Unauthorized } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Suspense } from "react";

// import { Typography, Box } from "@mui/material";

// const AboutFree = () => {
//   return (
//     <Box>
//       <Typography>About Free</Typography>
//     </Box>
//   );
// };

// const AboutNotFree = () => {
//   return (
//     <Box>
//       <Typography>About Not Free</Typography>
//     </Box>
//   );
// };

const routes = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { MainLayout } = await import("./pages");
      return { Component: MainLayout };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import("./pages");
          return { Component: Home };
        },
      },
      {
        path: "/about",
        async lazy() {
          const { About } = await import("./pages");
          return {
            element: <ProtectedRoute children={<About />} />,
          };
        },
        // children: [
        //   {
        //     path: "free",
        //     element: <AboutFree />,
        //   },
        //   {
        //     path: "notFree",
        //     element: <ProtectedRoute />,
        //   },
        // ],
      },
      {
        path: "/contact",
        async lazy() {
          const { Contact } = await import("./pages");
          return {
            element: (
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            ),
          };
        },
        // element: (
        //   <ProtectedRoute>
        //     <Contact />
        //   </ProtectedRoute>
        // ),
      },

      {
        path: "/login",
        async lazy() {
          const { Login } = await import("./pages");
          return { Component: Login };
        },
      },
      {
        path: "/unauthorized",
        async lazy() {
          const { Unauthorized } = await import("./pages");
          return { Component: Unauthorized };
        },
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
