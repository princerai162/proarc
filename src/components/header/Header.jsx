import { Select } from "antd";
import React from "react";
import "./header.css";
import { SyncOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUnits,
  updateSelectedUnitId,
} from "../../redux/action/unitsActions";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { Option } = Select;

  const unitsState = useSelector((state) => state.units);
  const { units } = unitsState;

  const [selectedUnit, setSelectedUnit] = useState("");

  useEffect(() => {
    dispatch(
      getUnits({
        filter: { where: { id: { inq: ["5f608d3a10723ca5deaab563"] } } },
      })
    );
  }, []);

  useEffect(() => {
    const getUnitLocal = async () => {
      const selectedU = await localStorage.getItem("selected_unit");
      setSelectedUnit(selectedU);
    };

    if (units.length) {
      getUnitLocal();
    }
  }, [units]);

  const handleChange = async (value) => {
    await localStorage.setItem("selected_unit", value);
    dispatch(updateSelectedUnitId());
    setSelectedUnit(value);
  };

  //console.log(selectedUnit);

  return (
    <div className="header-container">
      <img src="./images/app_logo.PNG" style={{ width: 85 }} />
      <div className="header">
        <div className="header-item">
          <h4 style={{ color: "red" }}>SELECT UNIT</h4>
          <div className="select-container">
            <Select
              className="select-input"
              value={selectedUnit}
              onChange={handleChange}
            >
              {units.map((item, index) => (
                <Option key={index} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Select
              className="select-input"
              defaultValue="lucy"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Select
              className="select-input"
              defaultValue="lucy"
              onChange={handleChange}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
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
