import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    const newLocal = <Child userName={this.props.userName} />;
    return (
      <div>
       {/* {newLocal} */}
         <Child />  
      </div>
    );
  }
}

export default Parent;
