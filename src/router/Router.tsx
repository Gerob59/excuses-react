import { RouteObject, useRoutes } from "react-router-dom";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <></>,
    },
  ];
  return useRoutes(routes);
};
export default Router;
