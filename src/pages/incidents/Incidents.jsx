import React from "react";
import "./styles.css";
import { Input, Switch, Typography } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions";
const { Search } = Input;
const { Text } = Typography;

const Incidents = () => {
  const { height } = useWindowDimensions();
  const onSearch = (value) => console.log(value);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="incident-container">
      <div className="incident-header">
        <Search
          style={{ width: 400 }}
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
        <Switch defaultChecked onChange={onChange} />
        <Switch defaultChecked onChange={onChange} />
      </div>
      <div className="incident-content">
        <div className="unit-list" style={{ maxHeight: height }}>
          <p>Important active incidents</p>
          <p>Condenser</p>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>

          <p>Condenser</p>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>

          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <Text>UNIT-4 CT Fan - 6</Text>
            <div className="list-item">
              <div className="label"></div>
              <div className="item-container">
                <Text>Unit-4 Ct Fan - 6 Anomaly</Text>
                <Text>13/Sep 2:39 am</Text>
              </div>
            </div>
          </div>
        </div>

        <div className="unit-details">
          <p>details </p>
        </div>
      </div>
    </div>
  );
};

export default Incidents;
