import React from 'react';

import './Badge.css';

const WithWrapper = ({ renderImage, children }) =>
  renderImage ? children : <div className="Badge-wrapper">{children}</div>;

export default ({ renderImage, circleColor }) => (
  <WithWrapper renderImage={renderImage}>
    <div
      className={`Badge${renderImage ? ' Badge-inside-image' : ''}`}
      style={{ backgroundColor: circleColor }}
    />
  </WithWrapper>
);
