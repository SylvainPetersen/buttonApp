import { useState } from "react";
import { Start } from "./pages/start";
import { Layout } from "./layout";
import "normalize.css";

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
      ],
    },
  ];

  const router = createHashRouter(ROUTES);

  return <RouterProvider router={router} />;
}
