import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../Pages/Dashboard";
import Metrics from "../Pages/Metrics";
import Manage from "../Pages/Manage";
import Earnings from "../Pages/Earnings";
import Resources from "../Pages/Resources";
import ReferAHost from "../Pages/ReferAHost";
import Team from "../Pages/Team";
import Backup from "../Pages/Backup";
import Privacy from "../Pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/metrics", element: <Metrics /> },
      { path: "/manage", element: <Manage /> },
      { path: "/earnings", element: <Earnings /> },
      { path: "/resources", element: <Resources /> },
      { path: "/referahost", element: <ReferAHost /> },
      { path: "/team", element: <Team /> },
      { path: "/backup", element: <Backup /> },
      { path: "/privacy", element: <Privacy /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
