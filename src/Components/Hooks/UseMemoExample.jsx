/*useMemo Hook in React

What is useMemo?
useMemo is a React hook used to memoize (cache) the result of a calculation so that it is recomputed only when its dependencies change.

🔑 Purpose: Improve performance by avoiding unnecessary re-calculations.

🔍 Syntax
const memoizedValue = useMemo(() => {
  return expensiveCalculation;
}, [dependencies]);

When Should You Use useMemo?
✔ Expensive calculations
✔ Heavy loops or filters
✔ Sorting large lists
✔ Derived state
✔ Prevent unnecessary re-renders
❌ Not for simple values
❌ Not for every variable

🔁 How useMemo Works Internally
1.	Runs the function on first render
2.	Stores the result in memory
3.	On re-render:
o	If dependencies changed → recompute
o If dependencies unchanged → reuse cached value

*/


import React from "react";
//Example 1: Basic Example (Without useMemo)
export function WithoutMemo() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const squared = count * count;

  console.log("Calculation happening... -- Without Memo");

  return (
    <>
      <h3>Square: {squared}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </>
  );
}
//⚠ Calculation runs on every render, even when text changes.


//Example 2: Using useMemo
export function WithMemo() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const squared = React.useMemo(() => {
    console.log("Expensive calculation... With Memo");
    return count * count;
  }, [count]);

  return (
    <>
      <h3>Square: {squared}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </>
  );
}
//✔ Calculation runs only when count changes


export default function UseMemoExample(){
  return(
    <>
      <h4> Memo Example </h4>
      <WithoutMemo />
      <br></br>
      <WithMemo />
      <br></br>
    </>
  );
}


//❌ Without useMemo
//const result = slowFunction(number);

//✅ With useMemo
//const result = React.useMemo(() => {
//  return slowFunction(number);
//}, [number]);
//✔ Prevents UI freezing on re-renders



//Example 4: Filtering Large Data (Real-World)
/*function ProductList({ products }) {
  const [search, setSearch] = React.useState("");

  const filteredProducts = React.useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <>
      <input
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredProducts.map(p => (
        <p key={p.id}>{p.name}</p>
      ))}
    </>
  );
} */
//✔ Filtering runs only when products/search change



/*
***
🔍 Why Both Look the Same

In both components:

const squared = count * count;


count changes → square updates ✔

text changes → UI updates ✔

So visually, both behave the same.

👉 useMemo does NOT change behavior
👉 It changes performance characteristics

🔴 What Actually Happens Behind the Scenes
React Render Rule (Important)

Any state update causes the entire component function to re-run

That means:

setText() → component re-renders

setCount() → component re-renders

🧠 WITHOUT useMemo — What Happens?
Code
const squared = count * count;
console.log("Calculation happening...");

Step-by-step

Initial render
➜ Calculation runs

Click +
➜ count changes
➜ Component re-renders
➜ Calculation runs ✔ (expected)

Type in input
➜ text changes
➜ Component re-renders
➜ ❌ Calculation runs again (NOT needed)

Console Output
Calculation happening...
Calculation happening...
Calculation happening...


⚠ Even when count does not change

🟢 WITH useMemo — What Happens?
Code
const squared = React.useMemo(() => {
  console.log("Expensive calculation...");
  return count * count;
}, [count]);

Step-by-step

Initial render
➜ Calculation runs

Click +
➜ count changes
➜ Dependency [count] changed
➜ Calculation runs ✔

Type in input
➜ text changes
➜ Component re-renders
➜ ❌ Calculation SKIPPED

Console Output
Expensive calculation...
Expensive calculation...


✔ Runs only when needed

🧪 Why You Don’t See a Difference Here

Your calculation is:

count * count


That is:
|
Very fast
|
Takes microseconds
|
No visible lag
|
So:
|
Optimization is invisible

⚠️ When the Difference Becomes VERY OBVIOUS

Replace your calculation with something expensive 👇

🔥 Expensive Calculation Example
const squared = React.useMemo(() => {
  console.log("Heavy calculation...");
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += i;
  }
  return count * count;
}, [count]);

WITHOUT useMemo

Typing in input → UI freezes 🧊

Calculation repeats every keystroke ❌

WITH useMemo

Typing is smooth 🚀

Calculation runs only on count change

🎯 Real Difference (One-Line Summary)

Both components render the same UI, but useMemo avoids unnecessary recalculations during re-renders.

🧠 Mental Model (Very Important)
Without useMemo
Render → Recalculate EVERYTHING

With useMemo
Render → Reuse cached value (unless deps change)

🆚 Key Difference Table
Aspect	Without useMemo	With useMemo
UI output	Same	Same
Re-render	Always	Always
Calculation	Every render	Only on dep change
Performance	Can degrade	Optimized
Memory	No cache	Cached value
❗ Important Clarification (Interview Trap)
❌ useMemo does NOT prevent re-renders
❌ useMemo does NOT make code faster always
✅ It prevents re-computation
✅ It helps only for expensive calculations
🧑‍🏫 Interview-Ready Answer ⭐⭐⭐

Both components behave the same visually, 
but useMemo memoizes the computed value and prevents unnecessary recalculations
during re-renders when unrelated state changes occur.

****
*/
