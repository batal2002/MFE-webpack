import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App";
import React, { Suspense } from "react";
import { Shop } from "@/pages/shop";
import { UserCard } from "@packages/shared/src/components/UserCard";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "main",
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "second",
        element: (
          <div style={{ color: "red" }}>
            <h1>second</h1>
            <UserCard username={"BADAN"} />
          </div>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
