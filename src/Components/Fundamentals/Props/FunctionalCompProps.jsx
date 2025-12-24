import React from "react";

function FunctionalCompProp(props){
  return (
    <div>
      <h3>Functional component with Props </h3>
      <h6>Welcome to {props.name} from {props.place} </h6>
      <FunctionalComp1 haiName="William"></FunctionalComp1>
      <hr></hr>
    </div>
  );
}

function FunctionalComp1(props){
  return (
     <h3> My new functional component ----- Hai!! {props.haiName}!!!! </h3>
  );
}

export default FunctionalCompProp;