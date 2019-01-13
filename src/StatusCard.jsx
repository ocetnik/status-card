import React, { useEffect, useRef, useState } from 'react';

import Avatar from './Avatar';
import Badge from './Badge';
import Labels from './Labels';

import './StatusCard.css';

export default ({ circleColor, imageUrl, title, subtitle }) => {
  const cardRef = useRef(null);

  const [, setMounted] = useState(false);
  // componentDidMount (set initial cardRef)
  useEffect(() => {
    setMounted(true);
  }, []);

  const renderContent = () => {
    const renderImage = cardRef.current.clientWidth > 160;

    const cardWrapperClassName = `Card-wrapper ${
      renderImage ? 'Card-wrapper-with-image' : 'Card-wrapper-without-image'
    }`;

    return (
      <div className={cardWrapperClassName}>
        <Avatar imageUrl={renderImage && imageUrl}>
          <Badge renderImage={renderImage} circleColor={circleColor} />
        </Avatar>
        <Labels title={title} subtitle={subtitle} />
      </div>
    );
  };

  return <div ref={cardRef}>{cardRef.current && renderContent()}</div>;
};
