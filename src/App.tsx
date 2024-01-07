import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return (
    <div className={`font-primary text-[#272727]`}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
