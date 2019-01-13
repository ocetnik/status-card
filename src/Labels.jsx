import React from 'react';

import './Labels.css';

export default ({ title, subtitle }) => (
  <div className="Labels-wrapper">
    <div className="Label Title">{title}</div>
    <div className="Label">{subtitle}</div>
  </div>
);
