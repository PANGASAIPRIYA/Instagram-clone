import { Col, Divider, Layout, Row } from "antd";
import styled from "styled-components";
import { MenuBar } from "./Pages/MenuBar";
import React, { useState, useEffect } from "react";
import { SuggestionBox } from "./Pages/SuggestionBox";
import { MainContentBox } from "./Pages/MainContentBox";
// Styled component named Header
const Container = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  & .siderStyle {
    background-color: white;
    overflow: "auto";
    /* position: fixed; */

    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
  }
  & .siderStyleRight {
    background-color: white;
    height: 100vh;
    width: 100% !important;
    margin: 0px !important;
    position: fixed;
  }
  & .headerStyle {
    background-color: green;
  }
  & .contentStyle {
    background-color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  & .footerStyle {
    background-color: black;
  }
`;

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const isMedium = window.innerWidth <= 1265;
      setCollapsed(isMedium);
      console.log("Medium device breakpoint:", isMedium);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Container>
        <Layout className=" " hasSider>
          <Row>
            <Col xs={3} sm={3} md={23} lg={23} xl={23}>
              <Sider
                className="siderStyle"
                trigger={null}
                collapsed={collapsed}
                width={260}
              >
                {/* Navigation Bar Vertical */}
                <MenuBar prop={{ collapsestatus: collapsed }} />
              </Sider>
            </Col>
          </Row>

          <Layout hasSider>
            <Row style={{ width: "100%", height: "100%" }}>
              <Col xs={24} sm={24} md={24} lg={24} xl={17}>
                {/* Main Content Post Feeds  */}
                <Content className="contentStyle">
                  <MainContentBox />
                </Content>
              </Col>
              <Col xs={0} sm={0} md={0} lg={0} xl={7}>
                {/* Suggestion Box */}
                <Content className="siderStyleRight">
                  <SuggestionBox />
                </Content>
              </Col>
            </Row>
          </Layout>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
