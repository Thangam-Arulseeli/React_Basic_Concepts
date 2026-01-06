/* What is useRef?
useRef is a React Hook that allows you to:
•	Access DOM elements directly
•	Store mutable values that do NOT cause re-render
•	Persist values across renders
 Syntax
const ref = useRef(initialValue);
Returns an object:
{ current: initialValue }


Key Characteristics of useRef
Feature	Description
.current	Holds the value
Mutable	Can be changed
Re-render	❌ Does NOT trigger
Persistent	Value retained between renders
DOM access	✅ Yes

Difference: useRef vs useState
Feature	useRef	useState
Triggers re-render	❌ No	✅ Yes
Used for UI updates	❌	✅
Used for DOM access	✅	❌
Mutable	✅	❌ (immutable)

✔ No re-render
✔ Direct DOM manipulation
*/

//Example 1: Accessing DOM Element (Focus Input)
//📌 Use Case
//Automatically focus an input when component loads.

import React, { useRef, useEffect } from "react";

function useRefExamples() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}



//Example 2: Uncontrolled Form Input/
//Read input value on submit (without state).
//✔ DOM stores the value
//✔ useRef reads it

function UncontrolledInput() {
  const nameRef = useRef();

  const handleSubmit = () => {
    alert(nameRef.current.value);
  };

  return (
    <>
      <input ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}


//🔹 Example 3: Store Previous Value
//Track previous state value.
//✔ useRef remembers old value
//✔ No extra renders

import React, { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

//🔹 Example 4: Persist Value Without Re-render (Timer)
//Store interval ID.
//✔ No unnecessary renders
//✔ Clean interval management

function Timer() {
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

//🔹 Example 5: File Upload Handling
//Read uploaded file.
//✔ File inputs are always uncontrolled
//✔ useRef is mandatory
//✔ Browser controls file selection
//✔ React only reads file

function FileUpload() {
  const fileRef = useRef();

  const handleSubmit = () => {
    const file = fileRef.current.files[0];
    console.log(file.name);
  };

  return (
    <>
      <input type="file" ref={fileRef} />
      <button onClick={handleSubmit}>Upload</button>
    </>
  );
}

export { UncontrolledInput, PreviousValue, Timer, FileUpload }
export default useRefExamples;


