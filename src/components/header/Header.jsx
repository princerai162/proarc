import { Select } from "antd";
import React from "react";
import "./header.css";
import { SyncOutlined } from "@ant-design/icons";

const Header = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="header-container">
      <img src="./images/app_logo.PNG" style={{ width: 85 }} />
      <div className="header">
        <div className="header-item">
          <h4 style={{ color: "red" }}>SELECT UNIT</h4>
          <div className="select-container">
            <Select
              className="select-input"
              defaultValue="lucy"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select
              className="select-input"
              defaultValue="lucy"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select
              className="select-input"
              defaultValue="lucy"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>

          <SyncOutlined style={{ color: "#FFF", fontSize: 20 }} />
        </div>

        <div className="header-item" style={{ marginRight: 50 }}>
          <h4 style={{ color: "red", fontWeight: 500, marginRight: 10 }}>
            User Name
          </h4>
          <h4 style={{ color: "#FFF" }}>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
