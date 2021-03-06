import React, { useState, useEffect } from 'react';

import isOffline from '../../../shared/utils/calculateOffline';

const OfflineMessage = ({ lastHeartbeat }) => {
  const [offline, setOffline] = useState(isOffline(lastHeartbeat));

  // Offline.
  useEffect(() => {
    // Check if we are now offline.
    const timer = setInterval(() => {
      setOffline(isOffline(lastHeartbeat));
    }, 1000 * 40);

    return () => clearInterval(timer);
  });

  if (offline) {
    return (
      <div className="backend-notice backend-notice--offline">Brugeren er offline...</div>
    );
  }

  return <></>;
};

export default OfflineMessage;
