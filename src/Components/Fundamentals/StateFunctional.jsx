import React, {Component, useState } from 'react';

export default function StateFunctional() {
    // Step 1. Initialize/Create state property using useState hook
    const [count, setCount] = useState(0); // count is state variable, setCount is function to update the state variable  
    // Arg 2 is optional, which is the function to change the state property
    // To set the value to state property - count, use arg 1 only

    return (
        <div className="StateFunctional">
            <h2 className="heading"> StateFunctional Component</h2>
            <p>Count: {count}</p>  {/* Displaying state value -- String Interpolation */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
// Step 2. Change the value of the state property using setCount function 
// onClick event handler is used to call the setCount function when the button is clicked
// Here, we are using an arrow function to call setCount with the new value
// State Management in Functional Component using Hooks
export function StateFunctional1() {
    const [count, setCount] = useState(0); // count is state variable, setCount is function to update the state variable
    
    const increment = () => {
        setCount(count+1);
        console.log(count);
    };

    return (
        <div className="StateFunctional1">
            <h2 className="heading"> StateFunctional1 Component</h2>  
            <p>Count: {count}</p>  {/* Displaying state value -- String Interpolation */}
            <button onClick={increment}>Increment</button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1);
                }
            }}>Decrement</button>
        </div>
    );
} 
// Step 2. Change the value of the state property using setCount function 
// onClick event handler is used to call the setCount function when the button is clicked
// Here, we are using an arrow function to call setCount with the new value 
// No named exports in this file
// export default StateFunctional; 
// ✅ default export

// export { StateFunctional1 }; 
// ✅ named export 

// State Management in Functional Component using Hooks
// ✔ Hooks:
    // Special functions that let you "hook into" React features
    // Only available in functional components
    // useState is a Hook that lets you add React state to functional components

// Rules of Hooks:
    // Only call Hooks at the top level
    // Only call Hooks from React functions
    // Do not call Hooks inside loops, conditions, or nested functions

// Advantages of Functional Components with Hooks over Class Components:
    // Simpler and easier to read and write
    // No need to deal with 'this' keyword
    // Better performance in some cases due to less overhead  
    // Encourages the use of functional programming principles
    // Makes it easier to share stateful logic between components using custom hooks

// Disadvantages of Functional Components with Hooks:
    // May require a learning curve for developers familiar with class components
    // Some advanced patterns may be more complex to implement with hooks compared to classes 

// May lead to more frequent re-renders if not used carefully, potentially impacting performance
// Not all third-party libraries may fully support hooks yet
// Still evolving, with new hooks and patterns being introduced over time

// Overall, functional components with hooks are becoming the preferred way to write React components due to their simplicity and flexibility.

