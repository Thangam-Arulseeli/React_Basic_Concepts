//🔹 Example 1: Batch update problem (❌ wrong way)
import { useState } from "react";

export default function MultipleStateUpdate() {
  const [count, setCount] = useState(0);

  // const incrementTwice = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // 🔹 Example 2: Correct way using functional update (✅)
 const incrementTwice = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}; 

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={incrementTwice}>Increment Twice</button>
    </>
  );
}


/*
🔹 What is Batch Update in React?

Batching means React groups multiple state updates into a single re-render for better performance.
So even if you call setState (or setCount) multiple times in the same event, React may update the UI only once.

🔍 What you expect
0 → 2

❌ What actually happens
0 → 1

❓ Why?

Both updates use the same old value of count (0)

React batches them:

setCount(0 + 1);
setCount(0 + 1);


Final state becomes 1, not 2

🔹 Example 2: Correct way using functional update (✅)
const incrementTwice = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};

🔍 What happens internally
prev = 0 → 1
prev = 1 → 2

✅ Final result
0 → 2

🔹 Why functional update works

prev always refers to the latest state

React applies updates in sequence

Safe with:

Batching

Async rendering

Concurrent features

🔹 Real-life analogy 🧠

Think of count as a photocopy of the value
Think of prev as the live database value

❌ Using count + 1 → updating from a photocopy
✅ Using prev + 1 → updating from the live database

🔹 When does batching occur?
React batches updates:
Inside event handlers (onClick, onChange)
Inside lifecycle methods
Inside async callbacks (React 18+)

🔹 NOTE ⭐

React batches multiple state updates for performance.
When the new state depends on the previous state, we must use the functional update form to avoid stale state issues.

*/
