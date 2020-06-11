import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

function Headr() {
  return(
    <div className="Header">
      <PageHeader 
        title="Header Component"
        subTitle="with antd PageHeader component"        
      />
    </div>
  );
}

export default Headr;