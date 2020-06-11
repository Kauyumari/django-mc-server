import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Typography, Divider } from 'antd';


function Home() {
  // const [users, setUsers] = useState(null);

  //get user list from server

  //separate data for lists
  const usersOnline = ["a", "b", "c"];
  const usersOffline = ["d"];


  return (
    <div>
      <Typography.Title level={4}>Online Users</Typography.Title>
      { usersOnline.length ?
        <div>
          <h4>There are {usersOnline.length} users online</h4>
        </div> : null
      }
      <Divider>Offline</Divider>
      <Typography.Title level={4}>Offline Users</Typography.Title>
      { usersOffline.length ?
        <div>
          <h4>There are {usersOffline.length} users offline</h4>
        </div> : null
      }
    </div>
  );
}

export default Home;