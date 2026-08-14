import React, { Component } from "react";
import UserContext from "./UserContext";

class ClassAppConsumer extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <h3>Welcome, {this.context}</h3>
      </div>
    );
  }
}

export default ClassAppConsumer;
