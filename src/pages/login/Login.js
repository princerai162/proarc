import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Login = (props) => {
  const { height } = useWindowDimensions();

  const onFinish = (values) => {
    console.log(values, "form values after finish");
  };

  return (
    <>
      <Row style={{ height: height }}>
        <Col
          xl={17}
          style={{
            backgroundColor: "#121212",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="app logo"
            src="http://dev.exactspace.co/pulse-ui-v2/images/pulse-logo.png"
          />
        </Col>
        <Col
          xl={7}
          style={{
            backgroundColor: "#1B1B1B",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            style={{ padding: 80 }}
          >
            <Row gutter={[10, 10]}>
              <h1 style={{ color: "#fff" }}>LOGIN</h1>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Form.Item
                  label={<label style={{ color: "#fff" }}>Email</label>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Form.Item
                  label={
                    <div>
                      <label style={{ color: "#fff" }}>Password</label>
                      <Button
                        type="link"
                        target="_blank"
                        style={{ marginLeft: 73, color: "red" }}
                      >
                        Forgot Password?
                      </Button>
                    </div>
                  }
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24}>
                <Form.Item>
                  <div className="btn__login ">
                    <Button htmlType="submit" loading={false}>
                      Login
                    </Button>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
