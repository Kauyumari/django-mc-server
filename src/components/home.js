import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Layout, Typography, Divider, List, Avatar } from 'antd';

import Headr from './header';

import userTestData from './userTestData.json'

const { Header, Content, Footer } = Layout;

function Home() {
  // const [users, setUsers] = useState(null); -> add state with users from server

  //get user list from server
  //first hardcoded
  const testData = userTestData;
  const userData = testData.results;

  // console.log(userData);

  //separate data for lists
  const usersOnline = userData;
  const usersOffline = ["d"];


  return (
    <div>
      <Layout>
          <Header>
            <Headr title="Home" subtitle="Users list"/>
          </Header>
          <Content>
            <Typography.Title level={4}>Online Users</Typography.Title>
            { usersOnline.length ?
              <div>
                <h4>There are {usersOnline.length} users online</h4>
                <List
                  dataSource={userData}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.thumbnail}/>}
                        title={<strong>{item.name.first + " " + item.name.last}</strong>}
                        description={item.location.city + ", " + item.location.country}
                      />
                    </List.Item>
                  )}
                />
              </div> : null
            }
            <Divider>Offline</Divider>
            <Typography.Title level={4}>Offline Users</Typography.Title>
            { usersOffline.length ?
              <div>
                <h4>There are {usersOffline.length} users offline</h4>
              </div> : null
            }
          </Content>
          <Footer>Minecraft server admin :)</Footer>
        </Layout>
    </div>
  );
}

export default Home;