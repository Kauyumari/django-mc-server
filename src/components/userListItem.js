import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { List } from 'antd';

function UserListItem() {

  const {userData, setUserData } = useState(null);

  // setUserData = fetch() get list

  return(
    <div>
      <List></List>
    </div>
  );
}

export default UserListItem;