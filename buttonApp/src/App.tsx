import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Start } from "./pages/start";
import { Layout } from "./layout";

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
