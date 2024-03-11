import { About, Contact, Home, MainLayout, Login, Unauthorized } from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  redirect,
} from "react-router-dom";
import ProtectedRoute, { Role } from "./components/ProtectedRoute";

// const checkAuth = (): Promise<boolean> => {
//   const user = false;
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(user);
//     }, 500);
//   });
// };

// const AuthLoader: LoaderFunction = async () => {
//   try {
//     const user = await checkAuth();
//     if (!user) {
//       return redirect("/");
//     }
//     return null;
//   } catch (e) {
//     console.log(e);
//     return redirect("/");
//   }
// };

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <ProtectedRoute roles={[Role.EDIDOR]} />,
        children: [
          {
            index: true,
            element: <About />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ProtectedRoute roles={[Role.ADMIN]} />,
        children: [
          {
            index: true,
            element: <Contact />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
