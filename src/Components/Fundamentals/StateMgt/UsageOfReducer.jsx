import { useReducer } from "react";

export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return state.count > 0 ? { count: state.count - 1 } : state;
          
    default:
      return state;
  }
}


function  UsageOfReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
}

export default UsageOfReducer;