import React, { useEffect, useState } from 'react';

import StatusCard from './StatusCard';

const useForceUpdate = () => {
  const [, setValue] = useState({});
  return () => setValue({});
};

export default () => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    window.addEventListener('resize', forceUpdate);
    return () => {
      window.removeEventListener('resize', forceUpdate);
    };
  });

  return (
    <StatusCard
      circleColor="#00bd41"
      imageUrl="http://www.avatarsdb.com/avatars/andy_warhol.jpg"
      title="Andy Warhol"
      subtitle="Online | 12h"
    />
  );
};
