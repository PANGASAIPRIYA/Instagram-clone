import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Image,
  List,
  Menu,
  Row,
  Space,
  Typography,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { InstaIcons, ProfileImages } from "../MediaFiles";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 12px 20px 12px;
  & .ant-menu-light {
    border-inline-end: 0px !important;
  }
  & .logoImgProp {
    width: 110px;
    height: 35px;
    margin: 0px !important;
  }
  & .logoProp1 {
    padding: 2px;
    margin: 25px 0px 35px 10px;
  }
  & .logoProp2 {
    padding: 2px;
    margin: 25px 0px 35px 10px;
  }
  & .ant-image {
    height: 30px;
    width: 30px;
    padding: 2px;
    margin-right: 16px;
  }
  & .ant-menu-item {
    padding: 5px 12px !important;
    margin: 2px 0px;
    width: 100%;
    height: fit-content;
  }

  & .ant-menu-title-content,
  .listItemTitleStyle {
    font-weight: bold;
  }
  & .listItemTitleStyle {
    margin-left: 10px;
  }
  & .listItemStyle {
    display: "flex";
    align-items: "center";
    list-style-type: none;
    margin-left: 12px;
  }

  & .listItemIconStyle {
    color: black;
    font-size: 23px;
  }
`;

export const MenuBar = ({ prop }) => {
  // console.log(prop);
  const [menuBarProp, setMenuBarProp] = useState(prop);
  useEffect(() => {
    setMenuBarProp(prop);
  }, [prop]);

  let menuItems = [
    "Home",
    "Search",
    "Explore",
    "Reels",
    "Messages",
    "Notifications",
    "Create",
    "Profile",
  ];

  const iconProp = {
    height: "25px",
    width: "25px",
  };

  const iconProp2 = {
    height: "30px",
    width: "30px",
    margin: "0px 4px 0px 0px",
  };

  const menuIcon = [
    <Image src={InstaIcons.homeFilledIcon} preview={false} style={iconProp} />,
    <Image
      src={InstaIcons.searchFilledIcon}
      preview={false}
      style={iconProp}
    />,
    <Image src={InstaIcons.navigateIcon} preview={false} style={iconProp} />,
    <Image src={InstaIcons.reelsIcon} preview={false} style={iconProp} />,
    <Image src={InstaIcons.messageIcon} preview={false} style={iconProp} />,
    <Image src={InstaIcons.heartIcon} preview={false} style={iconProp} />,
    <Image src={InstaIcons.postIcon} preview={false} style={iconProp} />,
    <Avatar src={ProfileImages.user1} style={iconProp2} />,
  ];

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = menuItems.map((i, j) => {
    // console.log(i, j);
    return getItem(i, j + 1, menuIcon[j]);
  });
  // console.log(items);

  return (
    <Container>
      <Row>
        <Col span={23}>
          <Space
            direction="vertical"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <div>
              {menuBarProp.collapsestatus ? (
                <div className="logoProp2">
                  <Avatar
                    src={InstaIcons.instaIcon}
                    shape="square"
                    style={iconProp}
                  />
                </div>
              ) : (
                <div className="logoProp1">
                  <Image
                    className="logoImgProp"
                    src={"/mediaFiles/images/iconImages/instagramText.png"}
                    preview={false}
                  />
                </div>
              )}

              <Menu
                className="menuBarContainer"
                defaultSelectedKeys={["1"]}
                mode="inline"
                theme="light"
                inlineCollapsed={false}
                items={items}
              />
            </div>

            <List.Item className="listItemStyle">
              <Avatar
                shape="square"
                src={<MenuOutlined className="listItemIconStyle" />}
              />
              {menuBarProp.collapsestatus ? (
                <></>
              ) : (
                <Typography.Text className="listItemTitleStyle">
                  More
                </Typography.Text>
              )}
            </List.Item>
          </Space>
        </Col>
        <Col span={1}>
          <Divider type="vertical" style={{ height: "100vh" }} />
        </Col>
      </Row>
    </Container>
  );
};
