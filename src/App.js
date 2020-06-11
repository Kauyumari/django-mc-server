import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout } from 'antd';

// import './App.css';
import Headr from './components/header';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const { Sider, Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Sider collapsible="true" defaultCollapsed="false">Sider Here</Sider>
        <Layout>
          <Header>
            <Headr />
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Content>
          <Footer>Minecraft server admin :)</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
