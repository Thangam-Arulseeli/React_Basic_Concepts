import React, { Component } from "react";

class GrandChild extends Component {
  render() {
    return (
      <div>
        <h3>Welcome, {this.props.userName}</h3>
      </div>
    );
  }
}

export default GrandChild;
