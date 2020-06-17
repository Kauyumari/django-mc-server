import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Card, Typography, Input, Space, Button, Divider, Layout } from 'antd';

import Headr from './header';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


function Signup() {
  return(
    <div>
      <Layout>
        <Header>
          <Headr title="Sign Up" subtitle="To manage a Minecraft Server"/>
        </Header>
        <Content>
        <Card
          // bordered={true}
          style={{
            width: 350,
            // border: { 1 px solid powderblue} 
          }}
          // headStyle={{ textAlign: "center" }}
          >
          <img src="./src/logo_minecraft.png" alt="Minecraft Server logo"/>
          <Title level={1}>Sign up to Minecraft Server</Title>
          <Space direction="vertical">
            <Input type="email" size="large" placeholder="Email"/>
            <Input.Password size="large" placeholder="Create a Password"/>
            <Input.Password size="large" placeholder="Confirm Password"/>
            <Button type="primary">Sign up</Button>
          </Space>
          <Divider>Or</Divider>
          <Space direction="vertical">
            <Button>Log in with Facebook</Button>
            <Button>Log in with Google</Button>
          </Space>
          <Divider />
          <Text strong={true}>
            <Link to="/login" >Already a member? Log in </Link>
          </Text>
        </Card>
        </Content>
        <Footer>Minecraft server admin :)</Footer>
      </Layout>
    </div>
  );
}

export default Signup;