import React from 'react';

import './Avatar.css';

export default ({ imageUrl, children }) =>
  imageUrl ? (
    <div className="Image-wrapper">
      <div className="Image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {children}
      </div>
    </div>
  ) : (
    children
  );
