import React from 'react';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Card, Typography, Input, Space, Button, Divider, Layout } from 'antd';

import Headr from './header';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


function Login() {
  return(
    <div>
      <Layout>
        <Header>
          <Headr title="Log in" subtitle="To Minecraft Server"/>
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
            <Title level={1}>Welcome to Minecraft Server</Title>
            <Space direction="vertical">
              <Input type="email" size="large" placeholder="Email"/>
              <Input.Password size="large" placeholder="Password"/>
              <Text strong={true}>Forgot password?</Text>
              <Button type="primary">Sign in</Button>
            </Space>
            <Divider>Or</Divider>
            <Space direction="vertical">
              <Button>Log in with Facebook</Button>
              <Button>Log in with Google</Button>
            </Space>
            <Divider />
            <Text strong={true}>
              <Link to="/signup" >Not an MC-Server user? Sign up</Link>
            </Text>
          </Card>
        </Content>
        <Footer>Minecraft server admin :)</Footer>
      </Layout>
    </div>
  );
}

export default Login;