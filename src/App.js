import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout, Menu, Button, Drawer, Affix } from 'antd';

// import './App.css';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Settings from './components/settings';
import { useState } from 'react';

const { Sider } = Layout;


const App = () => {
  
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <Layout>
        <Affix offsetTop={10}>
          <Button type="primary" onClick={showDrawer}>Menu icon here</Button>
        </Affix>
        <Drawer
          title="drawer"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p>Contents of the drawer here (menu)</p>
        </Drawer>
        <Menu>
        </Menu>
        {/* <Sider collapsible="true">
        </Sider> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
