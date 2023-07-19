import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Divider,
  Image,
  List,
  Modal,
  Popover,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import {
  HeartFilledRedInsta,
  HeartOutlinedInsta,
  MessageOutlinedInsta,
  SaveFilledInsta,
  SaveOutlinedInsta,
  ShareOutlinedInsta,
} from "../Generic/AntIconsGenerate";
import { InstaPostData, ProfileImages } from "../MediaFiles";
import VirtualList from "rc-virtual-list";
import { timeConvertions } from "../Generic/timeConvertions";
import Meta from "antd/es/card/Meta";
import { numberToDenomination } from "../Generic/numberToDenomination";
const ContainerHeight = 600;

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding-top: 50px;
  & .ant-card:not(.ant-card-bordered) {
    box-shadow: none;
  }
  & .ant-card-head {
    padding: 5px;
    border-block-end: 0px !important;
  }
  & .ant-card-body {
    padding: 0px;
  }
  & .postFeedContainer {
    max-width: 470px;
  }
  & .profileImageProp1 {
    width: 39px;
    height: 39px;
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  & .profileImageProp2 {
    border-color: white;
    border-width: 2px;
    width: 35px;
    height: 35px;
    object-fit: fill;
  }

  & .ant-list-item-meta {
    align-items: center !important;
  }
  & .ant-list-item-meta-title,
  .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 0px !important;
  }

  & .ant-badge-status-text {
    font-weight: 400;
  }
  & .ant-list-item-meta-description {
    color: black !important;
    font-weight: 300;
  }
  & .ant-image {
    width: 468px;
    height: 468px;
  }
  & .postImage {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  & .btn_prop {
    width: 40px !important;
    height: 40px;

    border-radius: 50%;
    border-width: 0ch;
  }

  & .flx {
    display: flex;
    justify-content: space-between;
  }
  & .ant-list-item {
    border-block-end: 0px;
  }
`;

const Container2 = styled.div`
  & .ant-card-body {
    padding: 24px 0px;
  }
  & .ant-card:not(.ant-card-bordered) {
    box-shadow: none;
  }
  & .ant-card-meta-avatar {
    display: flex;
    align-items: center;
  }
  & .insideProfileBox {
    width: 350px;
  }
  & .insideProfileBoxImg {
    width: 50px;
    height: 50px;
    border-width: 2px;
    border-color: white;
  }
  & .ant-card-meta-avatar {
    width: 55px;
    height: 55px;
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 50%;
    padding: 0%;
    margin-right: 20px;
  }
  & .userPostsData {
    display: flex;
    justify-content: space-around;
  }
  & .insideProfileImageBoxs {
    margin: 25px 0px 0px 0px;
  }
`;

export const MainContentBox = () => {
  const [profileCount, setprofileCount] = useState(2);
  const [instaPostData, setInstaPostData] = useState(InstaPostData.slice(0, 3));
  //   console.log(InstaPostData);
  const avatarOnHover = (i) => {
    console.log("start", i.username);
    return (
      <Container2>
        <Card bordered={false} className="insideProfileBox">
          <Meta
            avatar={
              <Avatar src={i.profileImage} className="insideProfileBoxImg" />
            }
            title={i.username}
            description={i.caption}
          />
        </Card>
        <Space className="userPostsData">
          <Space direction="vertical" size={0} align="center">
            <Typography.Title level={5} style={{ margin: "0px" }}>
              {numberToDenomination(i.posts)}
            </Typography.Title>
            <Typography>posts</Typography>
          </Space>
          <Space direction="vertical" size={0} align="center">
            <Typography.Title level={5} style={{ margin: "0px" }}>
              {numberToDenomination(i.followers)}
            </Typography.Title>
            <Typography>followers</Typography>
          </Space>
          <Space direction="vertical" size={0} align="center">
            <Typography.Title level={5} style={{ margin: "0px" }}>
              {numberToDenomination(i.following)}
            </Typography.Title>
            <Typography>following</Typography>
          </Space>
        </Space>
        <Space size={0} className="insideProfileImageBoxs">
          <Image
            preview={false}
            src="/mediaFiles/images/postImages/2.png"
            style={{ width: "120px", height: "120px" }}
          />
          <Image
            preview={false}
            src="/mediaFiles/images/postImages/5.png"
            style={{ width: "120px", height: "120px" }}
          />
          <Image
            preview={false}
            src="/mediaFiles/images/postImages/10.png"
            style={{ width: "120px", height: "120px" }}
          />
        </Space>
      </Container2>
    );
  };
  const titleCard = (e) => {
    return (
      <List className="cardHeaderLeft" itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            avatar={
              <Popover
                content={avatarOnHover(e)}
                placement="bottomLeft"
                trigger="hover"
                arrow={false}
              >
                <div className="profileImageProp1">
                  <Avatar className="profileImageProp2" src={e.profileImage} />
                </div>
              </Popover>
            }
            title={
              <Row gutter={8}>
                <Col>{e.username}</Col>
                <Col>
                  <Badge
                    status="default"
                    text={timeConvertions(e.postedTime)}
                  />
                </Col>
                <Col>
                  {e.isFollowed ? (
                    ""
                  ) : (
                    <Badge
                      className="Followstatus"
                      status="default"
                      text={<Typography.Link strong>Follow</Typography.Link>}
                    />
                  )}
                </Col>
              </Row>
            }
            description={e.description}
          />
        </List.Item>
      </List>
    );
  };
  const onLoadMore = () => {
    setprofileCount(profileCount + 1);
    setInstaPostData(InstaPostData.slice(0, profileCount * 3));
  };
  const imageClickHandle = (e) => {
    let refinedData = instaPostData.map((i) => {
      if (i.id === e.id) {
        i.isLiked = i.isLiked ? false : true;
      }
      return i;
    });
    setInstaPostData(refinedData);
  };
  const info = (i) => {
    Modal.info({
      title: i.username,
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <Container>
      <List bordered={false}>
        <VirtualList
          data={instaPostData}
          height={ContainerHeight}
          itemHeight={500}
          itemKey="id"
          onScroll={onLoadMore}
        >
          {(item) => (
            <List.Item key={item.id} style={{ justifyContent: "center" }}>
              <Card
                className="postFeedContainer"
                title={titleCard(item)}
                bordered={false}
                extra={<EllipsisOutlined />}
              >
                <Row>
                  <Col span={24}>
                    <Image
                      className="postImage"
                      src={item.postedImage}
                      preview={false}
                      alt="no img"
                      onDoubleClick={() => imageClickHandle(item)}
                    />
                  </Col>
                  <Col span={24}>
                    <div className="flx">
                      <Space>
                        {item.isLiked ? (
                          <Button
                            className="btn_prop"
                            type="ghost"
                            icon={<HeartFilledRedInsta />}
                            onClick={() => {
                              imageClickHandle(item);
                            }}
                          />
                        ) : (
                          <Button
                            className="btn_prop"
                            type="ghost"
                            icon={<HeartOutlinedInsta />}
                            onClick={() => {
                              imageClickHandle(item);
                            }}
                          />
                        )}

                        <Button
                          type="ghost"
                          className="btn_prop"
                          icon={<MessageOutlinedInsta />}
                        />
                        <Button
                          type="ghost"
                          className="btn_prop"
                          onClick={() => info(item)}
                          icon={<ShareOutlinedInsta />}
                        />
                      </Space>
                      {item.isSaved ? (
                        <Button
                          type="ghost"
                          className="btn_prop"
                          icon={<SaveFilledInsta />}
                        />
                      ) : (
                        <Button
                          type="ghost"
                          className="btn_prop"
                          icon={<SaveOutlinedInsta />}
                        />
                      )}
                    </div>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </Container>
  );
};
