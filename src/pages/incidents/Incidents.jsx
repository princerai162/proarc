import React, { useEffect } from "react";
import "./styles.css";
import { Input, Switch, Typography } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import { getIncidents } from "../../redux/action/incidentsAction";
const { Search } = Input;
const { Text } = Typography;

const Incidents = () => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const onSearch = (value) => console.log(value);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const incidentsState = useSelector((state) => state.incidents);
  const { incidents } = incidentsState;

  useEffect(() => {
    dispatch(
      getIncidents({
        filter: {
          order: "startTime+DESC",
          where: {
            unitsId: "5f608d3a10723ca5deaab563",
            incidentType: { inq: ["Operations", "operations"] },
            open: true,
          },
          fields: {
            id: true,
            incidentName: true,
            message: true,
            startTime: true,
            endTime: true,
            priority: true,
            criticalTags: true,
            open: true,
            unitsId: true,
            userPriorityRating: true,
            r1: true,
            r2: true,
            r3: true,
            r4: true,
            incidentType: true,
            rootCauses: true,
            feedback: true,
            deviations: true,
            expertRCA: true,
            acknowledge: true,
            kpiGroup: true,
            equipmentIds: true,
            equipmentId: true,
            equipmentName: true,
            equipments: true,
          },
        },
      })
    );
  }, []);

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

          {incidents.map((incident, index) => {
            return (
              <div className="list-item-container">
                <Text>UNIT-4 CT Fan - 6</Text>
                <div className="list-item">
                  <div className="label"></div>
                  <div className="item-container">
                    <Text>{incident.incidentName}</Text>
                    <Text>13/Sep 2:39 am</Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="unit-details">
          <p>details </p>
        </div>
      </div>
    </div>
  );
};

export default Incidents;
