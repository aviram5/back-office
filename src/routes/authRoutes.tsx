import type { RouteObject } from "react-router-dom";

export const AuthRoutes = [
  {
    path: "login",
    async lazy() {
      const { Login } = await import("../pages/Auth");
      return { element: <Login /> };
    },
  },
  {
    path: "signup",
    async lazy() {
      const { Signup } = await import("../pages/Auth");
      return { element: <Signup /> };
    },
  },
] as const satisfies RouteObject[];
