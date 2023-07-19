import React, { useState } from "react";
import styled from "styled-components";
import { ProfileImages, suggestionBoxData } from "../MediaFiles";
import {
  Anchor,
  Avatar,
  Button,
  List,
  Row,
  Skeleton,
  Spin,
  Typography,
} from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

const Container = styled.div`
  padding: 30px 10px;
  width: 300px;
  & .personalProfileContainer {
    margin-bottom: 20px;
  }
  & .suggestBoxCaption,
  .suggestBoxSideSection {
    font-size: smaller;
  }
  & .ant-list-item-meta {
    align-items: center !important;
  }
  & .ant-list-item-meta-title {
    margin-bottom: 0px !important;
  }
  & .ant-list-item {
    padding: 5px 0px !important;
  }
  & .ant-list-header {
    border-block-end: 0px !important;
  }
  & .profilesList {
    border-bottom: 0px !important;
  }
`;

export const SuggestionBox = () => {
  const [loading, setloading] = useState(false);
  const [profileCount, setprofileCount] = useState(2);
  const [profileData, setProfileData] = useState(suggestionBoxData.slice(0, 3));
  const onLoadMore = () => {
    setloading(true);
    setprofileCount(profileCount + 1);
    setProfileData(suggestionBoxData.slice(0, profileCount * 3));
    setloading(false);
  };
  const LoadMore =
    profileCount * 3 < 10 ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        {console.log(profileCount * 3)}
        <Button
          onClick={onLoadMore}
          icon={<ArrowDownOutlined />}
          type="ghost"
          shape="circle"
        >
          More
        </Button>
      </div>
    ) : null;
  const settoggleResquest = (e) => {
    console.log(e, profileData);
    let derivedProfileData = profileData.map((i) => {
      if (i.id === e) {
        console.log(i.followStatus);
        i.followStatus = !i.followStatus;
        console.log(i.followStatus);
      }
      return i;
    });
    setProfileData(derivedProfileData);
  };
  return (
    <Container>
      <List className="personalProfileContainer" itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={ProfileImages.user1} />}
            title="Robinhood.me"
            description="RobinHood Mandela"
          />
          <Typography.Link strong className="suggestBoxSideSection">
            Switch
          </Typography.Link>
        </List.Item>
      </List>

      <List
        className="profilesList"
        loadMore={LoadMore}
        header={
          <Row justify="space-between" className="profilesList">
            <Typography.Text strong type="secondary">
              Suggested for you
            </Typography.Text>
            <Typography.Text strong className="suggestBoxCaption">
              Sell All
            </Typography.Text>
          </Row>
        }
        footer={<div>Footer</div>}
        dataSource={profileData}
        renderItem={(item) => (
          <List.Item className="profilesList">
            <Skeleton avatar title={false} loading={loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.profileImage} />}
                title={<a href="">{item.username}</a>}
                description={item.followNotify}
              />
              {item.followStatus ? (
                <Typography.Link
                  strong
                  className="suggestBoxSideSection"
                  onClick={() => settoggleResquest(item.id)}
                >
                  Follow
                </Typography.Link>
              ) : (
                <Typography.Text
                  strong
                  className="suggestBoxSideSection"
                  onClick={() => settoggleResquest(item.id)}
                >
                  Requested
                </Typography.Text>
              )}
            </Skeleton>
          </List.Item>
        )}
      />
    </Container>
  );
};
