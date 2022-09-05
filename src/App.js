import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  const { isAuth } = authState;

  //updating phase
  useEffect(() => {
    if (isAuth) {
      //navigate to dashboard
      navigate("/dashboard");
    } else if (!isAuth) {
      // navigate to login
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
