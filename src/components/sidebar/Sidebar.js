import { HomeFilled, HomeOutlined, LineChartOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import "./sidebar.css";
const { Text } = Typography;

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <HomeFilled className="menu-icon" />
        <Text className="menu-text">Unit Home</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Data Link</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Current History</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>

      <span className="menu-item">
        <LineChartOutlined className="menu-icon" />
        <Text className="menu-text">Dashboard</Text>
      </span>
    </div>
  );
};

export default Sidebar;
