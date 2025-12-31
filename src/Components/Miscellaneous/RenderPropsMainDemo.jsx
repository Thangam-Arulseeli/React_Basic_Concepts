// App.js - Uses the MouseTracker and defines the UI logic
import React from 'react';
import MouseTracker from './RenderPropsCompDemo';

const RenderPropsMainDemo = () => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      {/* Passes an inline function as the 'render' prop */}
      <MouseTracker
        render={({ x, y }) => (
          // This function receives the position data and returns the desired UI
          <h2>
            The mouse position is ({x}, {y})
          </h2>
        )}
      />
    </div>
  );
};
export default RenderPropsMainDemo;

