import React from "react";

class FragmentsClassComp extends React.Component
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
     </> 
     )
  }
} 

class ChildComp2 extends React.Component{
  render(){
    return(
    <React.Fragment>
      <h3> Child Class Component2 </h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ab distinctio magni aliquam aperiam sunt libero voluptatum iure, expedita exercitationem placeat ipsam hic molestiae? Iusto corporis qui facere voluptas quis?</p>
     </React.Fragment>
    );
  }
} 

export default FragmentsClassComp;