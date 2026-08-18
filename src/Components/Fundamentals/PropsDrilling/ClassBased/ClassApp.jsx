import React, { Component } from "react";
import Parent from "./Parent";

class ClassApp extends Component {
  render() {
    const userName = "Arulseeli-PropsDrilling";

    return (
      <div>
        <Parent userName={userName} />
      </div>
    );
  }
}

export default ClassApp;

