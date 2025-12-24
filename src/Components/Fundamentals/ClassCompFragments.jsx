import React from "react";

class ClassCompFragments extends React.Component
{
  render(){ 
    return (
    <div> 
       <h3> Nested Class Component Example </h3>
        <ChildComp1></ChildComp1>
        <ChildComp2></ChildComp2>
        <hr></hr><hr></hr>
      </div>
    );
  }
} 

class ChildComp1 extends React.Component{
  render(){ 
    return(
    <>
      <h3> Child Class Component1 </h3>
     </> )
  }
} 

class ChildComp2 extends React.Component{
  render(){
    return(
    <React.Fragment>
      <h3> Child Class Component2 </h3>
     </React.Fragment>
    );
  }
} 

export default ClassCompFragments;