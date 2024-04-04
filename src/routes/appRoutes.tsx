import ProtectedRoute from "../components/ProtectedRoute";
import type { RouteObject } from "react-router-dom";

export const AppRoutes = [
  {
    index: true,
    async lazy() {
      const { Home } = await import("../pages/App");
      return { element: <Home /> };
    },
  },

  {
    path: "about",
    async lazy() {
      const { About } = await import("../pages/App");
      return {
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      };
    },
  },
  {
    path: "contact",
    async lazy() {
      const { Contact } = await import("../pages/App");
      return {
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      };
    },
  },
  {
    path: "unauthorized",
    async lazy() {
      const { Unauthorized } = await import("../pages/App");
      return { element: <Unauthorized /> };
    },
  },
] as const satisfies RouteObject[];
