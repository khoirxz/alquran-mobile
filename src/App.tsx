import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Surah } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/id/:id",
    element: <Surah />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
