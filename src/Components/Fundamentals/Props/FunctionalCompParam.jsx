import React from "react";

function FunctionalCompParam(parameter){  // parameter is used instead of props, props/parameter is just a name in functional components
 // props here is an object containing all the props passed to the component.
  const name="Ruban";
  return (
    <div>
      <h5>Welcome to {parameter.name}!! to {parameter.country} </h5>
      <FunctionSample1 passName={name}></FunctionSample1>
      <Counter></Counter>
    </div>
  );
}

function FunctionSample1({passName}){  
  return (
    <React.Fragment>
      <h5> Props as Parameter : {passName} </h5>
       <FunctionSample2 myVal={passName}></FunctionSample2>
    </React.Fragment>
  );
}

function FunctionSample2(props){
  return (
    <h3> Props Value : {props.myVal}</h3>
  )
}

function Counter(){
  const [count, setCount] = React.useState(0);
  return(
    <div>
        <p> Counter value: {count} </p>
        <button onClick = {() => setCount(count+1)}>Increment</button>
    </div>
  )
}
export default FunctionalCompParam;
