import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider as StroeProvider } from "react-redux";
import { router } from "./config/routes";
// import routes from "./config/routes";
import { store } from "./store";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StroeProvider store={store}>
        <RouterProvider router={router} />
      </StroeProvider>
    </Suspense>
  );
};

export default App;
