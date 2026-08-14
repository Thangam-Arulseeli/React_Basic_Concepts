import React, { Component } from "react";
//import GrandChild from "./GrandChild";
import classAppConsumer from "./ClassAppConsumer";

class Child extends Component {
  render() {
    return (
      <div>
       {/* <GrandChild userName={this.props.userName} /> */}
        <classAppConsumer />
      </div>
    );
  }
}

export default Child;
