import React, { Component } from "react";
//import GrandChild from "./GrandChild";
import ClassAppConsumer from "./ClassAppConsumer";

class Child extends Component {
  render() {
    return (
      <div>
        {/* <GrandChild userName={this.props.userName} /> */}
        <ClassAppConsumer /> 
      </div>
    );
  }
}

export default Child;
