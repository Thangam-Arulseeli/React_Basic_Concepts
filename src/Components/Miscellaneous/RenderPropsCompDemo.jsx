// MouseTracker.js - Manages the shared logic/state
import React, { useState } from 'react';

const MouseTracker = (props) => { // Accepts 'props' including the render function
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/* Calls the render prop function, passing the state as an argument */}
      {props.render(position)}
    </div>
  );
};
export default MouseTracker;


