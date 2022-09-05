import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

function MainLayout() {
  const authState = useSelector((state) => state.auth);
  const { isAuth } = authState;

  let location = useLocation();

  if (isAuth === false) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
