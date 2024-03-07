import { About, Contact, Home, MainLayout } from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunction,
  redirect,
} from "react-router-dom";

const checkAuth = (): Promise<boolean> => {
  const user = false;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 500);
  });
};

const AuthLoader: LoaderFunction = async () => {
  try {
    const user = await checkAuth();
    if (!user) {
      return redirect("/");
    }
    return null;
  } catch (e) {
    console.log(e);
    return redirect("/");
  }
};

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: AuthLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
