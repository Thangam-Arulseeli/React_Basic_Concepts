//Example 1: Problem Without useCallback

import React, { useCallback } from "react";
import CallbackChild from "./CallbackChild";

// //🔴 Parent Component -- Without useCallback
// function CallbackParent() {
//   const [count, setCount] = React.useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h3>Count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <CallbackChild onIncrement={increment} />
//     </>
//   );
// }
// export default CallbackParent;

//Example 2: Solved Using useCallback

// 🔍 Syntax for useCallback -- with Callback
// --------------------------
const memoizedFn = useCallback(() => {
  // function logic
}, [dependencies]);


function CallbackParent() {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <CallbackChild onIncrement={increment} />
    </>
  );
}

export default CallbackParent;
//---------------------------------------------

//✔ Function reference remains same (Child Component is same)
//✔ Child does not re-render unnecessarily

/*
Example 3: Multiple Dependencies
const handleSubmit = React.useCallback(() => {
  console.log("Submitting", username);
}, [username]);
📌 Function updates only when username changes

*/



