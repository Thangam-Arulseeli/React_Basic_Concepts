import React, { Component } from 'react';

class MouseTracker extends Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    // The component calls the 'render' prop function
    // and passes its current state as an argument.
    return (
      <div style={{ height: '100vh', border: '1px solid black', padding: '10px' }} onMouseMove={this.handleMouseMove}>
        <h2>Move your mouse over this area!</h2>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MouseTracker;


