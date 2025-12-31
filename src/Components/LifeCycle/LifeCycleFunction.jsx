// LifeCycleFunction.jsx
// Example of useEffect hook to mimic lifecycle methods in functional components  
///Mounting Phase (componentDidMount)
// Runs once after component is rendered
import React, { useEffect, useState } from "react";

export default function LifeCycleFunction() {
  return (
    <div>
      <h2>Lifecycle Methods in Functional Component using useEffect</h2>
      <MountExample />  <br />
      <UpdateExample />  <br />
      <UnmountExample />  <br />
      <MultiLifecycle />  <br />
    </div>
  );
}

// Mounting Phase (componentDidMount)
function MountExample() {
  useEffect(() => {
    console.log("Component Mounted");

    // API call / initialization
  }, []); // Empty dependency array ensures it runs only once

  return <h3>Mounting Phase</h3>;
}

//Updating Phase (componentDidUpdate)
//Runs when specific state/props change

function UpdateExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);  // Dependency array controls when effect runs, here on count change 
  // - mimics componentDidUpdate for 'count'

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}


// Unmounting Phase (componentWillUnmount) -- Cleanup before component removal

function UnmountExample() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <h3>Unmount Example</h3>;
}


// Cleanup function prevents memory leaks

//Mount + Update (No Dependency Array)
// Runs after every render
// useEffect(() => {
//  console.log("Runs after every render");
//});
//
//Use carefully (can cause performance issues)


//Multiple Lifecycle Effects (Best Practice)
function MultiLifecycle() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("React");

  // Mount
  React.useEffect(() => {
    console.log("Mounted");
  }, []);

  // Update count
  React.useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  // Update name
  React.useEffect(() => {
    console.log("Name Updated");
  }, [name]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </>
  );
}
export { MountExample, UpdateExample, UnmountExample, MultiLifecycle };
//-------------------------------------------------------
