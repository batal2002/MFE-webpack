import { Outlet } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard";
import React from "react";

export const App = () => {
  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <Outlet />

      <UserCard username={"BADAN admin"} />
    </div>
  );
};
