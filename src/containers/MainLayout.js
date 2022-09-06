import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Layout } from "antd";

function MainLayout() {
  const authState = useSelector((state) => state.auth);
  const { isAuth } = authState;

  let location = useLocation();

  if (isAuth === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <Layout>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </Layout>
  );
}

export default MainLayout;
