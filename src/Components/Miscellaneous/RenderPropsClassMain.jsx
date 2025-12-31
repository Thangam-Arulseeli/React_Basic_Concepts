import React, { Component } from 'react';
import MouseTracker from './RenderPropsClassDemo';

class RenderPropsClassMain extends Component {
  render() {
    return (
      <div>
        <h1>Render Props Example in Class Components</h1>
        <MouseTracker
          // The 'render' prop is a function that receives data from MouseTracker
          render={({ x, y }) => (
            // This function returns the JSX to be displayed
            <p>
              The current mouse position is **({x}, {y})**
            </p>
          )}
        />
      </div>
    );
  }
}

export default RenderPropsClassMain;
