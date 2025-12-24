import React from "react";

export default function Destructuring() {
  return (
    <div>
      <h2>Destructuring in React</h2>
      <Greeting1 name="John" age={30}></Greeting1>
    </div>
  );
}

export function Greeting1( props ) { // Destructuring props in the function parameter
   const { name, age } = props; // Destructuring inside the function body,name should match the prop names
   const { name: n, age: a } = props; // Renaming during destructuring, another way
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <p>Age: {props.age}</p>
      <Greeting2 name={name} age={age} /> 
      <Greeting3 name={n} age={a} />
    </div>
  );
}

export function Greeting2({ name, age }) {  // Destructuring props inside the function body
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}


export class Greeting3 extends React.Component {
  render() {
    const { name, age } = this.props; // Destructuring props in class component, this.props is mandatory, name should match the prop names
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
      </div>
    );
  }
}

/*
Destructuring State (useState)
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
✔ Mandatory style in hooks

5️. Destructuring Redux State (Very Common)
const { user, loading, error } = useSelector(
  (state) => state.auth
);
NOTE: Destructuring is a common practice in React to extract values from props, state, and other objects for cleaner and more readable code.  
      Use destructuring for props, state, hooks, Redux, Context
Best Practices:
1️. Always destructure props at the beginning of the component function or render method.
2️. Use destructuring for state variables when using useState or useReducer hooks.
3️. Destructure values from Redux state or Context API for better readability.
4️. Avoid deep destructuring in the component body; instead, destructure at the top level.

*/

