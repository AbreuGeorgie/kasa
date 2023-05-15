import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <h2 onClick={toggleCollapse}>{title}</h2>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};

export default Collapse;