import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider as StroeProvider } from "react-redux";
import { router } from "./routes";
import { store } from "./store";

const App = () => {
  return (
    <StroeProvider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StroeProvider>
  );
};

export default App;
