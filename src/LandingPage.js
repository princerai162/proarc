import React, { useEffect } from "react";
import { Spin } from "antd";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { useDispatch } from "react-redux";
import { updateLocalLogin } from "./redux/action/AuthAction";

const LandingPage = () => {
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();

  //mounting phase
  useEffect(() => {
    const getAuth = async () => {
      var auth = await localStorage.getItem("auth");
      auth = JSON.parse(auth);

      if (Boolean(auth)) {
        await dispatch(updateLocalLogin(auth, true));
      } else {
        await dispatch(updateLocalLogin({}, false));
      }
    };
    getAuth();
  }, []);

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
