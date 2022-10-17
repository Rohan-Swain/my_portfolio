import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./index.scss";

function Layout() {
  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
