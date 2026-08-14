import React, { Component } from "react";
import Parent from "./Parent";
import UserContext from "./UserContext";

class App extends Component {
  render() {
    const userName = "Arulseeli";

    return (
      <UserContext.Provider value={userName}>
        <Parent />
      </UserContext.Provider>
    );
  }
}

export default App;
