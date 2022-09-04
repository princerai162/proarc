import React, { useEffect } from "react";
import { Spin } from "antd";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import { updateLocalLogin } from "./redux/action/AuthAction";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);
  const { isAuth } = authState;

  //mounting phase
  useEffect(() => {
    const getAuth = async () => {
      var auth = await localStorage.getItem("auth");
      auth = JSON.parse(auth);

      if (Boolean(auth)) {
        dispatch(updateLocalLogin(auth, true));
      } else {
        dispatch(updateLocalLogin({}, false));
      }
    };
    getAuth();
  }, []);

  //updating phase
  useEffect(() => {
    if (isAuth) {
      //navigate to dashboard
      navigate("/dashboard");
    } else {
      // navigate to login
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <div className="loader-container" style={{ height }}>
      <Spin size="large" />
      <img
        style={{ height: 100 }}
        alt="app logo"
        src="http://dev.exactspace.co/pulse-ui-v2/images/pulse-logo.png"
      />
    </div>
  );
};

export default LandingPage;
