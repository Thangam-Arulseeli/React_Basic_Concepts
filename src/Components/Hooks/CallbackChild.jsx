import React from "react";
// Example 1 : Code Without useCallback
////🔴 Child Component
const CallbackChild = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

//⚠Child re-renders every time because increment is recreated.

export default CallbackChild;