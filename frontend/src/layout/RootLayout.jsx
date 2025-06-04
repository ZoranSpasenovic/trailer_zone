import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav></nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
