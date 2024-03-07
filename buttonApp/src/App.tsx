import { Start } from "./pages/start";
import { Fileadmin } from "./pages/file-admin";
import { Layout } from "./layout";
import "normalize.css";
import { makeStaticStyles } from "@fluentui/react-components";

import {
  RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

export function App() {
  const ROUTES: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Start />,
        },
        {
          path: "/fileadmin",
          element: <Fileadmin />,
        },
      ],
    },
  ];

  const router = createHashRouter(ROUTES);

  return <RouterProvider router={router} />;
}
