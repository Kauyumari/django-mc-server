import React from 'react';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

function Headr(props) {
  return(
    <div className="Header">
      <PageHeader 
        title={props.title}
        subTitle={props.subTitle}
      />
    </div>
  );
}

export default Headr;