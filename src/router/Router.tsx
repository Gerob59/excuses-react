import { RouteObject, useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LostPage from "../pages/LostPage";
import ExcusePage from "../pages/ExcusePage";
import NotFoundPage from "../pages/NotFoundPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:httpcode",
      element: <ExcusePage />,
    },
    {
      path: "/lost",
      element: <LostPage />,
    },
    {
      path: "/not-found",
      element: <NotFoundPage />,
    },
  ];
  return useRoutes(routes);
};
export default Router;
