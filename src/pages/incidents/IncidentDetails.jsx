import { Col, Row, Tabs, Table, Divider, Tag, Spin } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { getIncidentDetails } from "../../redux/action/incidentsAction";
import "./incident-details-style.css";

const IncidentDetails = () => {
  const dispatch = useDispatch();
  const { height } = useWindowDimensions();

  const { TabPane } = Tabs;

  const incidentsState = useSelector((state) => state.incidents);
  const { incidents, incidentDetails, selectedIncidentId } = incidentsState;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async (incidentId) => {
      await dispatch(getIncidentDetails(incidentId));
      setLoading(false);
    };
    if (Object.keys(incidents).length) {
      const incidentId = selectedIncidentId;
      getDetails(incidentId);
    }
  }, [incidents]);

  const onChange = (key) => {
    console.log(key);
  };

  const columns = [
    {
      title: "Parameter",
      dataIndex: "parameter",
      key: "parameter",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Alarm",
      dataIndex: "alarm",
      key: "alarm",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Observation",
      dataIndex: "observation",
      key: "observation",
    },
    {
      title: "Expected",
      dataIndex: "expected",
      key: "expected",
    },
    {
      title: "Alarm",
      dataIndex: "alarm",
      key: "alarm",
    },
    {
      title: "Start",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "End",
      dataIndex: "end",
      key: "end",
    },
  ];

  const data = [
    {
      key: "1",
      parameter: "Acw basin level HRD_40LI802.DACA.PV",
      alarm: "LOW",
      model: "LOAD",
      observed: "3929.057 to 3954.15088",
      expected: "4025.54 to 4200.87",
      alarms: "",
      start: "",
      end: "",
    },
    {
      key: "2",
      parameter: "Acw basin level HRD_40LI802.DACA.PV",
      alarm: "LOW",
      model: "LOAD",
      observed: "3929.057 to 3954.15088",
      expected: "4025.54 to 4200.87",
      alarms: "",
      start: "",
      end: "",
    },
  ];

  return (
    <div>
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
          <p>Operations / 632b1290</p>
          <h3>{incidentDetails.incidentName}</h3>
          <Tabs onChange={onChange} type="card">
            <TabPane tab="Details" key="1">
              <Row>
                <Col span={20}>
                  <div className="io">
                    <h4>Incident overview</h4>
                    <div className="io-row">
                      <p className="io-text">Unit Name</p>
                      <p className="io-text">HRD #4</p>
                    </div>
                    <div className="io-row">
                      <p className="io-text">Equipment</p>
                      <p className="io-text">
                        {incidentDetails.equipments &&
                          incidentDetails.equipments[0]}
                      </p>
                    </div>
                    <div className="io-row">
                      <p className="io-text">KPI</p>
                      <p className="io-text">{incidentDetails.kpiGroup}</p>
                    </div>
                    <div className="io-row">
                      <p className="io-text">Start time</p>
                      <p className="io-text">{incidentDetails.startTime}</p>
                    </div>
                    <div className="io-row">
                      <p className="io-text">Status</p>
                      <p className="io-text">
                        {incidentDetails.open ? (
                          <Tag color="green">Open</Tag>
                        ) : (
                          <Tag color="red">Closed</Tag>
                        )}
                      </p>
                    </div>
                    <div className="io-row">
                      <p className="io-text">Priority</p>
                      <p className="io-text">
                        <Tag color="yellow">{incidentDetails.priority}</Tag>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="action">
                    <h4>Actions</h4>
                    <p>Incident workflow</p>
                    <button>Approve Incident</button>
                    <button>Expert Comment</button>
                    <button>Expert RCA</button>
                    <button>Correct Actions</button>
                    <br></br>
                    <p>Adjust Incident</p>
                    <p>Configuration</p>
                    <button>Adjust Sensitivity</button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={20}>
                  <h3>
                    Probable Root Cause:{" "}
                    {incidentDetails.rootCause &&
                    incidentDetails.rootCause.length
                      ? incidentDetails.rootCause[0]
                      : "Unknown"}
                  </h3>
                  <h4>Known Deviations</h4>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                  />
                </Col>
                <Col span={4}>
                  <p style={{ marginTop: 60 }}>Rate Criticality</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Data" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="History" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default IncidentDetails;
