import React from 'react';

function Offline({ children, isOnline }) {
  return !isOnline && React.Children.map(children || 'Online', (child) => React.cloneElement(typeof child === 'string' ? <span>{child}</span> : child));
}

export default Offline;