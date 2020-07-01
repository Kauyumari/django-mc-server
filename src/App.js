import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout, Menu, Button } from 'antd';

// import './App.css';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const { Sider } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Sider collapsible="true">
        <Menu>
          <Button type="primary">Menu icon here</Button>
        </Menu>
        </Sider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
