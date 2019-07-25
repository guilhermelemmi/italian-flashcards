import React from 'react';
import { Button } from 'antd';

const Intro = (props) => {
  return (
    <div className="Intro">
      <Button type="primary" onClick={props.onPlay}>Play</Button>
    </div>
  );
}

export default Intro;
