import React, { useEffect } from "react";
import "./styles.css";
import { Input, Spin, Switch, Typography } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import {
  getIncidentDetails,
  getIncidents,
} from "../../redux/action/incidentsAction";
import IncidentDetails from "./IncidentDetails";
import { useState } from "react";
const { Search } = Input;
const { Text } = Typography;

const Incidents = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();
  const onSearch = (value) => console.log(value);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const incidentsState = useSelector((state) => state.incidents);
  const { incidents, selectedIncidentId } = incidentsState;

  const unitsState = useSelector((state) => state.units);
  const { selectedUnitId } = unitsState;

  useEffect(() => {
    const fetchIncidents = async () => {
      await dispatch(
        getIncidents({
          filter: {
            order: "startTime+DESC",
            where: {
              unitsId: selectedUnitId,
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
      setLoading(false);
    };
    if (!unitsState.loading) {
      fetchIncidents();
    }
  }, [unitsState]);

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
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: height - 200,
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <>
              <p>Important active incidents</p>
              {Object.keys(incidents).map((key) => (
                <div key={key}>
                  <p>{key}</p>
                  {incidents[key].map((incident, index) => (
                    <div key={index} className="list-item-container">
                      {Boolean(incident.equipmentName) ? (
                        <Text>{incident.equipmentName[0]}</Text>
                      ) : null}

                      <div
                        className={
                          incident.id == selectedIncidentId
                            ? "list-item active"
                            : "list-item"
                        }
                        onClick={() =>
                          dispatch(getIncidentDetails(incident.id))
                        }
                      >
                        <div className="label"></div>
                        <div className="item-container">
                          <Text>{incident.incidentName}</Text>
                          <Text>{incident.startTime}</Text>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="unit-details">
          <IncidentDetails />
        </div>
      </div>
    </div>
  );
};

export default Incidents;
