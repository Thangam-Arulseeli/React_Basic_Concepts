import React, { useState, useEffect } from "react";
import styled from "styled-components";  // npm install styled-components
/*
Styled Components is a popular library for React that allows developers to write actual CSS code to style components 
using a technique called CSS-in-JS. It uses JavaScript's tagged template literals to create React components 
with styles attached, eliminating the mapping between components and separate style sheets. 
*/
const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;   // Makes the document title dynamic, initial render 
    }, [count]); // Only re-run the effect if count changes, demo with [] and [count], dependency array

    return ( 
        <>
        <StyledButton onClick={() => setCount(count + 1)}>
            You clicked {count} times
        </StyledButton> <br></br>
        <CurrentTime />
        <Timer />
        </>
    );
};

export default UseEffectExample;

const StyledButton = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`;


function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup called");
    };
  }, []);

  return (
    <div>
      <h3>Timer Component</h3>
      <h4>Current Time: {time}</h4>
    </div>
  );
}


function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div>
      <h3>Timer</h3>
      <h2>{seconds} sec</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

export {CurrentTime, Timer};

/*
Execution Flow
---------------
Component renders
useEffect runs once ([])
setInterval updates time every second
setTime() triggers re-render
UI updates with new time
Cleanup runs on unmount


Key Points
------------
JSX rendering	Only inside return()
UI updates	Through useState
useEffect	For side effects
setInterval	Needs cleanup
Cleanup	Prevents memory leak
*/
