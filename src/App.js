import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "./containers/MainLayout";
import Profile from "./pages/profile/Profile";
import Incidents from "./pages/incidents/Incidents";

function App() {
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  const { isAuth } = authState;

  //updating phase
  useEffect(() => {
    if (isAuth === true) {
      //navigate to dashboard
      navigate("/dashboard");
    } else if (isAuth === false) {
      // navigate to login
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
