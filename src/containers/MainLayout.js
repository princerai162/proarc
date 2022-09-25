import React, { useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Layout } from "antd";
import { updateSelectedUnitId } from "../redux/action/unitsActions";

function MainLayout() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { isAuth } = authState;

  let location = useLocation();

  useEffect(() => {
    dispatch(updateSelectedUnitId());
  }, []);

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
