import React, { Component } from "react";
import Parent from "./Parent";
import UserContext from "./UserContext";

class ClassAppProvider extends Component {
  render() {
   const userName = "Arulseeli-Context";

    return (
      <UserContext.Provider value= {{userName}} >
     {/* <UserContext.Provider value= "Arulseeli-Context">    */}
        <Parent />
      </UserContext.Provider>
    );
  }
}

export default ClassAppProvider;
