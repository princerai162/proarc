import { HomeFilled, HomeOutlined, LineChartOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const { Text } = Typography;

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/dashboard"}>
          <Text className="menu-text">Dashboard</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/current-history"}>
          <Text className="menu-text">Current History</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Link to={"/incidents"}>
          <Text className="menu-text">Incidents</Text>
        </Link>
      </span>
    </div>
  );
};

export default Sidebar;
